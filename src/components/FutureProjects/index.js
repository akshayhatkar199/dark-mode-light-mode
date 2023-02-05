import React from 'react'
import { Col, Row  } from 'antd';
import { Card } from 'antd';
import Image1 from '../../Image/2-mdpi.png';
import { Button } from 'antd';
import './FutureProjects.css'
const { Meta } = Card;

const FutureProjects = ({isDarkMode}) => {
  return (
    <div id='FutureProjects'>
    <div className='div-center'>
    <div  className={isDarkMode ? "bg-dark" : "'FutureProjects-main-div'"} >
  <div className='FutureProjects-div'>
  <h5 className='header-Sanstha'>Sanstha</h5>
  <h2 className='FutureProjects-header'>FutureProjects</h2>
  <hr  className='FutureProjects-header-hr' />
  </div>
  </div>
 
  </div>
  <Row>

<Col          
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 8}}
 xl={{span: 8}}
 xxl={{span: 8}}
 >
 <div className='card-FutureProjects'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover={<img alt="example" src={Image1} className="card-ace-img" />}
>
   <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
  <div className='center-button'>
  <Button type="primary" className='FutureProjects-LEARN-button' shape="round">LEARN MORE</Button>
  </div>
</Card>
 </div>
    
 </Col> 

 <Col  
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 8}}
 xl={{span: 8}}
 xxl={{span: 8}}
 >
  <div className='card-FutureProjects'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover={<img alt="example" src={Image1} className="card-ace-img"/>}
>
  <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
  <div className='center-button'>
  <Button type="primary" className='FutureProjects-LEARN-button' shape="round">LEARN MORE</Button>
  </div>
</Card>
 </div>
 </Col>

 <Col  
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 8}}
 xl={{span: 8}}
 xxl={{span: 8}}
 >
   <div className='card-FutureProjects'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover={<img alt="example" src={Image1} className="card-ace-img" />}
>
   <Meta title="Agriculture Polytechnic Jalgaon" description="Agriculture Polytechnic Jalgaon dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
  <div className='center-button'>
  <Button type="primary" className='FutureProjects-LEARN-button' shape="round">LEARN MORE</Button>
  </div>
</Card>
 </div>

 
 </Col>
 </Row>
 </div>
  )
}

export default FutureProjects