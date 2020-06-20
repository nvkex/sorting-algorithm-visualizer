import React, { Components } from 'react';
import './SortingVisualizer.css';
import ControlPanel from './Components/ControlPanel/ControlPanel'

class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 300; i++) {
            array.push(randomIntFromInterval(10, 500));
        }

        this.setState({ array });
    }

    simpleSort(){
        const array = [...this.state.array];
        array.sort((a,b) => a-b);
        this.setState({array});
    }

    render() {
        const { array } = this.state;

        return (
            <div>
                <div className="array-container">
                    {
                        array.map((value, idx) => {
                            return (<div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>);
                        })
                    }
                </div>
                <ControlPanel generateArr = {() => this.resetArray()} sort = {() => this.simpleSort()}/>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
