import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import GalleryMasonry from '../../../components/Gallery/GalleryMasonry';

import image1 from '../../../assets/images/gallery-grid/masonry-1.jpg';
import image2 from '../../../assets/images/gallery-grid/masonry-2.jpg';
import image3 from '../../../assets/images/gallery-grid/masonry-3.jpg';
import image4 from '../../../assets/images/gallery-grid/masonry-4.jpg';
import image5 from '../../../assets/images/gallery-grid/masonry-5.jpg';
import image6 from '../../../assets/images/gallery-grid/masonry-6.jpg';
import image7 from '../../../assets/images/gallery-grid/masonry-7.jpg';
import image8 from '../../../assets/images/gallery-grid/masonry-8.jpg';

let brakePoints = [350, 500, 750];
let images = [image1, image2, image3, image4, image5, image6, image7, image2, image8, image4];

const Tile = ({ src }) => {
    return (
        <div className="tile">
            <img src={src} alt="mg" />
        </div>
    );
};
const TileCard = ({ src }) => {
    return (
        <Card>
            <div className="tile">
                <Card.Img variant="top" src={src} />
            </div>
            <Card.Body>
                <h5 className="job-card-desc">Job Description</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="job-meta-data mb-1">
                    <i className="fas fa-map-marker-alt" />
                    washington
                </div>
                <div className="job-meta-data">
                    <i className="fas fa-handshake" />
                    10 Years
                </div>
            </Card.Body>
        </Card>
    );
};

const MasonryGallery = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Gallery Masonry</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GalleryMasonry brakePoints={brakePoints}>
                                {images.map((image, id) => {
                                    return <Tile key={id} src={image} />;
                                })}
                            </GalleryMasonry>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Gallery With Description</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GalleryMasonry brakePoints={brakePoints}>
                                {images.map((image, id) => {
                                    return <TileCard key={id} src={image} />;
                                })}
                            </GalleryMasonry>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default MasonryGallery;
