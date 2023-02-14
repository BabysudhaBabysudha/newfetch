import React ,{useState}from "react";
import { Container, Row, Col} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import SearchField from "../Search/SearchField";
import Techfully from "./Techfully";

function Main(props){
    const [searchTerm,setSearchTerm] = useState('')
    return(
        <div>
          <Container fluid>
           <Row>
            <Col md={{span:"12",offset:0}}>
            <div className="d-flex">
                <div>
                <Techfully></Techfully>
                
                </div>
             <div>
               <div className=" mt-5 d-flex" style={{marginLeft:"970px"}} >
               <div className=" text-muted">Switch to dark</div>
                <div className="ms-1">
                <img className="ms-2"width="20" height="17" src="https://www.shutterstock.com/image-vector/night-mode-icon-crescent-moon-260nw-1307082040.jpg"></img>
                </div>
                </div> 
                
                    
                <Row className="ms-4 mt-4">
                <Col>
            <div className="d-flex">
                <div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PWiT4jbOgFjpAy0ROofuZ4PS8AzvDqqlDw&usqp=CAU"} style={{width:"50px",height:"50px",borderRadius:"50%"}}></img>
        </div>
        <div className="ms-2">
        <div className="fs-5 font-weight-bold " style={{color:"#000080"}}>Johny Makelele</div>
            <div className="text-muted">Lagos,Nigeria</div>
            </div>
            </div>
           </Col>
               <Col className="mt-2 ms-5" style={{borderRadius:"50%",width:"600px"}}>
                <SearchField placeholder="search..." bgcolor="#FAFAFA" onChange={(e)=>{setSearchTerm(e.target.value)}} value= {searchTerm}/>
              </Col>
              <Col>
              <div className="fs-5 ms-4 font-weight-bold"  style={{color:"#000080"}}>Sehedule</div>
              <div className="ms-4 text-muted">Thurs,8 Sept,2022</div>
              </Col>
              <Col>
              <Dropdown style={{marginLeft:"100px"}}>
      <Dropdown.Toggle variant="muted" style={{border:"1px solid"}}>
        September
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >November</Dropdown.Item>
        <Dropdown.Item >April</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
</Col>
             </Row> 
             <div className="d-flex">
             <div>
             <Row>
                <Col className="ms-5 mt-5" style={{color:"#7F00FF"}}>Courses</Col>
                
                <Col className=" mt-5" style={{marginLeft:"400px"}}>see all</Col>
               
                <div className="d-flex ms-5 mt-3">
                <div className="font-weight-bold">All</div>
                <div className="ms-2 text-muted">Current</div>
                <div className="ms-2  text-muted">Pending</div>
                <div className="ms-2  text-muted">Completed</div>
                </div>
                <Row>
                    <Col>
                <div className="d-flex mt-3 text-muted ms-5" style={{border:"1px solid"}}>
                   
                <div>
        <img src={"https://imageio.forbes.com/specials-images/imageserve/5e7cce1921695a000666cc29/Java-14/960x0.jpg?format=jpg&width=960"} style={{width:"150px"}}></img>
        </div>
      
       
        <div className="ms-2 mt-4">
        <div className="text-muted">Programming october 2022</div>
            <div className="fs-6 ms-3font-weight-bold " style={{color:"#000080"}}>Object=Oriented</div>
            <div className=" ms-3font-weight-bold " style={{color:"#000080"}}>Programming in Java</div>
            <div>
           </div>
         
            </div>
            <div>
            <div style={{marginLeft:"80px",marginTop:"20px",border:"1px solid",backgroundColor:"#7F00FF",padding:"20px",borderRadius:"5px"}}>Resume</div>
            </div>
            </div>
            </Col>
            </Row>
            <Row>
            <Col >
            <div className=" mt-3 text-muted ms-5" style={{border:"1px solid",backgroundColor:"#050A30",padding:"20px"}}>
            <div className=" ms-3 fs-6"style={{color:"#7F00FF"}}>How do track your</div>
            <div  className=" ms-3 fs-6"style={{color:"#7F00FF"}}>Course progress easily</div>
            <div  className=" ms-3"style={{color:"white"}}>Find more  </div>
            </div> 
            </Col>
            </Row>
            <Row>
                    <Col>
                <div className="d-flex mt-3 text-muted ms-5" style={{border:"1px solid"}}>
                   
                <div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAwgTj5E1rWa4Vhqo5YeWqV6hqO-d9Npe0w_c0mVP1ReK0p6PLhmDP0m-bSv8uR0oD6E&usqp=CAU"} style={{width:"150px"}}></img>
        </div>
      
       
        <div className="ms-2 mt-4">
        <div className="text-muted">Design sept 09, 2022</div>
            <div className="fs-6 ms-3font-weight-bold " style={{color:"#000080"}}>Visual element of User</div>
            <div className="fs-6 ms-3font-weight-bold " style={{color:"#000080"}}>Interface Design</div>
            <div>
           </div>
         
            </div>
            </div>
           </Col>
            </Row>
            <Row>
                    <Col>
                <div className="d-flex mt-3 text-muted ms-5" style={{border:"1px solid"}}>
                   
                <div>
        <img src={"https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/4e/61/b3/4e61b3d6-267e-ce86-5f2b-d7b02c7b2d9b/mza_15634560624215611303.png/1200x630wp.png"} style={{width:"150px"}}></img>
        </div>
      
       
        <div className="ms-2 mt-4">
        <div className="text-muted">Marketing oct08,2022</div>
            <div className="fs-6 ms-3font-weight-bold " style={{color:"#000080"}}>The stragety of</div>
            <div className="fs-6 ms-3font-weight-bold " style={{color:"#000080"}}>Content Marketing</div>
            <div>
           </div>
         
            </div>
           </div>
          
            </Col>
            </Row>
           
             </Row>
             </div>
             <div>
           <img src="https://7calendar.com/calendar/monthly/png/1-2023-a4-l-1-12-en.png" width="500px"></img>
          <div className="scroll" style={{ backgroundColor:"rgb(248,248,248)"}}>
             <div className="ms-3 fs-5" style={{color:"#ff00ff"}}>Upcoming classes</div>

             <Row>
                    <Col>
                    <div className="ms-3 p-2" style={{border:"1px solid",backgroundColor:"#FFCC00",width:"450px",borderBottomColor:"5px solid red"}}>
                      <div className="ms-1 text-white">Up-next</div>
                <div className="d-flex mt-2 text-muted ms-2 p-1" style={{border:"1px solid",backgroundColor:"#FFFFE0"}}>
                   
                <div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAwgTj5E1rWa4Vhqo5YeWqV6hqO-d9Npe0w_c0mVP1ReK0p6PLhmDP0m-bSv8uR0oD6E&usqp=CAU"} style={{width:"50px"}}></img>
        </div>
       <div className="ms-2">
       <div className="small ms-3font-weight-bold text-muted">10.00-10.30</div>
            <div className=" small ms-3font-weight-bold " style={{color:"#000080"}}>User Interface Design</div>
            <div>
           </div>
         
            </div>
            </div>
            </div>
            <div className="mb-5">
            <div className="mt-3 ms-3">After</div>
            <div className="d-flex mt-2 text-muted ms-2 p-2" style={{border:"1px solid",backgroundColor:"white",width:"460px"}}>
                   
                   <div>
           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAwgTj5E1rWa4Vhqo5YeWqV6hqO-d9Npe0w_c0mVP1ReK0p6PLhmDP0m-bSv8uR0oD6E&usqp=CAU"} style={{width:"50px"}}></img>
           </div>
          <div className="ms-3">
          <div className="small ms-3font-weight-bold text-muted">10.00-11.30</div>
               <div className=" small ms-3font-weight-bold " style={{color:"#7F00FF"}}>Discrete math of absoluate beginners</div>
               <div>
              </div>
            
               </div>
               </div>
               <div className="d-flex mt-2 text-muted ms-2 p-2" style={{border:"1px solid",backgroundColor:"white",width:"460px"}}>
                   
                   <div>
           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAwgTj5E1rWa4Vhqo5YeWqV6hqO-d9Npe0w_c0mVP1ReK0p6PLhmDP0m-bSv8uR0oD6E&usqp=CAU"} style={{width:"50px"}}></img>
           </div>
          <div className="ms-2">
          <div className="small ms-3font-weight-bold text-muted">11.40-1.00</div>
               <div className=" small ms-3font-weight-bold " style={{color:"#7F00FF"}}>The Medidations of Marcus Aurelius</div>
               <div>
              </div>
            
               </div>
               </div>
               <div className="d-flex mt-2 text-muted ms-2 p-2" style={{border:"1px solid",backgroundColor:"white",width:"460px"}}>
                   
                   <div>
           <img src={"https://hips.hearstapps.com/hmg-prod/images/gh-romantic-chemistry-1603305968.png?crop=0.865xw:0.865xh;0.0674xw,0.135xh&resize=1200:*"} style={{width:"50px"}}></img>
           </div>
          <div className="ms-2">
          <div className="small ms-3font-weight-bold text-muted">1.30-2.30</div>
               <div className=" small ms-3font-weight-bold " style={{color:"#7F00FF"}}>Atlantis and the Younger Dryas</div>
               <div>
              </div>
              </div>
               </div>
               </div>
           </Col>
          
           
            </Row>
             </div>
                </div>
                
                </div>
               
            </div>
            </div>
          </Col>
            
          </Row> 
        </Container>  
        </div>
    )
}
export default Main;