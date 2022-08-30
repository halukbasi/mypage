import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Products from './components/pages/Products';
// import Aboutme from './components/pages/Aboutme';


// function App() {
//   return (
//     <>
//       <Router>
//         {/* <Navbar /> */}
//           {/* <Aboutme/> */}
//           <Routes>
//             <Route path='/' exact component={Home} />
//             <Route path='/aboutme' component={Aboutme} />
//           </Routes>
//       </Router>
//     </>
//   );
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutme" element={<Aboutme />} /> */}
      </Routes>
    </Router>
  );
}
