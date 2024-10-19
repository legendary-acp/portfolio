import { Box, Avatar } from "@mui/material";
import Typewriter from "typewriter-effect";
import { GitHub, InsertDriveFile, LinkedIn } from "@mui/icons-material";

import PropTypes from "prop-types";

export default function Introduction({ sectionRef }) {
  return (
    <div ref={sectionRef}>
      <Box
        sx={{
          height: "84vh",
          padding: {
            xs: "4rem 3rem",
            sm: "4rem 3rem",
            md: "5rem 8rem",
            lg: "5rem 8rem",
          },
          background: "#EBF4F1",
          color: "#151515",
        }}
      >
        <Box
          component="section"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "5rem" },
          }}
        >
          {" "}
          Hi, I am Pradyuman
        </Box>
        <Box
          sx={{
            fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem", lg: "3rem" },
            display: "flex",
            flexWrap: "wrap",
            flexFlow: "row",
          }}
        >
          Proficient in{"\u00A0"}
          <Typewriter
            options={{
              strings: ["Observability", "Golang", "Python", "Cloud", "Big Data"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Box
          sx={{
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" },
            padding: "2rem 0rem",
          }}
        >
          A skilled Software Engineer currently working at CtrlB and building
          the next-gen observability solution. I excel in Observability and
          infrastructure optimization, with expertise in Golang, Python, and
          Kubernetes. I have demonstrated leadership in pivotal projects like
          OpenTelemetry implementation and successful migrations. My skills are
          honed in enhancing Kubernetes monitoring agent architecture and
          integrating novel deployment strategies.
        </Box>
        <Box
          sx={{
            fontSize: "3rem",
            display: "flex",
            flexWrap: "wrap",
            flexFlow: "row",
          }}
        >
          <a href="https://www.linkedin.com/in/ppradyu/" target="_blank">
            <Avatar sx={{ margin: "0.5rem", background: "#0077B5" }}>
              {" "}
              <LinkedIn />{" "}
            </Avatar>
          </a>
          <a href="https://github.com/legendary-acp/" target="_blank">
            <Avatar sx={{ margin: "0.5rem", background: "#000" }}>
              {" "}
              <GitHub />{" "}
            </Avatar>{" "}
          </a>
          <a href="Resume.pdf" target="_blank">
            <Avatar sx={{ margin: "0.5rem", background: "#008080" }}>
              {" "}
              <InsertDriveFile />{" "}
            </Avatar>{" "}
          </a>
        </Box>
      </Box>
    </div>
  );
}

Introduction.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};
