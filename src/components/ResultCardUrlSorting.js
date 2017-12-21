import React, {Component} from 'react';
import '../stylesheets/UrlSorting.css';


class ResultCard extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    cal(num){
        let amount=0;
        this.props.results.profile.map(item=>{
            Object.values(item.wordsValue).map(value=>{
                amount+=value
            })
        })

        return Math.floor( num*100/amount )+'%'
    }


    render() {
        const results = this.props.results.profile
        this.cal()
        return (
            <div>
                {results.map((item, index) =>
                    <div className='urlcardbody' key={item.url}>
                        <main>
                            <a href={item.url}
                               style={{fontSize: 30}}>{item.url}</a>
                            <h3><b className='custom-counter'>{index + 1}</b>{item.point}</h3>
                            <p>Results:</p>
                        </main>
                        <ul className='urlcardul'>
                            {Object.keys(item.wordsValue).map((words, index) =>
                                <li className="card" key={index}>
                                    <div className="card__flipper">
                                        <div className="card__front">
                                            <p className="card__name"><span>{words}</span></p>
                                            <p className="card__num">{item.wordsValue[words]}</p>
                                        </div>
                                        <div className="card__back">
                                            <svg height="180" width="180">
                                                <circle cx="90" cy="90" r="55" stroke="#514d9b" strokeWidth="35"/>
                                            </svg>
                                            <span>{this.cal(item.wordsValue[words])}</span>
                                        </div>
                                    </div>
                                </li>
                            )}


                        </ul>


                    </div>
                )}
            </div>
        )
    }
}

export default ResultCard;
