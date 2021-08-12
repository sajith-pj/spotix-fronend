import { Component } from "react";

const initialState = {
  fullname: "",
  emailaddress: "",
  phonenumber: "",
  course: "",
  fullnameerror: "",
  emailerror: "",
  phoneerror: "",
};

class RegistrationForm extends Component {

  state = initialState;

  validate = () => {
    let fullnameerror = "";
    let emailerror = "";
    let phoneerror = "";

    if (!this.state.fullname) {
      fullnameerror = "Enter your FullName";
    }

    if (!this.state.emailaddress.includes("@")) {
      emailerror = "Invalid email address";
    }

    if (this.state.phonenumber.length !== 10) {
      phoneerror = "Invalid Phone Number";
    }

    if (fullnameerror || emailerror || phoneerror) {
      this.setState({
        fullnameerror: fullnameerror,
        emailerror: emailerror,
        phoneerror: phoneerror,
      });
      return false;
    }

    return true;
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerUser = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <div className="xl:py-32 xl:px-28 lg:py-24 lg:px-12 md:py-16 py-8 pt-4 pb-10 md:px-8 px-6">
          <div className="md:mb-5 mb-2 relative">
            <label className="font-bold" htmlFor="Fullname">
              Full Name*
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={this.state.fullname}
              className="appearance-none rounded w-full py-3 px-3 my-2 shadow-md  focus:outline-none focus:shadow-outline"
              placeholder="Enter your full name"
              onChange={this.handleChange}
            />
            <small className="text-red-600 absolute -bottom-3.5 left-0">
              {this.state.fullnameerror}
            </small>
          </div>

          <div className="md:my-4 my-1 relative">
            <label className="font-bold" htmlFor="emailaddress">
              Email Address*
            </label>
            <input
              type="email"
              id="emailaddress"
              name="emailaddress"
              value={this.state.emailaddress}
              className="appearance-none rounded w-full py-3 px-3 my-2 shadow-md  focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email Address"
              onChange={this.handleChange}
            />
            <small className="text-red-600 absolute -bottom-3.5 left-0">
              {this.state.emailerror}
            </small>
          </div>

          <div className="md:my-4 my-1 relative">
            <label className="font-bold" htmlFor="PhoneNumber">
              Phone Number*
            </label>
            <input
              type="phone"
              pattern="[0-9]*"
              id="phonenumber"
              name="phonenumber"
              value={this.state.phonenumber}
              className="appearance-none rounded w-full py-3 px-3 my-2 shadow-md  focus:outline-none focus:shadow-outline"
              placeholder="Enter your Phone Number"
              onChange={this.handleChange}
            />
            <small className="text-red-600 absolute -bottom-3.5 left-0">
              {this.state.phoneerror}
            </small>
          </div>

          <div className="md:my-4 my-1">
            <label className="font-bold" htmlFor="dropdpown">
              Select Course*
            </label>
            <div className="previewform-div">
              <select
                className="appearance-none rounded w-full py-3 px-3 my-2 shadow-md  focus:outline-none focus:shadow-outline"
                name="course"
                id="course"
                onChange={this.handleChange}
              >
                <option value="mernstack">Mern Full Stack Development</option>
                <option value="uiux">UI UX Designing</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-still xl:text-2xl lg:text-xl text-md font-extrabold py-3  px-6 lg:mt-8 mt-4 text-white rounded shadow-var"
          >
            Enquire Now
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
