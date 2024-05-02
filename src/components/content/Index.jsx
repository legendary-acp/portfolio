import Box from "@mui/material/Box";
import Introduction from "./Introduction";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import PropTypes from "prop-types";

export default function Main({ menuItems }) {
  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      <Introduction sectionRef={menuItems[0].section} />
      <Experience sectionRef={menuItems[1].section} />
      <Education sectionRef={menuItems[4].section} />
      <Contact sectionRef={menuItems[5].section} />
    </Box>
  );
}

Main.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      section: PropTypes.object.isRequired,
    })
  ).isRequired,
};
