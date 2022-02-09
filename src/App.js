import ProfileList from "./components/lessons-1/hm-01/ProfileList";
import usersData from "./dataBase/lessons-1/hm_1/user.json";
import Section from "./components/lessons-1/hm-01/Section";
import friends from "../src/dataBase/lessons-1/hm_3/friends.json";
import FriendList from "./components/lessons-1/hm-03/FriendList";
import transaction from "./dataBase/lessons-1/hm_4/transactions.json";
import TransactionHistory from "./components/lessons-1/hm-04/TransactionHistory";
import stats from "dataBase/lessons-1/hm-02/stats.json";
import Statistics from "components/lessons-1/hm-02/Statistics";
// import ColorPicker from "components/lessons-1/ColorPicker/ColorPicker";
// import ColorPickerOptions from "./components/lessons-1/ColorPicker/ColorPickerOptions";
// import Alert from "./components/lessons-1/Alert/Alert";
// import Box from "./components/lessons-1/Box/Box";

export default function App() {
  return (
    <div className="profile">
      {/* <Box type="small" /> */}
      {/* <Box type="medium" /> */}
      {/* <Box type="large" /> */}
      {/* <Alert text="All good" type="success" /> */}
      {/* <Alert text="All good" type="warning" /> */}
      {/* <Alert text="All good" type="error" /> */}
      {/* <ColorPicker options={ColorPickerOptions} /> */}
      <Section title="Top users">
        <ProfileList items={usersData} />
      </Section>
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
      <Statistics title="Upload stats" items={stats} />
      {/* <Statistics items={stats} /> */}
    </div>
  );
}
