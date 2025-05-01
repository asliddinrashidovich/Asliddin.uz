import Link from "next/link"
import { GridPattern } from "./magicui/grid-pattern"
import { cn } from "@/lib/utils"

function Hero() {
  return (
    <section className="py-10 h-[100vh]  bg-[#fff] lg:py-20 px-5 md:px-10" id="hero">
      <div className="brightnes-50 z-0">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] brightness-[99%]",
          )}
        />
      </div>
      <div className="max-w-[1200px] mx-auto relative z-[999]  grid lg:grid-cols-2 lg:flex items-center ">
        <div className="max-w-[650px]">
          <h2 className="font-medium lg:font-[700] text-[#999] text-3xl lg:text-4xl">I am Asliddin</h2>
          <h1 className="font-semibold text-4xl lg:text-6xl mb-5 lg:mb-7">Frontend Developer</h1>
          <p className="opacity-[70%] text-xs lg:text-xl mb-7">I am a software engineer specializing in creating modern, scalable, and user-friendly applications. Skilled in problem solving and working independently, you can find out about me here.</p>
          <div className="flex gap-5 asliddin mb-5">
            <div className=" w-10 h-10 flex  justify-center items-center rounded-full" >
              <Link target="_blank" href="https://www.instagram.com/asliddin.norboyev_/">
                
              </Link>
            </div>
            <div className=" w-10 h-10 flex  justify-center items-center rounded-full" >
              <Link target="_blank" href="https://t.me/asliddin_it_blog">
                <i className="text-xl fa-brands fa-telegram"></i>
              </Link>
            </div>
            <div className=" w-10 h-10 flex  justify-center items-center rounded-full" >
              <Link target="_blank" href="https://www.youtube.com/@AsliddinNorboyev_blog">
                <i className="text-xl fa-brands fa-youtube"></i>
              </Link>
            </div>
            <div className=" w-10 h-10 flex  justify-center items-center rounded-full" >
              <Link target="_blank" href="https://www.linkedin.com/in/asliddin-rashidovich-774624336/">
                <i className="text-xl fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
          <button id="download_CV" className="btn px-7 py-3 rounded-[30px] text-white cursor-pointer">Download CV <i className="fa-solid fa-download"></i></button>
        </div>
        <div className="max-w-[800px] lg:max-w-[600px] max-h-[800px] lg:max-h-[600px]  mx-auto rounded-full order-[-1] lg:order-none select-none mb-10 lg:mb-0 ">
          <img src="./images/hero/hero_img.png" alt="hero img" className="w-full h-full rounded-full object-cover pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default Hero