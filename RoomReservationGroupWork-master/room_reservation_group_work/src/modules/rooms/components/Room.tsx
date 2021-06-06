import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { IReservation, IRoom, ParamTypes } from '../../models/types';
import AddReservationForm from '../../reservations/components/AddReservationForm';
import { ReservationsTable } from '../../reservations/components/ReservationsTable';



export const Room = () => {
    const [open, setOpen] = React.useState(false);


    const { id } = useParams<ParamTypes>()
    const rooms = useSelector((state: Array<IRoom>) => state)
    const room = rooms.find((room: IRoom) => room.id === Number(id))
    const reservations: IReservation[] | undefined = room?.reservations

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <nav className="navbar navbar-light bg-light py-3">
                <div className="container row ">
                    <div className="row d-flex   justify-content-between ">
                        <div className="col-lg-6  navbar-brand mb-0 h1">Room No. {room !== undefined && room.id}</div>
                        <div className="col-lg-3 btn btn-primary" onClick={handleClickOpen}>
                            Add New  Reservation
                        </div>
                        <AddReservationForm reservations={reservations} roomId={room?.id} handleClose={handleClose} open={open} />
                    </div>
                </div>
            </nav>

            <ReservationsTable reservations={reservations}></ReservationsTable>
        </>
    )
}
