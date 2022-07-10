import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"

function Hero() {
  return (
    <div className="hero">
        <div className="left-h">
            <Header />

            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                        Ideal body
                    </span>
                </div>
                <div>
                    <span>
                    in here we will help you to shape and bulid your ideal body and live up life to fullest
                    </span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+970</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+100</span>
                    <span>fitness programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
            </div>

            <img src={hero_image} alt="" className='hero_image' />
            <img src={hero_image_back} alt="" className='hero_image-back' />

            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span><span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero