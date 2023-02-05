import React,{ useState } from "react";
import { ConfigProvider, theme, Button, Card } from "antd";
import Abouts from './components/Abouts'
import Academics from './components/Academics'
import Achievements from './components/Achievements'
import FutureProjects from './components/FutureProjects'
import Header from './components/Header'
import Footer from './components/Footer/index'
import { Switch } from 'antd';
// import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
// import { Button } from 'antd';


function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
 const [isDarkMode, setIsDarkMode] = useState(false);

 const handleClick = () => {
  setIsDarkMode((previousValue) => !previousValue);
 };
  return (
    <div className={isDarkMode ? "darkmodeA" : "lightmodeA"}>  
      <ConfigProvider
   theme={{
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm, 
   }}>
    <div >
      <div className='div-position' >
        <div className='banner'>
            <Header/>
            <div className='headingg'>
              <h1>Probhadhan Santha</h1>
              <label style={{color:"white"}}>Non-Governmental Organisation</label> 
              <br/>
              <br/>  <br/>
  <Button type="primary" className='Achievements-LEARN-button' shape="round">LEARN MORE </Button>
  <Switch defaultChecked onClick={handleClick} /> {isDarkMode ? "Dark" : "Light"}
            </div>
        </div>
        <div className='abouts-main-div'>
        <Abouts isDarkMode={isDarkMode}/>
        </div>
      </div>
      </div>
          <Academics isDarkMode={isDarkMode}/>
         <Achievements isDarkMode={isDarkMode}/>
         <FutureProjects isDarkMode={isDarkMode}/>
         <br/>
         <Footer/>
   
  </ConfigProvider>
     </div>
    
  );
}

export default App;
