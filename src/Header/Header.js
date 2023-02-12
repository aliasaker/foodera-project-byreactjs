import React from "react";
import "./Header.css"

const Header=()=>{
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Good food choices are good investments.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                        <div>
                            <button className="bttn">order now</button>
                            <button className="b2 bttn">learn more</button>
                        </div>
                        
                        
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;