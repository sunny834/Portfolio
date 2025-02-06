import React from 'react';

const Skills = () => {
  return (
   <>
   <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>  I had done various of projects in game development with new technologies. I am also experienced in field of app and web development, by making different projects with different frameworks.</p>
                    <a href="#">Read more</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>Unity</span>
                            <span>80%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C#</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C++</span>
                            <span>65%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Unreal Engine</span>
                            <span>40%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                   {/* <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Android Studio</span>
                            <span>85%</span>
                        </div>
                        <div className="line php"></div>
                    </div>*/}
                    {/* <div className="bars">
                        <div className="info">
                            <span>jquery</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div> 
                    <div className="bars">
                        <div className="info">
                            <span>Reactjs</span>
                            <span>45%</span>
                        </div>
                        <div className="line react"></div>
                    </div>*/}

                </div>
            </div>
        </div>
    </section>
   </>
  );
};

export default Skills;