import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CkClassicEditor from '../../../../components/CK-Editor/CkClassicEditor';
import ModuleNotification from '../../../../components/Widgets/Statistic/Notification';

const EditorCkClassic = () => {
    const html = `<h3>Walking the capitals of Europe: Warsaw</h3>
        <figure class="image image-style-side">
            <img alt="Picture of the Warsaw Old Town." src="https://ckeditor.com/assets/images/bg/umbrellas-e935d5c582.jpg" />
            <figcaption>Medieval Old Town square, destroyed in 1944 & rebuilt after WWII.</figcaption>
        </figure>
        <p>If you enjoyed my previous articles in which we discussed wandering around <a href="#!" target="_blank" rel="noopener">Copenhagen</a> and <a href="#!" target="_blank" rel="noopener">Vilnius</a>, you’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw" target="_blank" rel="noopener">Warsaw</a>.</p>
        <h3>Time to put comfy sandals on!</h3>
        <p>Best time to visit the city is July and August, when it’s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river of Vistula.</p>
        <p>The historic <strong>Old Town</strong>, which was reconstructed after the World War II, with its late 18th century characteristics, is a must-see. You can start your walk from the <strong>Nowy Świat Street</strong> which will take you straight to the Old Town.</p>
        <p>Then you can go to the <strong>Powiśle</strong> area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p>
        <p>For museum lovers, you can add these to your list:</p>
        <ul>
            <li>POLIN</li>
            <li>Warsaw Uprising Museum</li>
            <li>Fryderyk Chopin Museum</li>
        </ul>
        <h3>Next destination</h3>
        <p>We will go to Berlin and have a night's walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>`;

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/@ckeditor/ckeditor5-react"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Classic Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CkClassicEditor html={html} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EditorCkClassic;
