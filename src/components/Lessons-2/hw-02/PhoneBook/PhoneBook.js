import "../Common.css";

export default function PhoneBook({ contacts, title }) {
  return (
    <div>
      <h2 className="phoneTitle">{title}</h2>
      <ul className="contactList">
        {contacts.map((item, index) => (
          <li key={index} className="contactItem">
            {item.name} {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
