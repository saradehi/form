import { configureStore } from "@reduxjs/toolkit";
import  infoForm  from "../slice";

export default configureStore({
  reducer: {
    form: infoForm
  },
});
