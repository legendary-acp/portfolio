import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function Header({ title }) {
  return (
    <Box
      style={{
        height: { xs: "10vh", sm: "10vh", md: "10vh", lg: "10vh" },
        backgroundColor: "#D7E8E3",
        padding: "2rem 2rem",
        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "520rem", lg: "510rem" },
        fontFamily: '"Gill Sans Extrabold"',
      }}
    >
      {title}
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
