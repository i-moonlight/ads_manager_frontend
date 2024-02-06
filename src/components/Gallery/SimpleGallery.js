import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images-texts-videos';
import { Link } from 'react-router-dom';

const SimpleGallery = (props) => {
    const { images, texts, singleItem, videos, heading, subheading, showThumbnails, theme, backdropClosesModal } = props;

    let itemVariant;
    if (images) {
        itemVariant = 'images';
    } else if (texts) {
        itemVariant = 'texts';
    } else {
        itemVariant = 'videos';
    }

    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);
    const [itemType] = useState(itemVariant);

    const openLightbox = (event, index) => {
        event.preventDefault();
        setCurrentItem(index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentItem(0);
        setLightboxIsOpen(false);
    };

    const gotoPrevious = () => {
        setCurrentItem((prevState) => {
            return prevState - 1;
        });
    };

    const gotoNext = () => {
        setCurrentItem((prevState) => {
            return prevState + 1;
        });
    };

    const gotoItem = (index) => {
        setCurrentItem(index);
    };

    const handleClickItem = () => {
        if (currentItem === props[itemType].length - 1) return;
        gotoNext();
    };

    const renderGallery = () => {
        if (itemType === 'images') {
            if (!images) return;

            let gallery;

            if (singleItem) {
                gallery = images
                    .filter((i) => i.useForDemo)
                    .map((obj, i) => {
                        return (
                            <a
                                href={obj.src}
                                className={css(classes.thumbnail, classes[obj.orientation])}
                                onClick={(e) => openLightbox(e, i)}
                                key={i}
                            >
                                <div className="img-thumbnail">
                                    <img src={obj.thumbnail} className={css(classes.source)} alt="" />
                                </div>
                            </a>
                        );
                    });
                return <div className={css(classes.gallery)}>{gallery}</div>;
            } else {
                gallery = images
                    .filter((i) => i.useForDemo)
                    .map((obj, i) => {
                        return (
                            <Col xl={2} lg={3} md={4} sm={6} xs={12} key={i} className="mb-1">
                                <a
                                    href={obj.src}
                                    className={css(classes.thumbnail, classes[obj.orientation])}
                                    onClick={(e) => openLightbox(e, i)}
                                >
                                    <div className="img-thumbnail">
                                        <img src={obj.thumbnail} className={css(classes.source)} alt="" />
                                    </div>
                                </a>
                            </Col>
                        );
                    });
                return (
                    <div className={css(classes.gallery)}>
                        <Row>{gallery}</Row>
                    </div>
                );
            }
        } else if (itemType === 'texts') {
            let gallery;
            if (!texts) return;

            if (singleItem) {
                gallery = texts.map((text, i) => {
                    return (
                        <p className={css(classes.text_thumbail)} key={i} onClick={(e) => openLightbox(e, i)}>
                            {text}
                        </p>
                    );
                });

                return <div className={css(classes.gallery)}>{gallery}</div>;
            } else {
                gallery = texts.map((text, i) => {
                    return (
                        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={i} className="mb-1">
                            <p className={css(classes.text_thumbail)} onClick={(e) => openLightbox(e, i)}>
                                {text}
                            </p>
                        </Col>
                    );
                });

                return <div className={css(classes.gallery)}>{gallery}</div>;
            }
        } else {
            let gallery;
            if (!videos) return;

            if (singleItem) {
                gallery = videos.map((videoId, i) => {
                    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                    return (
                        <Link to="#" className={css(classes.video_thumbnail)} key={i} onClick={(e) => openLightbox(e, i)}>
                            <div className="img-thumbnail">
                                <img src={videoThumbnail} className={css(classes.source_video)} alt="" />
                            </div>
                        </Link>
                    );
                });

                return <div className={css(classes.gallery)}>{gallery}</div>;
            } else {
                gallery = videos.map((videoId, i) => {
                    const videoThumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                    return (
                        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={i} className="mb-1">
                            <Link to="#" className={css(classes.video_thumbnail)} onClick={(e) => openLightbox(e, i)}>
                                <div className="img-thumbnail">
                                    <img src={videoThumbnail} className={css(classes.source_video)} alt="" />
                                </div>
                            </Link>
                        </Col>
                    );
                });

                return (
                    <div className={css(classes.gallery)}>
                        <Row>{gallery}</Row>
                    </div>
                );
            }
        }
    };

    return (
        <React.Fragment>
            <div className="section">
                {heading && <h2>{heading}</h2>}
                {subheading && <p>{subheading}</p>}
                {renderGallery()}
                <Lightbox
                    currentItem={currentItem}
                    items={{ type: itemType, items: props[itemType] }}
                    isOpen={lightboxIsOpen}
                    onClickImage={() => handleClickItem}
                    onClickNext={gotoNext}
                    onClickPrev={gotoPrevious}
                    onClickThumbnail={() => gotoItem}
                    onClose={closeLightbox}
                    showThumbnails={showThumbnails}
                    theme={theme}
                    backdropClosesModal={backdropClosesModal}
                />
            </div>
        </React.Fragment>
    );
};

SimpleGallery.displayName = 'Gallery';

const gutter = {
    small: 2,
    large: 4
};
const classes = StyleSheet.create({
    gallery: {
        marginRight: -gutter.small,
        overflow: 'hidden',

        '@media (min-width: 500px)': {
            marginRight: -gutter.large
        }
    },

    // anchor
    thumbnail: {
        boxSizing: 'border-box',
        display: 'block',
        float: 'left',
        lineHeight: 0,
        paddingRight: gutter.small,
        paddingBottom: gutter.small,
        overflow: 'hidden',

        '@media (min-width: 500px)': {
            paddingRight: gutter.large,
            paddingBottom: gutter.large
        }
    },

    // anchor
    video_thumbnail: {
        width: '50%',
        height: '258px',
        boxSizing: 'border-box',
        display: 'block',
        float: 'left',
        lineHeight: 0,
        paddingRight: gutter.small,
        paddingBottom: gutter.small,
        overflow: 'hidden',

        '@media (min-width: 500px)': {
            paddingRight: gutter.large,
            paddingBottom: gutter.large
        }
    },

    // anchor
    text_thumbail: {
        cursor: 'pointer',
        height: '200px',
        'text-align': 'justify',
        'font-size': '16px',
        width: '46%',
        padding: '10px',
        margin: '10px',
        boxSizing: 'border-box',
        display: 'block',
        float: 'left',
        overflow: 'scroll',
        border: 'solid 1px #E6E6E8',
        'border-radius': '4px',
        color: 'darkgray',

        '@media (min-width: 500px)': {}
    },

    // orientation
    landscape: {
        width: '30%'
    },
    square: {
        paddingBottom: 0,
        width: '40%',

        '@media (min-width: 500px)': {
            paddingBottom: 0
        }
    },

    // actual <img />
    source: {
        border: 0,
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        width: 'auto'
    },

    source_video: {
        border: 0,
        height: 'auto',
        maxWidth: '90%',
        width: 'auto'
    }
});

export default SimpleGallery;
