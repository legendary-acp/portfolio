import PropTypes from "prop-types";

export default function Header({title}) {
  return (
    <header
      style={{
        height: "10vh",
        backgroundColor: "#002379",
        padding: "2rem 2rem",
        fontSize: "5rem",
        color: "#FFFAE6",
      }}
    >
      {title}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};