import React, {Component} from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import scriptLoader from 'react-async-script-loader'
import '../stylesheets/PageRating.css';
import ResultCardPageRating from "../components/ResultCardPageRating";
import Layout from "../components/Layout";

class PageRating extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }


    render() {
        return (
            <Layout isChildren={true}>
                <div>
                    {this.props.responseData[0].profile.map((item, index) =>
                        <ResultCardPageRating item={item} key={index} index={index}/>)
                    }
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
        responseData: state.keywords.responseData
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
        'http://cosean.orbit11.com/static/js/index.js'
    ],
    '/scripts/index.js'
)(connect(mapStateToProps, mapDispatchToProps)(PageRating))