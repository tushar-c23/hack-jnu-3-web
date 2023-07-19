import React from "react";

import Card from "../components/Card";
import { coreTeam } from "../components/cards";

function AboutTeam() {
    return <section id="aboutTeam">
        <div id="coreTeam">
            <div className="sectionTitle">
                <h1>Core Team</h1>
            </div>
            <div className="cards">
                {
                    coreTeam.map((person) => {
                        return (
                            <Card
                                name={person.name}
                                role={person.role}
                                photo={person.photo}
                            />
                        )
                    })
                }
            </div>
        </div>
        <div id="webTeam">
            <div className="sectionTitle">
                <h1>Development Team</h1>
            </div>
            <div className="cards">
                {
                    webTeam.map((person) => {
                        return (
                            <Card
                                name={person.name}
                                role={person.role}
                                photo={person.photo}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>


}

export default AboutTeam