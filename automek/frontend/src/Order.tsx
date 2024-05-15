import React, { useState, ChangeEvent } from 'react';

const Order = () => {
  const [showTable, setShowTable] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [transactionNumber, setTransactionNumber] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [transactionNumberError, setTransactionNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrderClick = () => {
    setShowTable(true);
  };

  const handleOrderConfirm = () => {
    if (firstName && lastName && transactionNumber && address && phoneNumber) {
      // Perform order confirmation here (e.g., API call)
      // For now, just set orderSuccess to true
      setOrderSuccess(true);
    } else {
      // Set error state for each field that is empty
      if (!firstName) setFirstNameError(true);
      if (!lastName) setLastNameError(true);
      if (!transactionNumber) setTransactionNumberError(true);
      if (!address) setAddressError(true);
      if (!phoneNumber) setPhoneNumberError(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
    const value = e.target.value;
    switch (inputType) {
      case 'firstName':
        setFirstName(value);
        setFirstNameError(false);
        break;
      case 'lastName':
        setLastName(value);
        setLastNameError(false);
        break;
      case 'transactionNumber':
        setTransactionNumber(value);
        setTransactionNumberError(false);
        break;
      case 'address':
        setAddress(value);
        setAddressError(false);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        setPhoneNumberError(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {!orderSuccess && (
        <div>
          {!showTable && <button onClick={handleOrderClick}>Order</button>}
          {showTable && (
            <div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputChange(e, 'firstName')}
                  style={{
                    borderColor: firstNameError ? 'red' : '',
                    padding: '10px',
                    width: '300px',
                  }}
                  placeholder="First Name"
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => handleInputChange(e, 'lastName')}
                  style={{
                    borderColor: lastNameError ? 'red' : '',
                    padding: '10px',
                    width: '300px',
                  }}
                  placeholder="Last Name"
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={transactionNumber}
                  onChange={(e) => handleInputChange(e, 'transactionNumber')}
                  style={{
                    borderColor: transactionNumberError ? 'red' : '',
                    padding: '10px',
                    width: '300px',
                  }}
                  placeholder="Transaction Number"
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleInputChange(e, 'address')}
                  style={{
                    borderColor: addressError ? 'red' : '',
                    padding: '10px',
                    width: '300px',
                  }}
                  placeholder="Address"
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => handleInputChange(e, 'phoneNumber')}
                  style={{
                    borderColor: phoneNumberError ? 'red' : '',
                    padding: '10px',
                    width: '300px',
                  }}
                  placeholder="Phone Number"
                />
              </div>
              <button
                onClick={handleOrderConfirm}
                style={{
                  backgroundColor: '#4CAF50',
                  border: 'none',
                  color: 'white',
                  padding: '15px 32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer',
                  borderRadius: '12px',
                }}
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      )}
      {orderSuccess && <h1>Order completed successfully!</h1>}
    </div>
  );
};

export default Order;