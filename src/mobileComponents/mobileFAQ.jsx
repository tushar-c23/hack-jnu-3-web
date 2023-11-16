import { faqlist } from "../components/faq";
import { useState } from "react";

import FrontTree from '../assets/MobileAssets/mobileFooterTree.svg'


const MobileFAQ = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    // if (selected == i) {
    //   return setSelected(null);
    // }
    setSelected(i);
  };
  return (
    <div className="MobileFAQ" id="MobileFAQ">
      <div className="background MobileFrontTree">
        <img src={FrontTree} alt="tree?" />
      </div>
      <h1 className="MobileFaqTitle">FAQs</h1>
      <div className="MobileFaqBoard">
        {faqlist.map((query, i) => {
          return (
            <li key={i} className={"query "+"q"+i}>
              <div className="question" onClick={() => toggle(i)}>
                <h2>{query.q}</h2>
              </div>
              <div className={selected == i ? "answer show" : "answer"}>
                {query.a}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFAQ;
