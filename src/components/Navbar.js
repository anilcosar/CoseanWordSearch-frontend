import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {


    render() {
        return (
            <div>
                <nav className='navbar'>
                    <div className="container">
                        <div className="row">
                            <div className="six columns">
                                <h1 className="logo"><Link to="/"><b style={{color:'rgba(223,190,106,0.7)'}}>Cosean</b></Link></h1>
                            </div>
                            <div className="six columns">
                                {this.props.isChildren ? null:<h1 className="logo" onClick={this.props.handleToggle} style={{color:'rgba(223,190,106,0.7)'}}>URL's</h1>}</div>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar
