import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Grid, Typography, Hidden } from "@mui/material";

import { CompanyLogo } from "../shared/CompanyLogo";
import Header from "../shared/Header";

import PropTypes from "prop-types";

function ExperienceYears() {
  return (
    <div style={{ height: "100%", padding: "10rem 2rem 3rem 5rem" }}>
      <div style={{ fontSize: "4rem", margin: "2rem 0rem" }}>
        More than 3 year as
      </div>
      <div
        style={{
          fontSize: "4rem",
          margin: "2rem 0rem",
          fontWeight: "700",
          color: "#000000",
        }}
      >
        Software Engineer
      </div>
    </div>
  );
}
function ExperienceTimeline() {
  return (
    <Timeline
      position="alternate-reverse"
      sx={{ height: "100%", paddingTop: "5rem" }}
    >
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body">
          {companies[2].duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              backgroundColor: "#EBF4F1",
              border: `${companies[0].border}`,
            }}
          >
            <CompanyLogo src={companies[2].logoURL} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[2].name}
          </Typography>
          <Typography>{companies[2].position}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body">
          {companies[1].duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              backgroundColor: "#EBF4F1",
              border: `${companies[1].border}`,
            }}
          >
            <CompanyLogo src={companies[1].logoURL} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "5rem", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[1].name}
          </Typography>
          <Typography>{companies[1].position}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body">
          {companies[0].duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              backgroundColor: "#EBF4F1",
              border: `${companies[2].border}`,
            }}
          >
            <CompanyLogo src={companies[0].logoURL} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[0].name}
          </Typography>
          <Typography>{companies[0].position}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default function Experience({ sectionRef }) {
  return (
    <div ref={sectionRef} style={{ height: "100vh" }}>
      <Header title="EXPERIENCE" />
      <Box sx={{ height: "90vh", backgroundColor: "#EBF4F1" }}>
        <Grid container>
          <Hidden mdDown>
            <Grid item xs={6}>
              <ExperienceYears />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={6}>
            <ExperienceTimeline />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

Experience.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};

const companies = [
  {
    name: "Gap Inc",
    logoURL: "img/companies/gapLogo.png",
    position: "Software Engineer",
    duration: "June 2021 - Sept 2023",
    border: "0.2rem solid #15B19A",
    link: "https://www.gapinc.com",
  },
  {
    name: "Middleware",
    logoURL: "img/companies/middlewareLogo.png",
    position: "Senior Software Engineer",
    duration: "Sept 2023 - Feb 2024",
    border: "0.2rem solid #f05c5c",
    link: "https://middleware.io/",
  },
  {
    name: "CtrlB",
    logoURL: "img/companies/ctrlbLogo.png",
    position: "Senior Software Engineer",
    duration: "April 2024 - Present",
    border: "0.2rem solid #000000",
    link: "https://ctrlb.ai/",
  },
];
