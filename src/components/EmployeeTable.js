import React, { useEffect, useState } from 'react';
import './EmployeeTable.css';
import EmployeeFormPopup from './EmployeeFormPopup';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const pageSize = 10;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
        myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
        myHeaders.append("Content-Type", "application/json");

        const offset = (currentPage - 1) * pageSize;
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=${pageSize}&offset=${offset}`, requestOptions);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEmployees(data.data);
        setTotalPages(Math.ceil(data.total / pageSize));

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    setLoading(true);
  };

  const handleAddEmployee = async (employee) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
      myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(employee),
      };

      const response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/employees', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newEmp = await response.json();
      setEmployees([...employees, newEmp]);
      setIsPopupOpen(false); // Close popup after submission
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = async (id) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
      myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const employee = await response.json();
      console.log(employee);
      setEmployeeToEdit(employee);

      setIsPopupOpen(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditEmployee = async (employee) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
      myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(employee)
      };
      console.log(requestOptions.body);
      const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${employee._id}`, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedEmployee = await response.json();
      setEmployees(employees.map(emp => emp._id === updatedEmployee._id ? updatedEmployee : emp));
      setIsPopupOpen(false); // Close popup after submission
      setEmployeeToEdit(null); // Clear edit state
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
      myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: JSON.stringify({})
      };

      console.log(id);
      const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setEmployees(employees.filter(employee => employee._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="employee-table-container">
      <h1>Employee Table</h1>
      <button className="open-popup-button" onClick={() => {
        setEmployeeToEdit(null); // Reset edit state
        setIsPopupOpen(true);
      }}>
        Add Employee
      </button>

      <EmployeeFormPopup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setEmployeeToEdit(null); // Clear edit state when closing popup
        }}
        onSubmit={employeeToEdit ? handleEditEmployee : handleAddEmployee}
        employee={employeeToEdit}
      />

      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td>{employee.name}</td>
              <td>
                <button onClick={() => handleEditClick(employee._id)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
