// AppContextProvider.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  // const[appContext,updateAppContext]=useState({
  //   data:[],
  //   customerName:"",
  //   tableNo:""
  // });
  const [data, setData] = useState([]);
  const [customerName, setcustomerName] = useState();
  const [tableNo, setTableNo] = useState();

  const updateCustomerName = (customerName) => {
    setcustomerName(customerName);
  };
  const updateTableNo = (tableNo) => {
    setTableNo(tableNo);
  };

  const updateItem = (itemId, name, newCount) => {
    // Find the item in the current data array
    const existingItem = data.find((item) => item.id === itemId);

    if (existingItem) {
      // If the item exists, update its count
      setData((prevData) =>
        prevData.map((item) =>
          item.id === itemId ? { ...item, count: newCount } : item
        )
      );
    } else if (newCount > 0) {
      // If the item doesn't exist and count is greater than 0, add the new item
      const newItem = {
        id: itemId,
        name: name,
        count: newCount,
      };
      setData((prevData) => [...prevData, newItem]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        tableNo,
        updateTableNo,
        customerName,
        updateCustomerName,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
