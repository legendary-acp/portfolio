import Box from "@mui/material/Box";

import PropTypes from "prop-types";

import Introduction from "./Introduction";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Project from "./Project";

export default function Main({ menuItems }) {
  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      <Introduction sectionRef={menuItems[0].section} />
      <Experience sectionRef={menuItems[1].section} />
      <Project sectionRef={menuItems[2].section} />
      <Skills sectionRef={menuItems[3].section} />
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
