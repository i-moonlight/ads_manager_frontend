import React from 'react';
import useImageZoom from 'react-image-zoom-hook';

const ImageZoom = ({ image }) => {
    const imgHeight = 'auto';

    const imgWidth = '100%';

    const lensHeight = 100;

    const lensWidth = 100;

    const previewLensHeight = 400;

    const img = image;
    const previewImg = image;

    const {
        moveLens,

        imgDimesions,

        lensDimensions,

        previewLensDimensions,

        previewImgDimensions,

        imgContainerDimesions,

        imgRefCallback,

        meshRefCallback,

        imagePreviewRefCallback
    } = useImageZoom({
        imgHeight,

        imgWidth,

        lensHeight,

        lensWidth,

        previewLensHeight,

        img,

        previewImg
    });

    return (
        <div className="zoom-container">
            <div
                className="img-main-container"
                onMouseMove={moveLens}
                style={{
                    ...imgContainerDimesions
                }}
            >
                <div
                    ref={meshRefCallback}
                    className="mesh"
                    style={{
                        ...lensDimensions
                    }}
                />

                <img
                    style={{
                        ...imgDimesions
                    }}
                    ref={imgRefCallback}
                    alt="test"
                    src={img}
                />
            </div>

            <div
                className="img-preview-section-container"
                style={{
                    ...previewLensDimensions
                }}
            >
                <img
                    ref={imagePreviewRefCallback}
                    alt="test-preview"
                    src={previewImg}
                    style={{
                        ...previewImgDimensions
                    }}
                    className="img-preview-section"
                />
            </div>
        </div>
    );
};

export default ImageZoom;
