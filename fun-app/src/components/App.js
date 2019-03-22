import React, {Component} from 'react';
import './App.css';
import ShoppingList from "./Shopping";
import Game from "./game/game";
import ThemeSwitcher from "./theme-switcher";
import {Col, Container, Row} from "react-bootstrap";
import FunNav from "./nav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FunNav/>
                </header>
                <Container>
                    <Row>
                        <Col><Game/></Col>
                        <Col><ShoppingList/></Col>
                        <Col><ThemeSwitcher/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
