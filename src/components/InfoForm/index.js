import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { formInfoData } from "../../redux/actions";
import Loader from "../loader";
import { FaUserAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsCalendarDate } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import "../../styles/infoForm.css";
import "../../styles/home.css";

const InfoHome = () => {
  // const formId = useSelector((state) => state.form.id);
  const formData = useSelector((state) => state.form.data);
  const [loader, setLoader] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();

  const emailsplit = formData.email && formData.email.split('@')

  useEffect(() => {
    dispatch(formInfoData(params.id));
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [dispatch, params.id]);
  return (
    <div className="second_container">
      {loader ? (
        <Loader />
      ) : (
        <div className="info-form-container">
          <h1>Información registrada</h1>
          <div className="div-info-form">
            <p className="icon">
              <FaUserAlt ></FaUserAlt>
            </p>
            <p className="info">
              {formData.full_name &&
                formData.full_name[0].toUpperCase() +
                  formData.full_name.slice(1)}
            </p>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <TfiEmail></TfiEmail>
            </p>
            {/* <p className="info">{formData.email.length > 24 ? formData.split('@')email}</p> */}
            <div className="emailsplit"><p>{emailsplit[0]}</p><p>@{emailsplit[1]}</p></div>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <BsCalendarDate></BsCalendarDate>
            </p>
            <p className="info">{formData?.birth_date}</p>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <BiWorld></BiWorld>
            </p>
            <p className="info">
              {formData.country_of_origin &&
                formData.country_of_origin[0].toUpperCase() +
                  formData.country_of_origin.slice(1)}
            </p>
          </div>
          <NavLink className="navLink back" to={"/"}>
            Página principal
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default InfoHome;
