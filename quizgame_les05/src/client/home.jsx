import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _inputNumber: undefined
        };

        this.handleOnInput = this.handleOnInput.bind(this);
    }

    handleOnInput(e) {
        const inputNumber = e.target.value;

        this.setState({
            _inputNumber: inputNumber
        });
    };


    render() {
        return (
            <div>
                <h1>QUIZ</h1>
                <h2>Choose number of questions</h2>
                <input className={"inputForm"} type={"number"} name={"quantity"} min={"1"} onChange={this.handleOnInput}/>
                <div id='startBtn'>
                    <Link to={{
                        pathname: '/match',
                        state: { inputNumber: this.state._inputNumber }
                    }}>
                        Start
                    </Link>
                </div>
            </div>
        )
    }
}
