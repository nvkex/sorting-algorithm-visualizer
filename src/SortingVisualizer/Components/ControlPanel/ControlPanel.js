import React from 'react';
import './ControlPanel.css';

class ControlPanel extends React.Component {

    render() {

        return (
            <div className="control-panel">
                <button className = "gen-arr-btn" onClick = {this.props.generateArr}>Generate New Array</button>
                <button onClick = {this.props.bubble}>Bubble Sort</button>
                <button onClick = {this.props.selection}>Selection Sort</button>
                <button disabled>Merge Sort</button>
                <button disabled>Quick Sort</button>
            </div>
        );
    }
}


export default ControlPanel;
