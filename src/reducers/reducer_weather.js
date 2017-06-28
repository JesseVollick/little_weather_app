import {FETCH_WEATHER} from '../actions/index.js'

    export default function(state = [], action){
    console.log('action received', action);
    switch(action.type){
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state]; // [city, ciy, city]

    }
    return state;
    }

