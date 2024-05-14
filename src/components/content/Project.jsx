import PropTypes from "prop-types";

import Header from "../shared/Header";

import { Chip, Paper, Typography, Button, Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export function ProjectDetails({ project }) {
  return (
    <Paper
      elevation={9}
      sx={{ padding: "1rem", width: "22vw", height: "70vh" }}
    >
      <img src={project.imageUrl} width={"100%"} />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
        {" "}
        {project.tags.slice(0, 3).map((tag, index) => (
          <Chip
            key={index}
            color="info"
            sx={{ maxwidth: "30%", margin: "1%" }}
            label={tag}
          />
        ))}
      </div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ margin: "5% 0%" }}
      >
        {project.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ margin: "5% 0%" }}
      >
        {project.description}
      </Typography>
      {project.githubUrl && (
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
              startIcon={<GitHub />}
              size="small"
              href={project.githubUrl}
              target="_blank"
            >
              Source Code
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}

export default function Project({ sectionRef }) {
  const projects = [
    {
      name: "Restaurant Management System",
      description:
        "Backend project written in go. Can handle tasks related to orders, menue management, table management etc for a restaurant.",
      imageUrl: "img/projects/restaurant-management-system.png",
      tags: ["Go", "Backend"],
      githubUrl:
        "https://github.com/legendary-acp/restaurant-management-system/",
    },
    {
      name: "Kubernetes Monitoring Agent",
      description:
        "Redesigned Kuberenetes agent for middleware including new deployment which increased scope of what can be done through this agent.",
      imageUrl: "img/projects/kuberenetes-agent.png",
      tags: ["Kubernetes", "Helm"],
      githubUrl: "https://github.com/middleware-labs/mw-agent",
    },
    {
      name: "RHEL -> OEL migration",
      description:
        "Executed comprehensive testing and validation procedures to mitigate potential risks, resulting in a seamless transition without compromising system stability or performance",
      imageUrl: "img/projects/rhel_to_oel.png",
      tags: ["Linux", "RHEL", "OEL"],
      githubUrl: "",
    },
  ];

  return (
    <div ref={sectionRef} style={{ height: "100vh"}}>
      <Header title="PROJECTS"></Header>
      <div
        style={{
          height: "90vh",
          padding: "1rem 3rem",
          backgroundColor: "#FFFAE6",
        }}
      >
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item key={index}>
              <ProjectDetails project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

Project.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};
