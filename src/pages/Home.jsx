import React, { useState } from 'react'
import Heading from '../components/Heading/Heading'
import Input from '../components/Input/Input'

const Home = () => {
    const [state, setState]=useState({
        rating:"",
        name:"",
        textarea:""  
    });
    const [requirement, setRequirement ]= useState("")
    const [flag, setFlag] = useState(false)

    const onChange = (event)=>{
        setState({...state,[event.target.name]:[event.target.value]})
    }
   
    const onbtnClick = (event)=> {
        if (state.rating==="" || state.name==="" || state.textarea===""){
           setRequirement("All fields Are required")
        }
        // else
        // if(state.name.length<=3){
        //     setFlag(true)
        //     event.preventDefault()
        // }  
        // else if(state.name.length>15){
        //     setFlag(true)
        //     event.preventDefault()
        // }
        else {
        alert(`Current state is {Author : ${state.name} , Rating:${state.rating} , Comment:${state.textarea}}`)
        localStorage.setItem('token', state.name, state.rating, state.textarea)
        console.log(state)
        setState(({
            rating:"",
            name:"",
            textarea:""
        }))
        setRequirement("")
        setFlag(false)
}
}


  return (
    <div>
     <Heading/>
     <Input onClick={onbtnClick} onChange={onChange} value={state} flag={flag} require={requirement}/>
    </div>
  )
}

export default Home
