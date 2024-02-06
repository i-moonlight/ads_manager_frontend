import React, { createRef, useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ValidationForm, TextInputGroup } from 'react-bootstrap4-form-validation';

import Friend from './Friends/Friend';
import Messages from './Friends/Chat/Messages';

import Search from './Search';

import axios from '../../../utils/axios';

const Message = () => {
    const formRef = createRef();
    const [scrollEl, setScrollEl] = useState();

    const [friend, setFriend] = useState([]);
    const [chatMsg, setChatMsg] = useState([]);
    const [user, setUser] = useState({ id: 6 });
    const [newMsg, setNewMsg] = useState('');

    const getFriend = async () => {
        const response = await axios.get('/api/friend/list');
        setFriend(response.data.friends);
    };

    const getFriendChat = async (user, scrollEl) => {
        const response = await axios.get('/api/friend/chat', {
            params: {
                id: user.id
            }
        });
        setChatMsg(response.data.messages);

        const elmnt = document.getElementById('main-friend-chat');
        if (scrollEl) {
            scrollEl.scrollTop = elmnt.offsetHeight;
        }
    };

    useEffect(() => {
        getFriend();
        getFriendChat(user, scrollEl);
    }, [user, scrollEl]);

    const friendListHandler = (item) => {
        setUser(item);
        const elmnt = document.getElementById('main-friend-chat');
        scrollEl.scrollTop = elmnt.offsetHeight;
    };

    const friendList = friend.map((f) => {
        return <Friend key={f.id} data={f} activeId={user.id} clicked={() => friendListHandler(f)} />;
    });

    let message = <div className="text-center text-danger">Chat Not Found</div>;
    chatMsg.filter((chats) => {
        message = chats.messages.map((msg, index) => {
            return <Messages key={index} message={msg} name={user.name} photo={chats.friend_photo} />;
        });
        return false;
    });

    const handleSearchChange = async (event) => {
        try {
            event.persist();

            const { value } = event.target;
            if (value) {
                const response = await axios.get('/api/friend/search', {
                    params: {
                        query: value
                    }
                });
                setFriend(response.data.results);
            } else {
                const response = await axios.get('/api/friend/list');
                setFriend(response.data.friends);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setNewMsg(e.target.value);
    };

    const handleSubmit = async (e, formData, inputs) => {
        e.preventDefault();
        await axios
            .post('/api/friend/chat/add', {
                id: user.id,
                msg: newMsg
            })
            .then((response) => {
                resetForm();
                setNewMsg('');
                setChatMsg(response.data.messages);
                const elmnt = document.getElementById('main-friend-chat');
                scrollEl.scrollTop = elmnt.offsetHeight;
            });
    };

    const resetForm = () => {
        formRef.current.resetValidationState(true);
    };

    const handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card className="msg-card">
                        <Card.Body>
                            <Row>
                                <Col xl={3} md={12}>
                                    <Search onChange={handleSearchChange} />
                                    <div className="h-list-body">
                                        <div className="msg-user-list scroll-div">
                                            <div className="main-friend-list" style={{ height: 'calc(100vh - 300px)' }}>
                                                <PerfectScrollbar>{friendList}</PerfectScrollbar>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={9} md={12}>
                                    <div className="h-list-body">
                                        <div className="msg-user-chat scroll-div" style={{ height: 'calc(100vh - 340px)' }}>
                                            <PerfectScrollbar
                                                containerRef={(ref) => {
                                                    setScrollEl(ref);
                                                }}
                                            >
                                                <div id="main-friend-chat" className="main-friend-chat">
                                                    {message}
                                                </div>
                                            </PerfectScrollbar>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="msg-form">
                                        <ValidationForm ref={formRef} onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <TextInputGroup
                                                        name="newMsg"
                                                        id="newMsg"
                                                        placeholder="Send message"
                                                        required
                                                        append={
                                                            <Button
                                                                type="submit"
                                                                variant="link"
                                                                className="btn-theme btn-icon btn-msg-send"
                                                            >
                                                                <i className="feather icon-play" />
                                                            </Button>
                                                        }
                                                        value={newMsg}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </ValidationForm>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Message;
