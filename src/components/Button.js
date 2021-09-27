import PropTypes from 'prop-types'

const Button = ({className, color, text, onClick}) => {
    return (
        <button className={`btn btn-primary ${className}`} onClick={onClick}>{text}</button>
    )
}


Button.defaultProps = {
    text : 'No Name'
}

Button.propTypes = {
    text: PropTypes.string
    // color: PropTypes.string
}

export default Button
