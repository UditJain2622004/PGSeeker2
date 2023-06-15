import React from 'react'
import "./cities.css"

const Cities = () => {
    return <section id="cities-container">
        <h2 className="center h-primary ff_space text-center blue_clr fw-bold fs_xl">
            Popular Cities
        </h2>
        <div id="cities">
            <div class="box city1">

                <h2 class="h2 center">DELHI</h2>

            </div>
            <div class="box city2">

                <h2 class="h2 center">MUMBAI</h2>

            </div>
            <div class="box city3">

                <h2 class="h2 center">BANGALORE</h2>

            </div>

        </div>
        <div id="cities">
            <div class="box city4">

                <h2 class="h2 center">JAIPUR</h2>

            </div>
            <div class="box city5">

                <h2 class="h2 center">BHOPAL</h2>

            </div>

        </div>
    </section>

}

export default Cities
