import React from "react";
import "./footer.css";



const Footer=()=>{
    return(
        <footer className="footer">
            
            <ul>
                <li className="li"><a className="li" href="#">Register</a></li>
                <li className="li"><a className="li" href="#">Forum</a></li>
                <li className="li"><a className="li" href="#">Affiliate</a></li>
                <li className="li"><a className="li" href="#"> FAQ</a></li>
            </ul>
            <div className="foodera">
               © 2021. Foodera. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer ;