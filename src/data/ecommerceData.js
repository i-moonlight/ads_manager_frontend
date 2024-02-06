import namor from 'namor';
import React from 'react';
import { Link } from 'react-router-dom';

const imagesProd = require.context('../assets/images/product', true);
const images = require.context('../assets/images/user', true);

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const GetAvatar = (name) => {
    const photo_new = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    let photo = images(`./${photo_new}`);
    return <img src={photo.default} className="img-fluid img-radius wid-40" alt={name} />;
};

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
};

const GetProducts = () => {
    const count = Math.floor(Math.random() * 5 + 0);
    const photo_new = 'prod-' + Math.floor(Math.random() * 12 + 1) + '.jpg';
    let photo = imagesProd(`./${photo_new}`);

    return (
        <React.Fragment>
            <img src={photo.default} alt="contact-img" title="contact-img" className="rounded mr-3 wid-40" />
            <p className="m-0 d-inline-block align-middle font-16">
                <Link to="#" className="text-body">
                    Amazing Rolling Chair
                </Link>
                <br />
                {count >= 1 ? <span className="text-warning feather icon-star-on" /> : <span className="text-warning feather icon-star" />}
                {count > 2 ? <span className="text-warning feather icon-star-on" /> : <span className="text-warning feather icon-star" />}
                {count > 3 ? <span className="text-warning feather icon-star-on" /> : <span className="text-warning feather icon-star" />}
                {count > 4 ? <span className="text-warning feather icon-star-on" /> : <span className="text-warning feather icon-star" />}
                {count >= 5 ? <span className="text-warning feather icon-star-on" /> : <span className="text-warning feather icon-star" />}
            </p>
        </React.Fragment>
    );
};

let i = 1;

const newPerson = () => {
    let nameEmail = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    const name = (nameEmail.charAt(0).toUpperCase() + nameEmail.slice(1)).replaceAll('-', ' ');
    const status = Math.floor(Math.random() * 5 + 1);

    return {
        id: i++,
        name: name,
        avatar: GetAvatar(name),
        email: nameEmail + '@gmail.com',
        phone:
            '+9' +
            Math.floor(Math.random() * 9 + 1) +
            ' ' +
            namor.generate({ words: 0, saltLength: 3, saltType: 'number' }) +
            '-' +
            namor.generate({ words: 0, saltLength: 6, saltType: 'number' }),
        product: GetProducts(),
        price: '$' + Math.floor(Math.random() * 999 + 100) + '.' + Math.floor(Math.random() * 99 + 0),
        quantity: Math.floor(Math.random() * 999 + 100),
        age: Math.floor(Math.random() * 60 + 18),
        products: Math.floor(Math.random() * 999 + 1),
        date: randomDate(new Date(2012, 0, 1), new Date()),
        status: (
            <React.Fragment>
                {status === 1 && <span className="badge badge-primary inline-block mr-1">In Proccess</span>}
                {status === 2 && <span className="badge badge-warning inline-block mr-1">Delay</span>}
                {status === 3 && <span className="badge badge-success inline-block mr-1">Completed</span>}
                {status === 4 && <span className="badge badge-info inline-block">Pending</span>}
                {status === 5 && <span className="badge badge-danger inline-block">Cancelled</span>}
            </React.Fragment>
        ),
        action: (
            <React.Fragment>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-primary">
                    <i className="feather icon-eye" />
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-info mx-1">
                    <i className="feather icon-edit" />
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-danger">
                    <i className="feather icon-trash-2" />
                </Link>
            </React.Fragment>
        ),
        options: (
            <React.Fragment>
                <Link to="#" className="btn btn-icon btn-rounded btn-info mx-1">
                    <i className="feather icon-edit" />
                    &nbsp;Edit
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-danger">
                    <i className="feather icon-trash-2" />
                    &nbsp;Delete
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
