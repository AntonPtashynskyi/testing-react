import { Component } from "react/cjs/react.production.min";

import "./galleryCommon.css";
import ImageItem from "./ImageItem";
import Spinner from "./Spinner";
import LoadMoreButton from "./LoadMoreButton";
import GalleryModal from "./GalleryModal";

const API_KEY = "24742243-f1ccb4b554382da08302fd92e";

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: "idle",
    error: "",
    page: 1,
    showModal: false,
    largeImage: "",
    isLoading: false,
  };

  componentDidUpdate(prevState, prevProps) {
    const { value } = this.props;

    if (prevState.value !== value) {
      this.setState({ page: 1, images: [] }, () => {
        this.loadImages();
      });

      window.addEventListener("click", this.handleOpenModalClick);
    }
  }

  loadImages() {
    const { value } = this.props;
    const { page } = this.state;

    // this.setState({ status: "pending" });

    fetch(
      `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`We cant fins images by name ${value}`)
        );
      })
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images.hits],
          // images: images.hits,
          loading: false,
          status: "resolved",
        }))
      )
      .catch((error) => this.setState({ error, status: "rejected" }));
  }

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),

      () => {
        this.loadImages();
      }
    );
    this.scrollPage();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleOpenModalClick = (e) => {
    if (e.target.tagName === "IMG") {
      this.setState({ largeImage: e.target.attributes.largeimage.nodeValue });
    }
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
    }, 1000);
  };

  render() {
    const { images, status, error, showModal } = this.state;

    if (status === "idle") {
      return <div className="Container"> Type Something</div>;
    }

    if (status === "pending") {
      if (images.length === 0) {
        return <Spinner />;
      }
    }

    if (status === "resolved") {
      return (
        <div className="Container">
          <ul className="ImageGallery">
            <ImageItem images={images} onClick={this.toggleModal} />
          </ul>
          <LoadMoreButton handlePage={this.loadMore} arrayOfImages={images} />
          {showModal && (
            <GalleryModal
              largeImage={this.state.largeImage}
              onToggle={this.toggleModal}
            />
          )}
        </div>
      );
    }

    if (status === "rejected") {
      return <div>{error}</div>;
    }
  }
}
