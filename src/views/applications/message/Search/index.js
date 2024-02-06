import React from 'react';

const Search = (props) => {
    const { onChange } = props;
    return (
        <React.Fragment>
            <div className="h-list-header m-b-5">
                <div className="input-group">
                    <input type="text" id="msg-friends" className="form-control" placeholder="Search Friend . . ." onChange={onChange} />
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="feather icon-search" />
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;
