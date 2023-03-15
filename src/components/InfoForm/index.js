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
        <>
          <div className="div-info-form">
            <p className="icon">
              <FaUserAlt size={30}></FaUserAlt>
            </p>
            <h1 className="info">
              {formData.full_name &&
                formData.full_name[0].toUpperCase() +
                  formData.full_name.slice(1)}
            </h1>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <TfiEmail size={30}></TfiEmail>
            </p>
            <p className="info">{formData?.email}</p>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <BsCalendarDate size={30}></BsCalendarDate>
            </p>
            <p className="info">{formData?.birth_date}</p>
          </div>
          <div className="div-info-form">
            <p className="icon">
              <BiWorld size={32}></BiWorld>
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
        </>
      )}
    </div>
  );
};

export default InfoHome;
