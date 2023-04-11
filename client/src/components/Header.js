import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <div>
                <div>
                    <Link to='/'>
                        {/* link to homescreen */}
                        <h1>InsuLink</h1>
                    </Link>
                </div>
            </div>
            <div>
                {Auth.loggedIn() ? (
                  <>
                    <Link to='/homepage'>
                        Home
                    </Link>
                    <Link to='/profile'>
                        Profile
                    </Link>
                    <button onClick={logout}>
                        Logout
                    </button>
                  </>
                  //something likely needs to change here
                ) : (
                  <>
                    {/* <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        Signup
                    </Link> */}
                  </>
                  // ^^
                )}
            </div>
        </header>
    )
};

export default Header;