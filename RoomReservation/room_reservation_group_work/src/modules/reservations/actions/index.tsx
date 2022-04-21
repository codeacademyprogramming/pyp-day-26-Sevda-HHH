import React from 'react'
import { ACTION_TYPES } from '../../models/enumActions'
import { IReservation } from '../../models/types'
export function addReservation(dispatch: any, data: IReservation) {
    dispatch({
        type: ACTION_TYPES.ADD_RESERVATION,
        payload: data
    })
}