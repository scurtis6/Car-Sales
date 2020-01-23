/// STEP III - build action creator functions to create and dispatch actions (dispatching happens under the hood!)

// 1 - actions objects - have a type property to tell the reducer to update state. Sometimes have a payload property to pass data to the reducer

// 2 - actions creators - functions that return action objects

// 3 - action types - a variable to save us from horrible misspelling erros that are really hard to find and debug

// action creator
export const addFeature = feature => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}
export const removeFeature = feature => {
    return { 
        type: 'REMOVE_FEATURE', 
        payload: feature };
}