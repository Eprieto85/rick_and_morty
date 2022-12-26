import types from "./types";

const myReducer = (state,action) => {
    switch (action.type) {
        case types.login:
            return {
                logeado:true,
                usuario:action.payload
            };
        case types.logout:
            return {
                logeado:false,
            usuario:null
        };
        default:
            return state;
    }
}

export default myReducer