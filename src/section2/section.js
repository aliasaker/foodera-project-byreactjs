import React from "react";
import "./section.css";


const Section=()=>{
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="p">
                            <h3>1287+</h3>
                            <p>SAVINGS</p> 
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <div className="p">
                                <h3>5786+</h3>
                                <p>PHOTOS</p> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p">
                                <h3>1440+</h3>
                                <p>ROCKETS</p> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p">
                                <h3>7110+</h3>
                                <p>GLOBES</p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;