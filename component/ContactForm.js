import axios from "axios";
import { useRouter } from "next/router";
import { Component } from "react";
import { Link }  from 'next/link'

const initialState = {
  fullname: "",
  emailaddress:"",
  message:"",
  fullnameError: "",
  emailError: "",
  messageError:""
};
class ContactForm extends Component{

   //router = useRouter()
  state = initialState;

  validate = () => {
    let fullnameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.fullname) {
      fullnameError = "Enter Name"
    }

    if (!this.state.emailaddress.includes('@')) {
      emailError = "Invalid Email Address";
    } 

    if (!this.state.message) {
      messageError = "Enter the Message"
    }
    if (emailError || fullnameError || messageError) {
      this.setState({
        fullnameError : fullnameError , 
        emailError : emailError,
        messageError : messageError
      });
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitContactForm = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
     // router.push('/maintenance')
    
      // axios.post('http://localhost:3005/contact',{ fullname: this.state.fullname ,email: this.state.emailaddress , message:this.state.message}).then( response =>{
      //   console.log( response )
      //   if(response.data.messageSend === true){
      //     alert(" Message Send Out Team will contact you")
      //   }
      // })
      // this.setState(initialState)
    }
  }
    render(){
        return(
            <form onSubmit={this.submitContactForm}>
            <h6 className="text-4xl font-black pl-5 relative ">Mail Us</h6>
            <div className="md:my-6 my-1 relative">
              <label className="font-bold" htmlFor="Fullname2">
                FullName
              </label>
              <input
                type="text" id="Fullname2"
                name="fullname"
                className="appearance-none rounded-md w-full py-4 px-3 my-2 contact-input-form  focus:outline-none focus:shadow-outline"
                placeholder="Enter your full name"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
              <small className="text-red-600 absolute -bottom-3.5 left-0 ">
                {this.state.fullnameError}
              </small>
            </div>
            <div className="md:my-2 my-1 relative">
              <label className="font-bold" htmlFor="email2">
                Email Address
              </label>
              <input
                type="text" id="email2"
                name="emailaddress"
                className="appearance-none rounded-md  contact-input-form w-full py-4 px-3 my-2  focus:outline-none focus:shadow-outline"
                placeholder="Enter your Email Address"
                value={this.state.emailaddress}
                onChange={this.handleChange}
              />
              <small className="text-red-600 absolute -bottom-3.5 left-0">
                {this.state.emailError}
              </small>
            </div> 
            <div className="md:my-2 my-1 relative">
              <label className="font-bold" htmlFor="textarea2"  >
                Message
              </label>
              <textarea id="textarea2"
                className="appearance-none rounded-md contact-input-form  w-full py-4 px-3 my-2   focus:outline-none focus:shadow-outline"                
                cols={30}
                rows={10}  
                name="message"
                value={this.state.message}
                onChange={this.handleChange}         
              />
              <small className="text-red-600 absolute -bottom-3.5 left-0">
                {this.state.messageError}
              </small>
            </div>
           
            <button className="btn-still w-full xl:text-2xl lg:text-xl text-md font-extrabold py-3  px-6 lg:mt-8 mt-4 text-white rounded-md  shadow-var" type="submit" >
              Send
            </button>
           
            </form>
         
        )
    }
}


export default ContactForm;