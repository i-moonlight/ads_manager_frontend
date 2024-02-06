import React from 'react';
import { Alert } from 'react-bootstrap';
import { ToastProvider, ToastConsumer } from 'react-toast-notifications';

const AlertMessage = ({ appearance, children, onDismiss }) => {
    return (
        <Alert variant={appearance} dismissible onClose={onDismiss}>
            {children}
        </Alert>
    );
};

const BasicNotifications = (props) => {
    return (
        <React.Fragment>
            <ToastProvider components={{ Toast: AlertMessage }} placement={props.notification.placement}>
                <ToastConsumer>
                    {({ add }) => {
                        return (
                            <span
                                onClick={() =>
                                    add(props.notification.message, {
                                        appearance: props.notification.variant,
                                        autoDismiss: props.notification.autoDismiss
                                    })
                                }
                            >
                                {props.children}
                            </span>
                        );
                    }}
                </ToastConsumer>
            </ToastProvider>
        </React.Fragment>
    );
};

export default BasicNotifications;
