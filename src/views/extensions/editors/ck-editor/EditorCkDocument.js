import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CkDecoupledEditor from '../../../../components/CK-Editor/CkDecoupledEditor';
import ModuleNotification from '../../../../components/Widgets/Statistic/Notification';

const EditorCkDocument = () => {
    const html = `
            <h2 style="text-align:center;">The Flavorful Tuscany Meetup</h2>
            <h3 style="text-align:center;">Welcome letter</h3>
            <p>Dear Guest,</p>
            <p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programmer as well as your stay at the <a href="http://ckeditor.com">Bilancino Hotel</a>.</p>
            <p>Please find below the full schedule of the event.</p>
            <figure class="table ck-widget ck-widget_selectable" contenteditable="false">
                <table>
                    <thead>
                        <tr>
                            <th class="ck-editor__editable ck-editor__nested-editable" contenteditable="true" colspan="2">Saturday, July 14</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">9:30&nbsp;AM&nbsp;-&nbsp;11:30&nbsp;AM</td>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Americano vs. Brewed - “know coffee” with <strong>Stefano Garau</strong></td>
                        </tr>
                        <tr>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">1:00&nbsp;PM&nbsp;-&nbsp;3:00&nbsp;PM</td>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Pappardelle al pomodoro -
                                <mark class="marker-yellow">live cooking</mark> with <strong>Rita</strong></td>
                        </tr>
                        <tr>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">5:00&nbsp;PM&nbsp;-&nbsp;8:00&nbsp;PM</td>
                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Tuscan vineyards at a glancewith <strong>Frederico Riscoli</strong></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <blockquote>
                <p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the
                    sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p>
                <p>Angelina Calvino, food journalist</p>
            </blockquote>
            <p>Please arrive at the <a href="http://ckeditor.com">Bilancino Hotel</a> reception desk
                <mark class="marker-yellow">at least half an hour earlier</mark> to make sure that the registration process goes as smoothly as possible.</p>
            <p>We look forward to welcoming you to the event.</p>
            <p><strong>Victoria Valc</strong></p>
            <p><strong>Event Manager</strong></p>
            <p><strong>Bilancino Hotel</strong></p>
        `;
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
                            <Card.Title as="h5">Document Editor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="document-editor">
                                <div className="document-editor__toolbar" />
                                <div className="document-editor__editable-container">
                                    <div className="document-editor__editable">
                                        <CkDecoupledEditor html={html} editor="document" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EditorCkDocument;
