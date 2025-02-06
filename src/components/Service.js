import React from 'react';

const Service = () => {
  return (
    <>
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content">
                
                <div className="card">
                    <div className="box">
                        <i className="fas fa-laptop-code"></i>                      
                        <div className="text">Web Development</div>
                        <p>Web development involves designing and building websites, combining coding and design to create functional and engaging online platforms.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-gamepad"></i> 
                        <div className="text">Game Development</div>
                        <p>Game development is the art of creating interactive digital experiences, merging technology and creativity for entertainment.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">App Development</div>
                        <p>App development is the process of creating software applications for mobile devices, providing solutions and services.</p>
                    </div>
                </div>
               </div>
            </div>        
    </section>
    </>
  );
};

export default Service;