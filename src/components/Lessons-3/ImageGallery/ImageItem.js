export default function ImageItem({ images, onClick }) {
  return images.map((item) => (
    <li className="ImageGalleryItem" key={item.id}>
      <img
        onClick={onClick}
        src={item.webformatURL}
        alt={item.tags}
        id={item.id}
        largeimage={item.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
}
