import React, {Component} from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import scriptLoader from "react-async-script-loader";
import ResultCard from "../components/ResultCard";
import Layout from "../components/Layout"


class SearchKeywords extends Component {


    render() {
        console.log(this.props.responseData[0])
        return (
            <Layout isChildren={true}>
                <ResultCard results={this.props.responseData[0].profile}/>
            </Layout>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        responseData:state.keywords.responseData,
        loading:state.keywords.loading,
        urls:state.urls
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushState: push
    }
}

export default scriptLoader(
    [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js',
        'http://localhost/js/index.js'
    ],
    '/scripts/index.js'
)(connect(mapStateToProps, mapDispatchToProps)(SearchKeywords))