import { Component } from "react/cjs/react.production.min";
import ContentLoader, { Facebook } from "react-content-loader";

import ArticleList from "./ArticleList";
import fetchArticlesWithQuery from "./Api";
import Input from "./Input";
import "../../Lessons-2/hw-01/StatsButtons/StatisticButtons.css";

class AppRequest extends Component {
  state = {
    articles: [],
    isLoading: true,
    searchValue: "",
  };

  async componentDidMount(search) {
    // const articles = await fetchArticlesWithQuery("SASS");
    // this.setState({ articles: articles, isLoading: false });
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }); // Как правильно записывать во время сабмита или onChanga?
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.searchQuery.value;
    this.setState({ searchValue: value });
    console.log(this.state);
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <>
        <Input onSubmit={this.handleSubmit} onChange={this.handleChange} />
        {/* {isLoading && (
          <p> Loading...</p>
          <ContentLoader
            viewBox="0 0 400 160"
            height={160}
            width={400}
            backgroundColor="transparent"
          >
            <circle cx="150" cy="86" r="8" />
            <circle cx="194" cy="86" r="8" />
            <circle cx="238" cy="86" r="8" />
          </ContentLoader>
        )} */}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}

export default AppRequest;
