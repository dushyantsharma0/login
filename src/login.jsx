import { useEffect, useState } from "react"


import { useNavigate } from 'react-router-dom';

import Home from './Homepage'
function Login(){
    const [email , setEmail ] = useState("");
    const [password , setPassword ] = useState("");
    const [msgh1 , setMsgh1 ] = useState("");
    const [alldata , setAlldata ] = useState({});
   
   
    const navigate = useNavigate();

   
      

    function check(){
        fetch("https://login-back-tau.vercel.app/data").then(result=>{
            result.json().then(resp=>{
                setAlldata(resp)
                
            resp.map((item)=>{
                if(item.email===email&&item.password===password){
                    let encodedeml = btoa(email);
                    let encodedpass=btoa(password);
                    sessionStorage.setItem('yourSessionKey',encodedeml)
                    sessionStorage.setItem('ness',encodedpass)
                    navigate('/main');
                }else{
                    setMsgh1('wrong email and password')
                }
            })
                
            })
        })
        
    }
 
    

    return(
        <>
        <img src="data:image/jpeg;base64,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" alt="" />
         <br /><br />
         <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" value={email} />
         <br /><br />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" />
         <br /><br />
          <button onClick={check}>login</button>
         
          <h1>{msgh1}</h1>

          {/* {
                  
            alldata.map((item,i)=>{
                if(item.email===email){
                    if(item.password===password){
                        alert("login successfull")
                      }else{
                        alert("wrongpassword")
                      }
                }else{
                    alert('wrong email')
                }
            
               
            })
          } */}
        </>
      

    )
}
export default Login