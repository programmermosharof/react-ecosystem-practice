import React from 'react';
import Link from './Link';

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
    return (
    <nav>
   
        <ul className='flex gap-4 justify-center'>
            {/* <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Blog">Home</a></li> */}
            {/* {
                navigationLinks.map(route =><li key={route.id}><a href={route.path}>{route.name}</a></li> )
            }
             */}
          {
          navigationLinks.map(route => <Link key={route.id} route={route}></Link>)
        }
        </ul>
       </nav>
       
    );
};

export default Navbar;