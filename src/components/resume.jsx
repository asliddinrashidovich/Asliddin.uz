import React from 'react'

function Resume() {
  return (
    <section className="resume" id="resume">
        <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="300">Resume</h2>
            <div data-aos="fade-up" data-aos-duration="500" className="line"></div>
            <div className="resume__cards">
                <div className="resume__education">
                    <div data-aos="fade-down-right" data-aos-duration="500" className="resume__header">
                        <i className="fa-solid fa-graduation-cap fa-2xl marked"></i>
                        <h3>My Education</h3>
                    </div>
                    <div data-aos="fade-down-right" data-aos-duration="700" className="resume__card">
                        <h4 className="marked">2024-2024</h4>
                        <h4 className="card__title">IT Park in Zharkurgan district</h4>
                        <p>I learned the basics of programming, algorithms, and the basics of frontend programming in there.</p>
                    </div>
                    <div data-aos="fade-down-right" data-aos-duration="900" className="resume__card">
                        <h4 className="marked">2024-2025</h4>
                        <h4 className="card__title">Najot Ta'lim</h4>
                        <p>I took lessons in web programming from professional teachers, and I learned all the knowledge necessary for the
                            field of Frontend engineering. I did many projects and improved important soft skills and hard skills</p>
                    </div>
                    <div data-aos="fade-down-right" data-aos-duration="900" className="resume__card">
                        <h4 className="marked">2024-...</h4>
                        <h4 className="card__title">Tashkent State University of Economics</h4>
                        <p>I am studying World Economics and Sectors and Industries in Economics at the University. My university is parttime and I study for 2 months a year.
                        </p>
                    </div>
                </div>
                <div className="resume__experience">
                    <div data-aos="fade-down-left" data-aos-duration="500" className="resume__header">
                        <i className="fa-solid fa-trophy fa-2xl marked"></i>
                        <h3>My Experience</h3>
                    </div>
                    <div data-aos="fade-down-left" data-aos-duration="700" className="resume__card">
                        <h4 className="marked">2024-...</h4>
                        <h4 className="card__title">Frontend projects</h4>
                        <p>I have built many independent websites so far and some of them are in available production. You can see them in the portfolio section.</p>
                    </div>
                    <div data-aos="fade-down-left" data-aos-duration="900" className="resume__card">
                        <h4 className="marked">2024-...</h4>
                        <h4 className="card__title">Freelance</h4>
                        <p>As a freelancer, I have done many projects with clients on online platforms.</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="container">
            <h3 data-aos="fade-up" data-aos-duration="500">Skills</h3>
            <div className="skills">
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/nextjs.png" alt="skills"/>
                    <p>Next js</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/javascript.jpg" alt="skills"/>
                    <p>Javascript</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/react.jpg" alt="skills"/>
                    <p>React JS</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/typescript.jpg" alt="skills"/>
                    <p>Typescript</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/redux.png" alt="skills"/>
                    <p>Redux</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/tailwind_css.png" alt="skills"/>
                    <p>Tailwindcss</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/jest.png" alt="skills"/>
                    <p>Jest</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/material-ui.png" alt="skills"/>
                    <p>Material UI</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/webpack.png" alt="skills"/>
                    <p>Webpack</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/git.jpg" alt="skills"/>
                    <p>Git & Github</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/html.jpg" alt="skills"/>
                    <p>HTML</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500"  className="skill">
                    <img src="./images/scills/tools/css.jpg" alt="skills"/>
                    <p>CSS</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/bootstrap.jpg" alt="skills"/>
                    <p>Bootstrap</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill">
                    <img src="./images/scills/tools/sass.jpg" alt="skills"/>
                    <p>Sass</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500" className="skill white">
                    <img src="./images/scills/tools/figma.jpg" alt="skills"/>
                    <p>Figma</p>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Resume