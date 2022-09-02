import React,{ useEffect,useState } from "react";
import '../App.css';
import { Button } from 'primereact/button';
import './HeroSection.css';
import { View, Image, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-social-icons';

function HeroSection() {
  const [info,setInfo] = useState(0);
  const [exp,setExp] = useState(0);
  const [contact,setContact] = useState(0);
  const [social,setSocial] = useState(0);


  const handleInfo = ()=> {
    setInfo(!info)
    setExp(0)
    setContact(0)
  }
  const handleExp = ()=> {
    setExp(!exp)
    setInfo(0)
    setContact(0)
  }
  const handleContact = ()=> {
    setContact(!contact)
    setInfo(0)
    setExp(0)
  }
  const handleSocial = ()=> {
    setSocial(!social)
  }
  const handleRedirect = ()=> {
    setInfo(0)
    setExp(0)
    window.open('https://github.com/halukbasi', '_blank');
  }
  const styles = StyleSheet.create({
    container: {
      // paddingTop: 50,
      // backgroundColor:'white'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
    },
    logobig: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    contact:{
      width: 700,
      height: 250,
      resizeMode: 'contain',
    },
    exp:{
      width: 700,
      height: 250,
      resizeMode: 'contain',
    },
    logotomabout:{
      width: 500,
      height: 350,
      resizeMode: 'contain',
    },
    logojerryabout:{
      width: 500,
      height: 210,
      resizeMode: 'contain',
    }

  });
  return (
    <div className='hero-container'>
      <div className="navbar">
        <ul className='nav-menu'>
            <li className="nav-links" >
              <Button className="nav-buttons" onClick={handleInfo}>About Me</Button>
            </li>
            <li className="nav-links" >
              <Button className="nav-buttons" onClick={handleExp}>Experiences</Button>
            </li>
            <li className="nav-links" >
              <Button className="nav-buttons" onClick={handleRedirect}>Works-Github</Button>
            </li>
            <li className="nav-links" >
              <Button className="nav-buttons" onClick={handleContact}>Contact Me</Button>
            </li>
          </ul>
          </div>
          {info ? <h2 className="bio-welcome">Hi there, I'm Haluk Başı! Welcome to my personal web page! Here is short information about me :</h2> : null}
          {info ? <h3 className="bio"> 
          As soon as I graduated from university, I entered business life quickly. Besides having a
          degree in mechatronics engineering, I am willing to be a software programmer. I was
          working as a software engineer for a company that works on image processing. Currently I
          m trading cryptocurrencies with my trading bot which i developed with my algorithms. I like
          to research and invest blockchain technology. Nowadays i m trying to develop an app for
          my trading bot on android using flutter. I look forward to learning more about new
          technology every day.</h3> : null}
          {/* {info ?                 
          <div className="aboutpng">
          <div className="tomabout">
          <Image
                style={styles.logotomabout}
                source={
                  require('../assets/tom-about.png')
                }
                /> </div>
          <div className="glasses">
          <Image
                style={styles.logobig}
                source={
                  require('../assets/glasses.png')
                }
                /></div>
          <div className="jerryabout">
          <Image
                style={styles.logojerryabout}
                source={
                  require('../assets/jerry-about.png')
                }
                /></div>
          </div> : null} */}
          {/* {info ?                 
          <div className="tomabout">
          <Image
                style={styles.logotomabout}
                source={
                  require('../assets/tom-about.png')
                }
                /></div> : null}
          {info ?                 
          <div className="jerryabout">
          <Image
                style={styles.logojerryabout}
                source={
                  require('../assets/jerry-about.png')
                }
                /></div> : null} */}
          
          {exp ? 
          <div className="experiences">
            <ul>
            <div className="exp">
              <div className="title">
                <Image
                style={styles.logo}
                source={
                  require('../assets/baykar.png')
                }
                />
                <h2>Software Engineer at Atlas Imaging - Baykar Technologies</h2>
                <p className="date1">February 2021 - February 2022</p>
              </div>
            </div>
            <div className="exp">
              <div className="title">
                <Image
                style={styles.logo}
                source={
                  require('../assets/beyçelik-logo.png')
                }
                />
                <h2>Intern - Beyçelik Gestamp</h2>
                <p className="date2">August 2020 - October 2020</p>
              </div>
            </div>
            <div className="exp">
              <div className="title">
                <Image
                style={styles.logo}
                source={
                  require('../assets/renault.png')
                }
                />
                <h2>Intern - Oyak Renault</h2>
                <p className="date3">July 2019 - July 2019</p> 
              </div>
            </div>
            </ul>
        </div> : null}
        {/* {exp ? 
            <div className="expimage">
            <Image
            style={styles.exp}
            source={
              require('../assets/experience.png')
            }
            /> </div>: null} */}
      
      {/* {contact ? <div className="contactimage">
      <Image
          style={styles.contact}
          source={
          require('../assets/contact.png')
                } />
      </div> : null} */}
      {contact ? <div className="contact"><h2>Phone: +90 505 9495146</h2> <h2>Mail: halukbasi@gmail.com</h2></div>: null}

    <div className="social">
      <div className="nav-links">
        <Button className="nav-buttons" onClick={handleSocial}>NETWORK</Button>
      </div>
      {social ? 
    <div>
      <SocialIcon url="https://twitter.com/cryptonomously" fgColor="white" />
      <SocialIcon url="https://instagram.com/halukbasi" fgColor="white" />
      <SocialIcon url="https://www.linkedin.com/in/halukbasi/" fgColor="white" />
      <SocialIcon url="https://github.com/halukbasi" bgColor= "white" /> </div>: null}
    </div>
    </div>
  );
  
}



export default HeroSection;
