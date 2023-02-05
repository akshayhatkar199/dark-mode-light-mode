import React,{ useState } from 'react'
import { Anchor,Button, Drawer } from 'antd';
import Image from '../../Image/269752_18414420-mdpi.png';
import FutureProjects from '../FutureProjects'
import './header.css'

const { Link } = Anchor;

const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => { 
      setOpen(false);
    }
  return (
      <div>
    <div className='container-fluid desktopheard'>
    <div className='header'>
    <div className="logo" >
    <Link to='http://www.google.com'> {<img alt="example" src={Image} className="" />}</Link>
    </div>
<div className='header-banner'>

{/* <Anchor targetOffset ='65.2'> */}
<Link href="#Home" title="Home" />
<Link href="#AboutUs" title="About Us" />
<Link href="#Academics" title="Academics" />
<Link href="#Achievements" title="Achievements" />
<Link href="#FutureProjects" title="projects" />
<Link href="#media" title="media" />
<Link href="#careers" title="careers" />
<Link href="#connectUs" title="connect Us" />

{/* 
</Anchor> */}
</div>
    </div>
</div>
 <div className='mobileVisible'>
 <div className='mobilehead-main'>
 <div className="logo" >
    <Link to='http://www.google.com'> {<img alt="example" src={Image} className="" />}</Link>
    </div>
  <Button type="" className='mobilehead-right' onClick={showDrawer}>
  <i className="fa fa-bars bars" ></i>
      </Button>
      </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
      <Anchor targetOffset ='65.2'>
      <Link href="#Home" title="Home" className='mobilelink' />
    <Link href="#AboutUs" title="About Us" className='mobilelink' />
    <Link href="#Academics" title="Academics" className='mobilelink' />
    <Link href="#Achievements" title="Achievements" className='mobilelink' />
    <Link href="#projects" title="projects" className='mobilelink' />
    <Link href="#media" title="media" className='mobilelink' />
    <Link href="#careers" title="careers" className='mobilelink'/>
    <Link href="#connectUs" title="connect Us" className='mobilelink' />
    
  </Anchor>
      </Drawer>

  </div>
</div>
  )
}

export default Header