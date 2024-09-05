import React from "react";
import profilePicture from '../Hero/ProfilePicture.png'
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  StyledProfilePicture,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Zoreoz</div>
        <div className="BigCard">
      
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <br/>
              Welcome to <strong>Zoreoz Software Club</strong>, your premier destination for transformative digital solutions. At Zoreoz, we are committed to delivering exceptional website and app development services that cater to your specific business requirements. Our dedicated team combines innovative strategies with advanced technology to create powerful, user-centric digital experiences. Looking ahead, we are excited to expand our range of services, continually pushing the boundaries of what’s possible. Trust Zoreoz Software Club to elevate your digital presence and drive your success with unparalleled expertise and dedication.
              <br/>
              <br/>
              <b>Our expertise are in:</b>

              <br/>
              <br/>
              <br/>
              <br/>
            </ScrollAnimation>

          
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
