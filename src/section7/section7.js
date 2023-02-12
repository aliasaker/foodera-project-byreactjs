import React from "react";
import "./section7.css";
import {Card,CardGroup} from "react-bootstrap"
import img1 from "./../assits/01.jpg"
import img2 from "./../assits/02.jpg"
import img3 from "./../assits/03.jpg"


const Section7 =()=>{
    return(
        <section>
            <div className="row cntr">        
                <CardGroup className="">
                <Card className="grop">
                    <Card.Img className="wid-card "  src={img1} />
                        <Card.Body>
                        <Card.Title className="clr">Rainbow Vegetable Sandwich</Card.Title>
                            <Card.Text className="lin">
                            Time: 15 - 20 Minutes | Serves: 1
                            </Card.Text>
                            <h4 className="clr">$10.50 <span>$11.70</span></h4>
                            <hr/>
                            <button className="bttn">order now</button>
                        </Card.Body>
                   
                </Card>
                <Card className="grop">
                    <Card.Img  className="wid-card" src={img2} />
                    <Card.Body>
                    <Card.Title className="clr">Vegetarian Burger</Card.Title>
                    <Card.Text className="lin">
                    Time: 15 - 20 Minutes | Serves: 1
                    </Card.Text>
                    <h4 className="clr">$10.50 <span>$11.70</span></h4>
                    <hr/>
                    <button className="bttn">order now</button>
                    </Card.Body>
                  
                  
                </Card>
                <Card className="grop">
                    <Card.Img className="wid-card"  src={img3} />
                    <Card.Body>
                    <Card.Title className="clr">Raspberry Stuffed French Toast</Card.Title>
                    <Card.Text className="lin">
                    Time: 15 - 20 Minutes | Serves: 1
                    </Card.Text>
                    <h4 className="clr">$10.50 <span>$11.70</span></h4>
                    <hr/>
                    <button className="bttn">order now</button>
                    </Card.Body>
                
                </Card>
                </CardGroup>
            </div>

        </section>
    )
}

export default Section7;