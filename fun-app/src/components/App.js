import React, {Component} from 'react';
import './App.css';
import ShoppingList from "./Shopping";
import Game from "./game/game";
import ThemeSwitcher from "./theme-switcher";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={process.env.PUBLIC_URL + 'logo.svg'} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Game/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <ShoppingList/>
                <ThemeSwitcher/>
            </div>
        );
    }
}

export default App;
