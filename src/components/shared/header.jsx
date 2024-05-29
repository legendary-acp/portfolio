import PropTypes from "prop-types";

export default function Header({ title }) {
  return (
    <header
      style={{
        height: "10vh",
        backgroundColor: "#D7E8E3",
        padding: "2rem 2rem",
        fontSize: "5rem",
        fontFamily: '"Gill Sans Extrabold"',
      }}
    >
      {title}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
