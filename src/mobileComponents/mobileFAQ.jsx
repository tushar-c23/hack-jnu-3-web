import { faqlist } from "../components/faq";
import { useState } from "react";
const MobileFAQ = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    return ( 
        <div className="MobileFAQ" id="MobileFAQ">
            

        
        <div className="faqsection">



            <div className="faqboard">
            <h1 className="FAQTitle">Frequently Asked Questions</h1>
                {faqlist.map((query, i) => {
                    return (
                        <div className="query">
                            <div className="question" onClick={() => toggle(i)}>
                                <h2>{query.q}</h2>

                            </div>
                            <div className={selected == i ? "answer show" : "answer"}>{query.a}</div>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    </div>
     );
}
 
export default MobileFAQ;