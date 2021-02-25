import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
const Notification = () => {
    const message = useSelector(state => state.notification)

    return (
        <div>
            {(message && <Alert severity="success">{message}</Alert>)}
        </div>
    )
}

export default Notification