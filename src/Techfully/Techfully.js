import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import Main from "./Main";

import "./Techfully.css";
function Techfully(){
    return(
    <div className=" bg_primaryColor" style={{width:"200px"}}>
      <Container fluid>
        <Row>
          <Col md={{span:12,offset:0}}>
          
         <div className="mt-5 fs-5 ms-4"style={{color:"#ff00ff"}}>
            Task Techfully
         </div>
        
         <Row>
         <Col>
         <div className="d-flex"style={{marginTop:"100px"}}>

           <div>
         <svg  style={{filter:"#7F00FF"}}className="ms-4"width="12" height="15" viewBox="0 0 12 15">
                  <path d="M1.5 0H10.5C11.3284 0 12 0.62959 12 1.40625V15L6 11.7188L0 15V1.40625C0 0.62959 0.671562 0 1.5 0ZM1 13.3678L6 10.6334L11 13.3678V1.40625C11 1.14779 10.7757 0.9375 10.5 0.9375H1.5C1.22431 0.9375 1 1.14779 1 1.40625V13.3678Z" />
                </svg></div>
               <div className="ms-2" style={{color:"#7F00FF"}}>  
              
                 <Link style={{textDecoration:"none"}}to="/">Courses</Link> 
              
                </div>
               
                </div>
            <div className="ms-4 mt-4 d-flex">
                <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                </div>
                <div className="ms-2 text-muted">Payment</div>
                </div>
                <div className="ms-4 mt-4 d-flex">
                    <div>
                <img  className="ml-100"width="20" height="17"src="https://icons.veryicon.com/png/o/miscellaneous/fs-icon/live-chat.png"></img></div>
                <div className="ms-2 text-muted">Chat</div>
                </div>
                <div className="ms-4 mt-4 d-flex">
                <div>
                <img className="ml-100"width="15" height="17" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghrZ5Icn0nE12aQGHqux3EdDESsdlaRz6_yPAhr5bwc_EZMInCytMk0QAavs-tEDd8-M&usqp=CAU"></img>
                </div><div className="ms-2 text-muted">Groups</div>
                </div>
                <div className="ms-4 mt-4 d-flex">
                    <div>
                <svg width="20" height="16" viewBox="0 0 20 16">
                  <path d="M19.13 4.81219L10.8488 2.13469C10.2922 1.955 9.70813 1.955 9.15156 2.13469L0.870313 4.81219C0.341875 4.98313 0 5.44938 0 6C0 6.55063 0.341875 7.01688 0.87 7.18781L1.79844 7.48781C1.69531 7.68094 1.61906 7.88875 1.56938 8.10656C1.23531 8.26844 1 8.60375 1 9C1 9.39781 1.23656 9.735 1.57281 9.89594L1.00875 13.3916C0.958437 13.7038 1.13094 14 1.36312 14H2.63656C2.86875 14 3.04156 13.7038 2.99094 13.3916L2.42719 9.89594C2.76344 9.735 3 9.39781 3 9C3 8.66875 2.82844 8.38938 2.58031 8.20719C2.62687 8.06156 2.69906 7.93031 2.78562 7.80688L4.45656 8.34719L4 12C4 13.1047 6.68625 14 10 14C13.3138 14 16 13.1047 16 12L15.5434 8.34719L19.13 7.1875C19.6581 7.01688 20 6.55063 20 6C20 5.44938 19.6581 4.98313 19.13 4.81219ZM14.9838 11.9331C14.6475 12.2872 12.9388 13 10 13C7.06125 13 5.3525 12.2872 5.01625 11.9331L5.42531 8.66031L9.15156 9.865C9.23281 9.89125 9.95531 10.1534 10.8488 9.865L14.575 8.66031L14.9838 11.9331ZM18.8213 6.23688L10.54 8.91438C10.1866 9.02875 9.81344 9.02875 9.46 8.91438L3.97031 7.13938L10.0919 5.99125C10.3634 5.94063 10.5422 5.67938 10.4913 5.40781C10.4406 5.13594 10.1737 4.95813 9.90812 5.00875L3.54 6.2025C3.1525 6.275 2.80531 6.44156 2.50625 6.66594L1.17844 6.23656C0.933125 6.15688 0.945312 5.83844 1.17844 5.76313L9.45969 3.08563C9.93156 2.93313 10.3297 3.01781 10.5397 3.08563L18.8209 5.76313C19.0519 5.83781 19.0681 6.15688 18.8213 6.23688Z" />
               
                </svg>
                </div>
                <div className="ms-2 text-muted">
                Students
                </div>
                </div>
                <div className="ms-4 mt-4 d-flex">
                <div>
                <img className="ml-100"width="15" height="17"src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png"></img></div>
                <div className="ms-2 text-muted">
                Support
                </div>
                </div>
                <div className="" style={{marginTop:"100px"}}>
                    <img src="https://static.ess.com/uploads/gray-cup-icon.png" width="150px"></img>
                </div>
                <div className="d-flex ms-4 logout">
                    <div>
                    <svg width="17" height="17" viewBox="0 0 17 17">
                <path d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z" />
              </svg>
                </div>
                    <div className="ms-2 text-muted">Logout</div>
                </div>
                </Col>
                </Row>
             
                </Col>
             
               
         </Row>
         </Container>
        
        </div>
    )
}
export default Techfully;