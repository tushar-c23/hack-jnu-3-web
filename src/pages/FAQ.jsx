
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
        <div className="bg1"><svg width="40" height="412" viewBox="0 0 40 412" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 405V1H15L24 9L39 1V405C24.16 410.189 15.84 410.496 1 405Z" fill="#E20DC0" stroke="black" />
            <path d="M34 369C33.7769 371.008 31.5828 372.71 31.0556 374.556C30.524 376.416 31 379.064 31 381C31 385.949 28.667 391.942 27.9445 397C27.2994 401.516 25.5136 405.635 25 410C24.7491 412.132 24.6013 408.645 24.9445 407.444C25.5533 405.314 25.5655 402.705 26.0556 400.5C26.9653 396.406 29 392.814 29 388.5C29 384.556 32 381.05 32 377C32 373.487 35 370.009 35 366.5C35 362 35 357.5 35 353" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M3 369C3 372.069 2.14141 373.245 3.05556 376.444C3.91807 379.463 4.33059 383.068 4.94444 386.444C5.84718 391.41 2.66506 401.331 5.77778 405.222C8.70715 408.884 6 408.319 6 404.5C6 402.241 4.59541 398.834 3.94444 396.556C3.15014 393.775 3.1763 391.173 3 388C2.83407 385.013 1 381.833 1 379" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M5 7.00001C6.96421 7.00001 11.5822 4.44905 12 8.00001C12.1617 9.37405 15.2889 14.6445 16 15" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M33 10C33 15.3472 31 19.1177 31 24" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M13 376C13 380.32 10 384.864 10 389C10 394.276 10.8017 397.603 13 402" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M26 374C26 380.095 24.6656 384.502 22.2222 390C21.3003 392.074 20.5956 395.165 19.9444 397.444C19.3399 399.56 17 400.627 17 403" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M7 19C7 24.7272 7.09616 32.156 9.5 37.4444C11.0936 40.9503 12.8363 49.4182 16 51" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M23 46C23 43.4777 22.1186 41.5264 19.5 40.9444C18.6483 40.7552 16.0732 36.8415 15.2222 35.7778C14.4719 34.8399 14.6042 28.7166 15.5 28C17.6025 26.318 20.0925 24.9075 22 23" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M33 27C33 30.9986 30.9227 34.5863 30.2222 38.5556C29.6157 41.9925 27 43.615 27 47" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
        </svg>


        </div>
        <div className="bg2"><svg width="42" height="412" viewBox="0 0 42 412" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 405V2L9 15L26 2H41V405C25.379 410.071 16.621 410.66 1 405Z" fill="#E20DC0" stroke="black" />
            <path d="M37 370C37 372.074 36.0576 378.178 34.7778 379.778C33.0091 381.989 33.7768 387.531 32.9444 390.444C31.3029 396.19 27 400.554 27 407" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M6 373C6 375.532 8 376.574 8 379.5C8 382.689 9 385.469 9 388.5C9 394.125 7.51564 403.031 10 408" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M27 377C26.7286 379.171 22.515 381.606 21.2222 383.222C19.5907 385.262 18.9117 389.11 17.2222 391.222C16.4196 392.226 16.4196 400.774 17.2222 401.778C19.0431 404.054 17.6522 408.304 19 411" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M26 9C26.6468 14.1741 34.9861 11 38 11" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M17 17C14.665 17.2594 13.9653 19.3449 12 20" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M35 22C35 26.375 36.8357 29.9502 37 34.2222C37.2122 39.7384 38 45.2237 38 51" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M6 27C6 32.2575 6.50115 36.1826 9 40.5556C11.7783 45.4175 13.6614 50.3228 16 55" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
            <path d="M28 29C28 33.1007 28.7615 40.0481 26.2222 43.2222C22.1233 48.3459 28.7409 56.4197 21 59" stroke="#0D0000" stroke-opacity="0.5" stroke-linecap="round" />
        </svg>

        </div>
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