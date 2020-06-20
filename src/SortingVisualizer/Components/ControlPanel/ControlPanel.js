import React, { Components } from 'react';
import './ControlPanel.css';

class ControlPanel extends React.Component {

    render() {

        return (
            <div className="control-panel">
                <button onClick = {this.props.generateArr}>Generate New Array</button>
                <button>Start Sorting</button>
                <button>Select Sort</button>
            </div>
        );
    }
}


export default ControlPanel;
