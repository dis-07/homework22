import PropTypes from 'prop-types';

const Title = ({name, type}) => {

    // const className = type === 'bold' ? 'bold' : '';

    // const atributes = {
    //     className,
    // }

    // if (type === 'bold') {
    //     return <p {...atributes}> {name} </p>
    // }   return <p> {name} </p>
    return <p style={{ fontWeight: type }}>{name}</p>
}

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bold', 'normal']).isRequired,
}

export default Title;