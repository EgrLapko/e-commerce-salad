import React, { Component } from 'react';
import { sections } from './sections';
import MenuItem from './MenuItem';

export default class MainMenu extends Component {
    constructor() {
        super();
        this.state = {
            sections: sections
        }
    }
    render() {
        return (
            <div className="menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem 
                        key={id} 
                        {...otherSectionProps}
                        />
                )}
            </div>
        )
    }
}
