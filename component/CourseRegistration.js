
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import CourseRegistrationForm from './CourseRegistrationForm'
 const CourseRegistration = ( { setModal , cType ,setCType} ) => {
     const [ successAlert, setSuccessAlert] = useState( false )
     const regitserPopUp = useRef()
    return (
        <div className=" fixed top-0 left-0 w-full z-10 bg-white register-popup"  >
        <nav className="nav w-full fixed bg-transparent d-nav top-0 md:px-10 px-2 md:py-3 py-2">
        <div className="mx-auto flex flex-wrap items-center justify-between">
            <div className="flex flex-no-shrink items-center mr-6 py-3">
                <Link href="/">
                <a className="nav-brand md:pl-0 pl-4"><img src="img/logo.svg" alt="" /></a>
                </Link>
            </div>
        </div>
    </nav>


    <section className="h-screen">
        <div className="grid lg:grid-cols-2 grid-cols-1 h-full">
            <div className="register-left lg:block hidden ">
            <div className="register-overlay lg:block hidden  ">
                <div className="contact-l-content text-white flex justify-center items-center flex-col">
                    <h4 className=" text-lg lg:text-2xl font-semibold">  Register Now For</h4>
                    <h4 className="xl:tracking-widest text-lg xl:text-xl"> Mern Full Stack Development </h4>
                 </div>
                </div>
            </div>
            <CourseRegistrationForm setModalFunction={setModal} cType={cType} setCType={setCType} setSuccessAlert={setSuccessAlert} />
        </div>
    </section>
        { successAlert ? alert("Successfully Registered"):null }
    </div>
    )
}

export default CourseRegistration;