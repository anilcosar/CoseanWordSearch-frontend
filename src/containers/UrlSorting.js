import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {push} from "react-router-redux";
import ResultCardUrlSorting from "../components/ResultCardUrlSorting";
import Layout from "../components/Layout"

class UrlSorting extends Component {
    render() {
        console.log(this.props.responseData)
        return (
            <Layout isChildren={true}>
            <div>
                {this.props.responseData.map((item,index) =>{
                    return <ResultCardUrlSorting results={item} key={index}/>
                    }
                )}
                <h2 className='myStyle mtop50' style={{color: '#fff'}}>ERRORS</h2>
                {this.props.responseData.map((item,index) =>{
                    return <h1 style={{fontSize: 50,color: 'white'}}>{item.errorMessage}</h1>
                    }
                )}

            </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        responseData:state.keywords.responseData,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushState: push
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UrlSorting))