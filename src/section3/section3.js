import React from "react";
import "./section3.css"
import fol from "./../assits/1.png";

const Section3=()=>{
    return(
        <section>
            <div className="container fol">
                <div className="row ">
                    <div className="col-md-7 ">
                        <img src= {fol} alt="fol"/>
                    </div>
                    <div className="col-md-5 ">
                        <h1>We even give you more solutions to grow your business.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button className="bttn">learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Section3;