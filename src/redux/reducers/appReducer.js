import {YoutubeAPI} from "../../api/api";

let initialState = {
    info: [{
        items:[""]
    }]
};

export const LOAD_INFO = "LOAD_INFO";

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    getInfo: payload => ({type: LOAD_INFO, payload}),
}



export const actionGetInfo = (id)=> async dispatch =>{
    const response = await YoutubeAPI.getInfo(id);
    dispatch(actions.getInfo(response))
}


export const initializeApp = () => dispatch => {
    const promise= '';
    Promise.all([promise])
        .then(() => {

        })
        .catch(err=>{
            //    console.log(err)
        })
        .finally(()=>{
            dispatch(actions.initializedSuccess());
        });
}


export default appReducer;
