import React, {Component} from 'react'
import Board from './Board'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boardState: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event) {
        console.log(event.keyCode);
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
