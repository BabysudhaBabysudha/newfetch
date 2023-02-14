import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


import Main from "./Main";
import Techfully from "./Techfully";

function Homepage(){
   
    return(
      
            <Router>
             <div>
              <Routes>
                    <Route exact path="/" element={<Main></Main>}></Route>
                    {/* <Route exact path="/main" element={<Main></Main>}></Route> */}
                  </Routes>
             </div>
            </Router>
        
    )
}
export default Homepage;