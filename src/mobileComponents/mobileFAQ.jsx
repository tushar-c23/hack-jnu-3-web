import { faqlist } from "../components/faq";
import { useState } from "react";
const MobileFAQ = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="MobileFAQ" id="MobileFAQ">
      <h1 className="MobileFaqTitle">FAQs</h1>
      <div className="MobileFaqBoard">
        {faqlist.map((query, i) => {
          return (
            <li key={i} className="query">
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
