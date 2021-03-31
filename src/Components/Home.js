import React from "react"
import { Link } from "react-router-dom"


function Home() {

    return ( 
        <section className="home">
            <div className="homeImage">
                <div className="homeContent">
                    <p>Do something good today!</p>
                    <Link to="/donate">
                        <button>NGOs near me</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home