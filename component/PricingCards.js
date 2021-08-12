
import { useState } from 'react';
import CourseRegistration from './CourseRegistration';

export const PricingCards = ( { courseDetails } ) => {
    const [modal,setModal ] = useState(false)
    const [cType, setCType] = useState()
   return (
    <div class="container mx-auto">
    {/* <!-- choose plans section starts here --> */}
    <section class="md:h-screen flex justify-evenly items-center flex-col">
      <h1 style={{color:"#FF6D6D"}}>Pricing plan </h1>
      <h1 class=" text-lg md:text-2xl font-bold">Choose the right course for you</h1>
        <div class="h-full w-full flex justify-evenly items-center flex-col md:flex-row ">
            {/* <!-- first card --> */}
            {courseDetails.map( course => (
        <div class="pricing-cards mt-5 md:mt-0">
            <div class="pricing-cards-top w-full flex justify-center items-center flex-col">
                <h5 class="text-white capitalize text-xl">{course.type}</h5>
                <h5 class="text-white  text-4xl font-black mt-1 md:mt-5">&#8377; {course.price}</h5>
                <p class="text-white opacity-80 text-xs">Course Duration: {course.duration} months</p>
            </div>
            <div class="pricing-cards-body flex justify-center items-center flex-col ">
                <ul class=" flex-col text-white">
                    {course.details.map( detail =>(
                        <li class="plan-details flex "><p class="pl-4"> {detail} </p>      </li>
                    ))
                    }
                </ul>
            
                <button class="register-now-btn text-white mt-4" onClick={()=>{setModal(true); setCType(course.type);}}> Register Now</button>
          
            </div>
        </div>

)) }
    </div>
    </section>
    {/* <!-- choose plans section ends here --> */}
    {modal? 
     <CourseRegistration modal={modal} setModal= {setModal} cType={cType} setCType={setCType}/>
    :null
    }
</div>
    )
}
export default PricingCards;

  