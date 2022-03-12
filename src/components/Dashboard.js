import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import speaker from '../resources/speaker.jpg';
import techgeek from '../resources/techgeek.jpg';
import Enterpreneurs from '../resources/enterpreneurs.jpg';
import './../styling/CarouselImage.css'
import Box from '@material-ui/core/Box';

function Dashboard() {
    return (
        <div>
            <div>
                <Carousel
                    height={"90%"}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={2000}
                    showThumbs={false}>
                    <div>
                        <img src={speaker} alt="TechGeeks" />
                        <p className="legend">Tech Geeks</p>
                        <div class="contentOnImage" >
                            <h2>
                                <Box component="span">
                                    <span>Campaign Management Platform
                                    </span>
                                </Box>
                            </h2>
                            <br />
                        </div>
                    </div>
                    <div>
                        <img src={techgeek} alt="Enterpreneurs" />
                        <p className="legend">Enterpreneurs</p>
                    </div>
                    <div>
                        <img src={Enterpreneurs} alt="Social Influencers" />
                        <p className="legend">Social Influencers</p>
                    </div>
                </Carousel>
            </div>
        </div>

    );
}

export default Dashboard;