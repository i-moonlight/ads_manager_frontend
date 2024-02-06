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

const GetMembers = () => {
    const count = Math.floor(Math.random() * 5 + 1);
    const photo_new = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    const photo_new1 = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    const photo_new2 = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    let photo = images(`./${photo_new}`);
    let photo1 = images(`./${photo_new1}`);
    let photo2 = images(`./${photo_new2}`);

    return (
        <React.Fragment>
            {count < 2 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo.default} style={{ width: '30px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count < 3 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo1.default} style={{ width: '30px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count < 4 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo2.default} style={{ width: '30px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count < 5 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo2.default} style={{ width: '30px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count === 5 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo2.default} style={{ width: '30px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            <Link to="#">
                <i className="fas fa-plus f-w-600 m-l-5" />
            </Link>
        </React.Fragment>
    );
};

let i = 1;

const newPerson = () => {
    let nameEmail = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    const name = (nameEmail.charAt(0).toUpperCase() + nameEmail.slice(1)).replaceAll('-', ' ');
    const tags = Math.floor(Math.random() * 5 + 1);
    const status = Math.floor(Math.random() * 5 + 1);
    const description = namor.generate({ words: 2, saltLength: 0, saltType: 'number' }).replaceAll('-', ' ');
    const deadline = new Date();
    deadline.setDate(new Date().getDate() + 365);

    return {
        id: i++,
        name: name,
        avatar: GetAvatar(name),
        description: (
            <React.Fragment>
                {description}
                <small className="d-block">
                    <Link to="#">View</Link> |<Link to="#">Contacts</Link> |
                    <Link to="#" className="text-danger">
                        Delete{' '}
                    </Link>
                </small>
            </React.Fragment>
        ),
        email: nameEmail + '@gmail.com',
        phone:
            '+9' +
            Math.floor(Math.random() * 9 + 1) +
            ' ' +
            namor.generate({ words: 0, saltLength: 3, saltType: 'number' }) +
            '-' +
            namor.generate({ words: 0, saltLength: 6, saltType: 'number' }),
        date: randomDate(new Date(2012, 0, 1), new Date()),
        deadline: randomDate(new Date(), deadline),
        active: (
            <div className="custom-control custom-switch">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={'customSwitch' + i}
                    defaultChecked={Math.floor(Math.random() * 2 + 1) > 1}
                />
                <label className="custom-control-label" htmlFor={'customSwitch' + i} />
            </div>
        ),
        group: (
            <React.Fragment>
                {Math.floor(Math.random() * 2 + 1) > 1 && <span className="badge badge-danger inline-block mr-1">Low Budget</span>}
                {Math.floor(Math.random() * 2 + 1) > 1 && <span className="badge badge-success inline-block mr-1">High Budget</span>}
                {Math.floor(Math.random() * 2 + 1) > 1 && <span className="badge badge-warning inline-block mr-1">VIP</span>}
                {Math.floor(Math.random() * 2 + 1) > 1 && <span className="badge badge-primary inline-block">Wholesaler</span>}
            </React.Fragment>
        ),
        tags: (
            <React.Fragment>
                {tags === 1 && <span className="badge badge-danger inline-block mr-1">Wordpress</span>}
                {tags === 2 && <span className="badge badge-success inline-block mr-1">Vue</span>}
                {tags === 3 && <span className="badge badge-warning inline-block mr-1">React</span>}
                {tags === 4 && <span className="badge badge-primary inline-block">Angular</span>}
                {tags === 5 && <span className="badge badge-info inline-block">HTML</span>}
            </React.Fragment>
        ),
        status: (
            <React.Fragment>
                {status === 1 && <span className="badge badge-primary inline-block mr-1">In Proccess</span>}
                {status === 2 && <span className="badge badge-warning inline-block mr-1">Delay</span>}
                {status === 3 && <span className="badge badge-success inline-block mr-1">Completed</span>}
                {status === 4 && <span className="badge badge-info inline-block">Pending</span>}
                {status === 5 && <span className="badge badge-danger inline-block">Cancelled</span>}
            </React.Fragment>
        ),
        member: GetMembers(),
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
