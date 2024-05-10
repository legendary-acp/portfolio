import Box from "@mui/material/Box";

import PropTypes from "prop-types";

import Introduction from "./content/Introduction";
import Contact from "./content/Contact";
import Education from "./content/Education";
import Experience from "./content/Experience";
import Skills from "./content/Skills";

export default function Main({ menuItems }) {
  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      <Introduction sectionRef={menuItems[0].section} />
      <Experience sectionRef={menuItems[1].section} />
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
