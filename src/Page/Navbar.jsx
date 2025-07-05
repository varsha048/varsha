import React from 'react'
import Alumni from '../Component/Alumni'
import Maganize from '../Component/Maganize'
import OnlineERPLogin from '../Component/OnlineERPLogin'
import UUCMSLogin from '../Component/UUCMSLogin'
import ApplyNow from '../Component/ApplyNow'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image from '../assets/image.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'

const Navbar = () => {
  return (
    <div>
    <nav className='nav'>
    <img src={logo} className='img1'/>
      <ul className='ulsb'>
        <Link to="/Alumni" className='linku'><i class="fa fa-graduation-cap" aria-hidden="true"></i>Alumni</Link>
        <Link to="/Maganize" className='linku'><i class="fa fa-archive" aria-hidden="true"></i>Maganize</Link>
        <Link to="/OnlineERPLogin" className='linku'><i class="fa fa-sign-in" aria-hidden="true"></i>OnlineERPLogin</Link>
        <Link to="/UUCMSLogin" className='linku'><i class="fa fa-user" aria-hidden="true"></i>UUCMSLogin</Link>
        <Link to="/ApplyNow" className='linku'><i class="fa fa-phone-square" aria-hidden="true"></i>ApplyNow</Link> 
      </ul>
      </nav>
      <div style={{maxWidth:'100%', margin:'40px auto' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src={image}/>
            </div>
            <div>
                <img src={img2}/>
            </div>
            <div>
                <img src={img3}/>
            </div>
            <div>
                <img src={img4}/>
            </div>
        </Carousel>
      <div style={{backgroundColor:"#ffcc00",color:"black",fontWeight:"bold",padding:"34px 0",fontSize:"34px"}}>
        <marquee behavior="scroll" direction="left">  Admission Open for batch 2025-26
        </marquee>
         </div>
      </div>
      <div className="about-section">
      <div className="about-content">
        {/* Left image */}
        <div className="about-image">
          <img src={img5}/>
        </div>

        {/* Right text */}
        <div className="about-text">
          <h2>About<br></br>Surana Educational Institutions (SEI)</h2>
          <p>
            Welcome to Surana Educational Institutions (SEI), a beacon of educational
            excellence proudly established in 1995 under the esteemed GDA Foundation Trust.
            Our unique approach blends a rigorous academic curriculum with holistic development
            programs that cultivate intellectual prowess and essential life skills.
          </p>

          <div className="stats">
            <div>
              <h3>70+</h3>
              <p>Recruiters</p>
            </div>
            <div>
              <h3>5000+</h3>
              <p>Students Placed</p>
            </div>
            <div>
              <h3>84+</h3>
              <p>University Ranks</p>
            </div>
            <div>
              <h3>45000+</h3>
              <p>Students Served</p>
            </div>
          </div>

          <button>Read More</button>
        </div>
      </div>

      <div className="bottom-boxes">
        <div><i class="fa fa-university" aria-hidden="true"></i>University Ranks</div>
        <div><i class="fa fa-shield" aria-hidden="true"></i>Achievements</div>
        <div><i class="fa fa-universal-access" aria-hidden="true"></i>Students Clubs</div>
        <div><i class="fa fa-book" aria-hidden="true"></i>Research & Publications</div>
      </div>
    </div>
    <div className="center-section">
      <h2>Connecting Students with Industry</h2>
      <p>
        The placement department facilitates training while simultaneously working to promote
        the total development of the pupils. By serving as a bridge between industry and
        institute, the placement department of RCASC protects the interests of both students
        and recruiting firms.
      </p>
</div>

    </div>
  )
}

export default Navbar
