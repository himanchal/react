import React from 'react';

//stateless functional component
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
            <span className="badge badge-pill badge-secondary">
                {props.totalCounters}</span>
            </a>
        </nav>
    );
};

// class NavBar extends React.Component {
//     render() { 
        
//     }
// }
 
export default NavBar;