import * as React from "react";
import './board.css'

class Square extends React.Component {
    // TODO: remove the constructor
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        // TODO: use onClick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}/>;
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
        let rows = []
        for (let i = 0; i < 3; i++) {
            rows.push(this.renderBoardRow(i * 3))
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    {rows}
                </div>
            </div>
        );
    }
}