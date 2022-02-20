import axios from "axios";
axios.defaults.baseURL = "http://hn.algolia.com/api/v1/";

const fetchArticlesWithQuery = async (searchQuery) => {
  const response = await axios.get(`search_by_date?query=${searchQuery}`);
  return response.data.hits;
};

export default fetchArticlesWithQuery;
