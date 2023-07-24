import { useDispatch } from "react-redux";

import "./Style/Modal.css";
import { deleteCustomer } from "../../../../Redux/Reducers/DeleteCustomer/Components/AsyncThunk";

function Modal({ isOpen, selectedCustomer, setMoralOpen }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    try {
      if (selectedCustomer) {
        dispatch(deleteCustomer(selectedCustomer.id));
        setMoralOpen();
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isOpen) {
    return (
      <>
        <div className="backgroundModal">
          <div className="modalBlock">
            <div>
              {selectedCustomer && (
                <div>
                  <p>
                    <strong>ID: </strong>
                    {selectedCustomer.id}
                  </p>
                  <p>
                    <strong>Full Name:</strong>
                    {selectedCustomer.fullName}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {selectedCustomer.email}
                  </p>
                  <p>
                    <strong>Phone: </strong>
                    {selectedCustomer.userPhone}
                  </p>
                  <p>
                    <strong>userId: </strong>
                    {selectedCustomer.userId}
                  </p>
                  <p>
                    <strong>Gender: </strong>
                    {selectedCustomer.gender}
                  </p>
                  <p>
                    <strong>Password: </strong>
                    {selectedCustomer.userPassword}
                  </p>
                  <p>
                    <strong>Zip Code: </strong>
                    {selectedCustomer.userZipCode}
                  </p>
                  <p>
                    <strong>State: </strong>
                    {selectedCustomer.userState}
                  </p>
                  <p>
                    <strong>City: </strong>
                    {selectedCustomer.userCity}
                  </p>
                  <p>
                    <strong>District: </strong>
                    {selectedCustomer.userDistrict}
                  </p>
                  <p>
                    <strong>House Number: </strong>
                    {selectedCustomer.userHouseNumber}
                  </p>
                </div>
              )}
            </div>

            <div className="button-Block">
              <button
                onClick={() => {
                  setMoralOpen();
                }}
                className="modalBtn"
              >
                Close
              </button>

              <button className="modalBtn" onClick={handleDelete}>
                Delete
              </button>

              <button className="modalBtn">Update</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}

export default Modal;
