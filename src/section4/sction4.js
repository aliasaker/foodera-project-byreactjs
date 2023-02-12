import React from "react";
import "./section4.css";
import food from "./../assits/2.png";
import { FaCheck } from "react-icons/fa";


const Section4 =()=>{
    return(
        <section>
            <div className="container fol">
                <div className="row">
                    <div className="col-md-5 ">
                        <h1>We even give you more solutions to grow your business.</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li><FaCheck className="icon"/><p className="p-inlin">Etiam sed dolor ac diam volutpat.</p></li>
                            <li><FaCheck className="icon"/><p className="p-inlin">Erat volutpat aliquet imperdiet.</p></li>
                            <li><FaCheck className="icon"/><p className="p-inlin">purus a odio finibus bibendum.</p></li>
                        </ul>
                        <button className="bttn">learn more</button>
                    </div>
                    <div className="col-md-7 ">
                        <img src= {food} alt="fol"/>
                    </div>
                </div>
        </div>
        </section>
    )
}


export default Section4;