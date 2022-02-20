const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ author, objectID, story_title, story_url }) => (
      <li key={objectID}>
        <h2>{story_title}</h2>
        <p>{author}</p>
        <a href={story_url}>Link to story</a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
