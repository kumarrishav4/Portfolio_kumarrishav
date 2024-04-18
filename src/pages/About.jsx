import React from 'react'
import  {skills} from "../constants/index"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm <span className="grey-gradient_text font-semibold drop-shadow" >
          Kumar Rishav
        </span>
        </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>
        I am versatile developer with expertise in web, games, and software. 
        As a full-stack developer, I excel in both front-end and back-end realms. 
        My design skills span UI/UX, 3D/2D animation, and 3D CAD modeling.
         Beyond coding, I am a creative technologist,
          merging hardware, CAD, and software robotics for innovative solutions.
           My passion lies in pushing technological boundaries and 
           crafting immersive experiences. I don't just write code; 
           I explore dynamic possibilities. Whether developing cutting-edge 
           software, creating visually stunning interfaces, or bridging the digital 
           and physical worlds, I'm committed to limitless innovation.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.n}>
                <div className="btn-back rounded-x1"/>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img scr={"skill.imageUrl"}
                  alt={skill.name}
                  className='w-1/2 h1/2 object-contain'
                  />
                </div>
              </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default About