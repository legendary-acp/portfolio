import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { School, Book, Backpack } from "@mui/icons-material";

import { DetailsLeft, DetailsRight } from "../shared/Details";
import Header from "../shared/Header";

import PropTypes from "prop-types";

export default function Education({ sectionRef }) {
  return (
    <div ref={sectionRef} style={{ height: "100vh" , backgroundColor:'#EBF4F1'}}>
      <Header title="EDUCATION" />
      <div style={{ paddingTop: "2rem"}}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <DetailsLeft
                institute="National Institute of Technology, Hamirpur(HP)"
                year="2017-21"
                description="B.Tech in Computer Science and Engineering"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Book />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div style={{ textAlign: "right" }}>
                <DetailsRight
                  institute="BL Central Public School, Solan(HP)"
                  year="2016-17"
                  description="12th grade with a focus on Physics, Chemistry, and Mathematics"
                />
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Backpack />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <DetailsLeft
                institute="MRADAV Sr Sec Public School"
                year="2014-15"
                description="Class 10th from CBSE board"
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

Education.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};
