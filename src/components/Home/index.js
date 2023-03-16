import React, { useState } from "react";
import Form from "../form";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import gif_front from "../../img/gif_front.gif"
import "../../styles/form.css";
import "../../styles/home.css";

const Home = () => {
  const [formStatus, setFormStatus] = useState(false);
  const formId = useSelector((state) => state.form.id);

  const hanldeRotateClick = () => {
    const back = document.getElementById("main-container")
    const front = document.getElementById('front-image')

    back.className += " flip-front";
    front.className += " flip-back"

  }

  //DGpxWOX9MtowzWbVSdbq

  return (
    <div className="second_container">
      <div id="main-container" className="main_container">
        <SwitchTransition>
          <CSSTransition
            classNames="fade"
            timeout={3000}
            key={formStatus ? "message" : "info"}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            {!formStatus ? (
              <Form setFormStatus={setFormStatus}></Form>
            ) : (
              <div className="form-sended">
                <h1>Formulario enviado</h1>
                <p>Puedes ver las respuestas en el siguiente link: </p>
                <div className="div-navLink">
                  <NavLink className="navLink" to={`/${formId && formId}`}>
                    Ver respuestas
                  </NavLink>
                  <hr></hr>
                </div>
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div id="front-image" className="front-image">
        <h1>Mi encuesta</h1>
        <img src={gif_front} alt="gif"></img>
        <p onClick={() => hanldeRotateClick()}>Empezar encuesta</p>
      </div>
    </div>
  );
};

export default Home;
