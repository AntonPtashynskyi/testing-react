import ProfileList from "./components/lessons-1/hm-01/ProfileList";
import usersData from "./dataBase/lessons-1/hm_1/user.json";
import Section from "./components/lessons-1/hm-01/Section";
import friends from "../src/dataBase/lessons-1/hm_3/friends.json";
import FriendList from "./components/lessons-1/hm-03/FriendList";
import transaction from "./dataBase/lessons-1/hm_4/transactions.json";
import TransactionHistory from "./components/lessons-1/hm-04/TransactionHistory";

export default function App() {
  return (
    <div className="profile">
      <Section title="Top users">
        <ProfileList items={usersData} />
      </Section>
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}
