import { useSelector } from 'react-redux'
import { IRoom } from '../../models/types'
import { RoomsSvg } from './RoomsSvg'

interface Props { }
export const RoomsPage = (props: Props) => {
    const { } = props
    const state = useSelector((state: Array<IRoom>) => state)
    return (
        <>
            <RoomsSvg rooms={state} />
        </>
    )
}
