import React from 'react';
import './App.css';
import familyImage from '../images/smilingfamily.jpg';
import dentalObjects from '../images/dental-objects.jpeg';

const App = () => {
    return (
    <>
        <div className="header-container">
            <h1 className="logo">logo</h1>
            <div className='header-contacts'>
                <span><b>Columbus</b> 614.505.7027</span>
                <span><b>Grandview</b> 614.505.7027</span>
                <span><b>London</b> 614.505.7027</span>
                <span><button className="button">Schedule Appointment</button></span>
            </div>
            <div className='navbar'>
                <ul>
                    <li><a href='/'>About POLARIS Dental</a></li>
                    <li><a href='/'>Treatments</a></li>
                    <li><a href='/'>For Patients</a></li>
                    <li><a href='/'>News</a></li>
                    <li><a href='/'>Contact & Locations</a></li>
                </ul>
            </div>
        </div>


        <div className="body-container">
            <div className="copytext">
                <p>Enhance your smile today!</p>
                <h1>Lifetime Dental Health</h1>
                <p>Dr. Irfhan Khan and his team welcome you to our dental 
                    offices located in Columbus, Grandview, and London/
                    Springfield. We provide a full range of services for
                    adults and children. Enjoy our non-judgemental, friendly
                    atmosphere and let us be your family's dental home in
                    the Columbus Area!
                </p>
                <button className="button">Schedule Appointment</button>
            </div>
            <img src={familyImage} alt="Smiling Family"></img>
        </div>

        <div className="service-container">
            <div className="service-header">
                <span>Feature Service</span>
                <span><button className="button">Full Service</button></span>
            </div>
            {/* <div className="slideshow">
                <hr/>
                <div className="carousel">
                    <ImageSlider img={Source} />
                    <Arrow direction="left" />
                    <Arrow direction="left" />

                </div>
            </div> */}
        </div>

        <div className="footer">
            <img src={dentalObjects} alt="dental objects"/>
            <div>
                <h1>Why Choose Polaris Dental?</h1>
                <hr/>
                <div className="reasons">
                    <div className="why-choose-object">Flexible</div>
                    <div className="why-choose-object">Patent Discount</div>
                    <div className="why-choose-object">Modern Technology</div>
                    <div className="why-choose-object">Insurance Accepted</div>
                    <div className="why-choose-object">Comfortable Amenties</div>
                    <div className="why-choose-object">Commiment to Excellence</div>
                </div>
            </div>

        </div>

    </>
    );
};

export default App;