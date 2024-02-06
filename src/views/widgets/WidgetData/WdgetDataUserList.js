import React, { useState } from 'react';

const UserList = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    };

    return (
        <React.Fragment>
            <div className="to-do-list mb-3">
                <div className="checkbox-fade fade-in-default">
                    <label className={isChecked ? 'check-task done-task' : 'check-task'}>
                        <input type="checkbox" value="" defaultChecked={isChecked} onChange={(e) => checkHandler(e)} />
                        <span className="cr">
                            <i className="cr-icon fa fa-check" />
                        </span>
                        <div className="row">
                            <div className="col-auto">
                                <img className="rounded-circle" style={{ width: '40px' }} src={props.avatar} alt="chat-user" />
                            </div>
                            <div className="col">
                                <h6>{props.name}</h6>
                                <p className="text-muted m-0">{props.caption}</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserList;
