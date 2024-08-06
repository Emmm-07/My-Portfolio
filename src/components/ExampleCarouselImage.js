import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ text }) => {
    return (
        <div style={{ height: '10rem', background: 'transparent', display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
            <h3>{text}</h3>
        </div>
    );
}

ExampleCarouselImage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;