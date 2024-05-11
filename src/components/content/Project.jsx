import PropTypes from "prop-types";

import Header from "../shared/Header";

import { Chip, Paper, Typography, Button, Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export function ProjectDetails({ project }) {
  return (
    <div style={{ width: "24vw", height: "50vh" }}>
      <Paper elevation={9} sx={{ padding: "1rem" }}>
        <img src={project.imageUrl} width={"100%"} />
        <div
          style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}
        >
          {" "}
          {project.tags.slice(0, 3).map((tag, index) => (
            <Chip key={index} color="info" sx={{ width: "20%", margin:'1%' }} label={tag} />
          ))}
        </div>
        <Typography gutterBottom variant="h5" component="div" style={{margin:'5% 0%'}}>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{margin:'5% 0%'}}>
          {project.description}
        </Typography>
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
      </Paper>
    </div>
  );
}

export default function Project({ sectionRef }) {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1",
      imageUrl: "img/project1.jpg",
      tags: ["Tag1", "Tag2", "Tag3"],
      githubUrl: "https://github.com/username/project1",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      imageUrl: "img/project2.jpg",
      tags: ["Tag4", "Tag5", "Tag6"],
      githubUrl: "https://github.com/username/project2",
    },
    {
      name: "Project 3",
      description: "Description of Project 3",
      imageUrl: "img/project3.jpg",
      tags: ["Tag7", "Tag8", "Tag9"],
      githubUrl: "https://github.com/username/project3",
    },
  ];

  return (
    <div ref={sectionRef} style={{maxHeight:'100vh'}}>
      <Header title="PROJECTS"></Header>
      <div
        style={{
          width: "100%",
          height: "90vh",
          padding: "5rem"
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
