import { Box, Avatar } from "@mui/material";
import Typewriter from "typewriter-effect";
import { GitHub, InsertDriveFile, LinkedIn, Edit } from "@mui/icons-material";
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
              strings: [
                "Observability",
                "Golang",
                "Rust",
                "Distributed Systems",
                "Big Data",
              ],
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
          Software Engineer at CtrlB, building next-gen observability and
          security solutions. I specialize in observability, infrastructure
          optimization, and distributed systems, with deep expertise in Golang,
          Python, Kubernetes, and Rust. Led key projects including a scalable
          OpenTelemetry control plane (CTRLTower), Kubernetes monitoring agent
          enhancements, and eBPF-based runtime security tooling (Falco-lite-rs).
          Strong background in backend engineering, system internals, and
          delivering reliable, high-performance platforms.
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
          <a href="https://medium.com/debugging-diaries" target="_blank">
            <Avatar sx={{ margin: "0.5rem", background: "#008088" }}>
              {" "}
              <Edit />{" "}
            </Avatar>{" "}
          </a>
          <a href="Resume.pdf" target="_blank">
            <Avatar sx={{ margin: "0.5rem", background: "#0C74DF" }}>
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
