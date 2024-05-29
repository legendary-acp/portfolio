import PropTypes from "prop-types";

import { Chip, Paper, Typography, Button, Grid, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function ProjectDetails({ project }) {
  return (
    <Paper
      elevation={9}
      sx={{
        padding: "1rem",
        width: { xs: "32vw", sm: "32vw", md: "22vw", lg: "22vw" },
        height: { xs: "70vh", sm: "55vh", md: "60vh", lg: "70vh" },
        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem", lg: "5rem" },
      }}
    >
      <Box
        component="img"
        src={project.imageUrl}
        sx={{
          width: {
            xs: "22vw", // Small screens (mobile devices)
            sm: "33vw", // Medium screens (tablets)
            md: "22vw", // Large screens (desktops)
            lg: "22vw", // Larger screens
            xl: "22vw", // Extra large screens
          },
          maxWidth: "100%", // Ensure the image doesn't exceed its container width
          height: "auto", // Maintain aspect ratio
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {project.tags.slice(0, 3).map((tag, index) => (
          <Chip
            key={index}
            color="info"
            sx={{ maxwidth: "30%", margin: "0 0.4rem" }}
            label={tag}
          />
        ))}
      </div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ marginTop: "1.5rem" }}
      >
        {project.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
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

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};
