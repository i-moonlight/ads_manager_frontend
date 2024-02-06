import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const EditorJoditWYSIWYG = () => {
    const [content, setContent] = useState('Hello....');

    const updateContent = (value) => {
        setContent(value);
    };

    const setRef = (jodit) => {
        // control
    };

    const config = {
        readonly: false
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/jodit-react"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Jodit WYSIWYG Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <JoditEditor editorRef={setRef} value={content} config={config} onChange={() => updateContent} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EditorJoditWYSIWYG;
