import React from 'react';
import { connect } from 'react-redux';


const Characters = () => {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = ({characters}) => {
    return {
        characters
    }
}

export default connect(mapStateToProps)(Characters);