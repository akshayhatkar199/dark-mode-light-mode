import React from 'react'
import { Col, Row  } from 'antd';
import { Card } from 'antd';
import Image1 from '../../Image/2-mdpi.png';
import { Button } from 'antd';
import './academics.css'
const { Meta } = Card;

const Academics = ({isDarkMode}) => {
  return (
      <div id='Academics'>
      <div className='div-center'>
      <div  className={isDarkMode ? "bg-dark" : "Academics-main-div"} >
    <div className='Academics-div'>
    <h5 className='header-Sanstha'>Sanstha</h5>
    <h2 className='Academics-header'>Academics</h2>
    <hr  className='Academics-header-hr' />
    </div>
    </div>
   
    </div>
    <Row>
  
  <Col          
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
   <div className='card-Academics'>
   <Card
    hoverable
    style={{
      width: "100%",
    }}
    cover={<img alt="example" src={Image1} className="card-ace-img" />}
  >
     <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
    <div className='center-button'>
    <Button type="primary" className='Academics-LEARN-button' shape="round">LEARN MORE</Button>
    </div>
  </Card>
   </div>
      
   </Col> 

   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
    <div className='card-Academics'>
   <Card
    hoverable
    style={{
      width: "100%",
    }}
    cover={<img alt="example" src={Image1} className="card-ace-img"/>}
  >
    <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
    <div className='center-button'>
    <Button type="primary" className='Academics-LEARN-button' shape="round">LEARN MORE</Button>
    </div>
  </Card>
   </div>
   </Col>

   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
     <div className='card-Academics'>
   <Card
    hoverable
    style={{
      width: "100%",
    }}
    cover={<img alt="example" src={Image1} className="card-ace-img" />}
  >
     <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
    <div className='center-button'>
    <Button type="primary" className='Academics-LEARN-button' shape="round">LEARN MORE</Button>
    </div>
  </Card>
   </div>
  
   
   </Col>
   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
    <div className='card-Academics'>
   <Card
    hoverable
    style={{
      width: "100%",
    }}
    cover={<img alt="example" src={Image1}  className="card-ace-img"    />}
  >
  
    <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
    <div className='center-button'>
    <Button type="primary" className='Academics-LEARN-button' shape="round">LEARN MORE</Button>
    </div>
  </Card>
   </div>
   </Col>
 
 </Row>

 <div className='full-cover-image'>
 <Row>
  
  <Col          
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
   <div className='number-Academics'>
     <h1> 8+</h1>
     <h5> Teacher</h5>
   </div>
      
   </Col> 

   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
    <div className='number-Academics'>
    <h1> 4+</h1>
     <h5> Members</h5>
   </div>
   </Col>

   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
     <div className='number-Academics'>
     <h1> 13+</h1>
     <h5> Courses</h5>
   </div>
  
   
   </Col>
   <Col  
   xs={{span: 24}}
   sm={{span: 24}}
   md={{span: 12}}
   lg={{span: 6}}
   xl={{span: 6}}
   xxl={{span: 6}}
   >
   <div className='number-Academics'>
   <h1> 5+</h1>
     <h5> countries</h5>
   </div>
   
   </Col>
 
 </Row>
 </div>
 </div>
    
    )
}

export default Academics