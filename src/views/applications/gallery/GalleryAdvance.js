import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import image1 from '../../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import image2 from '../../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import image3 from '../../../assets/images/gallery-grid/img-grd-gal-3.jpg';
import image4 from '../../../assets/images/gallery-grid/img-grd-gal-4.jpg';
import image5 from '../../../assets/images/gallery-grid/img-grd-gal-5.jpg';
import image6 from '../../../assets/images/gallery-grid/img-grd-gal-6.jpg';

const GalleryAdvance = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Julia</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-julia">
                                    <img src={image1} alt="advance-1" />
                                    <figcaption>
                                        <h2>
                                            Passionate <span>Julia</span>
                                        </h2>
                                        <div>
                                            <p>Julia dances in the deep dark</p>
                                            <p>She loves the smell of the ocean</p>
                                            <p>And dives into the morning light</p>
                                        </div>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-julia">
                                    <img src={image2} alt="advance-2" />
                                    <figcaption>
                                        <h2>
                                            Passionate <span>Julia</span>
                                        </h2>
                                        <div>
                                            <p>Julia dances in the deep dark</p>
                                            <p>She loves the smell of the ocean</p>
                                            <p>And dives into the morning light</p>
                                        </div>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Goliath</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-goliath">
                                    <img src={image3} alt="advance-3" />
                                    <figcaption>
                                        <h2>
                                            Thoughtful <span>Goliath</span>
                                        </h2>
                                        <p>When Goliath comes out, you should run.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-goliath">
                                    <img src={image4} alt="advance-4" />
                                    <figcaption>
                                        <h2>
                                            Thoughtful <span>Goliath</span>
                                        </h2>
                                        <p>When Goliath comes out, you should run.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Hera</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-hera">
                                    <img src={image5} alt="advance-5" />
                                    <figcaption>
                                        <h2>
                                            Tender <span>Hera</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-file-pdf-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-image-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-archive-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-code-o f-36" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure className="effect-hera">
                                    <img src={image6} alt="advance-6" />
                                    <figcaption>
                                        <h2>
                                            Tender <span>Hera</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-file-pdf-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-image-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-archive-o f-36" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-file-code-o f-36" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Winston</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-winston">
                                    <img src={image1} alt="advance-1" />
                                    <figcaption>
                                        <h2>
                                            Jolly <span>Winston</span>
                                        </h2>
                                        <p>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-star fa-3x" />
                                            </Link>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-comments fa-3x" />
                                            </Link>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-envelope-open fa-3x" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure className="effect-winston">
                                    <img src={image2} alt="advance-2" />
                                    <figcaption>
                                        <h2>
                                            Jolly <span>Winston</span>
                                        </h2>
                                        <p>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-star fa-3x" />
                                            </Link>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-comments fa-3x" />
                                            </Link>
                                            <Link to="#" className="text-white">
                                                <i className="fa fa-envelope-open fa-3x" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Selena</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-selena">
                                    <img src={image3} alt="advance-3" />
                                    <figcaption>
                                        <h2>
                                            Happy <span>Selena</span>
                                        </h2>
                                        <p>Selena is a tiny-winged bird.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-selena">
                                    <img src={image4} alt="advance-4" />
                                    <figcaption>
                                        <h2>
                                            Happy <span>Selena</span>
                                        </h2>
                                        <p>Selena is a tiny-winged bird.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Terry</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-terry">
                                    <img src={image5} alt="advance-5" />
                                    <figcaption>
                                        <h2>
                                            Noisy <span>Terry</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-download" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-share" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-tags" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure className="effect-terry">
                                    <img src={image6} alt="advance-6" />
                                    <figcaption>
                                        <h2>
                                            Noisy <span>Terry</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-download" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-share" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-tags" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Phoebe</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-phoebe">
                                    <img src={image1} alt="advance-1" />
                                    <figcaption>
                                        <h2>
                                            Plain <span>Phoebe</span>
                                        </h2>
                                        <p className="m-4">
                                            <Link to="#">
                                                <i className="fa fa-fw fa-user fa-3x" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart fa-3x" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-cog fa-3x" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure className="effect-phoebe">
                                    <img src={image2} alt="advance-2" />
                                    <figcaption>
                                        <h2>
                                            Plain <span>Phoebe</span>
                                        </h2>
                                        <p className="m-4">
                                            <Link to="#">
                                                <i className="fa fa-fw fa-user fa-3x" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart fa-3x" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-cog fa-3x" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Apollo</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-apollo">
                                    <img src={image3} alt="advance-3" />
                                    <figcaption>
                                        <h2>
                                            Strong <span>Apollo</span>
                                        </h2>
                                        <p>Apollo's last game of pool was so strange.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-apollo">
                                    <img src={image4} alt="advance-4" />
                                    <figcaption>
                                        <h2>
                                            Strong <span>Apollo</span>
                                        </h2>
                                        <p>Apollo's last game of pool was so strange.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Kira</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-kira">
                                    <img src={image5} alt="advance-5" />
                                    <figcaption>
                                        <h2>
                                            Dark <span>Kira</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-home" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-download" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-share" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <figure className="effect-kira">
                                    <img src={image6} alt="advance-6" />
                                    <figcaption>
                                        <h2>
                                            Dark <span>Kira</span>
                                        </h2>
                                        <p>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-home" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-download" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-heart" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-fw fa-share" />
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Steve</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-steve">
                                    <img src={image1} alt="advance-1" />
                                    <figcaption>
                                        <h2>
                                            Lonely <span>Steve</span>
                                        </h2>
                                        <p>Steve was afraid of the Boogieman.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-steve">
                                    <img src={image2} alt="advance-2" />
                                    <figcaption>
                                        <h2>
                                            Lonely <span>Steve</span>
                                        </h2>
                                        <p>Steve was afraid of the Boogieman.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Moses</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-moses">
                                    <img src={image3} alt="advance-3" />
                                    <figcaption>
                                        <h2>
                                            Cute <span>Moses</span>
                                        </h2>
                                        <p>Moses loves to run after butterflies.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-moses">
                                    <img src={image4} alt="advance-4" />
                                    <figcaption>
                                        <h2>
                                            Cute <span>Moses</span>
                                        </h2>
                                        <p>Moses loves to run after butterflies.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Jazz</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-jazz">
                                    <img src={image5} alt="advance-5" />
                                    <figcaption>
                                        <h2>
                                            Dynamic <span>Jazz</span>
                                        </h2>
                                        <p>When Jazz starts to chase cars, the whole world stands still.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-jazz">
                                    <img src={image6} alt="advance-6" />
                                    <figcaption>
                                        <h2>
                                            Dynamic <span>Jazz</span>
                                        </h2>
                                        <p>When Jazz starts to chase cars, the whole world stands still.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Ming</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-ming">
                                    <img src={image1} alt="advance-1" />
                                    <figcaption>
                                        <h2>
                                            Funny <span>Ming</span>
                                        </h2>
                                        <p>Ming sits in the corner the whole day. She's into crochet.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-ming">
                                    <img src={image2} alt="advance-2" />
                                    <figcaption>
                                        <h2>
                                            Funny <span>Ming</span>
                                        </h2>
                                        <p>Ming sits in the corner the whole day. She's into crochet.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Ming</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-lexi">
                                    <img src={image3} alt="advance-3" />
                                    <figcaption>
                                        <h2>
                                            Altruistic <span>Lexi</span>
                                        </h2>
                                        <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-lexi">
                                    <img src={image4} alt="advance-4" />
                                    <figcaption>
                                        <h2>
                                            Altruistic <span>Lexi</span>
                                        </h2>
                                        <p>Each and every friend is special. Lexi won't hide a single cookie.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Duke</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="grid">
                                <figure className="effect-duke">
                                    <img src={image5} alt="advance-5" />
                                    <figcaption>
                                        <h2>
                                            Messy <span>Duke</span>
                                        </h2>
                                        <p>Duke is very bored. When he looks at the sky, he feels to run.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                                <figure className="effect-duke">
                                    <img src={image6} alt="advance-6" />
                                    <figcaption>
                                        <h2>
                                            Messy <span>Duke</span>
                                        </h2>
                                        <p>Duke is very bored. When he looks at the sky, he feels to run.</p>
                                        <Link to="#">View more</Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GalleryAdvance;
