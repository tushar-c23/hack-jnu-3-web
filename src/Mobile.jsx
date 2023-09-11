import { useState } from "react";

import "./styles/mobile.css";
import MobileHome from "./mobileComponents/mobileHome";
import MobileAbout from "./mobileComponents/mobileAbout";
import MobileTimeline from "./mobileComponents/mobileTimeline";
import MobilePrizes from "./mobileComponents/mobilePrizes";
import MobileSponsors from "./mobileComponents/mobileSponsors";
import MobileFAQ from "./mobileComponents/mobileFAQ";
import MobileFooter from "./mobileComponents/mobileFooter";

const Mobile = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [page, setPage] = useState(0);
    const sections = ['MobileHome','MobileAbout','MobileTimeline','MobilePrizes','MobileSponsors','MobileFAQ','MobileFooter']
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if(isLeftSwipe && page<6){
        document
          .getElementById(sections[page])
          .classList.toggle("forward", true);
        setTimeout(function () {
          setPage(page + 1);
          document
            .getElementById(sections[page])
            .classList.toggle("forward", false);
        }, 500);
      }
      else if(isRightSwipe && page>0){
        document
          .getElementById(sections[page])
          .classList.toggle("backward", true);
        setTimeout(function () {
          setPage(page - 1);
          document
            .getElementById(sections[page])
            .classList.toggle("backward", false);
        }, 500);
      }
    }
    // console.log(page);
  };

  return (
    <div
      className={"MobileApp " + ("page" + page)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="MobileBox">
        {page == 0 && <MobileHome />}
        {page == 1 && <MobileAbout />}
        {page == 2 && <MobileTimeline />}
        {page == 3 && <MobilePrizes />}
        {page == 4 && <MobileSponsors />}
        {page == 5 && <MobileFAQ />}
        {page == 6 && <MobileFooter />}
      </div>
    </div>
  );
};

export default Mobile;
