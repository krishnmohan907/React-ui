import React, {useEffect  } from "react";
import PropTypes from "prop-types";
// import ReactTable from "react-table";
import "./SignComponent.css";
// import "react-table/react-table.css"; 
export default function SignUp(props) {

  const { getData, getStudentDataData } = props;

  console.log('get data list', getData.data);
  let data = getData.data
 

  useEffect(() => {
    getStudentDataData();
  },[]);

  let columns = [
    {  
    Header: 'Username',  
    accessor: 'username'  
   },
   {  
   Header: 'Email',  
   accessor: 'email'  
   },
  ]  
  
  return (
     <>
        <div className="App">
      <table>
        <tr>
        {columns.map((coloum) => {
          return <th>{coloum.Header}</th>
        })}
        </tr>  
        {data && data.map((val, key) => {
          return (
            <tr key={key}>
              {columns.map((coloum) => {
              return <td>{val[coloum.accessor]}</td>
        })}
            </tr>
          )
        })}
      </table>
    </div>
       </>
  )
}

SignUp.propTypes = {
  getStudentDataData: PropTypes.func,
  getData: PropTypes.instanceOf(Object),
};
SignUp.defaultProps = {
  getData: {},
  getStudentDataData: () => {},
};