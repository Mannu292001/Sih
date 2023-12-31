import React from 'react'
import Wrapper from './Wrapper'
import Logo from "../assets/nLogo.png";
import {useContext } from 'react';
import Context from '../context/Context';

const Navbar = () => {

  const {isdark , setisdark} = useContext(Context)
  
  const body = document.body;
  const modetoggle=()=>{
    if(body.classList.contains("light")){

      body.classList.remove("light");
      setisdark(!isdark)
    }
    else{
      body.classList.add("light");
      setisdark(!isdark)
    }
  }

  return (
    <Wrapper>
      <div className='justify-between items-center flex h-[15vh]'>
        {/* Logo */}
        <div className='flex gap-2 mt-5'>
        <img src={Logo} alt="logo" className='h-[10vh]'/>
        </div>
        

        {/* Desktop Menu */}
        <div className='md:flex hidden justify-between items-center gap-[10vh]'>
        <nav>
          <ul className="hidden md:flex gap-10 justify-center items-center ">
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer nav"
              onClick={() => navigate("/")}
            >
              <a>Home</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer nav"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
            >
              <a>About</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer nav"
              onClick={()=>document.getElementById("education").scrollIntoView({behavior:"smooth"})}
            >
              <a>Education</a>
            </li>
            <li
              className="font-semibold font-montserrat  hover:text-[#ff5757] cursor-pointer nav"
              onClick={()=>document.getElementById("services").scrollIntoView({behavior:"smooth"})}
            >
              <a>Services</a>
            </li>
            <li
              className="font-semibold font-montserrat hover:text-[#ff5757] cursor-pointer nav"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
            >
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#ff5757] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#ff5757] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
        

        <button
              className="shadow-3xl font-medium font-poppins px-4 py-2 bg-[#222222] rounded-md hover:bg-[#ff5757]  transition-transform nav"
              // onClick={() => navigate("/login")}
            >
              Login
            </button>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden flex items-center gap-[5vh]'>
        {
          !isdark ? (<button
            className="shadow-5xl font-medium font-poppins hover:text-[#ff5757] transition-transform nav"
            onClick={()=>{modetoggle()}}
          >
            <i class="fi fi-sr-moon-stars group"></i>
          </button>) : (<button
              className="shadow-5xl font-medium font-poppins hover:text-[#ff5757] transition-transform nav"
              onClick={()=>{modetoggle()}}
            >
              <i class="fi fi-br-brightness"></i>
            </button>)
        }
          <button className=' font-medium font-poppins hover:text-[#ff5757] transition-transform'>
          <i class="fi fi-br-menu-burger text-xl"></i>
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar