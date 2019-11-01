import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySection} from '../../redux/directory/directory-selectors';
import MenuItem from './MenuItem';


function MainMenu({ sections }) {
    return (
        <div className="menu">
            {sections.map(({id, ...otherSectionProps}) => 
                <MenuItem 
                    key={id} 
                    {...otherSectionProps}
                    />
            )}
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStatetoProps)(MainMenu);
