export default function LoadMoreButton({ handlePage, arrayOfImages }) {
  if (arrayOfImages.length === 0) {
    return <div>We can't find any images</div>;
  }
  return (
    <button className="Button" onClick={handlePage}>
      Load more
    </button>
  );
}
