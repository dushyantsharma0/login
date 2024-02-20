import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Registation(){
    
    const [firstname, setfirstname] = useState("");
    const [lastname , setLastname ] = useState("");
    const [email, setemail] = useState("");
    const [password , setPassword ] = useState("");
     const [conformpassword , setConformpassword ] = useState("");
     const [form , setForm ] = useState(true);
   const [checkotp , setCheckotp ] = useState(false);
   const [tiger ,  setTiger] = useState("");
   const [msg , setMsg ] = useState("");
   const [otp , setOtp ] = useState("");
          const [color , setColor ] = useState(true);
     
    function  senddata(){
       
       if(password===conformpassword && password!=""&&conformpassword!=""&&email!=""&&firstname!=""&&lastname!=""){
        const requestoption={
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({firstname,lastname,email,password})
        }
        fetch('https://login-back-54bk.vercel.app',requestoption).then(result=>{
            result.json().then(resp=>{
               if(resp.msg==='failed'){
                setMsg("email id alredy register")
               }
               
                 
               if(resp[0].msg==="otp sent successfully!"){
                setMsg(resp[0].msg)
               setOtp(resp[1].otp)
                setForm(false)
                setCheckotp(true)
               }
               setColor(false)
            })
            
        })
         
     
            
           
       
        
       }else{
        setMsg("please fill all data Correctly")
        setColor(true)
       }
      
      
    }
    const navigate = useNavigate();
    function sendotp(){
          if(otp===tiger){
            const requestoption={
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({tiger,firstname,lastname,email,password})
                
            }
            fetch('https://login-back-54bk.vercel.app/save',requestoption).then(result=>{
                result.json().then(resp=>{
                    console.log(resp)
                    setMsg(resp.msg)
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
            })
           })
          }else{
            setMsg("wrong otp")
          }
    }
    
   
    return(
        <>
     <img src="data:image/jpeg;base64,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" alt="" />
        <br /><br />
        <input required type="text" onChange={(e)=>setfirstname(e.target.value)} placeholder="first name" value={firstname} />
        <br /><br />
        <input required value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" placeholder="lastname"/>
        <br /><br />
        <input  required  value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="email"/>
        <br /><br />
        <input required  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="Make Strong Password" value={password} />
        <br /><br />
         <input required onChange={(e)=>setConformpassword(e.target.value)} placeholder="Conform Your Password"  type="password"value={conformpassword} />
        <br /><br />
        {
            form? <button   onClick={senddata}>submit</button>:null
        }
       
        {
            checkotp?
            <>
             <input onChange={(e)=>setTiger(e.target.value)} placeholder="Enter your otp" value={tiger} type="number" /><br />
            <button   onClick={sendotp}>Submit</button>
            </>:null
        }{
            color? <p style={{fontWeight:"900",  color:"red", backgroundColor:"#f9ece0"}}>{msg}</p>:
            <p style={{fontWeight:"900",  color:"green", backgroundColor:"#f9ece0"}}>{msg}</p>
        }
       
        </>
    )
}
export default Registation