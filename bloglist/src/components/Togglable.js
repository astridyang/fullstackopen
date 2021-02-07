import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)
    const show = { display: visible ? '' : 'none' }
    const hide = { display: visible ? 'none' : '' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }
    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })
    return (
        <div>
            <div style={hide}>
                <button onClick={toggleVisibility} className={props.buttonLabel}>{props.buttonLabel}</button>
            </div>
            <div style={show} className="togglableContent">
                {props.children}
                <button onClick={toggleVisibility}>{props.canceLabel}</button>
            </div>
        </div>
    )
})
Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}
Togglable.displayName = 'Togglable'
export default Togglable