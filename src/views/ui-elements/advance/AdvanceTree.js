import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import AnimatedTree from 'react-animated-tree';
import TreeView from 'deni-react-treeview';
import treeData from './data/tree.json';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const treeStyles = {
    position: 'inherit',
    top: 40,
    left: 40,
    color: '#888',
    fill: '#000',
    width: '100%'
};

const AdvanceTree = () => {
    const typeFolder = <i className="fa fa-folder-open fa-2x text-warning align-middle" />;
    const typeFolderClose = <i className="fa fa-folder fa-2x text-warning align-middle" />;
    const typeHtml5 = <i className="fa fa-html5 fa-2x text-danger align-middle" />;
    const typePdf = <i className="fa fa-file-pdf-o fa-2x text-info align-middle" />;
    const typeBlank = <i className="fa fa-file-text fa-2x align-middle" />;
    const typeCode = <i className="fa fa-file-code-o fa-2x align-middle" />;
    const typeImage = <i className="fa fa-file-image-o fa-2x text-primary align-middle" />;
    const typeZip = <i className="fa fa-file-archive-o fa-2x text-info align-middle" />;
    const typeJson = <i className="fa fa-file fa-2x align-middle" />;

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/deni-react-treeview"
                    />
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Tree</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TreeView className="customizable-tree" items={treeData} showRoot={true} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">With Checkbox</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TreeView className="customizable-tree" items={treeData} theme="orange" showCheckbox={true} showRoot={true} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Without Icon</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TreeView
                                className="customizable-tree"
                                items={treeData}
                                showRoot={true}
                                showCheckbox={true}
                                theme="moonlight"
                                showIcon={false}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Tree Select Row</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TreeView
                                className="customizable-tree"
                                theme="purple"
                                items={treeData}
                                showRoot={true}
                                showCheckbox={true}
                                selectRow={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Metro Theme Tree</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TreeView className="customizable-tree" items={treeData} theme="metro" showRoot={true} />
                            <Card.Text>
                                Theme: <code>classic(default)</code>, <code>metro</code>, <code>moonlight</code>, <code>purple</code>,{' '}
                                <code>green</code>, <code>orange</code>, <code>red</code>, <code>silver</code>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-animated-tree"
                    />
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Animated Tree</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <AnimatedTree content="Root Node" type={typeFolder} canHide open style={treeStyles}>
                                    <AnimatedTree content="Child Node" type={typeFolder} open canHide>
                                        <AnimatedTree content="user.php" type={typeHtml5} />
                                        <AnimatedTree content="invoice.pdf" type={typePdf} />
                                        <AnimatedTree content="data.text" type={typeBlank} />
                                        <AnimatedTree content="script.js" type={typeCode} />
                                    </AnimatedTree>
                                    <AnimatedTree content="Child Node" type={typeFolderClose} canHide>
                                        <AnimatedTree content="logo.npg" type={typeImage} />
                                        <AnimatedTree content="Sub Node" type={typeFolderClose}>
                                            <AnimatedTree content="avatar.jpg" type={typeImage} />
                                            <AnimatedTree content="favicon.ico" type={typeImage} />
                                        </AnimatedTree>
                                    </AnimatedTree>
                                    <AnimatedTree content="index.html" type={typeHtml5} />
                                    <AnimatedTree content="package.json" type={typeJson} />
                                    <AnimatedTree content="root.zip" type={typeZip} />
                                </AnimatedTree>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceTree;
