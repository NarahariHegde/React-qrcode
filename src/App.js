import React from 'react'
import './App.css';
import Card from './Utils/Card';
// import Qrcode from './Utils/Card';
// import Colorcombination from './Screens/Colorcombination';
// import Qrcode from './Screens/Qrcode';
// import Home from './Component/Home';
// import Single from "./Component/Single";
// import Error from "./Component/Error";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <>
      <div className="App">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Single/>} />
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter> */}



        <Card/>
      </div>
    </>
  );
}

export default App;