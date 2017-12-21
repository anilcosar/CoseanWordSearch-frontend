import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown'
import Layout from '../components/Layout'
import * as KeywordsActions from "../reducks/modules/keywords";
import {bindActionCreators} from 'redux';
import Loading from "../components/Loading";

const options = [
    'Search Keywords', 'URL Sorting', 'Page Rating', 'Semantics Analysis'
]

class Home extends Component {

    state = {value: '', open: false, type: 'Search Keywords'};


    _onSelect = (option) => {
        console.log(option)
        this.setState({type: option.value})
    }


    searchWord = () => {
        if (this.state.value.trim()){
            if (this.props.urls.selectedUrls !== undefined && this.props.urls.selectedUrls !== null && this.props.urls.selectedUrls.length > 0) {
                this.setState({open: true})
                console.log(this.props.urls.selectedUrls[0])
                switch (this.state.type) {
                    case 'Search Keywords': {
                        return this.props.searchWordinSingleUrl(this.state.value, this.props.urls.selectedUrls[0])
                    }
                    case 'URL Sorting': {
                        return this.props.urlSort(this.state.value, this.props.urls.selectedUrls)
                    }
                    case 'Page Rating': {
                        return this.props.pageSort(this.state.value, this.props.urls.selectedUrls, 3)
                    }
                    case 'Semantics Analysis': {
                        return this.props.semanticsSearch(this.state.value, this.props.urls.selectedUrls, 3)
                    }
                    default:
                        return this.props.history.push("/")
                }
            } else
                alert("Url can not found")
        }else
            alert("Please enter keyword")

    };

    _handleKeyPress = (e) => {
        if (e.key === 'Enter')
            if(this.state.value.trim()){
            this.setState({open: true})
            if (this.props.urls.selectedUrls !== undefined && this.props.urls.selectedUrls !== null && this.props.urls.selectedUrls.length > 0) {
                switch (this.state.type) {
                    case 'Search Keywords': {
                        return this.props.searchWordinSingleUrl(this.state.value, this.props.urls.selectedUrls[0])
                    }
                    case 'URL Sorting': {
                        return this.props.urlSort(this.state.value, this.props.urls.selectedUrls)
                    }
                    case 'Page Rating': {
                        return this.props.pageSort(this.state.value, this.props.urls.selectedUrls, 3)
                    }
                    case 'Semantics Analysis': {
                        return this.props.semanticsSearch(this.state.value, this.props.urls.selectedUrls, 3)
                    }
                    default:
                        return this.props.history.push("/")
                }
            } else
                alert("Url can not found")
        } else
            alert("Please enter keyword")
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.responseData !== undefined && nextProps.responseData !== null && nextProps.responseData.length !== 0 && !nextProps.loading && this.state.open) {
            switch (this.state.type) {
                case 'Search Keywords': {
                    console.log('Redirect to : Search Keywords')
                    return this.props.history.push("/searchkeyword")
                }
                case 'URL Sorting': {
                    console.log('Redirect to : URL Sorting')
                    return this.props.history.push("/urlsorting")
                }
                case 'Page Rating': {
                    console.log('Redirect to : Page Rating')
                    return this.props.history.push("/pagerating")
                }
                case 'Semantics Analysis': {
                    console.log('Redirect to : Semantics Analysis')
                    return this.props.history.push("/pagerating")
                }
                default:
                    return this.props.history.push("/")
            }
        }
    }

    render() {
        return (
            <Layout>
                <div className="container mtop" style={{}}>
                    <div className="row mtop50">
                        <div className="twelve columns"
                             style={{display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
                            <Loading loading={this.props.loading}>
                                <h1 style={{color: 'white', fontWeight: 'bold'}}>Cosean</h1>
                                <div className="mycontainer">
                                    <input className="u-full-width" onKeyPress={this._handleKeyPress} name={'keywords'}
                                           type={'text'} value={this.state.value}
                                           onChange={(e) => this.setState({value: e.currentTarget.value})}
                                           placeholder={"Search Something"}
                                           style={{height: 50, fontSize: 30, float: 'right'}}/>
                                    <Dropdown className="Dropdown-root" options={options} onChange={this._onSelect}
                                              value={this.state.type} placeholder="Select an option"/>
                                </div>
                                <div className="row mtop25 mbottom100">
                                    <div className="twelve columns">
                                        <button className="designbtn" onClick={this.searchWord}>Search</button>
                                    </div>
                                </div>
                            </Loading>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }


}


const mapStateToProps = (state, ownProps) => {
    return {
        urls: state.urls,
        loading: state.keywords.loading,
        responseData: state.keywords.responseData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {...bindActionCreators(KeywordsActions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)


