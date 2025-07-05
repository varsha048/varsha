import React from 'react'

const Footer = () => {
  return (
    <div style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap",width:"100%"}}>
    <footer style={{backgroundColor:"003366",color:"black",width:"100%",display:"flex"}}>
    <div style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap",backgroundColor:"#009999", width: "100%"}}>
          <h4>Important Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>IQAC</li>
            <li>Mandatory Disclosure</li>
            <li>Placement</li>
            <li>Grievance Cell</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
          <h4>Under Graduation</h4>
          <ul style={{ listStyle: "none", padding: 0}}>
            <li>Bachelor of Arts</li>
            <li>Bachelor of Science</li>
            <li>Bachelor of Commerce</li>
            <li>Bachelor of Business Administration</li>
            <li>Bachelor of Computer Applications</li>
          </ul>
          <h4>Post Graduation</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Master of Business Administration</li>
            <li>Master of Computer Applications</li>
            <li>Master of Commerce</li>
            <li>MSc Chemistry</li>
            <li>MSc Psychology</li>
            <li>MA Media Studies</li>
          </ul>
        </div>
      {/* <p style={{ textAlign: "center", marginTop: "20px" }}>© 2025 Surana College. All Rights Reserved.</p> */}
    </footer>
    </div>

  )
}

export default Footer
