
import {handleActions } from 'redux-actions'
import Developer from '../models/Developer'

export const Types = {
    GET_ALL_BIOS : "GET_ALL_BIOS"
}

const devActions = { 
    
    getAllBiosActionCreator: (developers) => ({ 
        type: Types.GET_ALL_BIOS,
        developers
    }),
    reducer: handleActions({
        [Types.GET_ALL_BIOS] : (state, action) => ({
            ...state,
            developers: action.developers
        }) // reducer produces new state object
    },  {
        // initial state
        developers: []
    })
} 

export default devActions; 
 