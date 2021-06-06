import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize, TextField } from '@material-ui/core'
import moment from 'moment'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IReservation } from '../../models/types'
import { addReservation } from '../actions'

interface IProps {
    open: boolean,
    handleClose: () => void,
    reservations: IReservation[] | undefined,
    roomId: number | undefined
}
export const AddReservationForm: React.FC<IProps> = ({ roomId, reservations, open, handleClose }) => {
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [reservedBy, setReservedBy] = useState('')
    const [notes, setNotes] = useState('')
    const dispatch = useDispatch()

    const handleAddreservation = () => {
        const data: IReservation = {
            id: (reservations?.length !== undefined ? reservations?.length + 2 : 1),
            roomId: roomId,
            reservedBy: reservedBy,
            from: dateFrom,
            to: dateTo,
            notes: notes,
        }
        addReservation(dispatch, data)
        handleClose()
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">   Add a Reservation</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={reservedBy}
                        onChange={(evt) => {
                            setReservedBy(evt.target.value)
                        }}
                        margin="dense"
                        id="reservedBy"
                        label="Reserved By "
                        type="text"
                        fullWidth
                    />
                    <div className="ml-2 mt-2">
                        <TextField
                            value={(moment(dateFrom).format('YYYY/MM/DD HH:mm'))}
                            onChange={(evt) => {
                                setDateFrom(moment(evt.target.value).format('YYYY/MM/DD HH:mm'))
                                console.log(dateFrom)
                            }
                            }
                            id="datetime-from "
                            label="From "
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /></div>
                    <div className="mt-2">

                        <TextField
                            value={dateTo}
                            onChange={(evt) => {
                                setDateTo(moment(evt.target.value).format('YYYY/MM/DD HH:mm'))
                                console.log(dateTo)
                            }
                            }
                            id="datetime-from "
                            label="From "
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="mt-2 w-100  ">

                        <TextareaAutosize
                            rowsMin={4}
                            onChange={(evt) => {
                                setNotes(evt.target.value)
                            }}
                            value={notes}
                            aria-label="maximum height"
                            placeholder="Maximum 4 rows"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleAddreservation} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default AddReservationForm
