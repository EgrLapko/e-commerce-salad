import { sections } from '../../components/MainMenu/sections';
import { bindActionCreators } from 'C:/Users/Egor_lapko/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

const INITIAL_STATE = {
    sections: sections
};

const directoryReducer = (state = INITIAL_STATE) => {
    switch (bindActionCreators.type) {
        default:
            return state;
    }
};

export default directoryReducer;