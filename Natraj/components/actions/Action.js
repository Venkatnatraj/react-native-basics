// import { createActions } from 'reduxsauce';

// export const {Types , Creators} = createActions({
//     add : ['payload'],
//     sub : ['payload'],
//     del : ['id']
// })














import {ADD , SUB , DEL} from '../constants/Constant';

export const increase = payload =>({
    type :ADD,
    payload
});

export const decrease = payload =>({
    type : SUB,
    payload
})

export const delit = id =>({
    type : DEL,
    id
})