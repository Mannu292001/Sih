import React from "react";
import Wrapper from "./Wrapper";
import './Services.css';
import map from '../assets/map.svg';
import local_Shipping from '../assets/local_shipping.svg';


const Services = () => {
    return (
        <Wrapper>
           <div id="services">
            <div id="two">
                <h1 id="ourservices">Our Services</h1>
                <div class="service-card1">
                    <div class="top-image"><img src={map} alt="map logo" srcset=""/></div>
                    <h2 class="serviceColor">Drop-off</h2>
                    <p class="serviceColor">Know our locations near you to drop-off your waste.</p>
                    <button class="know-more open-button" id="know-more" onclick="openForm()" type="submit">Know more</button>
                    <h5 class="confirm" id="checkauth">Please sign-in to use our services</h5>
                </div>
                <div class="service-card">
                    <div class="top-image"><img src={local_Shipping}alt=""/></div>
                    <h2 class="serviceColor">Pickup</h2>
                    <p class="serviceColor">Want to schedule pickup with us?</p>
                    <button class="know-more" id="know-more1" onclick="javascript:window.open('pickup.html','_blank')" formtarget="_blank" type="submit">Know more</button>
                    <h5 class="confirm" id="checkauth1">Please sign-in to use our services</h5>
                    <h5 class="confirm">You can schedule pickup once in a day.</h5>
                </div>
                <div class="form-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1wVQMAyyhIRm5XApdWf5GN7o9JAAKS0lR" width="580px" height="480" allowfullscreen="allowfullscreen"></iframe>
                        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                    </form>
                </div>
              </div>
            </div>
        </Wrapper>
    );
};

export default Services;