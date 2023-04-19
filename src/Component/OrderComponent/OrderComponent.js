import React, { useState } from 'react'
import './OrderComponent.css'
import PropTypes from 'prop-types';
export default function OrderComponent(props) {
    const { handleSave, saveStudentdata } = props;
    // const [isDisabled, setDisabled] = useState(false);
    const [inputvalues, setInputvalues] = useState({
        studentName: "",
        email: "",
        phoneNumber: "",
        country: "",
        state: "",
        address: "",
        pincode: "",
        courseType: ""
    })
  console.log('ASDAS',saveStudentdata)
    const handleChange = (event) => {
        const { name, value } = event.target
        setInputvalues({ ...inputvalues, [name]: value })

    }
    const handleClick = () => {
        // setDisabled(true);
        handleSave(inputvalues)
    }
    return (
        <>
            <div class="container">
                <h1 style={{ color: "red" }}>Student Registation!</h1>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputStudentName">StudentName</label>
                            <input type="text" class="form-control" name="studentName" onChange={(e) => handleChange(e)} value={inputvalues.studentName} id="inputstname" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputemail">Email</label>
                            <input type="email" class="form-control" name="email" onChange={(e) => handleChange(e)} value={inputvalues.email} id="inputemail" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPhoneNumber">PhoneNumber</label>
                            <input type="number" class="form-control" name="phoneNumber" onChange={(e) => handleChange(e)} value={inputvalues.phoneNumber} id="inputnumber" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputEmail4">country</label>
                            <input type="text" class="form-control" name="country" onChange={(e) => handleChange(e)} value={inputvalues.country} id="inputcountry" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">State</label>
                            <input type="text" class="form-control" name="state" onChange={(e) => handleChange(e)} value={inputvalues.state} id="inputstate" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">Adresses</label>
                            <input type="text" class="form-control" name="address" onChange={(e) => handleChange(e)} value={inputvalues.address} id="inputadress" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputEmail4">pinCode</label>
                            <input type="number" class="form-control" name="pincode" onChange={(e) => handleChange(e)} id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword4">courseType</label>
                            <input type="text" class="form-control" name="courseType" onChange={(e) => handleChange(e)} id="inputPassword4" />
                        </div>
                    </div>
                    <button type="submit" onClick={handleClick} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

OrderComponent.PropTypes = {
    handleClick: PropTypes.func,
    handleSave: PropTypes.func,
    saveStudentdata: PropTypes.instanceOf(Object),
}

OrderComponent.defaultProps = {
    saveStudentdata: {},
    handleClick: () => { },
    handleSave: () => { }
}
