import "../Common.css";

export default function PhoneBook({ contacts, title, deleteContact, id }) {
  return (
    <div>
      <h2 className="phoneTitle">{title}</h2>
      <ul className="contactList">
        {contacts.map((item, index) => (
          <li key={index} className="contactItem">
            <p className="contactInfo">
              {item.name} {item.number}
            </p>
            <button
              className="deleteBtn"
              onClick={() => {
                deleteContact(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
