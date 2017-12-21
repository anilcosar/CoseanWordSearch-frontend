import React, {Component} from 'react';
import {MenuItem, MenuList, Switch, Button} from 'material-ui';
import {ListItem} from 'material-ui/List';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import {connect} from "react-redux";
import {actionCreators} from "../reducks/modules/url";

class Sidebar extends Component {

    state = {
        checked: [],
        value: "",
        };

    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
        console.log(this.state.checked)
        const {dispatch} = this.props;
        dispatch(actionCreators.addSelected(newChecked))
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({value: "", open: false});
    };

    addLink = () => {
        const {dispatch} = this.props;
        const urls = this.props.urls.urls;
        const currentIndex = urls.indexOf(this.state.value);

        if (this.validURL(this.state.value) && currentIndex === -1) {
            dispatch(actionCreators.add(this.state.value))

        }
        this.handleRequestClose();
    };

    validURL(str) {
        var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
        var re = /((https?:\/\/)[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
        if (!re.test(str)) {
            alert("Please enter valid URL.");
            return false;
        } else {
            return true;
        }
    }


    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


    render() {
        let urlList = this.props.urls.urls;
        return (
            <div id="mySidenav" className="sidenav">
                <a className="closebtn" onClick={this.closeNav}>&times;</a>
                <div className='twelve columns'><h2 className='myStyle mtop50' style={{color: '#fff'}}>URL's</h2></div>

                <div className='twelve columns' style={{height: '320px', overflow: 'auto'}}>

                    {urlList.map(value => (
                        <div key={value} className='row' style={{alignItems: 'center',display: 'flex',justifyContent: 'center'}} >
                            <div className='eight columns'>
                                <label style={{color: '#fff',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}>{value}</label>
                            </div>
                            <div className='two columns'>
                                <Switch
                                    onChange={this.handleToggle(value)}
                                    checked={this.state.checked.indexOf(value) !== -1}
                                />
                            </div>

                        </div>
                    ))}
                </div>

                <button className="designbtn" onClick={this.handleClickOpen}>Add a Link</button>
                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                    <DialogTitle>Add Link</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add to this website for search keywords, please enter here.
                        </DialogContentText>
                        <input className="u-full-width" name={'name'} type={'text'} value={this.state.value}
                               onChange={(e) => this.setState({value: e.currentTarget.value})}
                               placeholder={"Add Link"}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.addLink} color="primary">
                            Add Link
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>

        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        urls: state.urls
    }
};

export default connect(mapStateToProps)(Sidebar)