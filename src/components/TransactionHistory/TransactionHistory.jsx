import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableR,
  TableH,
} from './TransactionHistory.module';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableR key={id}>
              <TableH>{type}</TableH>
              <TableH>{amount}</TableH>
              <TableH>{currency}</TableH>
            </TableR>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
    })
  ),
};
