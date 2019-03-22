import React, {Component} from 'react';
import {DropdownItem, SplitButton} from 'react-bootstrap';

export default class ThemeSwitcher extends Component {

    state = {theme: null};

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        if (theme.toLowerCase() === 'reset') {
            theme = null
        }
        this.setState({theme});
    }

    render() {

        const {theme} = this.state;
        const themeClass = theme ? theme.toLowerCase() : 'default';

        return (
            <div className={'center-block text-center'}>
                    <span className={`h1 text-${theme ? themeClass : 'muted'}`}
                          style={{marginBottom: 25}}>{theme || 'Default'}</span>

                <div>
                    <SplitButton size="lg" variant={themeClass} title={`${theme || 'Default'} Theme`}>
                        <DropdownItem eventKey="Primary" onSelect={this.chooseTheme}>Primary Theme</DropdownItem>
                        <DropdownItem eventKey="Danger" onSelect={this.chooseTheme}>Danger Theme</DropdownItem>
                        <DropdownItem eventKey="Success" onSelect={this.chooseTheme}>Success Theme</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem eventKey="Reset" onSelect={this.chooseTheme}>Default Theme</DropdownItem>
                    </SplitButton>
                </div>

            </div>
        );

    }

}