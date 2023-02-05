import React from 'react'
import './footer.css'
import Image from '../../Image/269752_18414420-mdpi.png';
import { Col, Row , Menu } from 'antd';


const Footer = () => {
  
  return (<>
 <div className='desktop-footer'>

 <Row>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      {/* <img src={Image2} alt="logo" className="img-fluid "></img>  */}
    <img src={Image} alt="logo" className="img-fluid " style={{height: "89px" ,width: "163px"}}></img> 
      
      </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 12}}
      md={{span: 5}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='' >
      <Menu className='footer-menu'>

      <Menu.Item key="1"><span className='footer-heading'>Quick link</span></Menu.Item> 
      <Menu.Item key="2">Home</Menu.Item>
      <Menu.Item key="3">message</Menu.Item>
      <Menu.Item key="4">notification</Menu.Item>
  
       </Menu>
     
      
  
      </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Menu className='footer-menu'>

    <Menu.Item key="5"> <span className='footer-heading'>Service</span></Menu.Item>
    <Menu.Item key="6">MyfriendRequests</Menu.Item>
     <Menu.Item key="7">Myfriends</Menu.Item>
    
  
       </Menu>
      </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Menu className='footer-menu'>

      <Menu.Item key="8"><span className='footer-heading'>Create post</span></Menu.Item>
     <Menu.Item key="9">update Profile</Menu.Item>
     <Menu.Item key="10">user Profile</Menu.Item>

      </Menu>
      </div>
      </Col>
     {/* <p style={{marginLeft:"40%",fontSize:"smaller"}}> Designed & Developed by Akshay s Hatkar @ 2023 </p> */}
    
    </Row>
   
 </div>

 <p style={{textAlign: "center",fontSize:"smaller"}}> Designed & Developed by Akshay s Hatkar @ 2023 </p>

    </>
  )
}

export default Footer