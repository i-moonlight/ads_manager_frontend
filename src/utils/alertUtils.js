import PNotify from 'pnotify/dist/es/PNotify';

export const AlertSuccess = (message) => {
    const notice = PNotify.success({
        title: false,
        text: message,
        icon: true,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        },
        delay: 2500
    });
    notice.on('click', function () {
        notice.close();
    });
    return notice;
};

export const AlertError = (message) => {
    const notice = PNotify.error({
        title: false,
        text: message,
        icon: true,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        },
        delay: 2500
    });
    notice.on('click', function () {
        notice.close();
    });
    return notice;
};

export const AlertWarning = (message) => {
    const notice = PNotify.notice({
        title: false,
        text: message,
        icon: true,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        },
        delay: 2500
    });
    notice.on('click', function () {
        notice.close();
    });
    return notice;
};

export const AlertInfo = (message) => {
    const notice = PNotify.info({
        title: false,
        text: message,
        icon: true,
        modules: {
            Buttons: {
                closer: false,
                sticker: false
            }
        },
        delay: 2500
    });
    notice.on('click', function () {
        notice.close();
    });
    return notice;
};
