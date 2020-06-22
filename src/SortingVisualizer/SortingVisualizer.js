import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import NavigationBar from './Components/NavigationBar/NavigationBar';

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

    bubbleSort(){
        const animations = sortingAlgorithms.bubbleSort(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for(let i =0;i<animations.length;i++){
            // bars[animations[i][0]].style.backgroundColor = 'red';
            // bars[animations[i][1]].style.backgroundColor = 'red';
            setTimeout(function(){
                let temp = bars[animations[i][0]].style.height;
                bars[animations[i][0]].style.height = bars[animations[i][1]].style.height;
                bars[animations[i][1]].style.height = temp;
            }, i * 0.4);  

            // setTimeout(() => {
            //     bars[animations[i][0]].style.backgroundColor = 'blue';
            //     bars[animations[i][1]].style.backgroundColor = 'blue';  
            // }, i*10);
        }
    }

    selectionSort(){
        const animations = sortingAlgorithms.selectionSort(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for(let i =0;i<animations.length;i++){
            // bars[animations[i][0]].style.backgroundColor = 'red';
            // bars[animations[i][1]].style.backgroundColor = 'red';
            setTimeout(function(){
                let temp = bars[animations[i][0]].style.height;
                bars[animations[i][0]].style.height = bars[animations[i][1]].style.height;
                bars[animations[i][1]].style.height = temp;
            }, i * 20);  

            // setTimeout(() => {
            //     bars[animations[i][0]].style.backgroundColor = 'blue';
            //     bars[animations[i][1]].style.backgroundColor = 'blue';  
            // }, i*10);
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div>
                <NavigationBar/>
                <div className="array-container">
                    {
                        array.map((value, idx) => {
                            return (<div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>);
                        })
                    }
                </div>
                <ControlPanel 
                    generateArr = {() => this.resetArray()} 
                    bubble = {() => this.bubbleSort()}
                    selection = {() => this.selectionSort()}
                />
                <footer>
                <a href = "https://github.com/nvkex/sorting-algorithm-visualizer"><button><i className="fa fa-github" aria-hidden="true"></i> Github </button></a>
                </footer>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
