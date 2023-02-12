import Carousel from 'react-bootstrap/Carousel';
import BasicExample from './form'
import { Fragment } from 'react';
import sil from "./../assits/1.jpg"
function Slider() {
  return (
 <Fragment>
    
 <section className='slider'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <h1 className='asakere'>Testimonials</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <Carousel className='wit'>
                    <Carousel.Item className="">
                        <img src={sil} alt="ali" className='w'/>
                        <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={sil} alt="ali" className='w'/>

                        <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={sil} alt="ali" className='w'/>

                        <Carousel.Caption>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    </div>
 </section>
 <section className='ask'>
    <h1>Frequently Asked Questions</h1>

 </section>
 <section className='h3'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-lg-6'>
                <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-md-6 col-lg-6'>
                <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 col-lg-6'>
                <h4>~ Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-md-6 col-lg-6'>
                <h4>~ Is Foodera Bread really baked fresh each day?</h4> 
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
        </div>
    </div>
 </section>
 <section className='bg-position'>
    <div className='obacity'></div>
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div className='col-md-4 z'>
                <button className='bttn'>learn more</button>
            </div>

        </div>
    </div>
 </section>
 <section className="hi">
    <div className='contaner'>
        <div className='col-md-12'>
            <h1 >Hurry up! Subscribe our newsletter <pre/> and get 25% Off</h1>
            <p className='width'>Limited time offer for this month. No credit card required.</p>
        </div>
        
    </div>
    
        <form className="row g-3">
            <div className='form'>
                <input type="email" className="input col-md-4" value="email@example.com"/>
                <input type="submit" className="bttn"/>
            </div>
           
        </form>
 </section>
</Fragment>
      
  );
}

export default Slider;