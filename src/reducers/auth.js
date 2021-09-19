const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOG_IN':
            return Object.assign({}, state, {uid: action.uid});
        case 'LOG_OUT':
            return {};
        default:
            return state;
    }
};

export default authReducer;