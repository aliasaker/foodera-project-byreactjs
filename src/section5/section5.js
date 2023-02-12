import React from "react";
import "./section5.css";
import {FaPlay} from "react-icons/fa"

const Section5 =()=>{
    return(
        <section className="section5">
                    <div className="row col">
                        <h1 className="color">When a man's stomach is full it makes no<br/>difference whether he is rich or poor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <br/>
                        <a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ" className="a-if">
                            <div>
                                <i><FaPlay/></i> Watch Our Story
                            </div>
                        </a>
                    </div>  
        </section>
    )
}



export default Section5;