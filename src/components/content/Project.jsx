import PropTypes from "prop-types";

import Header from "../shared/Header";

import { Chip, Stack, Paper, Typography, Button, Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export function ProjectDetails({ project }) {
  return (
    <div style={{ width: "30vw", height: "30vh" }}>
      <Paper elevation={9} sx={{ padding: "1rem" }}>
        <img src={project.imageUrl} width={"100%"} />
        <Stack padding={"1rem 0rem"}>
          {project.tags.slice(0, 3).map((tag, index) => (
            <Chip key={index} color="info" sx={{ width: "20%" }} label={tag} />
          ))}
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button startIcon={<GitHub />} size="small" href={project.githubUrl} target="_blank">
              Source Code
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default function Project({ sectionRef }) {
  return (
    <div ref={sectionRef}>
      <Header title="PROJECTS"></Header>
      <div style={{ width: "100%", height: "90vh", padding: "5rem" }}>
        
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