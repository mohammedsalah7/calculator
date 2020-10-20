import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Panel from "./components/Panel";

class App extends Component {

        state = {
            disable:0,
            result: ""
        }
    

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
      
        else if (button === "+/-"){
            this.setState({ 
                disable: "",
                result:  "-"+ this.state.result 
            })

        }

        else  {
            
            this.setState({ 
                disable: "",
                result: this.state.result + button
            })
        }
    };


    calculate = () => {


        var checkResult = ''

        checkResult = this.state.result
            this.setState({
               // eslint-disable-next-line 
               result : (eval(checkResult) || "0" ) + ""
      
                  
        })
    
    };

    reset = () => {
        this.setState({
            result: "",
            disable:0
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                <div className="control">
                    <Result result={this.state.result} disable={this.state.disable}/>
                    <Panel onClick={this.onClick}/>

                </div>
                </div>
            </div>
        );
    }
}

export default App;
