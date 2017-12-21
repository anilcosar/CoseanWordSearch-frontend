import React, {Component} from 'react';
import '../stylesheets/PageRating.css';
import {Treebeard} from 'react-treebeard';
import ResultCard from "../components/ResultCard";

class ResultCardPageRating extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        if (this.state.cursor) {
            this.state.cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        this.setState({cursor: node, node: this.getItemFromTree(node.name)});
        console.log("Node :" )
        console.log(node)
        console.log("bitti")
    }

    getItemFromTree(url) {
        let val;
        let item = this.props.item;
        item.url === url ?val=item: item.links.map(item2 => {
                item2.url === url ? val = item2 : item2.links.map(item3 => {
                    item3.url === url ? val = item3 : null
                })
            })


        return val

    }


    getTreeObj(element) {
        let array = [];
        element.links.map(e => {
            let array2 = []
            e.links.map(d => {
                array2.push({name:d.url})
            })
            array2.length === 0 ? array.push({name:e.url}) : array.push({name:e.url,children:array2})
        })
        let root = {name: element.url,children:array,toggled:false}
        return root;
    }

    componentWillMount() {
        this.setState({data: this.getTreeObj(this.props.item)})
    }

    render() {
        const item =this.props.item
        console.log(item)
        return (
            <div>
                <div className='cardbody3' key={item.url}>
                    <main>
                        <a href={item.url}
                           style={{fontSize: 30}}>{item.url}</a>
                        <h3><b className='custom-counter'>{this.props.index + 1}</b>{item.point}</h3>
                        <p>Results:</p>
                    </main>
                    <ul className='urlcardul'>
                        {Object.keys(item.totalWordsValue).map((words, index) =>
                            <li className="card" key={index}>
                                <div className="card__flipper">
                                    <div className="card__front">
                                        <p className="card__name"><span>{words}</span></p>
                                        <p className="card__num">{item.totalWordsValue[words]}</p>
                                    </div>
                                    <div className="card__back">
                                        <svg height="180" width="180">
                                            <circle cx="90" cy="90" r="55" stroke="#514d9b" strokeWidth="35"/>
                                        </svg>
                                        <span>{item.totalWordsValue[words]}</span>
                                    </div>
                                </div>
                            </li>
                        )}


                    </ul>


                </div>

                <div className="container mtop" style={{}}>
                    <div className="row mtop50">
                        <div className="six columns">
                <Treebeard
                    data={this.state.data}
                    onToggle={this.onToggle}/></div>
                            <div className="six columns">
                            {this.state.node === undefined ? null : <ResultCard results={new Array(this.state.node)}/>}</div></div></div>
                <hr/>

            </div>
        )
    }
}

export default ResultCardPageRating;
