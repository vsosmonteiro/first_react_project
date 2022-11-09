import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, setshowaddtask, showaddtask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showaddtask ? 'red' : 'green'}
        text={showaddtask ? 'Close' : 'Add'}
        onClick={() => setshowaddtask(!showaddtask)}
      />
    </header>
  );
};
Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
