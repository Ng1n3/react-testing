import PropTypes from 'prop-types';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" data-testid="header-2" className="header">
        {title}
      </h1>
      <h3  title="Header" className="header">Hello</h3>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
