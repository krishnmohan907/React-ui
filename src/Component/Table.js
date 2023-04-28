import PropTypes from 'prop-types'
import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
export default function Table(props) {
    const { StudentRecords, handlePageClick, exportExcel, total, modalEdit, modalDelete, modalClose } = props;


    // const modalEdit = (val) => {
    //     console.log('add item', val);
    //     setShow(true);
    // }


    // const modalDelete = (val) => {
    //     console.log('Delere item', val);
    //     deletesetShow(true);
    // }

    // const modalClose = () => setShow(false); 
    const coloums = [
        {
            Header: 'StudentName',
            accessor: 'studentName',
        },
        {
            Header: 'EMAIL',
            accessor: 'email'
        },
        {
            Header: 'COUNTRY',
            accessor: 'country'
        },
        {
            Header: 'State',
            accessor: 'state'
        },
        {
            Header: 'Phone Number',
            accessor: 'phoneNumber'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
        {
            Header: 'PINCODE',
            accessor: 'pincode'
        },
        {
            Header: 'CourseType',
            accessor: 'courseType'
        },

    ]

    return (
        <div>
            <button className='export' onClick={exportExcel}>export Excel</button>
            <table class="table table-bordered table-dark">
                <tr>
                    {coloums.map((ele) => {
                        return <th style={{ color: "black" }}>{ele.Header}</th>;
                    })}
                    <th>
                        Action
                    </th>
                </tr>
                {StudentRecords.data &&
                    StudentRecords.data.map((val, Index) => {
                        return (
                            <tr key={Index + 1}>
                                {coloums.map((ele) => {
                                    return <>
                                    {ele.accessor === 'studentName' ? <td><a href='/signUp'>{val[ele.accessor]}</a></td> : <td>{val[ele.accessor]}</td>}
                                    </>
                                })}
                                <th>
                                    <Button variant="success" onClick={() => modalEdit(val)}>
                                        Edit
                                    </Button> &nbsp;&nbsp;
                                    <Button variant="success" onClick={() => modalDelete(val)}>
                                        Delete
                                    </Button>
                                </th>
                            </tr>
                        );

                    })}

            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={total}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>

    )
}
