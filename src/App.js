import React, {Component} from 'react'
import Board from './Board'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // boardState: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            boardState: [2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2]
        }
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    findRandomEmptySpot() {
        
    }

    randomGenerator() {
        let boardState = [...this.state.boardState];
        // Finds all zero elements of the boardState array and returns
        // their indexes to the emptySpots array.
        const emptySpots = this.state.boardState
            .map((element, index) => element === 0 ? index : undefined)
            .filter(element => element);
        // Picks a random element from the emptySpots array.
        // This element will be the index of the boardState's empty spot.
        const randomSpot = Math.floor(Math.random() * emptySpots.length);
        // Place a random 2 or 4 generated with a 90% and a 10% percent
        // probability respectively to the boardState's chosen empty spot.
        boardState[emptySpots[randomSpot]] = (Math.random() > 0.1 ? 2 : 4);
        this.setState({boardState});
    }

    onKeyPress(event) {
        console.log("You just pressed " + event.keyCode);
        /*
         * Code goes here!
         */
        this.randomGenerator();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPress, false);
    }

    render() {
        return (
            <div>
                {<Board boardState={this.state.boardState}/>}
            </div>
        );
    }
}

export default App;
