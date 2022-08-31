import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
