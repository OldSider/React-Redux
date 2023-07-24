import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBase } from "../../Redux/Reducers/GetDataBase/Components/AsyncThunk";
import { useNavigate } from "react-router-dom";

import Modal from "./Components/Dialog/Modal";

import "./Components/Style/HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.getAll.data);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [ setSelectedCustomerId] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    dispatch(getDataBase());
  }, [getDataBase()]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="wrapper-home">
        <div className="div-btn">
          <input
            type="text"
            placeholder="Search Customer"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className="header-filter"
          />

          <button className="header-btnAdd">Adicionar</button>
          <button
            className="header-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Exit
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>
                  <button
                    className="btn1"
                    onClick={() => {
                      setSelectedCustomerId(customer.id);
                      setSelectedCustomer(customer);
                      setOpenModal(true);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div></div>
      </div>
      <Modal
        isOpen={openModal}
        setMoralOpen={() => {
          setOpenModal(!openModal);
        }}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
}

export default HomePage;
