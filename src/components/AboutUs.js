import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import empower from '../resources/empower.PNG';
import './../styling/CarouselImage.css'
import Box from '@material-ui/core/Box';
 
// Author - Unnati Gupta
export default function ImageCarouAboutUssel() {
    return (
        <div>
            <div class="aboutus" >
                <img style={{ height: '80vh', width: '100%' }} src={empower} alt="empower" />
                <h1 style={{ fontSize: '50px', marginLeft: '30%' }}>About The Initiative</h1>
                <Box>
                    <p style={{ fontSize: 22, marginLeft: '14%', marginRight: '14%' }}>
                    Women all over the world are disadvantaged when it comes to having access to knowledge/capital for starting a business, crowdfunding, political campaigning, and more.
                    Women are limited by several factors at different times in their careers, including disadvantaged economic status, 
                    discrimination and restrictive gender norms, and lack of access to knowledge on how to start a business or traditional fundraising networks. 
                    Recognizing the profound gender gap, women need alternative resources and tools to help level the playing field. 
                    We have built a web-based platform for women so that they can overcome the economic and social barriers that prevent their access to political decision-making through training, mentoring and technology.</p>
                </Box>
            </div>
        </div>

    );
}