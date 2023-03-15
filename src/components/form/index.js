import React, { useEffect, useState } from "react";
import {
  allInputs,
  handleDisable,
  handleOnChange,
  handleSubmit,
} from "../../controlers/formInputs";
import { firestore } from "../../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { formInfo } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Form = ({ setFormStatus }) => {
  const [inputs, setInputs] = useState();
  const [info, setInfo] = useState({ country_of_origin : "argentina"});
  const [error, setError] = useState();
  const connect = collection(firestore, "forms");
  const dispatch = useDispatch();

  useEffect(() => {
    allInputs(setInputs, setError);
  }, []);
  return (
    <div>
      <p className="p-info">* Todos los campos son obligatorios.</p>
      <form
        onSubmit={(event) =>
          handleSubmit(
            event,
            info,
            connect,
            addDoc,
            setFormStatus,
            formInfo,
            dispatch
          )
        }
      >
        {inputs?.map((ele, index) => (
          <div key={index} className={ele.type + "-div-style"}>
            <label>{ele.type === "submit" ? "" : ele.label}</label>
            {ele.type !== "select" ? (
              <input
                className={
                  ele.type === "submit"
                    ? "button-style"
                    : ele.type === "date"
                    ? "date-style"
                    : "input-style"
                }
                style={{
                  width: ele.type === "checkbox" && "2rem",
                }}
                onChange={(event) => handleOnChange(event, setInfo, info)}
                type={ele.type}
                name={ele.name}
              />
            ) : (
              <select
                className="select-style"
                name={ele.name}
                onChange={(event) => handleOnChange(event, setInfo, info)}
              >
                {ele.options?.map((item, i) => (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;
