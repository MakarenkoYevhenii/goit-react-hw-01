import styles from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';


 const TransactionHistory = ({items}) => {
    const transactionItem=items.map(id=>{
        return (
            <tr key={id.id}>
            <td>{id.type}</td>
            <td>{id.amount}</td>
            <td>{id.currency}</td>
          </tr>
        )
    })
    return (


<table className={styles.table}>
  <thead>
    <tr className={styles.stringTable}>
      <th className={styles.th}>Type</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {transactionItem}
  </tbody>
</table>)}

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };

  export default TransactionHistory