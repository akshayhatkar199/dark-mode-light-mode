import React from 'react'
import { Col, Row  } from 'antd';
import { Card } from 'antd';
import Image1 from '../../Image/12241065_939759-mdpi.png';
import Image2 from '../../Image/hiv-aids_159429-mdpi.png';
import { Button } from 'antd';
import './achievements.css'
const { Meta } = Card;

const Achievements = ({isDarkMode}) => {
  return (
    <div id='Achievements'>
    <div className='div-center'>
    <div className='' >
  <div className={isDarkMode ? "bg-dark" : "Achievements-div"} >
  <h5 className='header-Sanstha'>Sanstha</h5>
  <h2 className='Achievements-header'>Achievements</h2>
  <hr  className='Achievements-header-hr' />
  </div>
  </div>
 
  </div>
  <Row>

<Col          
 xs={{span: 24}}
 sm={{span: 24}}
 md={{span: 12}}
 lg={{span: 12}}
 xl={{span: 12}}
 xxl={{span: 12}}
 >
 <div className='card-Achievements'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover={<img alt="example" src={Image1} className="card-ace-img" />}
>
   <Meta title="Lorem Ipsum is simply" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
  <div className='center-button'>
  <Button type="primary" className='Achievements-LEARN-button' shape="round">LEARN MORE</Button>
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
   <div className='card-Achievements'>
 <Card
  hoverable
  style={{
    width: "100%",
  }}
  cover={<img alt="example" src={Image2} className="card-ace-img" />}
>
   <Meta title="Lorem Ipsum is simply" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " />
  <div className='center-button'>
  <Button type="primary" className='Achievements-LEARN-button' shape="round">LEARN MORE</Button>
  </div>
</Card>
 </div>

 
 </Col>
</Row>
</div>
  )
}

export default Achievements