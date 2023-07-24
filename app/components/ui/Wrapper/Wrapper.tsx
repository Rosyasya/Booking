import PropTypes from "prop-types";

const Wrapper = ( { className, children } ) => {
    return (
        <div className={className} style={{width: '100%'}}>{children}</div>
    )
}

Wrapper.propTypes = {
    className: PropTypes.string,
}

export default Wrapper;