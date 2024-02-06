import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Editor from 'nib-core';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const EditorRichNib = () => {
    const content = {
        doc: {
            type: 'doc',
            content: [
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'text',
                            text: 'This editor is rad'
                        }
                    ]
                },
                {
                    type: 'heading',
                    attrs: {
                        level: '3'
                    },
                    content: [
                        {
                            type: 'text',
                            text: 'Some flowers for you'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    content: [
                        {
                            type: 'image',
                            attrs: {
                                src: 'https://i.imgur.com/UvtVxv1.jpg',
                                style: {
                                    height: 'auto',
                                    width: 'auto'
                                }
                            }
                        }
                    ]
                },
                {
                    type: 'paragraph'
                }
            ]
        },
        selection: {
            type: 'text',
            anchor: 1,
            head: 1
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/nib-core"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Rich Text Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Editor defaultValue={content} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EditorRichNib;
