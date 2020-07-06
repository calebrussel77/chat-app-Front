import * as actionsTypes from '../../actions/actionTypes';
import {updateObject} from "../../../utils/updateObject";

const initialState = {
    name:'',
    room: '',
    users:[]
};

const chatReducer = (state = initialState, action) => {
        switch (action.type) {
            case actionsTypes.JOIN_ROOM :
                return updateObject(state, {
                    name : action.name,
                    room : action.room
                });
            case actionsTypes.GET_USERS_CONNECTED :
                return updateObject(state, {
                   users: [...action.users]
                });

            default:
                return state;
        }
};

export default chatReducer;