import namor from 'namor';
import React from 'react';
import { Link } from 'react-router-dom';

const images = require.context('../assets/images/user', true);

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
};

const GetAvatar = (name) => {
    const photo_new = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    let photo = images(`./${photo_new}`);
    return <img src={photo.default} className="img-fluid img-radius wid-40" alt={name} />;
};

const newPerson = () => {
    let nameEmail = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    const name = (nameEmail.charAt(0).toUpperCase() + nameEmail.slice(1)).replaceAll('-', ' ');

    const description = namor.generate({ words: 2, saltLength: 0, saltType: 'number' }).replaceAll('-', ' ');

    return {
        id: namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        name: name,
        avatar: GetAvatar(name),
        description: description,
        email: nameEmail + '@gmail.com',
        phone:
            '+9' +
            Math.floor(Math.random() * 9 + 1) +
            ' ' +
            namor.generate({ words: 0, saltLength: 3, saltType: 'number' }) +
            '-' +
            namor.generate({ words: 0, saltLength: 6, saltType: 'number' }),
        date: randomDate(new Date(2012, 0, 1), new Date()),
        action: (
            <React.Fragment>
                <Link to="#" className="text-primary mx-1">
                    <i className="feather icon-edit" />
                </Link>
                <Link to="#" className="text-danger">
                    <i className="feather icon-trash-2" />
                </Link>
            </React.Fragment>
        )
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map((d) => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
            };
        });
    };

    return makeDataLevel();
}
