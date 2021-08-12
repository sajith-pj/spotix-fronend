import axios from "axios";
import { useEffect, useRef, useState } from "react";


 const CourseRegistrationForm = ( { setModalFunction ,cType,setCType , setSuccessAlert}) => {
     const intermediate = useRef()
     const beginner = useRef()
     const professional = useRef()
     const [fullname,setFullname] = useState()
     const [email,setEmail] = useState()
     const [phone,setPhone] = useState()
     
     
     const courseRegister = ( event )=>{
         event.preventDefault()
            axios.post('http://localhost:3005/register-course',{fullname,email,phone,cType}).then( response => 
            console.log(response))
            if(response.data.register){
                setSuccessAlert(true)
            }
     }

     const selectCourseAutomatically = ()=>{
         
         if( cType === intermediate.current.value){
            intermediate.current.checked = true
         }
         if( cType === beginner.current.value){
            beginner.current.checked = true
         }
         if( cType === professional.current.value){
            professional.current.checked = true
         }
        }

     useEffect( ()=>{
        selectCourseAutomatically()
     },[])

    return (
        <div className="right-content relative 2xl:p-28 xl:p-20 lg:p-16 pt-32 p-10  h-full overflow-auto">
            <button 
            type="button" 
            className="absolute right-10 top-10 cursor-pointer z-10 w-10 "
            onClick={ ()=> {setModalFunction(false); }}
            >
                <i className="fas fa-times cursor-pointer"></i> 
           </button>
            <form action="" onSubmit={ courseRegister }>
                <h6 className=" text-base sm:text-4xl font-black pl-5 relative register-page-heading mt-4 mb-4"> Register Now</h6>
                <div className="md:my-6 my-1">
                    <label className="font-bold" for="">Full Name</label>
                    <input 
                    type="text"
                    className="appearance-none rounded-md w-full py-4 px-3 my-2 register-input-field-bg  focus:outline-none focus:shadow-outline"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={ ( event )=> setFullname(event.target.value)}
                    required
                    />
                </div>
                <div className="md:my-2 my-1">
                    <label className="font-bold" for="">Email Address</label>
                    <input 
                    type="text"
                    className="appearance-none rounded-md  w-full py-4 px-3 my-2 register-input-field-bg focus:outline-none focus:shadow-outline"
                    placeholder="Enter your Email Address"
                    onChange={ ( event )=> setEmail(event.target.value)}
                    value={email}
                    required
                    />
                </div>
                <div className="md:my-2 my-1">
                    <label className="font-bold" for="">Phone Number</label>
                    <input 
                    type="text"
                    className="appearance-none rounded-md  w-full py-4 px-3 my-2 register-input-field-bg focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number" 
                    value={phone}
                    onChange={ ( event )=> setPhone( event.target.value )}
                    required
                    />
                </div>
                <div className="  my-5 w-full sm:flex sm:justify-between items-center ">
                    <div className="course-type-button pl-0 pr-0.5 mt-8 sm:mt-0">
                        <input type="radio" className=" radio" name="types" id="intermediate"  ref={intermediate} value="intermediate" onChange={ (event)=> setCType(event.target.value)} />
                        <label for="intermediate" className="course-label flex justify-center items-center " >  Intermediate </label>
                    </div>
                    <div className="course-type-button pr-0.5 pl-0.5 mt-8 sm:mt-0">
                        <input type="radio" className=" radio" name="types" id="beginner" ref={beginner} value="beginner" onChange={ (event)=> setCType(event.target.value)} />
                        <label for="beginner" className="course-label flex justify-center items-center" > Beginner </label>
                    </div>
                    <div className="course-type-button pr-0 pl-0.5 mt-8 sm:mt-0">
                        <input type="radio" className=" radio" name="types" id="professional" ref={professional} value="professional" onChange={ ( event )=> setCType(event.target.value)} />
                        <label for="professional" className="course-label flex justify-center items-center"> Professional </label>
                    </div>
                </div>
                <button type="submit"
                    className="btn-still w-full xl:text-2xl lg:text-xl text-md font-bold py-3  px-6 lg:mt-8 mt-4 text-white rounded-md  shadow-var">
                    Register
                </button>
                    <p className="text-sm mt-3"> By Clicking the register button you agree to <span style={{color:"#FF4495"}}> <a href=""> Terms & Conditons </a> </span> </p>
            </form>
        </div>
    )
}
 
export default CourseRegistrationForm;
