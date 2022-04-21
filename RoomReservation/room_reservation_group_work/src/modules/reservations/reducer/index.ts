import { ACTION_TYPES } from "../../models/enumActions";
import { initialState } from "../../models/initalState";
import { IAction } from "../../models/types";

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_RESERVATION:
      return state.map(room => {
        if (room.id === action.payload.roomId) {
          room.reservations = [
            ...room.reservations,
            action.payload
          ]
        }
        return room;
      });
    case ACTION_TYPES.UPDATE_RESERVATION:
      return state.map(room => {
        if (room.id === action.payload.roomId) {
          const fres = room.reservations.find(res => res.id === action.payload.id)!;
          room.reservations.map(res => {
            if (res === fres) {
              room.reservations = [
                ...room.reservations,
                action.payload
              ]
            }
            return res;
          })
        }
        return room;
      })
    default:
      return state;
  }
};

export default reducer;
