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

const GetAvatar = (name) => {
    const photo_new = 'avatar-' + Math.floor(Math.random() * 5 + 1) + '.jpg';
    let photo = images(`./${photo_new}`);
    return <img src={photo.default} className="img-fluid img-radius wid-40" alt={name} />;
};

const newPerson = () => {
    let nameEmail = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    const name = (nameEmail.charAt(0).toUpperCase() + nameEmail.slice(1)).replaceAll('-', ' ');

    let department = namor.generate({ words: 2, saltLength: 0, saltType: 'number' });
    department = (department.charAt(0).toUpperCase() + department.slice(1)).replaceAll('-', ' ');

    const description = namor.generate({ words: 4, saltLength: 0, saltType: 'number' }).replaceAll('-', ' ');
    const number = Math.floor(Math.random() * 6 + 1);
    let variant = '';
    switch (number) {
        case 1:
            variant = 'primary';
            break;
        case 2:
            variant = 'danger';
            break;
        case 3:
            variant = 'success';
            break;
        case 4:
            variant = 'info';
            break;
        case 5:
            variant = 'warning';
            break;
        case 6:
            variant = 'dark';
            break;
        default:
            variant = 'primary';
    }

    const bloodNumber = Math.floor(Math.random() * 8 + 1);
    let bloodGroup = '';
    switch (bloodNumber) {
        case 1:
            bloodGroup = 'A+';
            break;
        case 2:
            bloodGroup = 'B+';
            break;
        case 3:
            bloodGroup = 'AB+';
            break;
        case 4:
            bloodGroup = 'O+';
            break;
        case 5:
            bloodGroup = 'A-';
            break;
        case 6:
            bloodGroup = 'B-';
            break;
        case 7:
            bloodGroup = 'AB-';
            break;
        default:
            bloodGroup = 'O-';
    }

    return {
        id: namor.generate({ words: 0, saltLength: 2, saltType: 'number' }),
        name: name,
        department: department,
        avatar: GetAvatar(name),
        icon: <span className={'badge badge-light-' + variant + ' text-capitalize'}>{name.charAt(0)}</span>,
        description: description,
        email: nameEmail + '@gmail.com',
        phone:
            '+9' +
            Math.floor(Math.random() * 9 + 1) +
            ' ' +
            namor.generate({ words: 0, saltLength: 3, saltType: 'number' }) +
            '-' +
            namor.generate({ words: 0, saltLength: 6, saltType: 'number' }),
        sex: Math.floor(Math.random() * 2 + 1) > 1 ? 'Male' : 'Female',
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
        age: Math.floor(Math.random() * 60 + 18),
        blood: bloodGroup,
        options: (
            <React.Fragment>
                <Link to="#" className="btn btn-icon btn-rounded btn-primary">
                    <i className="feather icon-plus" />
                    Manage Facilities
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-info mx-1">
                    <i className="feather icon-edit" />
                    &nbsp;Edit
                </Link>
                <Link to="#" className="btn btn-icon btn-rounded btn-danger">
                    <i className="feather icon-trash-2" />
                    &nbsp;Delete
                </Link>
            </React.Fragment>
        ),
        action: (
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
