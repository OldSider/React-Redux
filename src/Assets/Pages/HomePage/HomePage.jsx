import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBase } from "../../Redux/Reducers/GetDataBase/Components/AsyncThunk";

function HomePage() {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.getAll.data);

  useEffect(() => {
    dispatch(getDataBase());
  }, [dispatch]);
  return (
    <>
      <div>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <p>Name: {customer.fullName}</p>
              <p>Email: {customer.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
