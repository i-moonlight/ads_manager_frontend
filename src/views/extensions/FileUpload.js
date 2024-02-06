import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FileUpload = () => {
    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif'
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };

    const config = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/'
    };

    const eventHandlers = (file) => {
        //init: dz => this.dropzone = dz,
        //console.log(file);
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-dropzone-component"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">File Upload</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                            <Row className="text-center m-t-10">
                                <Col>
                                    <Button>Upload Files</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FileUpload;
