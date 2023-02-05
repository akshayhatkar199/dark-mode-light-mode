import React from 'react'
import { Col, Row  } from 'antd';
import { Card } from 'antd';
import Image1 from '../../Image/261424_18415398.png';
import { Button } from 'antd';
import './abouts.css'

const { Meta } = Card;
const Abouts = ({isDarkMode}) => {
  return (
    <div id='AboutUs' className= {isDarkMode ? "bg-dark" : "Abouts-main"}> 
  <Row>

<Col          
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 12}}
 xl={{span: 12}}
 xxl={{span: 12}}
 >
 <div className='card-Abouts'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover>  
<div className='abouts-div'>
    <div className='' >
  <div className='Abouts-div'>
  <h5 className='header-Sanstha'>Abouts Us</h5>
  <h1 className='Abouts-header'>Prabodhan Sanstha</h1>
  <hr  className='Abouts-header-hr' />
  </div>
  </div>
 
  </div>
   <Meta title="" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
   took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
   1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" />
  <div className='center-button'>
  <Button type="primary" className='Abouts-LEARN-button' shape="round">LEARN MORE</Button>
  </div>
</Card>
 </div>
 </Col>

 <Col  
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 12}}
 xl={{span: 12}}
 xxl={{span: 12}}
 >
   <div className='card-Abouts'>

    {<img alt="example" src={Image1} className="card-ace-img" />}

 </div>

 
 </Col>
</Row>
</div>
  )
}

export default Abouts