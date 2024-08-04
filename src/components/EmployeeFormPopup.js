import React, { useState, useEffect } from 'react';
import './EmployeeFormPopup.css';

const EmployeeFormPopup = ({ isOpen, onClose, onSubmit, employee }) => {
  const [formEmployee, setFormEmployee] = useState({
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

  useEffect(() => {
    if (isOpen && employee) {
      setFormEmployee({
        ...employee,
        address: { ...employee.address },
        contact_methods: { ...employee.contact_methods },
      });
    } else {
      setFormEmployee({
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
    }
  }, [isOpen, employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormEmployee({
        ...formEmployee,
        address: { ...formEmployee.address, [field]: value },
      });
    } else if (name.startsWith('contact_methods.')) {
      const field = name.split('.')[1];
      setFormEmployee({
        ...formEmployee,
        contact_methods: { ...formEmployee.contact_methods, [field]: value },
      });
    } else {
      setFormEmployee({ ...formEmployee, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    const { name, address, contact_methods } = formEmployee;
    if (!name || !address.line1 || !address.city || !address.country || !address.zipcode || !contact_methods.PHONE || !contact_methods.EMAIL) {
      setFormError('All fields are required.');
      return;
    }

    onSubmit(formEmployee);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>X</button>
        <h2>{employee ? 'Edit Employee' : 'Add Employee'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formEmployee.name} onChange={handleChange} />
          </label>
          <fieldset>
            <legend>Address</legend>
            <label>
              Address Line 1:
              <input type="text" name="address.line1" value={formEmployee.address.line1} onChange={handleChange} />
            </label>
            <label>
              City:
              <input type="text" name="address.city" value={formEmployee.address.city} onChange={handleChange} />
            </label>
            <label>
              Country:
              <input type="text" name="address.country" value={formEmployee.address.country} onChange={handleChange} />
            </label>
            <label>
              Zipcode:
              <input type="text" name="address.zipcode" value={formEmployee.address.zipcode} onChange={handleChange} />
            </label>
          </fieldset>
          <fieldset>
            <legend>Contact Methods</legend>
            <label>
              Phone:
              <input type="text" name="contact_methods.PHONE" value={formEmployee.contact_methods.PHONE} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="text" name="contact_methods.EMAIL" value={formEmployee.contact_methods.EMAIL} onChange={handleChange} />
            </label>
          </fieldset>
          {formError && <div className="form-error">{formError}</div>}
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeFormPopup;
