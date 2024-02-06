import React from 'react';
import Carousel from 'react-images';

const LightBox = ({ currentImage, photos }) => {
    return (
        <React.Fragment>
            <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
            />
        </React.Fragment>
    );
};

export default LightBox;
