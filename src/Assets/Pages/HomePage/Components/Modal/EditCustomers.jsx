import { updateCustomers } from "../../../../Redux/Reducers/UpdateCustomer/Components/AsyncThunk";
import { useState } from "react";
import "./Style/editModal.css";
import { useDispatch } from "react-redux";

function EditCustomersModal({
  selectedCustomers,
  openEditModal,
  setEditModal,
}) {
  const dispatch = useDispatch();
  const [editingCustomer, setEditingCustomer] = useState({
    ...selectedCustomers,
  });

  const handleChange = (e, field) => {
    const { value } = e.target;
    setEditingCustomer((prevCustomer) => ({
      ...prevCustomer,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    if (editingCustomer) {
      dispatch(
        updateCustomers({
          customerId: selectedCustomers.id,
          customerData: editingCustomer,
        })
      );
      setEditModal();
    }
  };

  if (openEditModal) {
    return (
      <>
        <div className="backgroundModalEdit">
          <div className="modalBlockEdit">
            <p>
              <strong>ID: </strong>
              {editingCustomer.id}
            </p>
            <p>
              <strong>Full Name: {editingCustomer.fullName}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.fullName}
                onChange={(e) => handleChange(e, "fullName")}
              />
            </p>
            <p>
              <strong>Email: {editingCustomer.email}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </p>
            <p>
              <strong>Phone: {editingCustomer.userPhone}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userPhone}
                onChange={(e) => handleChange(e, "userPhone")}
              />
            </p>
            <p>
              <strong>userId: {editingCustomer.userId}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userId}
                onChange={(e) => handleChange(e, "userId")}
              />
            </p>
            <p>
              <strong>Gender: {editingCustomer.gender}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.gender}
                onChange={(e) => handleChange(e, "gender")}
              />
            </p>
            <p>
              <strong>Password: {editingCustomer.userPassword}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userPassword}
                onChange={(e) => handleChange(e, "userPassword")}
              />
            </p>
            <p>
              <strong>Zip Code: {editingCustomer.userZipCode}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userZipCode}
                onChange={(e) => handleChange(e, "userZipCode")}
              />
            </p>
            <p>
              <strong>State: {editingCustomer.userState}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userState}
                onChange={(e) => handleChange(e, "userState")}
              />
            </p>
            <p>
              <strong>City: {editingCustomer.userCity}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userCity}
                onChange={(e) => handleChange(e, "userCity")}
              />
            </p>
            <p>
              <strong>District: {editingCustomer.userDistrict}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userDistrict}
                onChange={(e) => handleChange(e, "userDistrict")}
              />
            </p>
            <p>
              <strong>House Number: {editingCustomer.userHouseNumber}</strong>
              <br />
              <input
                type="text"
                value={editingCustomer.userHouseNumber}
                onChange={(e) => handleChange(e, "useHouseNumber")}
              />
            </p>
            <div className="button-Block">
              <button onClick={setEditModal} className="modalBtnEdit">
                Close
              </button>

              <button className="modalBtnEdit" onClick={handleEdit}>
                Save Change
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
}

export default EditCustomersModal;
