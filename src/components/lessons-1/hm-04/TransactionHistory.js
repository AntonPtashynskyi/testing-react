import propTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className="transactionHistory">
      <thead>
        <tr className={s.tableRaw}>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.bodyRaw}>
            <td className={s.bodyData}>{type}</td>
            <td className={s.bodyData}>{amount}</td>
            <td className={s.bodyData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};
