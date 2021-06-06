import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { IReservation } from '../../models/types'
import { ReservationTableRow } from './ReservationTableRow';
interface IProps {
    reservations: IReservation[] | undefined
}
export const ReservationsTable: React.FC<IProps> = ({ reservations }) => {
    return (
        <Container className="mt-5">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>No.</b>  </TableCell>
                            <TableCell><b>Reserved By</b>  </TableCell>
                            <TableCell><b>From</b> </TableCell>
                            <TableCell><b>To</b> </TableCell>
                            <TableCell><b>Additional notes</b> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            reservations !== undefined && reservations.map((reserve: IReservation) => (
                                <ReservationTableRow key={reserve.id} reserve={reserve}></ReservationTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

