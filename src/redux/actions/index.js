import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../firebase";
import { getInfoData, getInfoId } from "../slice";

export const formInfo = (info) => async (dispatch) => {
  const querySnapshot = await getDocs(collection(firestore, "forms"));
  let id = "";
  querySnapshot.forEach((ele) => {
    if (ele.data().email === info.email) {
      id = ele.id;
    }
  });
  dispatch(getInfoId(id));
};

export const formInfoData = (id) => async (dispatch) => {
  const querySnapshot = await getDocs(collection(firestore, "forms"));
  let data = {};
  querySnapshot.forEach((ele) => {
    if (ele.id === id) {
      data = ele.data();
    }
  });
  dispatch(getInfoData(data));
};
