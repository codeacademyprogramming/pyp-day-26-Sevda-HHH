import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { IReservation } from '../../models/types'
interface IProps {
    reserve: IReservation
}
export const ReservationTableRow: React.FC<IProps> = ({ reserve }) => {
    let count = 0;
    return (
        <TableRow key={reserve.id}>
            <TableCell>
                {count += 1}
            </TableCell>
            <TableCell>
                {reserve.reservedBy}
            </TableCell>
            <TableCell>
                {reserve.from}
            </TableCell>
            <TableCell>
                {reserve.to}
            </TableCell>
            <TableCell>
                {reserve.notes}
            </TableCell>
        </TableRow>
    )
}

