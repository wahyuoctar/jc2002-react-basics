const init_state = {
    count: 0
}

const counterReducer = (state = init_state, action) => {
    if(action.type === "INCREMENT_COUNTER"){
        return {
            ...state,
            count: state.count + 1
        }
    }
    else if(action.type === "DECREMENT_COUNTER"){
        return {
            ...state,
            count: state.count - 1
        }
    }

    return state
}

export default counterReducer