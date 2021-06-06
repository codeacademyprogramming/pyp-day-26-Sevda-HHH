import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { IRoom } from '../../models/types'

interface Props { }

export const Rooms = (props: Props) => {
    const { } = props

    const { push } = useHistory()
    const state = useSelector((state: Array<IRoom>) => state)
    return (<>
        {
            state.map((room) => (
                <rect
                    id="Rectangle"
                    key={room.id} className="rectanglee"
                    stroke="#979797"
                    fill="#D8D8D8"
                    x={room.location.x}
                    y={room.location.y}
                    width={room.size.width}
                    height={room.size.height}
                    onClick={() => push(`/rooms/${room.id}`)}
                />
            ))
        }
    </>
    )
}
