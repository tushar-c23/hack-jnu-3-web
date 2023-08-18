// import * as React from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "../styles/Timeline.css";

const TimelineComponent = () => {
  return (
    <div className="mt-32">
      <Timeline position="alternate" className="TimelineBox animatedContent">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="TimeLineContent right">
              <div className="TLDate">
                <p>
                  <span>3rd</span>
                  <br />
                  Sept
                </p>
              </div>
              <div className="TLTitle">Registration Begins</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div className="TimeLineContent left">
              <div className="TLDate">
                <p>
                  <span>30th</span>
                  <br />
                  Sept
                </p>
              </div>
              <div className="TLTitle">Registration Ends</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <div className="TimeLineContent right">
              <div className="TLDate">
                <p>
                  <span>14th</span>
                  <br />
                  Oct
                </p>
              </div>
              <div className="TLTitle">Day Of the Hackathon</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
          <div className="TimeLineContent left">
              <div className="TLDate">
                <p>
                  <span>15th</span>
                  <br />
                  Oct
                </p>
              </div>
              <div className="TLTitle">Results Declared</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
