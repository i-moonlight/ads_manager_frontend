import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const AdvanceRating = () => {
    const [blockRating, setBlockRating] = useState(7);
    const [movieRating, setMovieRating] = useState(1);
    const [squareRating, setSquareRating] = useState(3);
    const [pillRating, setPillRating] = useState(4);
    const [reverseRating, setReverseRating] = useState(2);
    const [horizontalRating, setHorizontalRating] = useState(3);
    const [featherRating, setFeatherRating] = useState(2);
    const [fractionalRating, setFractionalRating] = useState(4.25);

    const movieRate = ['Bad', 'Mediocre', 'Good', 'Awesome'];
    const reverseRate = ['Strongly Agree', 'Agree', 'Neither Agree or Disagree', 'Disagree', 'Strongly Disagree'];

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-rating"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">1/10 Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-block'</code> with component <code>Rating</code> to see default rating.
                            </Card.Text>
                            <Rating
                                stop={10}
                                initialRating={blockRating}
                                emptySymbol={
                                    <span className="theme-bar-block">
                                        <span />
                                    </span>
                                }
                                fullSymbol={
                                    <span className="theme-bar-block">
                                        <span className="active" />
                                    </span>
                                }
                                onChange={(rate) => setBlockRating(rate)}
                                onHover={(rate) => (document.getElementById('block-rating').innerHTML = rate || blockRating)}
                            />
                            <span id="block-rating" className="current-rating-block">
                                {blockRating}
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pill Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-pill'</code> with component <code>Rating</code> to see pill rating.
                            </Card.Text>
                            <div className="pill-rating">
                                <Rating
                                    stop={6}
                                    initialRating={pillRating}
                                    emptySymbol={['A', 'B', 'C', 'D', 'E', 'F'].map((n) => (
                                        <span className="theme-bar-pill">
                                            <span>{n}</span>
                                        </span>
                                    ))}
                                    fullSymbol={['A', 'B', 'C', 'D', 'E', 'F'].map((n) => (
                                        <span className="theme-bar-pill">
                                            <span className="active">{n}</span>
                                        </span>
                                    ))}
                                    onChange={(rate) => setPillRating(rate)}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Square Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-square'</code> with component <code>Rating</code> to see square rating.
                            </Card.Text>
                            <Rating
                                initialRating={squareRating}
                                emptySymbol={[1, 2, 3, 4, 5].map((n) => (
                                    <span className="theme-bar-square">
                                        <span>{n}</span>
                                    </span>
                                ))}
                                fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                                    <span className="theme-bar-square">
                                        <span className="active">{n}</span>
                                    </span>
                                ))}
                                onChange={(rate) => setSquareRating(rate)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Font Awesome Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use font-awesome icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component{' '}
                                <code>Rating</code> to see font awesome rating.
                            </Card.Text>
                            <Rating emptySymbol="far fa-star fa-2x" fullSymbol="fas fa-star fa-2x" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Feather Icon Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use feather icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component <code>Rating</code>{' '}
                                to see feather rating.
                            </Card.Text>
                            <Rating
                                initialRating={featherRating}
                                emptySymbol={
                                    <span className="text-dark">
                                        <i className="feather icon-circle fa-2x" />
                                    </span>
                                }
                                fullSymbol={
                                    <span className="text-warning">
                                        <i className="feather icon-target fa-2x" />
                                    </span>
                                }
                                onChange={(rate) => setFeatherRating(rate)}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fractional Star Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>fractions</code> with component <code>Rating</code> to see fractions rating.
                            </Card.Text>
                            <div className="text-warning">
                                <Rating
                                    stop={10}
                                    initialRating={fractionalRating}
                                    emptySymbol="far fa-star fa-2x"
                                    fullSymbol="fas fa-star fa-2x"
                                    fractions={4}
                                    onChange={(rate) => setFractionalRating(rate)}
                                    onHover={(rate) => (document.getElementById('fractional-rating').innerHTML = rate || fractionalRating)}
                                />
                            </div>
                            <Card.Text>
                                Your Rating is : <span id="fractional-rating">{fractionalRating}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Movie Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-movie'</code> with component <code>Rating</code> to see movie rating.
                            </Card.Text>
                            <Rating
                                stop={4}
                                initialRating={movieRating}
                                emptySymbol={
                                    <span className="theme-bar-movie">
                                        <span />
                                    </span>
                                }
                                fullSymbol={
                                    <span className="theme-bar-movie">
                                        <span className="active" />
                                    </span>
                                }
                                onChange={(rate) => setMovieRating(rate)}
                                onHover={(rate) =>
                                    (document.getElementById('movie-rating').innerHTML = movieRate[rate - 1] || movieRate[movieRating - 1])
                                }
                            />
                            <div id="movie-rating" className="current-rating-movie">
                                {movieRate[movieRating - 1]}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Reverse Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-reverse'</code> with component <code>Rating</code> to see reverse rating.
                            </Card.Text>
                            <div className="reverse-rating">
                                <Rating
                                    initialRating={reverseRating}
                                    emptySymbol={
                                        <span className="theme-bar-reverse">
                                            <span />
                                        </span>
                                    }
                                    fullSymbol={
                                        <span className="theme-bar-reverse">
                                            <span className="active" />
                                        </span>
                                    }
                                    onChange={(rate) => setReverseRating(rate)}
                                    onHover={(rate) =>
                                        (document.getElementById('reverse-rating').innerHTML =
                                            reverseRate[rate - 1] || reverseRate[reverseRating - 1])
                                    }
                                />
                            </div>
                            <div id="reverse-rating" className="current-rating-reverse">
                                {reverseRate[reverseRating - 1]}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Horizontal Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-horizontal'</code> with component <code>Rating</code> to see horizontal
                                rating.
                            </Card.Text>
                            <div className="horizontal-rating">
                                <Rating
                                    stop={10}
                                    initialRating={horizontalRating}
                                    emptySymbol={
                                        <span className="theme-bar-horizontal">
                                            <span />
                                        </span>
                                    }
                                    fullSymbol={
                                        <span className="theme-bar-horizontal">
                                            <span className="active" />
                                        </span>
                                    }
                                    onChange={(rate) => setHorizontalRating(rate)}
                                    onHover={(rate) => (document.getElementById('horizontal-rating').innerHTML = rate || horizontalRating)}
                                />
                            </div>
                            <div id="horizontal-rating" className="current-rating-horizontal">
                                {horizontalRating}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceRating;
