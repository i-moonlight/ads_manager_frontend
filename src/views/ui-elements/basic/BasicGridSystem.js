import React from 'react';
import { Row, Col, Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Prism from '../../../components/Prism';

const BasicGridSystem = () => {
    const basicCode = `<Container>
    <Row>
        <Col sm> One of three columns </Col>
        <Col sm> One of three columns </Col>
        <Col sm> One of three columns </Col>
    </Row>
</Container>`;

    const autoLayoutEqualWidth = `<Container>
    <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>`;

    const autoLayoutMultiLine = `<Container>
    <Row>
        <Col>Column</Col>
        <Col>Column</Col>
        <div className="w-100" />
        <Col>Column</Col>
        <Col>Column</Col>
    </Row>
</Container>`;

    const autoLayoutFixedOneColumn = `<Container>
    <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>`;

    const autoLayoutVariableWidth = `<Container>
    <Row className="justify-content-md-center">
        <Col xs lg="2">
            1 of 3
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
            3 of 3
        </Col>
    </Row>
    <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
            3 of 3
        </Col>
    </Row>
</Container>`;

    const responsiveBasic = `<Container>
    <Row>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
    </Row>
    <Row>
        <Col xs={8}>xs=8</Col>
        <Col xs={4}>xs=4</Col>
    </Row>
</Container>`;

    const responsiveStacked = `<Container>
    <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
    </Row>
</Container>`;

    const responsiveMixMatch = `<Container>
    <Row>
        <Col xs={12} md={8}>
            xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
            xl=6 md=4
        </Col>
    </Row>
    <Row>
        <Col xs={6} md={4}>
            xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
            xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
            xs=6 md=4
        </Col>
    </Row>
    <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
    </Row>
</Container>`;

    const reOrdering = `<Container>
    <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        <Col xs={{ order: 1 }}>Third, but second</Col>
    </Row>
</Container>`;

    const columnOffset = `<Container>
    <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{\`md={{ span: 4, offset: 4 }}\`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 3, offset: 3 }}>{\`md={{ span: 3, offset: 3 }}\`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{\`md={{ span: 3, offset: 3 }}\`}</Col>
    </Row>
    <Row>
        <Col md={{ span: 6, offset: 3 }}>{\`md={{ span: 6, offset: 3 }}\`}</Col>
    </Row>
</Container>`;

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-bootstrap.netlify.app/layout/grid/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Grid System</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve
                                column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
                            </Card.Text>
                            <h5>How it works</h5>
                            <hr />
                            <Card.Text>
                                Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s
                                built with{' '}
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    flexbox
                                </a>{' '}
                                and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
                            </Card.Text>
                            <Card.Text>
                                New to or unfamiliar with flexbox?{' '}
                                <a
                                    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {' '}
                                    Read this CSS Tricks flexbox guide for
                                </a>{' '}
                                background, terminology, guidelines, and code snippets.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col sm> One of three columns </Col>
                                        <Col sm> One of three columns </Col>
                                        <Col sm> One of three columns </Col>
                                    </Row>
                                </Container>
                                <Prism code={basicCode} language="html" />
                            </div>
                            <Card.Text>
                                The above example creates three equal-width columns on small, medium, large, and extra large devices using
                                our predefined grid classes. Those columns are centered in the page with the parent <code>Container</code>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Grid Options</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                While Bootstrap uses <code className="highlighter-rouge">em</code>s or{' '}
                                <code className="highlighter-rouge">rem</code>s for defining most sizes,{' '}
                                <code className="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is
                                because the viewport width is in pixels and does not change with the{' '}
                                <a href="https://drafts.csswg.org/mediaqueries-3/#units" rel="noopener noreferrer" target="_blank">
                                    font size
                                </a>
                                .
                            </Card.Text>
                            <Card.Text>
                                See how aspects of the Bootstrap grid system work across multiple devices with a handy table.
                            </Card.Text>
                            <Table bordered striped responsive>
                                <thead>
                                    <tr>
                                        <th />
                                        <th className="text-center">
                                            Extra small
                                            <br />
                                            <small>&lt;576px</small>
                                        </th>
                                        <th className="text-center">
                                            Small
                                            <br />
                                            <small>&ge;576px</small>
                                        </th>
                                        <th className="text-center">
                                            Medium
                                            <br />
                                            <small>&ge;768px</small>
                                        </th>
                                        <th className="text-center">
                                            Large
                                            <br />
                                            <small>&ge;992px</small>
                                        </th>
                                        <th className="text-center">
                                            Extra large
                                            <br />
                                            <small>&ge;1200px</small>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            Max container width
                                        </th>
                                        <td>None (auto)</td>
                                        <td>540px</td>
                                        <td>720px</td>
                                        <td>960px</td>
                                        <td>1140px</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            Component/props
                                        </th>
                                        <td>
                                            <code>Col</code>
                                        </td>
                                        <td>
                                            <code>sm</code>
                                        </td>
                                        <td>
                                            <code>md</code>
                                        </td>
                                        <td>
                                            <code>lg</code>
                                        </td>
                                        <td>
                                            <code>xl</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            # of columns
                                        </th>
                                        <td colSpan="5">12</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            Gutter width
                                        </th>
                                        <td colSpan="5">30px (15px on each side of a column)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            Nestable
                                        </th>
                                        <td colSpan="5">Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap" scope="row">
                                            Column ordering
                                        </th>
                                        <td colSpan="5">Yes</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Auto-layout Columns</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like{' '}
                                <code className="highlighter-rouge">.col-sm-6</code>.
                            </Card.Text>
                            <h5>Equal-width</h5>
                            <hr />
                            <Card.Text>
                                For example, here are two grid layouts that apply to every device and viewport, from{' '}
                                <code className="highlighter-rouge">xs</code> to <code className="highlighter-rouge">xl</code>. Add any
                                number of unit-less classes for each breakpoint you need and every column will be the same width.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col>1 of 2</Col>
                                        <Col>2 of 2</Col>
                                    </Row>
                                    <Row>
                                        <Col>1 of 3</Col>
                                        <Col>2 of 3</Col>
                                        <Col>3 of 3</Col>
                                    </Row>
                                </Container>
                                <Prism code={autoLayoutEqualWidth} language="html" />
                            </div>
                            <h5 className="mt-1">Equal-width Multi-row</h5>
                            <hr />
                            <Card.Text>
                                Equal-width columns can be broken into multiple lines, but there was a{' '}
                                <a href="https://github.com/philipwalton/flexbugs#flexbug-11" rel="noopener noreferrer" target="_blank">
                                    Safari flexbox bug
                                </a>{' '}
                                that prevented this from working without an explicit <code className="highlighter-rouge">flex-basis</code>{' '}
                                or <code className="highlighter-rouge">border</code>. There are workarounds for older browser versions, but
                                they shouldn’t be necessary if you’re up-to-date.
                            </Card.Text>
                            <Card.Text>
                                Create equal-width columns that span multiple rows by inserting a{' '}
                                <code className="highlighter-rouge">.w-100</code> where you want the columns to break to a new line. Make
                                the breaks responsive by mixing the <code className="hlighter-rouge">.w-100</code> with some{' '}
                                <Link to='#"'>responsive display utilities</Link>.
                            </Card.Text>

                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col>Column</Col>
                                        <Col>Column</Col>
                                        <div className="w-100" />
                                        <Col>Column</Col>
                                        <Col>Column</Col>
                                    </Row>
                                </Container>
                                <Prism code={autoLayoutMultiLine} language="html" />
                            </div>
                            <h5 className="mt-1">Setting one column width</h5>
                            <hr />
                            <Card.Text>
                                Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling
                                columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins,
                                or inline widths. Note that the other columns will resize no matter the width of the center column.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col>1 of 3</Col>
                                        <Col xs={6}>2 of 3 (wider)</Col>
                                        <Col>3 of 3</Col>
                                    </Row>
                                    <Row>
                                        <Col>1 of 3</Col>
                                        <Col xs={5}>2 of 3 (wider)</Col>
                                        <Col>3 of 3</Col>
                                    </Row>
                                </Container>
                                <Prism code={autoLayoutFixedOneColumn} language="html" />
                            </div>
                            <h5 className="mt-1">Variable width content</h5>
                            <hr />
                            <Card.Text>
                                Set the column value (for any breakpoint size) to <code>"auto"</code> to size columns based on the natural
                                width of their content.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col xs lg="2">
                                            1 of 3
                                        </Col>
                                        <Col md="auto">Variable width content</Col>
                                        <Col xs lg="2">
                                            3 of 3
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>1 of 3</Col>
                                        <Col md="auto">Variable width content</Col>
                                        <Col xs lg="2">
                                            3 of 3
                                        </Col>
                                    </Row>
                                </Container>
                                <Prism code={autoLayoutVariableWidth} language="html" />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Responsive Grid</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts.
                                Customize the size of your columns on extra small, small, medium, large, or extra large devices however you
                                see fit.
                            </Card.Text>
                            <h5 className="mt-1">All breakpoints</h5>
                            <hr />
                            <Card.Text>
                                The <code>Col</code> lets you specify column widths across 5 breakpoint sizes (xs, sm, md, large, and xl).
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col>col</Col>
                                        <Col>col</Col>
                                        <Col>col</Col>
                                        <Col>col</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>xs=8</Col>
                                        <Col xs={4}>xs=4</Col>
                                    </Row>
                                </Container>
                                <Prism code={responsiveBasic} language="html" />
                            </div>
                            <h5 className="mt-1">Stacked to horizontal</h5>
                            <hr />
                            <Card.Text>
                                For every breakpoint, you can specify the amount of columns to span, or set the prop to{' '}
                                <code>Col with lg=true</code> for auto layout widths.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col sm={8}>sm=8</Col>
                                        <Col sm={4}>sm=4</Col>
                                    </Row>
                                    <Row>
                                        <Col sm>sm=true</Col>
                                        <Col sm>sm=true</Col>
                                        <Col sm>sm=true</Col>
                                    </Row>
                                </Container>
                                <Prism code={responsiveStacked} language="html" />
                            </div>
                            <h5 className="mt-1">Mix and match</h5>
                            <hr />
                            <Card.Text>
                                You can also mix and match breakpoints to create different grids depending on the screen size.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={8}>
                                            xs=12 md=8
                                        </Col>
                                        <Col xs={6} md={4}>
                                            xl=6 md=4
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={4}>
                                            xs=6 md=4
                                        </Col>
                                        <Col xs={6} md={4}>
                                            xs=6 md=4
                                        </Col>
                                        <Col xs={6} md={4}>
                                            xs=6 md=4
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6}>xs=6</Col>
                                        <Col xs={6}>xs=6</Col>
                                    </Row>
                                </Container>
                                <Prism code={responsiveMixMatch} language="html" />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Reordering</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {' '}
                                The <code>Col</code> breakpoint props also have a more complicated <code>object</code> prop form:{' '}
                                <code>{`{span: number, order: number, offset: number}`}</code> for specifying offsets and ordering affects.{' '}
                            </Card.Text>
                            <Card.Text>
                                You can use the <code>`order`</code> property to control the <code>visual order</code> of your content.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col xs>First, but unordered</Col>
                                        <Col xs={{ order: 12 }}>Second, but last</Col>
                                        <Col xs={{ order: 1 }}>Third, but second</Col>
                                    </Row>
                                </Container>
                                <Prism code={reOrdering} language="html" />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Column Offset</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                For offsetting grid columns you can set an <code>`offset`</code> value, or, for more general layout, use the
                                margin class utilities.
                            </Card.Text>
                            <div className="bd-example-row">
                                <Container>
                                    <Row>
                                        <Col md={4}>md=4</Col>
                                        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                                        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                                    </Row>
                                </Container>
                                <Prism code={columnOffset} language="html" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicGridSystem;
