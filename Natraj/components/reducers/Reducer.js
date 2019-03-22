// import Types from '../constants/Constant';
// import {createActions , createReducer} from 'reduxsauce'


// const initialState = {
//     count : 23,
//     history : []
// }

// export const increase = (state = initialState , actions)=>({
//     ...state,
//     count : state.count + actions.payload,
//     history : state.history.concat({id : Math.random() , count : state.count + actions.payload})
// })

// export const decrease = (state = initialState , actions)=>({
//     ...state,
//     count : state.count - actions.payload,
//     history : state.history.concat({id : Math.random() , count : state.count - actions.payload})
// })

// export const delit = (state = initialState , action)=>({
//     ...state,
//     history : state.history.filter((el)=>el.id !== action.id)
// })


// export const HANDLERS = {
//     [Types.ADD] : increase,
//     [Types.SUB] : decrease,
//     [Types.DEl] : delit
// }

// export default createReducer(initialState , HANDLERS)









import {ADD , SUB , DEL ,ASYNC_ADD} from '../constants/Constant';

export default function Reducer  (
    state = {
        count : 23,
        history : []
    },
    actions
)
{
    switch(actions.type){
        case ASYNC_ADD :
            return{
                ...state,
                count : state.count + actions.payload,
                history : state.history.concat({id : Math.random() , count : state.count + actions.payload})
            }
        case SUB :
            return{
                ...state,
                count : state.count - actions.payload,
                history : state.history.concat({id : Math.random() , count : state.count - actions.payload})
            }
        case DEL : 
        return{
            ...state,
            history : state.history.filter(em => em.id !== actions.id)
        }
        default :
            return state
    }
}