// // // import React, { useEffect, useState } from 'react';
// // // import './EmployeeTable.css';



// // // const EmployeeTable = () => {
// // //   const [employees, setEmployees] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchEmployees = async () => {
// // //       try {
// // //         const myHeaders = new Headers();
// // //         myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
// // //         myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
// // //         myHeaders.append("Content-Type", "application/json");
        
// // //         // const raw = "\n\n\n\n\n\n\n\n\n\n\n";
        
// // //         const requestOptions = {
// // //           method: "GET",
// // //           headers: myHeaders,
// // //         //   body: raw,
// // //           redirect: "follow"
// // //         };
        
// // //         const response = await fetch("https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=10&offset=0", requestOptions)
// // //           .then((response) => response.text())
// // //           .then((result) => console.log(result))
// // //           .catch((error) => console.error(error));

// // //         // const response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/employees',
// // //         // {
// // //         //     headers: {
// // //         //         'pID': '66ab55e06397d3eb039caf87',
// // //         //         'eID': '66ab55e06397d3eb039caf88',
// // //         //         'Content-Type' : 'application/json',
// // //         //     }
// // //         // });
// // //         // if (!response.ok) {
// // //         //   throw new Error('Network response was not ok');
// // //         // }
// // //         console.log(response.text);
// // //         console.log('XYZ');
// // //         const data =  response.json();
// // //         console.log('ABCDEF');
// // //         console.log(data);
// // //         setEmployees(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchEmployees();
// // //   }, []);

// // //   if (loading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div>Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="employee-table-container">
// // //       <h1>Employee Table</h1>
// // //       <table className="employee-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Employee ID</th>
// // //             <th>Name</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {employees.map(employee => (
// // //             <tr key={employee._id}>
// // //               <td>{employee._id}</td>
// // //               <td>{employee.name}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeTable;

// // import React, { useEffect, useState } from 'react';
// // import './EmployeeTable.css';

// // const EmployeeTable = () => {
// //   const [employees, setEmployees] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const myHeaders = new Headers();
// //         myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
// //         myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
// //         myHeaders.append("Content-Type", "application/json");
        
// //         const requestOptions = {
// //           method: "GET",
// //           headers: myHeaders,
// //           redirect: "follow"
// //         };
        
// //         const response = await fetch("https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=10&offset=0", requestOptions);
        
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
        
// //         // Parse JSON response
// //         const data = await response.json();
// //         console.log(data); // For debugging purposes
        
// //         // Set state with parsed data
// //         setEmployees(data.data); // Assuming the JSON data has a 'data' property
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEmployees();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="employee-table-container">
// //       <h1>Employee Table</h1>
// //       <table className="employee-table">
// //         <thead>
// //           <tr>
// //             <th>Employee ID</th>
// //             <th>Name</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {employees.map(employee => (
// //             <tr key={employee._id}>
// //               <td>{employee._id}</td>
// //               <td>{employee.name}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default EmployeeTable;


// // import React, { useEffect, useState } from 'react';
// // import './EmployeeTable.css';

// // const EmployeeTable = () => {
// //   const [employees, setEmployees] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1); // Current page number
// //   const [totalPages, setTotalPages] = useState(1); // Total number of pages
// //   const pageSize = 10; // Number of items per page

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const myHeaders = new Headers();
// //         myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
// //         myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
// //         myHeaders.append("Content-Type", "application/json");

// //         const offset = (currentPage - 1) * pageSize;
// //         const requestOptions = {
// //           method: "GET",
// //           headers: myHeaders,
// //           redirect: "follow",
// //         };

// //         const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=${pageSize}&offset=${offset}`, requestOptions);
        
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
        
// //         const data = await response.json();
// //         console.log(data); // For debugging
        
// //         // Update state with fetched data and pagination info
// //         setEmployees(data.data); // Adjust according to the actual structure of the response
// //         setTotalPages(Math.ceil(data.total / pageSize)); // Assuming 'total' is the total number of items in the response
        
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEmployees();
// //   }, [currentPage]); // Depend on currentPage to refetch data when page changes

// //   const handlePageChange = (newPage) => {
// //     if (newPage < 1 || newPage > totalPages) return; // Prevent invalid page numbers
// //     setCurrentPage(newPage);
// //     setLoading(true); // Show loading state while fetching new data
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="employee-table-container">
// //       <h1>Employee Table</h1>
// //       <table className="employee-table">
// //         <thead>
// //           <tr>
// //             <th>Employee ID</th>
// //             <th>Name</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {employees.map(employee => (
// //             <tr key={employee._id}>
// //               <td>{employee._id}</td>
// //               <td>{employee.name}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <div className="pagination-controls">
// //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
// //           Previous
// //         </button>
// //         <span>Page {currentPage} </span>
// //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeTable;

// import React, { useEffect, useState } from 'react';
// import './EmployeeTable.css';
// import EmployeeFormPopup from './EmployeeFormPopup';

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const pageSize = 10;
  
//   // Popup form state
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
//         myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
//         myHeaders.append("Content-Type", "application/json");

//         const offset = (currentPage - 1) * pageSize;
//         const requestOptions = {
//           method: "GET",
//           headers: myHeaders,
//           redirect: "follow",
//         };

//         const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/employees?limit=${pageSize}&offset=${offset}`, requestOptions);
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         setEmployees(data.data);
//         setTotalPages(Math.ceil(data.total / pageSize));
        
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployees();
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage < 1 || newPage > totalPages) return;
//     setCurrentPage(newPage);
//     setLoading(true);
//   };

//   const handleAddEmployee = async (employee) => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append("projectId", "66ab55e06397d3eb039caf87");
//       myHeaders.append("environmentId", "66ab55e06397d3eb039caf88");
//       myHeaders.append("Content-Type", "application/json");

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(employee),
//       };
//       console.log(requestOptions.body);
//       const response = await fetch("https://free-ap-south-1.cosmocloud.io/development/api/employees", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const newEmp = await response.json();
//       setEmployees([...employees, newEmp]);
//       setIsPopupOpen(false); // Close popup after submission
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="employee-table-container">
//       <h1>Employee Table</h1>
//       <button className="open-popup-button" onClick={() => setIsPopupOpen(true)}>Add Employee</button>
      
//       <EmployeeFormPopup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//         onSubmit={handleAddEmployee}
//       />
      
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(employee => (
//             <tr key={employee._id}>
//               <td>{employee._id}</td>
//               <td>{employee.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="pagination-controls">
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>Page {currentPage} </span>
//         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;

import React, { useEffect, useState } from 'react';
import './EmployeeTable.css';
import EmployeeFormPopup from './EmployeeFormPopup';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;
  
  // Popup form state
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="employee-table-container">
      <h1>Employee Table</h1>
      <button className="open-popup-button" onClick={() => setIsPopupOpen(true)}>Add Employee</button>
      
      <EmployeeFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleAddEmployee}
      />
      
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee._id}</td>
              <td>{employee.name}</td>
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
