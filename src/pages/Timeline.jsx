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
                  <span>Date</span>
                  <br />
                  TBD
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
                  <span>Date</span>
                  <br />
                  TBD
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
                  <span>27th</span>
                  <br />
                  Jan
                </p>
              </div>
              <div className="TLTitle">First Day Of Hackathon</div>
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
                  <span>28th</span>
                  <br />
                  Jan
                </p>
              </div>
              <div className="TLTitle">Final Day and Results</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="Disclaimer">Note: all dates are subjective to changes as and when required</div>
    </div>
  );
};

export default TimelineComponent;
