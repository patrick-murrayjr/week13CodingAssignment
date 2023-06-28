import { Component } from 'react';

/**
 * Navigation class
 *
 * Component to create a navigation bar at the top of the page with dummy links for Home, Contact, and About
 */
class Navigation extends Component {
   render() {
      return (
         <div className='navbar'>
            <ul>
               <li>
                  <a href='/'>Home</a>
               </li>
               <li>
                  <a href='/'>Contact</a>
               </li>
               <li>
                  <a href='/'>About</a>
               </li>
            </ul>
         </div>
      );
   }
}

export default Navigation;
