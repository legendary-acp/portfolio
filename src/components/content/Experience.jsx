import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";

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
          {companies[0].duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{ backgroundColor: "white", border: `${companies[0].border}` }}
          >
            <CompanyLogo src={companies[0].logoURL} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[0].name}
          </Typography>
          <Typography>{companies[0].position}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body">
          {companies[1].duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{ backgroundColor: "white", border: `${companies[1].border}` }}
          >
            <CompanyLogo src={companies[1].logoURL} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "5rem", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[1].name}
          </Typography>
          <Typography>{companies[1].title}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body">
          April 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            sx={{ backgroundColor: "white", border: `${companies[2].border}` }}
          >
            <CompanyLogo src={companies[2].logoURL} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {companies[2].name}
          </Typography>
          <Typography>{companies[2].duration}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default function Experience({ sectionRef }) {
  return (
    <div ref={sectionRef} style={{ height: "100vh" }}>
      <Header title="EXPERIENCE" />
      <Box sx={{ height: "90vh", backgroundColor: "#ffffff" }}>
        <Grid container>
          <Grid xs={6}>
            <ExperienceYears />
          </Grid>
          <Grid xs={6}>
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
    logoURL: "companies/gapLogo.png",
    position: "Software Engineer",
    duration: "June 2021 - Sept 2023",
    border: "0.2rem solid #000",
  },
  {
    name: "Middleware",
    logoURL: "companies/middlewareLogo.png",
    position: "Senior Software Engineer",
    duration: "Sept 2023 - Feb 2024",
    border: "0.2rem solid #f05c5c",
  },
  {
    name: "CtrlB",
    logoURL: "companies/ctrlbLogo.jpg",
    position: "Senior Software Engineer",
    duration: "April 2024 - Present",
    border: "0.2rem solid #4D5BE9",
  },
];
