import React, {Component} from 'react';

class Result extends Component {


    render() {
        let {result,disable} = this.props;
      
        return (
            <div className="result">
                <p> {disable}{result}</p>
            </div>
    )
        ;
    }
}


export default Result;

