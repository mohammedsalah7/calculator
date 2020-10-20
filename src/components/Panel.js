import React, {Component} from 'react';

class Panel extends Component {

    render() {






        return (
            <div className="button">
                <button  className="operation other" name="C" onClick={(e) => this.props.onClick(e.target.name)}>AC</button>
                <button  className="operation other" name="+/-" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
                <button  className="operation other"name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button  className="operation1" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
              
                <button className="number"name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="number"name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="number"name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="operation1"name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>

                <button className="number" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="number"name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="number"name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="operation1"name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

                <button className="number"name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="number"name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="number" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="operation1" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>

                <button className="number zero" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="number" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="operation1" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                
                
                
            </div>
        );
    }
}


export default Panel;
