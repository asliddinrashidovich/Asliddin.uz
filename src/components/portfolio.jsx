import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container">
            <h2 data-aos="fade-up" data-aos-duration="500">Portfolio</h2>
            <div data-aos="fade-up" data-aos-duration="700" className="line"></div>
            <h3 data-aos="fade-up" data-aos-duration="500" className="myworks">My Works</h3>
            <div className="portfolio__cards">
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/nextjs-project" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://nextjs-project-chi-two.vercel.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Nextjs blog/next-js-blog.png" alt="next js img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/youtube-lite-clone" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://heroic-yeot-38b858.netlify.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/youtube clone/youtube-clone.png" alt="you tube"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/react-projects-quiz-app" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://dapper-hotteok-9faae6.netlify.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/frontend quiz/frontend-quiz.png" alt="quiz app img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/book-shopping" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://book-shopping-livid.vercel.app/" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Book shopping/book shopping.png" alt="shopping img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/netevia-industry" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://netevia-industry.netlify.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Netevia/netevia.png" alt="netevia img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/najot-talim-5-month-imtoxon" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://admin-dashboard-tau-dun.vercel.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Admin panel/admin_panel.png" alt="admin panel img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/Cafe-website-bootstrap" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://dashing-macaron-fe5e9c.netlify.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Cafe Website/Restaurant_delevery.png" alt="Cafe website img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/Monito" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://monito-six.vercel.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Monito/monito.png" alt="monito img"/>
                </div>
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/design-agensy" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="https://design-agensy.vercel.app" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Designisy/design_agensy.png" alt="design img"/>
                </div>

                
                {/* <!-- <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="#" className="portfolio_link">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a target="_blank" href="#" className="portfolio_link">
                            <CiGlobe />
                            <span>Demo</span>
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Nextjs blog/next-js-blog.png" alt="next js img">
                </div> --> */}
                {/* <!-- <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <a target="_blank" href="https://tailwindcss-regim.vercel.app/" className="port">
                        Go to website
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                    <img src="./images/potfoliyo/site3.png" alt="portfolio">
                </div> --> */}
            
            </div>
            <div className="mini_portfolioCards">
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-calculator" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-calculator.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Calculator/calculator.png" alt="Calculator img"/>
                </div>
                {/* <!-- Dice game --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-project-minidice-game" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-project-mini-two-dice-game.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Dice game/mini_dice_game.png" alt="Dice Game img"/>
                </div>
                {/* <!-- Expense tracker --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-expense-tracker" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-expense-tracker.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Expense tracker/exp.png" alt="Expense tracker img"/>
                </div>
                {/* <!-- Movie app --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/samarbadriddinov-project" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://movie-app-react-js-javascript.netlify.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Movie app/movie_app.png" alt="Movie app img"/>
                </div>
                {/* <!-- Todo List --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-todolist" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-todolist.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Todo list/todo_list_crud.png" alt="Todo List img"/>
                </div>
                {/* <!-- Rock paper scissors --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-rock-paper-scissors-game" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://roaring-paletas-0efcad.netlify.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Rock paper scissors/rock_paper_scissor.png" alt="Rock paper Scissors img"/>
                </div>
                {/* <!-- Weather app --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-weather-app" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-weather-app.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Weather app/current_weather_app.png" alt="Weather app img" />
                </div>
                {/* <!-- Random User --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/react-projects-create-user" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-random-user.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Random user/random_user_generator.png" alt="Random User img"/>
                </div>
                {/* <!-- Random quoto --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-random-quote" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-random-quote.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Quto generator/random_quoto.png" alt="Quoto generator img"/>
                </div>
                {/* <!-- Student Rating --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/najot-talim-project-rating" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://najot-talim-project-rating.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Student rating/students_rating.png" alt="Student rating img"/>
                </div>
                {/* <!-- Todo app --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/najottalim-5-oy-todo-list" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://najottalim-5-oy-todo-list.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Todo app/todo_app.png" alt="Todo app img"/>
                </div>
                {/* <!-- Word Counter --> */}
                <div data-aos="zoom-out-up" data-aos-duration="500" className="portfolio__card">
                    <div className="port">
                        <a target="_blank" href="https://github.com/asliddinrashidovich/javascript-projects-word-counter" className="portfolio_link">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://javascript-projects-word-counter.vercel.app" className="portfolio_link">
                            <CiGlobe />
                        </a>
                    </div>
                    <img src="./images/potfoliyo/portfolio/Word counter/word_counter.png" alt="Word Counter img"/>
                </div>
            </div>
        </div>
        <div className="container">
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Awards</h3>
            <div className="awards">
                <div className="award__content">
                    <h4 data-aos="fade-up" data-aos-duration="900">Finalist of the Republican <span className="marked">Mathematics Olympiad</span></h4>
                    <p data-aos="fade-up" data-aos-duration="900">I participated in the Republican Mathematics Olympiad organized by PDP University & IT Park in 2023. I scored high points and became a participant in the final stage. In addition, I have participated in many competitions in Chess and Mathematics and have won many competitions.</p>
                </div>
                <div  data-aos="fade-up" data-aos-duration="500" className="award__img">
                    <img src="./images/awards/certificateFinal.png" alt="sertificate"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Portfolio