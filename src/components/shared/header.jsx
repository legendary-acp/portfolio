import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function Header({ title }) {
  return (
    <Box
      sx={{
        height: "10vh",
        backgroundColor: "#D7E8E3",
        paddingTop: "3vh",
        paddingLeft: "3vw",
        fontSize: { xs: "10vw", sm: "10vw", md: "5vw", lg: "5vw" },
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
