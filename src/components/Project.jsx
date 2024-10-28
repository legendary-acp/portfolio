import PropTypes from "prop-types";

import Header from "./shared/Header";
import ProjectDetails from "./shared/ProjectDetails";

import { Grid, Hidden } from "@mui/material";

export default function Project({ sectionRef }) {
  const projects = [
    {
      name: "Restaurant Management System",
      description:
        "Backend project written in go. Can handle tasks related to orders, menu management, table management etc for a restaurant.",
      imageUrl: "/img/projects/restaurant-management-system.png",
      tags: ["Go", "Backend"],
      githubUrl:
        "https://github.com/legendary-acp/restaurant-management-system/",
    },
    {
      name: "Kubernetes Monitoring Agent",
      description:
        "Redesigned Kuberenetes agent for middleware including new deployment which increased scope of what can be done through this agent.",
      imageUrl: "/img/projects/kuberenetes-agent.png",
      tags: ["Kubernetes", "Helm"],
      githubUrl: "https://github.com/middleware-labs/mw-agent",
    },
    {
      name: "RHEL -> OEL migration",
      description:
        "Executed comprehensive testing and validation procedures to mitigate potential risks, resulting in a seamless transition without compromising system stability or performance",
      imageUrl: "/img/projects/rhel_to_oel.png",
      tags: ["Linux", "RHEL", "OEL"],
      githubUrl: "",
    },
  ];

  return (
    <div ref={sectionRef} style={{ height: "100vh" }}>
      <Header title="PROJECTS"></Header>
      <div
        style={{
          height: "90vh",
          padding: "1rem 3rem",
          backgroundColor: "#EBF4F1",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          {projects.map((project, index) => {
            const isLastProject = index === projects.length - 1;
            return (
              <Grid item key={index}>
                {isLastProject ? (
                  <Hidden mdDown>
                    <ProjectDetails project={project} />
                  </Hidden>
                ) : (
                  <ProjectDetails project={project} />
                )}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

Project.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};
