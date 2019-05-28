import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component 
{
    constructor(props) {
        super(props)
    }

    handleLogout = event => {
        // event.preventDefault();
        localStorage.removeItem('isLogin')
        // this.props.history.push('/')
    }

    render() {
        
        const classProfile = 'nav-item ' + this.props.profile
        const classHome = 'nav-item ' + this.props.home

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Bukan Youtube</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className={classHome}>                            
                            <Link className="nav-link" to='/dashboard'>Home</Link>
                        </li>
                        <li className={classProfile}>                            
                            <Link className="nav-link" to='/profile'>Profile</Link>                            
                        </li>
                        <li className="nav-item" style={{right: 5, position: 'absolute'}}>
                            <Link style={{right: 5}} className="nav-link" to='/'
                                onClick={this.handleLogout}>Logout</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar