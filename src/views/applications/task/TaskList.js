import React, { useState } from 'react';
import { Row, Col, Card, Pagination } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';

import { GlobalFilter } from './GlobalFilter';

import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import makeData from '../../../data/taskListData';

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

        globalFilter,
        setGlobalFilter,

        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex align-items-center">
                    Show
                    <select
                        className="form-control w-auto mx-2"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    entries
                </Col>
                <Col>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </Col>
            </Row>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <span className="feather icon-arrow-down text-muted" />
                                            ) : (
                                                <span className="feather icon-arrow-up text-muted" />
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </BTable>
            <Row className="justify-content-between">
                <Col>
                    <span className="d-flex align-items-center">
                        Page{' '}
                        <strong>
                            {' '}
                            {pageIndex + 1} of {pageOptions.length}{' '}
                        </strong>{' '}
                        | Go to page:{' '}
                        <input
                            type="number"
                            className="form-control ml-2"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            style={{ width: '100px' }}
                        />
                    </span>
                </Col>
                <Col>
                    <Pagination className="justify-content-end">
                        <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                        <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                        <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                        <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
                    </Pagination>
                </Col>
            </Row>
        </>
    );
}

const TaskList = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id'
            },
            {
                Header: 'Task List',
                accessor: 'task'
            },
            {
                Header: 'Last Comit',
                accessor: 'date'
            },
            {
                Header: 'Status',
                accessor: 'status'
            },
            {
                Header: 'Assigned User',
                accessor: 'users'
            },
            {
                Header: 'Action',
                accessor: 'action'
            }
        ],
        []
    );

    const data = React.useMemo(() => makeData(100), []);

    const [selectedTask, setSelectedTask] = useState([]);

    const handleClick = (e) => {
        const clickedValue = e.target.value;
        if (e.target.checked) {
            setSelectedTask([...selectedTask, parseInt(clickedValue)]);
        } else {
            setSelectedTask(selectedTask.filter((item) => item !== parseInt(clickedValue)));
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Task List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table columns={columns} data={data} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">To Do List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control add_task_todo" placeholder="Create your task list" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary btn-icon btn-msg-send" type="button">
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="new-task">
                                <div className="to-do-list mb-4">
                                    <div className="checkbox-fade fade-in-primary">
                                        <label
                                            className={
                                                selectedTask.findIndex((item) => item === 1) > -1 ? 'check-task done-task' : 'check-task'
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                value={1}
                                                defaultChecked={selectedTask.findIndex((item) => item === 1) > -1}
                                                onClick={(e) => handleClick(e)}
                                            />
                                            <span className="cr mr-3">
                                                <i className="cr-icon fa fa-check txt-primary" />
                                            </span>
                                            <span>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                                been the industry's
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="to-do-list mb-4">
                                    <div className="checkbox-fade fade-in-primary">
                                        <label
                                            className={
                                                selectedTask.findIndex((item) => item === 2) > -1 ? 'check-task done-task' : 'check-task'
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                value={2}
                                                defaultChecked={selectedTask.findIndex((item) => item === 2) > -1}
                                                onClick={(e) => handleClick(e)}
                                            />
                                            <span className="cr mr-3">
                                                <i className="cr-icon fa fa-check txt-primary" />
                                            </span>
                                            <span>scrambled it to make a type specimen book. It has survived not only five centuries</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="to-do-list mb-4">
                                    <div className="checkbox-fade fade-in-primary">
                                        <label
                                            className={
                                                selectedTask.findIndex((item) => item === 3) > -1 ? 'check-task done-task' : 'check-task'
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                value={3}
                                                defaultChecked={selectedTask.findIndex((item) => item === 3) > -1}
                                                onClick={(e) => handleClick(e)}
                                            />
                                            <span className="cr mr-3">
                                                <i className="cr-icon fa fa-check txt-primary" />
                                            </span>
                                            <span>
                                                It is a long established fact that a reader will be distracted by the readable content of a
                                                page
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="to-do-list mb-4">
                                    <div className="checkbox-fade fade-in-primary">
                                        <label
                                            className={
                                                selectedTask.findIndex((item) => item === 4) > -1 ? 'check-task done-task' : 'check-task'
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                value={4}
                                                defaultChecked={selectedTask.findIndex((item) => item === 4) > -1}
                                                onClick={(e) => handleClick(e)}
                                            />
                                            <span className="cr mr-3">
                                                <i className="cr-icon fa fa-check txt-primary" />
                                            </span>
                                            <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="to-do-list mb-4">
                                    <div className="checkbox-fade fade-in-primary">
                                        <label
                                            className={
                                                selectedTask.findIndex((item) => item === 5) > -1 ? 'check-task done-task' : 'check-task'
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                value={5}
                                                defaultChecked={selectedTask.findIndex((item) => item === 5) > -1}
                                                onClick={(e) => handleClick(e)}
                                            />
                                            <span className="cr mr-3">
                                                <i className="cr-icon fa fa-check txt-primary" />
                                            </span>
                                            <span>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TaskList;
