import { configureStore } from "@reduxjs/toolkit";
import ContactDetails from "./UserDetails";
 
 const Store = configureStore({
    reducer: {
      app: ContactDetails,
    }, 
})
export default Store
