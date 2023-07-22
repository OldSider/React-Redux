import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBase } from "../../Redux/Reducers/GetDataBase/Components/AsyncThunk";

function HomePage() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.getAll.data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getDataBase());
  }, [dispatch]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Customer"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul>
        {filteredCustomers.map((customer) => (
          <li key={customer.id}>
            <p>Name: {customer.fullName}</p>
            <p>Email: {customer.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
