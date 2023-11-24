import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import ForestLayer1 from '../assets/MobileAssets/ForestLayer1.svg'

const MobileTimeline = () => {
  return (
    <div className="MobileTimeline" id="MobileTimeline">
      <div className="background ForestLayer1">
        <img src={ForestLayer1} alt="trees?" />
      </div>
      <Timeline position="right" className="MobileTimelineBox">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="contentBox">
            <div className="MobileTimeLineContent content1">
              <div className="MTLDate">
                <p>
                  <span>22nd</span>
                  <br />
                  Nov
                </p>
              </div>
              <div className="MTLTitle">Registration Begins</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="contentBox">
            <div className="MobileTimeLineContent content2">
              <div className="MTLDate">
                <p>
                  <span>Date</span>
                  <br />
                  TBD
                </p>
              </div>
              <div className="MTLTitle">Registration Ends</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="contentBox">
            <div className="MobileTimeLineContent content3">
              <div className="MTLDate">
                <p>
                  <span>27th</span>
                  <br />
                  Jan
                </p>
              </div>
              <div className="MTLTitle">Day Of the Hackathon</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent className="contentBox">
            <div className="MobileTimeLineContent content4">
              <div className="MTLDate">
                <p>
                  <span>28th</span>
                  <br />
                  Jan
                </p>
              </div>
              <div className="MTLTitle">Results Declared</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      <p className="disclaimer">All dates are subjected to changes</p>
      </Timeline>
    </div>
  );
};

export default MobileTimeline;
