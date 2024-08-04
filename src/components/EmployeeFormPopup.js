// import React, { useState } from 'react';
// import './EmployeeFormPopup.css';

// const EmployeeFormPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [employee, setEmployee] = useState({
//     name: '',
//     addressLine1: '',
//     city: '',
//     country: '',
//     zipcode: '',
//     phone: '',
//     email: '',
//   });
//   const [formError, setFormError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormError('');

//     if (!employee.name || !employee.addressLine1 || !employee.city || !employee.country || !employee.zipcode || !employee.phone || !employee.email) {
//       setFormError('All fields are required.');
//       return;
//     }

//     onSubmit(employee);
//     setEmployee({
//       name: '',
//       addressLine1: '',
//       city: '',
//       country: '',
//       zipcode: '',
//       phone: '',
//       email: '',
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <button className="popup-close" onClick={onClose}>X</button>
//         <h2>Add Employee</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" value={employee.name} onChange={handleChange} />
//           </label>
//           <label>
//             Address Line 1:
//             <input type="text" name="addressLine1" value={employee.addressLine1} onChange={handleChange} />
//           </label>
//           <label>
//             City:
//             <input type="text" name="city" value={employee.city} onChange={handleChange} />
//           </label>
//           <label>
//             Country:
//             <input type="text" name="country" value={employee.country} onChange={handleChange} />
//           </label>
//           <label>
//             Zipcode:
//             <input type="text" name="zipcode" value={employee.zipcode} onChange={handleChange} />
//           </label>
//           <label>
//             Phone:
//             <input type="text" name="phone" value={employee.phone} onChange={handleChange} />
//           </label>
//           <label>
//             Email:
//             <input type="text" name="email" value={employee.email} onChange={handleChange} />
//           </label>
//           {formError && <div className="form-error">{formError}</div>}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeFormPopup;

import React, { useState } from 'react';
import './EmployeeFormPopup.css';

const EmployeeFormPopup = ({ isOpen, onClose, onSubmit }) => {
  const [employee, setEmployee] = useState({
    name: '',
    address: {
      line1: '',
      city: '',
      country: '',
      zipcode: '',
    },
    contact_methods: {
      PHONE: '',
      EMAIL: '',
    },
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setEmployee({
        ...employee,
        address: { ...employee.address, [field]: value },
      });
    } else if (name.startsWith('contact_methods.')) {
      const field = name.split('.')[1];
      setEmployee({
        ...employee,
        contact_methods: { ...employee.contact_methods, [field]: value },
      });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const { name, address, contact_methods } = employee;
    if (!name || !address.line1 || !address.city || !address.country || !address.zipcode || !contact_methods.PHONE) {
      setFormError('All fields are required.');
      return;
    }

    onSubmit(employee);
    setEmployee({
      name: '',
      address: {
        line1: '',
        city: '',
        country: '',
        zipcode: '',
      },
      contact_methods: {
        PHONE: '',
        EMAIL: '',
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>X</button>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={employee.name} onChange={handleChange} />
          </label>
          <fieldset>
            <legend>Address</legend>
            <label>
              Address Line 1:
              <input type="text" name="address.line1" value={employee.address.line1} onChange={handleChange} />
            </label>
            <label>
              City:
              <input type="text" name="address.city" value={employee.address.city} onChange={handleChange} />
            </label>
            <label>
              Country:
              <input type="text" name="address.country" value={employee.address.country} onChange={handleChange} />
            </label>
            <label>
              Zipcode:
              <input type="text" name="address.zipcode" value={employee.address.zipcode} onChange={handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <legend>Contact Methods</legend>
            <label>
              Phone:
              <input type="text" name="contact_methods.PHONE" value={employee.contact_methods.PHONE} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="text" name="contact_methods.EMAIL" value={employee.contact_methods.EMAIL} onChange={handleChange} />
            </label>
          </fieldset>
          {formError && <div className="form-error">{formError}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeFormPopup;
