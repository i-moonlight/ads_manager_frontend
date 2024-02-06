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
    let today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
};

const GetUsers = () => {
    const count = Math.floor(Math.random() * 3 + 1);
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
                    <img className="img-fluid img-radius m-r-5" src={photo.default} style={{ width: '40px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count < 3 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo1.default} style={{ width: '40px' }} alt="Task List" />
                </Link>
            ) : (
                ''
            )}
            {count === 3 ? (
                <Link to="#">
                    <img className="img-fluid img-radius m-r-5" src={photo2.default} style={{ width: '40px' }} alt="Task List" />
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

const newPerson = () => {
    return {
        id: namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        task: namor.generate({ words: 2, saltLength: 0 }),
        date: (
            <div className="form-group form-primary mb-0">
                <input
                    type="date"
                    className="form-control"
                    defaultValue={randomDate(new Date(2012, 0, 1), new Date())}
                    onChange={(e) => console.log(e)}
                />
                <span className="form-bar" />
            </div>
        ),
        status: (
            <div className="form-group form-primary mb-0">
                <select name="select" className="form-control form-control-sm" defaultValue="open">
                    <option value="open">Open</option>
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                    <option value="invalid">Invalid</option>
                    <option value="on-hold">On hold</option>
                    <option value="close">Close</option>
                </select>
                <span className="form-bar" />
            </div>
        ),
        users: GetUsers(),
        action: (
            <React.Fragment>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-primary">
                    <span className="fas fa-book" />
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-warning mx-1">
                    <span className="fas fa-edit" />
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-outline-danger">
                    <span className="fas fa-trash" />
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
