import * as React from "react";
import './board.css'

function Square(props) {
    return (<button className="square" onClick={props.onClick}>
        {props.number}
    </button>)
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square number={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    renderBoardRow(n) {
        let cells = [];
        for (let i = n; i < n + 3; i++) {
            cells.push(this.renderSquare(i));
        }
        return (<div className="board-row">
            {cells}
        </div>);
    }

    render() {
        const status = 'Next player: X';
        let rows = [];
        for (let i = 0; i < 3; i++) {
            rows.push(this.renderBoardRow(i * 3))
        }

        return (
            <div>
                <h2 className="text-center">{status}</h2>
                <div>
                    {rows}
                </div>
            </div>
        );
    }
}