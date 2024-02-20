import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main(){
  const [cngpass , setCngpass ] = useState(true);
  const [oldpass , setOldpass ] = useState("");
  const [newpass , setNewpass ] = useState("");
  const [massige , setMassige ] = useState("");
    let navigate=useNavigate()
    useEffect(() => {
        const hasSessionStorage = sessionStorage.getItem('yourSessionKey');
        if (!hasSessionStorage) {
          navigate('/');
        }
      }, [navigate]);

   const eml2=sessionStorage.getItem('yourSessionKey')
   const eml=atob(eml2)
   const pass=atob(sessionStorage.getItem('ness'))
      function update(){
        if(pass===oldpass){
          const requestoption={
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({oldpass,newpass,eml})
        }
        fetch('https://login-back-tau.vercel.app/update',requestoption).then(result=>{
            result.json().then(resp=>{
                console.log(resp)
            })
        })
        sessionStorage.setItem('ness',btoa(newpass))
        setCngpass(true)
        }else{
         setMassige('old password is wrong')
        }
    
      }
    
   
 
    return(
        <>
     <h1>heloo</h1>
     <h3>change your password</h3>
     
     <br />
    
            {
              
              cngpass?<button onClick={()=>setCngpass(false)}>Change password</button>:
              
              <>
              
                <input type="text" value={oldpass} onChange={(e)=>setOldpass(e.target.value)}  placeholder='enter your current password'/><br /><br />
                <input type="text" value={newpass} onChange={(e)=>setNewpass(e.target.value)} placeholder='enter your new password' /><br /><br />
                <button onClick={update}>save</button>
                <h1>{massige}</h1>
              </>
            }
        </>
    )
}
export default Main