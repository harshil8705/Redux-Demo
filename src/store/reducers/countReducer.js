const initialState = {count : 10}

const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default:
            return state;
    }

};

export default countReducer;