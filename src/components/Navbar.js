import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaChartLine } from 'react-icons/fa';
// import { View, Image, StyleSheet } from 'react-native';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
//   const styles = StyleSheet.create({
//     container: {
//       // paddingTop: 50,
//       // backgroundColor:'white'
//     },
//     tinyLogo: {
//       width: 50,
//       height: 50,
//     },
//     logo: {
//       width: 150,
//       height: 58,
//     },
//   });

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* <View style={styles.container}> */}
          {/* <Image
            style={styles.logo}
            source={
              require('/home/haluk/react-website-v1/src/assets/images/kgt_logo.png')
            }
          /> */}
          {/* </View> */}
            {/* <i class='fab fa-typo3' /> */}
            <span style={{padding:"5px"}}></span>
            {/* <FaChartLine /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/ramuygulamari' className='nav-links' onClick={closeMobileMenu}>
                Kurumsal
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Üniteler
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Medya
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                İletişim
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={console.log('hey')}
              >
                BUY
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>BUY</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
