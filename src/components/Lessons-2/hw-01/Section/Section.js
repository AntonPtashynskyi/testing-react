import "./Section.css";

export default function Section({ title, children }) {
  return (
    <div className="sectionFeedBack">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
