import { Component } from "react";
import Link from "next/link";


class Navbar extends Component {

  handleScroll = () => {
    if (window.scrollY > 200) {
      document.querySelector(".d-nav").classList.add("scroll");
    } else {
      document.querySelector(".d-nav").classList.remove("scroll");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);     
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  render() { 
    return (
      <nav className="nav w-full fixed bg-transparent d-nav top-0 md:px-10 px-2 md:py-3 py-2">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div className="flex flex-no-shrink items-center mr-6 py-3">
            <a className="nav-brand md:pl-0 pl-4">
              <img src="img/logo.svg" alt="logo" />
            </a>
          </div>
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-4 py-4 relative select-none"
            htmlFor="menu-btn"
          >
            <span className="navicon bg-white flex items-center relative" />
          </label>
          <ul className="menu md:bg-transparent bg-blend-darken md:border-none flex justify-end list-reset ml-auto w-full md:w-auto">
            <li className="border-none">
              <Link href="/" >
                <a className="nav-link block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker transition ease-linear">
                  Home
                </a>
              </Link>
            </li>
            <li className="border-none">
            <Link href="/#services" >
              <a className="nav-link block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker transition ease-linear">
                Services
              </a>
              </Link>
            </li>
            <li className="border-none">
              <Link href="/debugindia">
                <a className="nav-link block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker transition ease-linear">
                  Debug India
                </a>
              </Link>
            </li>
            <li className="border-none">
              <Link href="/contact">
                <a className="nav-link block md:inline-block px-4 py-3 no-underline text-white hover:text-grey-darker transition ease-linear">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
