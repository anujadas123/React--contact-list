import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getContact, setSearch } from "../Redux/UserDetails";

const Header = () => {
  // const {totalItems} =useSelector((state) => state.app?.totalItems)
  // console.log("totalcount", totalItems);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.app.page);
  const limit = useSelector((state) => state.app.limit);
  const search = useSelector((state) => state.app.search);
  const totalLength = useSelector((state) => state.app.totalLength)
 console.log(totalLength);
  const searchChange = (e) => {
    const newSearch = e.target.value;
    dispatch(setSearch(newSearch))
    const data = {page, limit, search}
    dispatch(getContact(data));
  };

  return (
    <div className="header">
      <div className="heading">
        <h1>CONTACT LIST({totalLength})</h1>
      </div>
      <div className="search">
        <input
          type="search"
          id="site-search"
          placeholder="search..."
          onChange={searchChange}
        />
      </div>
    </div>
  );
};

export default Header;











