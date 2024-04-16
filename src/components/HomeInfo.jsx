import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-small  sm:text-xl text-center' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText }
            <img src={arrow} className="w-4 h-4 object-contain"/>
            
        </Link>
    </div>
)
const renderContent ={
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center
         neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Kumar Rishav 👋</span>
            <br/>
            A software Engineer from India
         </h1>
    ),
    2: (
    <InfoBox
    text="I am currently working as a software Engineer "
    link="/about"
    btnText="Learn more"
    />
    ),
    3: (
        <InfoBox
        text="Lead multiple projects to sucess over the years. Curious about the impacts? "
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
        text="Need a project done or looking for a dev? i'm afew keystrokes away "
        link="/contact"
        btnText="Let's talk"
        />
    ),

}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage]||null;
}

export default HomeInfo