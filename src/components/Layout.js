import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from "./Navbar";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    handleToggle = () => {
        this.setState({open: !this.state.open})
    };

    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }


    render() {
        return (
            <div>
                <NavBar handleToggle={this.openNav} isChildren={this.props.isChildren}/>
                <Sidebar/>
                <div style={{width: '100%', position: 'relative', overflow: 'hidden'}}>
                    {{...this.props.children}}
                </div>

            </div>
        );
    }
}

export default Layout;
