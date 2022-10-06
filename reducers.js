/*A reducer describes how your actions transform the current state into the next state.
 The reducer checks which action you executed whenever the above action is called.
  Based on this,
 the action reducer will modify the state values and change the mode based on the action type.*/ 
 import { THEME_CHANGE } from './constants';
 const initialState = {
    mode: 'light',
};
// Handle our action of changing the theme

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state;
    }
}
export default themeReducer;
