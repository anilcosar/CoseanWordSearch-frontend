// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    ADD_SELECTED: 'ADD_SELECTED',
    REMOVE_SELECTED: 'REMOVE_SELECTED',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index}
    },
    addSelected: (item) => {
        return {type: types.ADD_SELECTED, payload: item}
    },
    removeSelected: (index) => {
        return {type: types.REMOVE_SELECTED, payload: index}
    }
}

const initialState = {
    urls: ['http://kotlin.gen.tr'],
    selectedUrls:[]
}

export default function reducer(state = initialState, action = {}) {
    const {urls,selectedUrls} = state
    const {type, payload} = action

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                urls: [payload, ...urls],
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                urls: urls.filter((url, i) => i !== payload),
            }
        }
        case types.ADD_SELECTED: {
            return {
                ...state,
                selectedUrls: payload,
            }
        }case types.REMOVE_SELECTED: {
            return {
                ...state,
                selectedUrls: selectedUrls.filter((url, i) => i !== payload),
            }
        }
        default:
            return state;
    }
}
