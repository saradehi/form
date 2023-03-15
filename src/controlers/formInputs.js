import axios from "axios";
import Swal from "sweetalert2";

export const allInputs = async (setInputs, setError) => {
  try {
    const response = await axios.get(
      "https://challenge-form-32abf-default-rtdb.firebaseio.com/items.json"
    );
    setInputs(response.data);
  } catch (error) {
    setError();
  }
};

export const handleOnChange = (event, setInfo, info) => {
  const eName = event.target.name;
  const eValue = event.target.value;

  if (event.target.type === "checkbox") {
    setInfo({
      ...info,
      [eName]: event.target.checked,
    });
  } else
    setInfo({
      ...info,
      [eName]: eValue,
    });
};

export const handleSubmit = async (
  event,
  info,
  connect,
  addDoc,
  setFormStatus,
  formInfo,
  dispatch
) => {
  event.preventDefault();

  if (Object.values(info).length === 5) {
    try {
      addDoc(connect, info);
      dispatch(formInfo(info));
      setFormStatus(true);
    } catch (error) {
      console.log(error);
    }
  } else {
    Swal.fire({
      title: "¡Oops!",
      html: "Debes completar todos los campos",
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
};