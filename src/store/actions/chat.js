import * as actionsTypes from '../actions/actionTypes';


export const joinChat = (name, room) => {
    return {
        type: actionsTypes.JOIN_ROOM,
        name : name,
        room : room
    }
};

export const getusersConnected = (users) => {
  return {
      type: actionsTypes.GET_USERS_CONNECTED,
      users: users
  }
};