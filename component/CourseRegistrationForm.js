import axios from "axios";
import { useEffect, useRef, useState  } from "react";
import {useRouter} from 'next/router'

const CourseRegistrationhtmlForm = ({
  setModalFunction,
  cLevel,
  setCLevel,
  cType,
  cPrice,
  setAlert,
}) => {

  const router = useRouter()
  const intermediate = useRef();
  const beginner = useRef();
  const professional = useRef();
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [ paymentMethod , setPaymentMethod ] = useState()


  const validate = () => {
    if (fullname == null || email == null || phone == null) {
      return false;
    } else {
      return true;
    }
  };

  const courseRegister = (event) => {
    event.preventDefault();
    let isValid = validate();
     if (isValid) {
       router.push('/under-maintenance')
      // axios
      //   .post("http://localhost:3005/register-course", {
      //     fullname,
      //     email,
      //     phone,
      //     cLevel,
      //     cType,
      //     cPrice,
      //     paymentMethod
      //   },
      //   {
      //     headers: {
      //       Authorization: "Bearer " + localStorage.getItem('savedToken')
      //    }
      //   }
      //   )
      //   .then((response) => {
      //     if (response.data.registered === true) {
      //       setAlert({
      //         status: true,
      //         message:
      //           " You Are Already Registered In This Course/ Please Try To Login",
      //         registered: true,
      //       });
      //     }
      //     if (response.data.registered === false) {
      //       setAlert({
      //         status: true,
      //         message: " Successfully Registered. . .",
      //         registered: false,
      //       });
      //     }
      //     if (response.data.isValid == false) {
      //       setAlert({
      //         status: true,
      //         message: " Please Login . . .",
      //         isValid: false,
      //       });
      //     }
      //   });
    }
  };

  const selectCourseAutomatically = () => {
    if (cLevel === intermediate.current.value) {
      intermediate.current.checked = true;
    }
    if (cLevel === beginner.current.value) {
      beginner.current.checked = true;
    }
    if (cLevel === professional.current.value) {
      professional.current.checked = true;
    }
  };

  useEffect(() => {
    selectCourseAutomatically();
  }, []);

  return (
    <div className="right-content relative 2xl:p-28 xl:p-20 lg:p-16 pt-32 p-10  h-full overflow-auto">
      <button
        type="button"
        className="absolute right-10 top-10 cursor-pointer z-10 w-10 "
        onClick={() => {
          setModalFunction(false);
        }}
      >
        <i className="fas fa-times cursor-pointer"></i>
      </button>
      <form action="" onSubmit={courseRegister}>
        <h6 className=" text-base sm:text-4xl font-black pl-5 relative register-page-heading mt-4 mb-4">
          {" "}
          Register Now
        </h6>
        <div className="md:my-6 my-1">
          <label className="font-bold" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            className="appearance-none rounded-md w-full py-4 px-3 my-2 register-input-field-bg  focus:outline-none focus:shadow-outline"
            placeholder="Full Name"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            name="fullname"
          />
        </div>
        <div className="md:my-2 my-1">
          <label className="font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            className="appearance-none rounded-md  w-full py-4 px-3 my-2 register-input-field-bg focus:outline-none focus:shadow-outline"
            placeholder="Enter your Email Address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
            name="email"
          />
        </div>
        <div className="md:my-2 my-1">
          <label className="font-bold" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            className="appearance-none rounded-md  w-full py-4 px-3 my-2 register-input-field-bg focus:outline-none focus:shadow-outline"
            placeholder="Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            name="phone"
          />
        </div>
        <div className="  my-5 w-full sm:flex sm:justify-between items-center ">
          <div className="course-type-button pl-0 pr-0.5 mt-8 sm:mt-0">
            <input
              type="radio"
              className=" radio"
              name="types"
              id="intermediate"
              ref={intermediate}
              value="intermediate"
              onChange={(event) => setCLevel(event.target.value)}
            />
            <label
              htmlFor="intermediate"
              className="course-label flex justify-center items-center "
            >
              Intermediate
            </label>
          </div>
          <div className="course-type-button pr-0.5 pl-0.5 mt-8 sm:mt-0">
            <input
              type="radio"
              className=" radio"
              name="types"
              id="beginner"
              ref={beginner}
              value="beginner"
              onChange={(event) => setCLevel(event.target.value)}
            />
            <label
              htmlFor="beginner"
              className="course-label flex justify-center items-center"
            >
              {" "}
              Beginner{" "}
            </label>
          </div>
          <div className="course-type-button pr-0 pl-0.5 mt-8 sm:mt-0">
            <input
              type="radio"
              className=" radio"
              name="types"
              id="professional"
              ref={professional}
              value="professional"
              onChange={(event) => setCLevel(event.target.value)}
            />
            <label
              htmlFor="professional"
              className="course-label flex justify-center items-center"
            >
              {" "}
              Professional{" "}
            </label>
          </div>
        </div>

        <div className="">
          <label className="font-bold"> Payment Method </label>
          <div className=" w-1/2 flex justify-between items-center mt-2">
            <div className="flex items-center relative ">
              <input 
              type="radio" 
              name="payment-method"
               className=" payment-method "
                id="payment-method-1"
                value="offline"
                onChange= { ( event )=> setPaymentMethod(event.target.value)}
                />
              <span className="radio-mark"></span>
              <label htmlFor="payment-method-1" className="ml-2">
                Offline
              </label>
            </div>
            <div className="flex items-center">
              <input
               type="radio" 
               name="payment-method"
                className=" payment-method "
                 id="payment-method-2"
                 value="online"
                onChange= { ( event )=> setPaymentMethod(event.target.value)}
                 />
              <label htmlFor="payment-method-1" className="ml-2">
                Online
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn-still w-full xl:text-2xl lg:text-xl text-md font-bold py-3  px-6 lg:mt-8 mt-4 text-white rounded-md  shadow-var"
        >
          Register
        </button>
        <p className="text-sm mt-3">
          {" "}
          By Clicking the register button you agree to{" "}
          <span style={{ color: "#FF4495" }}>
            {" "}
            <a href=""> Terms & Conditons </a>{" "}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default CourseRegistrationhtmlForm;
