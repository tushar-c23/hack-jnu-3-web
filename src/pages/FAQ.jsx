
import { useState } from "react";
import React from "react";
import { faqlist } from "../components/faq";
import '../styles/FAQ.css';
function FAQ() {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    }

    return <div className="wrapper">
        
        <div className="faqsection">


            <div className="faqboard">
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
}


export default FAQ;