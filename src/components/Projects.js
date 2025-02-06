// import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import default styles
// import CustomButtonGroup from './CustomButtonGroup';
import React, { useRef } from 'react';


const Projects = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // Display three cards per slide
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // Display two cards per slide
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // Display one cards per slide
        },
      };

      const carouselRef = useRef(null);

  // const handlePrevClick = () => {
  //   carouselRef.current.previous();
  // };

  // const handleNextClick = () => {
  //   carouselRef.current.next();
  // };

  return (
    <>
    <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <Carousel ref={carouselRef}
              responsive={responsive}
              itemClass="carousel-card"
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              
>
               
                <div className="card">
                    <div className="card-content">                       
                        <a href="https://whimsical-faloodeh-2ed72e.netlify.app/">Play</a>
                        <div className="text">Ultimate BAttle</div>
                        <p>Developed in Unity 3D using C#, leveraging the engine's powerful graphics rendering, physics simulation, and scripting Capabilities</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">                       
                        <a href="https://sunny-kumar.itch.io/burger-king">Burger King</a>
                        <div className="text">Happy cozy Burger Shop</div>
                        <p>Burger king game is cozy kitchen game made on unity and C#</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">                       
                        <a href="#">Play</a>
                        <div className="text">Rocket Boost</div>
                        <p>Developed a 3D platform game using unity engine.Rocket Boost is a game in which player get from position A to B to complete</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">                       
                        <a href="https://unique-piroshki-fc7a1a.netlify.app/">Play</a>
                        <div className="text">Dodgy</div>
                        <p>Developed a 3D plat former game using Unity game engine. The game involved a player navigating through different levels, collecting items, and overcoming obstacles to reach the goal.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-content">                       
                        <a href="https://keep-notes-bay.vercel.app/">Keep Notes</a>
                        <div className="text">Don't Need To Remember</div>
                        <p>Here is an add notes project in which we can add our stuffs to make it safe, by using HTML, CSS and Javascript.</p>
                    </div>
                </div>
                
                
                <div className="card">
                    <div className="card-content">
                         {/* <img src="WhatsApp Image 2021-05-29 at 9.58.06 PM.jpeg" alt="" />*/}
                        <a href="https://netflixx-zeta.vercel.app/">Netflixx</a>
                        <div className="text">Netflix and Chill!!</div>
                        <p>Here is a project on Netflix in which we go and check out the web shows , movies of many categories and their trailers, by using ReactJs, JavaScript, HTML and CSS.</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-content">
                         {/* <img src="WhatsApp Image 2021-05-29 at 9.58.06 PM.jpeg" alt="" />*/}
                        <a href="https://forge-cna9.vercel.app/">Forge</a>
                        <div className="text">Works like Slack</div>
                        <p>A project in which we can make different workspace to assemble for different projects with different colleages.</p>
                    </div>
                </div>
                {/* <div className="card">
                    <div className="card-content">
                        
                        <div className="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div> */}
                {/* <div className="card">
                    <div className="box">
                        <img src="images/profile-5.jpeg" alt="" />
                        <div className="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div> */}
                  
          
                </Carousel>
            </div>
        
    </section>
    </>
  );
};

export default Projects;