import React from "react"
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => 
<footer className="footer text-center font-small" style={{width: '100%'}}>
  <div className="container p-4 pb-0">
      <div className="container-fluid">
        <div className="mb-4">
          <a className="fb-ic fa-lg white-text mr-md-5 mr-3 fa-2x" href="https://en-gb.facebook.com" style = {{ color: 'rgba(26, 225, 232)', margin: '20px'}}>
            <MDBIcon icon='facebook'/>
          </a>
          <a className="tw-ic fa-lg white-text mr-md-5 mr-3 fa-2x" href="https://twitter.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='twitter'/> 
          </a>
          <a className="gplus-ic fa-lg white-text mr-md-5 mr-3 fa-2x" href="https://github.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='github'/>
          </a>
          <a className="li-ic fa-lg white-text mr-md-5 mr-3 fa-2x" href="https://linkedin.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='linkedin'/>
          </a>
          <a className="ins-ic fa-lg white-text mr-md-5 mr-3 fa-2x" href="https://instagram.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='instagram'/>
          </a>
        </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2024 Copyright:
    <a href="/" style = {{ color: "rgba(26, 225, 232)", textDecoration: 'none'}}> TEAM 18</a>
  </div>
</footer>


export default Footer