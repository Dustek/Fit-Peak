import React from "react"
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => 
<footer class="page-footer font-small cyan darken-3">

 
  <div class="container">

    
    <div class="row">


      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

       
          <a className="fb-ic fa-lg white-text mr-md-5 mr-3 fa-2x" style = {{ color: "skyblue", margin: '20px'}}>
          <MDBIcon icon='facebook'/>
            
          </a>
    
          <a className="tw-ic fa-lg white-text mr-md-5 mr-3 fa-2x" style = {{ color: "skyblue", margin: '20px'}}>
          <MDBIcon icon='twitter'/>
            
          </a>
      
          <a className="gplus-ic fa-lg white-text mr-md-5 mr-3 fa-2x" style = {{ color: "skyblue", margin: '20px'}}>
          <MDBIcon icon='github'/>
          </a>
     
          <a className="li-ic fa-lg white-text mr-md-5 mr-3 fa-2x" style = {{ color: "skyblue", margin: '20px'}}>
          <MDBIcon icon='linkedin'/>
          </a>
         
          <a className="ins-ic fa-lg white-text mr-md-5 mr-3 fa-2x" style = {{ color: "skyblue", margin: '20px'}}>
          <MDBIcon icon='instagram'/>
          </a>
    
        </div>
      </div>
     

    </div>
    

  </div>


  <div class="footer-copyright text-center py-3">© 2024 Copyright:
    <a href="/" style = {{ color: "skyblue", textDecoration: 'none'}}> TEAM 18</a>
  </div>
 

</footer>


export default Footer