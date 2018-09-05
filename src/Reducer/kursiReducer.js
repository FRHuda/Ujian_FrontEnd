const INITIAL_STATE = {page : ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'INI_PAGE' :
            return action.payload;
        default :
            return state;
    }
}
