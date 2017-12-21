import React, {Component} from 'react';
import '../stylesheets/PageRating.css';


class ResultCard extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    yazdir(data){
        data.forEach(item =>{
            console.log(item);
            console.log(item.url)
            Object.keys(item.wordsValue).map(item2 => {console.log(item2);console.log(item.wordsValue[item2])})
        })
    }



    render() {
        const results = this.props.results
        return (
            <div>
               {results.map(item =>
                    <div className='cardbody3' key={item.url}>
                        <main>
                            <a href={item.url}
                               style={{fontSize: 30}}>{item.url}</a>
                            <p>Results:</p>
                        </main>
                        <ul className='mycardul'>
                            { Object.keys(item.wordsValue).map((words,index) =>
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
                                <span>{item.wordsValue[words]}</span>
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
