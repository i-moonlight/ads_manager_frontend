import React from 'react';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import PNotify from 'pnotify/dist/es/PNotify';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

function defaultPNotify() {
    PNotify.notice({
        title: 'Default Notice',
        text: "Check me out! I'm notice"
    });
}

function primaryPNotify() {
    PNotify.notice({
        title: 'Primary Notice',
        text: "Check me out! I'm notice"
    });
}

function successPNotify() {
    PNotify.success({
        title: 'Success Notice',
        text: "Check me out! I'm notice"
    });
}

function infoPNotify() {
    PNotify.info({
        title: 'Info Notice',
        text: "Check me out! I'm notice"
    });
}

function errorPNotify() {
    PNotify.error({
        title: 'Error Notice',
        text: "Check me out! I'm notice"
    });
}

function successDesktopPNotify() {
    PNotify.success({
        title: 'Success Desktop Notice',
        text: "I'm a success desktop notification, if you have given me a permission.",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function (e) {
        if (
            e.target.className.match('ui-pnotify-sticker') ||
            e.target.className.match('ui-pnotify-closer') ||
            e.target.className.match('brighttheme-icon-sticker') ||
            e.target.className.match('brighttheme-icon-closer')
        ) {
            return;
        }
        alert('Hey! You clicked the desktop notification!');
    });
}

function errorDesktopPNotify() {
    PNotify.error({
        title: 'Error Desktop Notice',
        text: "I'm a error desktop notification, if you have given me a permission.",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function (e) {
        if (
            e.target.className.match('ui-pnotify-sticker') ||
            e.target.className.match('ui-pnotify-closer') ||
            e.target.className.match('brighttheme-icon-sticker') ||
            e.target.className.match('brighttheme-icon-closer')
        ) {
            return;
        }
        alert('Hey! You clicked the desktop notification!');
    });
}

function warningDesktopPNotify() {
    PNotify.notice({
        title: 'Warning Desktop Notice',
        text: "I'm a warning desktop notification, if you have given me a permission.",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function (e) {
        if (
            e.target.className.match('ui-pnotify-sticker') ||
            e.target.className.match('ui-pnotify-closer') ||
            e.target.className.match('brighttheme-icon-sticker') ||
            e.target.className.match('brighttheme-icon-closer')
        ) {
            return;
        }
        alert('Hey! You clicked the desktop notification!');
    });
}

function infoDesktopPNotify() {
    PNotify.info({
        title: 'Info Desktop Notice',
        text: "I'm a info desktop notification, if you have given me a permission.",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function (e) {
        if (
            e.target.className.match('ui-pnotify-sticker') ||
            e.target.className.match('ui-pnotify-closer') ||
            e.target.className.match('brighttheme-icon-sticker') ||
            e.target.className.match('brighttheme-icon-closer')
        ) {
            return;
        }
        alert('Hey! You clicked the desktop notification!');
    });
}

function topLeftPNotify() {
    if (typeof window.stackTopLeft === 'undefined') {
        window.stackTopLeft = {
            dir1: 'down',
            dir2: 'right',
            firstpos1: 25,
            firstpos2: 25,
            push: 'top'
        };
    }

    PNotify.notice({
        title: 'Over here',
        text: "Check me out. I'm in a different stack.",
        stack: window.stackTopLeft
    });
}

function bottomLeftPNotify() {
    if (typeof window.stackBottomLeft === 'undefined') {
        window.stackBottomLeft = {
            dir1: 'right',
            dir2: 'up',
            firstpos1: 25,
            firstpos2: 25,
            push: 'top'
        };
    }

    PNotify.notice({
        title: 'Over here',
        text: "Check me out. I'm in a different stack.",
        stack: window.stackBottomLeft
    });
}

function bottomRightPNotify() {
    if (typeof window.stackBottomRight === 'undefined') {
        window.stackBottomRight = {
            dir1: 'up',
            dir2: 'left',
            firstpos1: 25,
            firstpos2: 25
        };
    }

    PNotify.notice({
        title: 'Over here',
        text: "Check me out. I'm in a different stack.",
        stack: window.stackBottomRight
    });
}

function customLeftPNotify() {
    if (typeof window.stackCustomLeft === 'undefined') {
        window.stackCustomLeft = {
            dir1: 'right',
            dir2: 'down',
            firstpos1: 200,
            firstpos2: 200
        };
    }

    PNotify.success({
        title: 'Good News Everyone',
        text: "I've invented a device that bites shiny metal asses.",
        stack: window.stackCustomLeft
    });
}

function customBottomPNotify() {
    if (typeof window.stackCustomBottom === 'undefined') {
        window.stackCustomBottom = {
            dir1: 'left',
            dir2: 'up',
            firstpos1: 200,
            firstpos2: 200
        };
    }

    PNotify.success({
        title: 'Good News Everyone',
        text: "I've invented a device that bites shiny metal asses.",
        stack: window.stackCustomBottom
    });
}

function barTopPNotify() {
    if (typeof window.stackBarTop === 'undefined') {
        window.stackBarTop = {
            dir1: 'down',
            firstpos1: 0,
            spacing1: 2,
            push: 'top'
        };
    }

    PNotify.info({
        title: 'Breaking News',
        text: 'Have you met Ted?',
        addClass: 'stack-bar-top',
        cornerClass: 'ui-pnotify-sharp',
        shadow: false,
        width: '100%',
        stack: window.stackBarTop
    });
}

function barBottomPNotify() {
    if (typeof window.stackBarBottom === 'undefined') {
        window.stackBarBottom = {
            dir1: 'up',
            firstpos1: 0,
            spacing1: 2,
            push: 'top'
        };
    }

    PNotify.info({
        title: 'Breaking News',
        text: 'Have you met Ted?',
        addClass: 'stack-bar-bottom',
        cornerClass: 'ui-pnotify-sharp',
        shadow: false,
        width: '100%',
        stack: window.stackBarBottom
    });
}

function noTitlePNotify() {
    PNotify.notice({
        title: false,
        text: "Check me out! I'm a notice without title.",
        icon: false
    });
}

function richContentPNotify() {
    PNotify.notice({
        title: '<b>Rich content notice</b>',
        titleTrusted: true,
        text:
            "Look at my beautiful <strong>strong</strong>, <a href='#' class='alert-link'>linked</a>, <em>emphasized</em>, and <u>underlined</u> text with <i class='icon-make-group' /> icon.",
        textTrusted: true
    });
}

function closeOnClickPNotify() {
    const notice = PNotify.notice({
        title: 'Close on click',
        text: 'Click me anywhere to dismiss me.',
        hide: false,
        icon: false,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        }
    });
    notice.on('click', function () {
        notice.close();
    });
}

function customButtonPNotify() {
    PNotify.notice({
        title: 'Choose a Side',
        text: 'You have three options to choose from.',
        icon: 'fa fa-question-circle',
        hide: false,
        modules: {
            Confirm: {
                confirm: true,
                buttons: [
                    {
                        text: 'Fries',
                        primary: true,
                        click: function (notice) {
                            notice.update({
                                title: "You've Chosen a Side",
                                text: 'You want fries.',
                                icon: true,
                                type: 'error',
                                hide: true,
                                modules: {
                                    Confirm: {
                                        confirm: false
                                    },
                                    Buttons: {
                                        closer: true,
                                        sticker: true
                                    }
                                }
                            });
                        }
                    },
                    {
                        text: 'Mash',
                        click: function (notice) {
                            notice.update({
                                title: "You've Chosen a Side",
                                text: 'You want mashed potatoes.',
                                icon: true,
                                type: 'info',
                                hide: true,
                                modules: {
                                    Confirm: {
                                        confirm: false
                                    },
                                    Buttons: {
                                        closer: true,
                                        sticker: true
                                    }
                                }
                            });
                        }
                    },
                    {
                        text: 'Fruit',
                        click: function (notice) {
                            notice.update({
                                title: "You've Chosen a Side",
                                text: 'You want fruit.',
                                icon: true,
                                type: 'success',
                                hide: true,
                                modules: {
                                    Confirm: {
                                        confirm: false
                                    },
                                    Buttons: {
                                        closer: true,
                                        sticker: true
                                    }
                                }
                            });
                        }
                    }
                ]
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            }
        }
    });
}

function callbackButtonPNotify() {
    const dontAlert = function () {};
    PNotify.notice({
        title: "I'm Here",
        text: "I have a callback for each of my events. I'll call all my callbacks while I change states.",
        modules: {
            Callbacks: {
                beforeInit: function (opts) {
                    dontAlert(
                        "I'm called before the notice initializes. I'm passed the options used to make the notice. I can modify them. Watch me replace the word callback with tire iron!"
                    );
                    opts.text = opts.text.replace(/callback/g, 'tire iron');
                },
                afterInit: function (notice) {
                    dontAlert(
                        "I'm called after the notice initializes. I'm passed the PNotify object for the current notice: " +
                            notice +
                            "\n\nThere are more callbacks you can assign, but this is the last notice you'll see. Check the code to see them all."
                    );
                },
                beforeOpen: function (notice) {
                    alert("I'm called before the notice opens. I'm passed the PNotify object for the current notice: " + notice);
                },
                afterOpen: function (notice) {
                    dontAlert("I'm called after the notice opens. I'm passed the PNotify object for the current notice: " + notice);
                },
                beforeClose: function (notice, timerHide) {
                    alert("I'm called before the notice closes. I'm passed the PNotify object for the current notice: " + notice);
                    dontAlert(
                        'I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: ' +
                            timerHide
                    );
                },
                afterClose: function (notice, timerHide) {
                    dontAlert("I'm called after the notice closes. I'm passed the PNotify object for the current notice: " + notice);
                    dontAlert(
                        'I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: ' +
                            timerHide
                    );
                }
            }
        }
    });
}

function dynamicProgressButtonPNotify() {
    let percent = 0;
    const notice = PNotify.info({
        text: 'Please Wait',
        icon: 'fa fa-spinner fa-pulse',
        hide: false,
        shadow: false,
        width: '200px',
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        }
    });

    setTimeout(function () {
        notice.update({
            title: false
        });
        const interval = setInterval(function () {
            percent += 2;
            const options = {
                text: percent + '% complete.'
            };
            if (percent === 80) {
                options.title = 'Almost There';
            }
            if (percent >= 100) {
                window.clearInterval(interval);
                options.title = 'Done!';
                options.type = 'success';
                options.hide = true;
                options.icon = 'fa fa-check';
                options.shadow = true;
                options.width = PNotify.defaults.width;
                options.modules = {
                    Buttons: {
                        closer: true,
                        sticker: true
                    }
                };
            }
            notice.update(options);
        }, 120);
    }, 2000);
}

function multiLinePNotify() {
    const notice = PNotify.notice({
        title: 'Input Needed',
        text: 'Write me a poem, please.',
        icon: 'fa fa-question-circle',
        hide: false,
        modules: {
            Confirm: {
                prompt: true,
                promptMultiLine: true,
                promptValue: 'Roses are red,\nViolets are blue,\n'
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            }
        }
    });
    notice.on('pnotify.confirm', function (e) {
        notice.cancelClose().update({
            title: 'Your Poem',
            text: e.value,
            icon: true,
            type: 'success',
            hide: true,
            modules: {
                Confirm: {
                    prompt: false
                },
                Buttons: {
                    closer: true,
                    sticker: true
                }
            }
        });
    });
    notice.on('pnotify.cancel', function (e) {
        notice.cancelClose().update({
            title: "You Don't Like Poetry",
            text: 'Roses are dead,\nViolets are dead,\nI suck at gardening.',
            icon: true,
            type: 'error',
            hide: true,
            modules: {
                Confirm: {
                    prompt: false
                },
                Buttons: {
                    closer: true,
                    sticker: true
                }
            }
        });
    });
}

function promptPNotify() {
    const notice = PNotify.notice({
        title: 'Input Needed',
        text: 'What side would you like?',
        icon: 'fa fa-question-circle',
        hide: false,
        modules: {
            Confirm: {
                prompt: true
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            }
        }
    });
    notice.on('pnotify.confirm', function (e) {
        notice.cancelClose().update({
            title: "You've Chosen a Side",
            text: 'You want ' + e.value + '.',
            icon: true,
            type: 'success',
            hide: true,
            modules: {
                Confirm: {
                    prompt: false
                },
                Buttons: {
                    closer: true,
                    sticker: true
                }
            }
        });
    });
    notice.on('pnotify.cancel', function (e) {
        notice.cancelClose().update({
            title: "You Don't Want a Side",
            text: 'No soup for you!',
            icon: true,
            type: 'error',
            hide: true,
            modules: {
                Confirm: {
                    prompt: false
                },
                Buttons: {
                    closer: true,
                    sticker: true
                }
            }
        });
    });
}

function confirmPNotify() {
    const notice = PNotify.notice({
        title: 'Confirmation Needed',
        text: 'Are you sure?',
        icon: 'fa fa-question-circle',
        hide: false,
        modules: {
            Confirm: {
                confirm: true
            },
            Buttons: {
                closer: false,
                sticker: false
            },
            History: {
                history: false
            }
        }
    });
    notice.on('pnotify.confirm', function () {
        alert('Ok, cool.');
    });
    notice.on('pnotify.cancel', function () {
        alert('Oh ok. Chicken, I see.');
    });
}

function stickeyPNotify() {
    PNotify.notice({
        title: 'Sticky Notice',
        text: "Check me out! I'm a sticky notice. You'll have to close me yourself.",
        hide: false
    });
}

function permanentPNotify() {
    PNotify.notice({
        title: 'Permanent Buttons Notice',
        text: "My buttons are really lonely, so they're gonna hang out with us.",
        modules: {
            Buttons: {
                closerHover: false,
                stickerHover: false
            }
        }
    });
}

const AdvancePNotify = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/pnotify"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Notification Alert</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>Default Notice</td>
                                        <td>
                                            <Button size="sm" variant="inverse" onClick={defaultPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Use method <code>notice</code> with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Primary Notice</td>
                                        <td>
                                            <Button size="sm" variant="primary" onClick={primaryPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Use method <code>notice</code> with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Success Notice</td>
                                        <td>
                                            <Button size="sm" variant="success" onClick={successPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Use method <code>success</code> with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Info Notice</td>
                                        <td>
                                            <Button size="sm" variant="info" onClick={infoPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Use method <code>info</code> with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Error Notice</td>
                                        <td>
                                            <Button size="sm" variant="danger" onClick={errorPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Use method <code>error</code> with <code>PNotify</code>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Desktop Alert</Card.Title>
                        </Card.Header>
                        <Card.Body className="btn-page">
                            <Card.Text>
                                Use variant method from notification alert and set <code>option</code> like,{' '}
                                <code>{'modules:{ Desktop: { desktop: true}}'}</code> with <code>PNotify</code>
                            </Card.Text>
                            <Button variant="success" onClick={successDesktopPNotify}>
                                <i className="feather icon-bell" /> Click Here!
                            </Button>
                            <Button variant="info" onClick={infoDesktopPNotify}>
                                <i className="feather icon-bell" /> Click Here!
                            </Button>
                            <Button variant="warning" onClick={warningDesktopPNotify}>
                                <i className="feather icon-bell" /> Click Here!
                            </Button>
                            <Button variant="danger" onClick={errorDesktopPNotify}>
                                <i className="feather icon-bell" /> Click Here!
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Notification Position</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>Top Left</td>
                                        <td>
                                            <Button size="sm" onClick={topLeftPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>
                                                {"stack:{'dir1': 'down', 'dir2': 'right', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"}
                                            </code>{' '}
                                            with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bottom Left</td>
                                        <td>
                                            <Button size="sm" onClick={bottomLeftPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>
                                                {"stack:{'dir1': 'right', 'dir2': 'up', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"}
                                            </code>{' '}
                                            with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bottom Right</td>
                                        <td>
                                            <Button size="sm" onClick={bottomRightPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>{"stack:{'dir1': 'up', 'dir2': 'left', 'firstpos1': 25, 'firstpos2': 25}"}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Left</td>
                                        <td>
                                            <Button size="sm" onClick={customLeftPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>{"stack:{'dir1': 'right', 'dir2': 'down', 'firstpos1': 200, 'firstpos2': 200}"}</code>{' '}
                                            with <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Right</td>
                                        <td>
                                            <Button size="sm" onClick={customBottomPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>{"stack:{'dir1': 'left', 'dir2': 'up', 'firstpos1': 200, 'firstpos2': 200}"}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Top</td>
                                        <td>
                                            <Button size="sm" onClick={barTopPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>{"stack:{'dir1': 'down', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Bottom</td>
                                        <td>
                                            <Button size="sm" onClick={barBottomPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like,{' '}
                                            <code>{"stack:{'dir1': 'up', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Notification Position</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>No Title</td>
                                        <td>
                                            <Button size="sm" onClick={noTitlePNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like, <code>{'title:false, icon: false'}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Rich Title/Content</td>
                                        <td>
                                            <Button size="sm" onClick={richContentPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>option</code> like, <code>{'titleTrusted:true, textTrusted: true'}</code> with{' '}
                                            <code>PNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Click to Close</td>
                                        <td>
                                            <Button size="sm" onClick={closeOnClickPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>closeOnClickPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Button</td>
                                        <td>
                                            <Button size="sm" onClick={customButtonPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>customButtonPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Callback Button</td>
                                        <td>
                                            <Button size="sm" onClick={callbackButtonPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>callbackButtonPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dynamic Progress Button</td>
                                        <td>
                                            <Button size="sm" onClick={dynamicProgressButtonPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>dynamicProgressButtonPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Multi Line Props</td>
                                        <td>
                                            <Button size="sm" onClick={multiLinePNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>multiLinePNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Prompt Button</td>
                                        <td>
                                            <Button size="sm" onClick={promptPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>promptPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Confirm Button</td>
                                        <td>
                                            <Button size="sm" onClick={confirmPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>confirmPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Stickey Button</td>
                                        <td>
                                            <Button size="sm" onClick={stickeyPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>stickeyPNotify</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Permanent Button</td>
                                        <td>
                                            <Button size="sm" onClick={permanentPNotify}>
                                                <i className="feather icon-bell" /> Click Here!
                                            </Button>
                                        </td>
                                        <td>
                                            Set <code>function</code> like, <code>permanentPNotify</code>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvancePNotify;
