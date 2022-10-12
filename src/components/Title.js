// import PropTypes from 'prop-types';

const Title = ({name, type}) => {

    const className = type === 'bold' ? 'bold' : '';

    const atributes = {
        className,
    }

    if (type === 'bold') {
        return <p {...atributes}> {name} </p>
    }   return <p> {name} </p>
}

// Title.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
// }

export default Title;