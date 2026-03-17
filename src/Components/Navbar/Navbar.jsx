import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react';


const navigationLinks = [
  {
    id: 1,
    name: "Home",
    path: "/home"
  },
  {
    id: 2,
    name: "About Us",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links = navigationLinks.map(route => <Link key={route.id} route={route}></Link>)

    return (
    <nav className='flex justify-between mx-8 mt-4'>
        <span onClick={() => setOpen(!open)} className='flex gap-4'>
          {open ? <CircleX className='md:hidden'></CircleX>: <Menu className='md:hidden'></Menu>}
          <ul className={`md:hidden duration-1000 ${open ? 'top-12':'-top-40'} absolute bg-amber-950  z-10 `}>{links}</ul>
            
          
         <h3>My NavBar</h3>
        </span>
        
        <ul className='md:flex hidden '>
          {
           links
        }
        </ul>
        <button className='btn btn-primary'>Sign In</button>
    </nav>
       
    );
};

export default Navbar;