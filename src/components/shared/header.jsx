import PropTypes from "prop-types";

export default function Header({title}) {
  return (
    <header
      style={{
        height: "10vh",
        backgroundColor: "#476f95",
        padding: "3rem 0rem 0rem 3rem",
        fontSize: "5rem",
        color: "#FFF",
      }}
    >
      {title}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};