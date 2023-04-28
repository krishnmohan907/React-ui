import React, { useEffect, useState } from "react";
import "./OrderComponent.css";
import PropTypes from "prop-types";
import Table from "../Table";
import { Modal, Button } from "react-bootstrap";

export default function OrderComponent(props) {
    const { handleSave, saveStudentdata, total, StudentEditRecords, StudentRecords, getStudentData, editSave, deleteData } = props;
    console.log('total records', total);
    const [show, setShow] = useState(false);
    const [deleteshow, deletesetShow] = useState(false);
    const [inputvalues, setInputvalues] = useState({
        studentName: "",
        email: "",
        phoneNumber: "",
        country: "",
        state: "",
        address: "",
        pincode: "",
        courseType: "",
        id: "",
    });
    const [editval, seteditvalvalues] = useState({
        studentName: "",
        email: "",
        phoneNumber: "",
        country: "",
        state: "",
        address: "",
        pincode: "",
        courseType: "",
        id: "",
    });
    const [validation, setValidation] = useState({
        studentName: "",
        email: "",
        phoneNumber: "",
        country: "",
        state: "",
        address: "",
        pincode: "",
        courseType: "",
    });

    const [isDisabled, setDisabled] = useState(false);
    const [deleteid, setDelete] = useState('');
    let filterArgument1 = {
        limit: 10,
        current_page: 0,
    }

    useEffect(() => {
        const filterArgument = {
            limit: 10,
            current_page: 0,
        }
        getStudentData(filterArgument);
    }, []);

    const handleChange = (event) => {
        validate();
        const { name, value } = event.target;
        setInputvalues({ ...inputvalues, [name]: value });
    };

    const editChange = (event) => {
        const { name, value } = event.target;
        seteditvalvalues({ ...editval, [name]: value });
    }

    const modalEdit = (val) => {
        console.log(val)
        editval.id = val._id
        editval.studentName = val.studentName;
        editval.email = val.email;
        editval.phoneNumber = val.phoneNumber;
        editval.address = val.address;
        editval.state = val.state;
        editval.country = val.country;
        editval.pincode = val.pincode;
        editval.courseType = val.courseType
        setShow(true);
    };

    const modalDelete = (val) => {
        console.log("Delere item", val);
        deletesetShow(true);
        setDelete(val._id)

    };

    const modalClose = () => setShow(false);

    const modalDeleteClose = () => deletesetShow(false);

    const validate = () => {
        let errors = validation;
        // student name validation
        if (!inputvalues.studentName.trim()) {
            errors.studentName = "Student Name is required";
        } else {
            errors.studentName = "";
        }
        // email validation

        if (!inputvalues.email.trim()) {
            errors.email = "Email is required";
        } else {
            errors.email = "";
        }
        if (!inputvalues.phoneNumber.trim()) {
            errors.phoneNumber = "Phone Number is required";
        } else {
            errors.phoneNumber = "";
        }
        if (!inputvalues.country.trim()) {
            errors.country = "Country is required";
        } else {
            errors.country = "";
        }
        if (!inputvalues.state.trim()) {
            errors.state = "State is required";
        } else {
            errors.state = "";
        }
        if (!inputvalues.address.trim()) {
            errors.address = "address is required";
        } else {
            errors.address = "";
        }
        if (!inputvalues.pincode.trim()) {
            errors.pincode = "Pincode is Required";
        } else {
            errors.pincode = "";
        }
        if (!inputvalues.courseType.trim()) {
            errors.courseType = "courseType is Required";
        } else {
            errors.courseType = "";
        }
        return setValidation(errors);
    };

    const deleteItem = (e) => {
        let filterArgument1 = {
            limit: 10,
            current_page: 0,
        }
        e.preventDefault();
        console.log('deleteid', deleteid);
        deleteData(deleteid);
        getStudentData(filterArgument1);
        modalDeleteClose();
    }

    const handleSubmit = (e) => {
        let filterArgument1 = {
            limit: 10,
            current_page: 0,
        }
        e.preventDefault();
        setDisabled(false);
        validate();
        handleSave(inputvalues);
        getStudentData(filterArgument1);
        inputvalues.studentName = "";
        inputvalues.email = "";
        inputvalues.phoneNumber = "";
        inputvalues.country = "";
        inputvalues.state = "";
        inputvalues.address = "";
        inputvalues.pincode = "";
        inputvalues.courseType = "";
    }
    const edithandleSubmit = (e) => {
        let filterArgument1 = {
            limit: 10,
            current_page: 0,
        }
        e.preventDefault();
        console.log('edit value list', editval);
        editSave(editval);
        getStudentData(filterArgument1);
        modalClose();
    }

    const handlePageClick = (e) => {
        let filterArg = {
            limit: 10,
            current_page: e.selected,
        }
        getStudentData(filterArg);
    }
    const exportExcel = () => {
        console.log('export excel data', StudentRecords.data);
        // const ws = XLSX.utils.json_to_sheet( StudentRecords.data);
        // const wb = { Sheets: { data: ws }, SheetNames: [ 'data' ] };
        // const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        // const blobData = new Blob([ excelBuffer ], { type: 'export' });
        // // const fileNameWithExt = `${ fileName }-${ timeString }${ EXPORT_FILE_EXT }`;
        // FileSaver.saveAs(blobData);

    }
    return (
        <>
            <div className="App p-4">
                <Modal centered show={show} onHide={modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Student Registation</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputStudentName">
                                    StudentName
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="studentName"
                                    onChange={(e) => editChange(e)}
                                    value={editval.studentName}
                                    id="inputstname"
                                />
                                {validation.studentName && (
                                    <p style={{ color: "red" }}>{validation.studentName}</p>
                                )}
                            </div>
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputemail">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    onChange={(e) => editChange(e)}
                                    value={editval.email}
                                    id="inputemail"
                                />
                                {validation.email && (
                                    <p style={{ color: "red" }}>{validation.email}</p>
                                )}
                            </div>
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputPhoneNumber">
                                    PhoneNumber
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="phoneNumber"
                                    onChange={(e) => editChange(e)}
                                    value={editval.phoneNumber}
                                    id="inputnumber"
                                />
                                {validation.phoneNumber && (
                                    <p style={{ color: "red" }}>{validation.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputEmail4">
                                    country
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="country"
                                    onChange={(e) => editChange(e)}
                                    value={editval.country}
                                    id="inputcountry"
                                />
                                {validation.country && (
                                    <p style={{ color: "red" }}>{validation.country}</p>
                                )}
                            </div>
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputPassword4">
                                    State
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="state"
                                    onChange={(e) => editChange(e)}
                                    value={editval.state}
                                    id="inputstate"
                                />
                                {validation.state && (
                                    <p style={{ color: "red" }}>{validation.state}</p>
                                )}
                            </div>
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputPassword4">
                                    Adresses
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="address"
                                    onChange={(e) => editChange(e)}
                                    value={editval.address}
                                    id="inputadress"
                                />
                                {validation.address && (
                                    <p style={{ color: "red" }}>{validation.address}</p>
                                )}
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputEmail4">
                                    pinCode
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    name="pincode"
                                    onChange={(e) => editChange(e)}
                                    value={editval.pincode}
                                    id="inputEmail4"
                                />
                                {validation.pincode && (
                                    <p style={{ color: "red" }}>{validation.pincode}</p>
                                )}
                            </div>
                            <div class="form-group col-md-4">
                                <label style={{ color: "blue" }} for="inputPassword4">
                                    courseType
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="courseType"
                                    onChange={(e) => editChange(e)}
                                    value={editval.courseType}
                                    id="inputPassword4"
                                />
                                {validation.courseType && (
                                    <p style={{ color: "red" }}>{validation.courseType}</p>
                                )}
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={edithandleSubmit}>
                            Save
                        </Button>
                        <Button variant="primary" onClick={modalClose}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="App p-4">
                <Modal centered show={deleteshow} onHide={modalDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure want Delete </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={deleteItem}>
                            Delete
                        </Button>
                        <Button variant="primary" onClick={modalDeleteClose}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div class="container-fluid">
                <h1 className="student">Student Registation!</h1>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputStudentName">
                                StudentName
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="studentName"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.studentName}
                                id="inputstname"
                            />
                            {validation.studentName && (
                                <p style={{ color: "red" }}>{validation.studentName}</p>
                            )}
                        </div>
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputemail">
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.email}
                                id="inputemail"
                            />
                            {validation.email && (
                                <p style={{ color: "red" }}>{validation.email}</p>
                            )}
                        </div>
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputPhoneNumber">
                                PhoneNumber
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                name="phoneNumber"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.phoneNumber}
                                id="inputnumber"
                            />
                            {validation.phoneNumber && (
                                <p style={{ color: "red" }}>{validation.phoneNumber}</p>
                            )}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputEmail4">
                                country
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="country"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.country}
                                id="inputcountry"
                            />
                            {validation.country && (
                                <p style={{ color: "red" }}>{validation.country}</p>
                            )}
                        </div>
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputPassword4">
                                State
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="state"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.state}
                                id="inputstate"
                            />
                            {validation.state && (
                                <p style={{ color: "red" }}>{validation.state}</p>
                            )}
                        </div>
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputPassword4">
                                Adresses
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="address"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.address}
                                id="inputadress"
                            />
                            {validation.address && (
                                <p style={{ color: "red" }}>{validation.address}</p>
                            )}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputEmail4">
                                pinCode
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                name="pincode"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.pincode}
                                id="inputEmail4"
                            />
                            {validation.pincode && (
                                <p style={{ color: "red" }}>{validation.pincode}</p>
                            )}
                        </div>
                        <div class="form-group col-md-4">
                            <label style={{ color: "blue" }} for="inputPassword4">
                                courseType
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="courseType"
                                onChange={(e) => handleChange(e)}
                                value={inputvalues.courseType}
                                id="inputPassword4"
                            />
                            {validation.courseType && (
                                <p style={{ color: "red" }}>{validation.courseType}</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        id="submitbutton"
                        disabled={isDisabled}
                        class="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
                <br></br>
            </div>
            <>
                {
                    <Table
                        StudentRecords={StudentRecords}
                        modalEdit={modalEdit}
                        modalDelete={modalDelete}
                        modalClose={modalClose}
                        total={total}
                        handlePageClick={handlePageClick}
                        exportExcel={exportExcel}
                    />
                }
            </>
        </>
    );
}

OrderComponent.PropTypes = {
    handleClick: PropTypes.func,
    handleSave: PropTypes.func,
    getStudentData: PropTypes.func,
    editSave: PropTypes.func,
    deleteData: PropTypes.func,
    saveStudentdata: PropTypes.instanceOf(Object),
    StudentRecords: PropTypes.instanceOf(Array),
    StudentEditRecords: PropTypes.instanceOf(Object),
    total: PropTypes.number,
};

OrderComponent.defaultProps = {
    saveStudentdata: {},
    handleClick: () => { },
    handleSave: () => { },
    getStudentData: () => { },
    deleteData: () => { },
    editSave: () => { },
    StudentRecords: [],
    StudentEditRecords: {},
    total: 0
};
