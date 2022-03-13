import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import speaker from '../resources/speaker.jpg';
import techgeek from '../resources/techgeek.jpg';
import Enterpreneurs from '../resources/enterpreneurs.jpg';
import CardGrid from './CardGrid.js';
import './../styling/CarouselImage.css'
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

// Author - Unnati Gupta
function Dashboard() {
    return (
        <div>
            <div>
                <Carousel
                    height={"90%"}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    showThumbs={false}>
                    <div>
                        <img src={techgeek} alt="TechGeeks" />
                        <li className='legend'>
                            <Link style ={{color:'white', fontSize:'20px'}} to={{ pathname: "https://www.coursera.org/courses?query=software%20engineering" }} target="_blank" >
                                Click Here for Resources
                            </Link>
                        </li>
                        <div class="contentOnImage" >
                            <h2>
                                <Box component="span">
                                    <span>Technology</span>
                                </Box>
                            </h2>
                            <br />
                        </div>
                    </div>
                    <div>
                        <img src={Enterpreneurs} alt="Enterpreneurs" />
                        <li className='legend'>
                            <Link style ={{color:'white', fontSize:'20px'}} to={{ pathname: "https://www.edx.org/course/creativity-entrepreneurship" }} target="_blank" >
                                Click Here for Resources
                            </Link>
                        </li>
                        <div class="contentOnImage" >
                            <h2>
                                <Box component="span">
                                    <span>Enterpreneurship</span>
                                </Box>
                            </h2>
                            <br />
                        </div>
                    </div>
                    <div>
                        <img src={speaker} alt="Social Influencers" />
                        <li className='legend'>
                            <Link style ={{color:'white', fontSize:'20px'}} to={{ pathname: "https://online.hbs.edu/courses/leadership-principles/" }} target="_blank" >
                                Click Here for Resources
                            </Link>
                        </li>
                        <div class="contentOnImage" >
                            <h2>
                                <Box component="span">
                                    <span>Leadership</span>
                                </Box>
                            </h2>
                            <br />
                        </div>
                    </div>
                </Carousel>
            </div>
            <div><CardGrid/></div>
        </div>

    );
}

export default Dashboard;