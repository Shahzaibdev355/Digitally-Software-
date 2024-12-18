import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Header from "./Header";

import { faArrowUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { MuiTelInput } from "mui-tel-input";

import { Checkbox } from "@mui/material";

import Swal from "sweetalert2";
import axios from "axios";

const Contact = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const initialFormValues = {
    fname: "",
    Lname: "",
    phone: "",
    email: "",
    fonction: "",
    enterprise: "",
    object: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phone: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // API calls
    // const isSuccess = true; // Change this to `false` to test error popup

    try {
      const response = axios.post("http://localhost:5000/contactus", formValues);



      if (response===200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your form has been submitted successfully.",
          confirmButtonText: "OK",
          willClose: () => {
            window.dispatchEvent(new Event('resize')); // Forces ResizeObserver to complete
          },
        });
      }

      

      console.log("Form submitted:", formValues);

      setFormValues(initialFormValues);

      


    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        confirmButtonText: "OK",
      });

      console.error("Error submitting form:", error);

      
    }
  };


  // const resizeObserverErrorHandler = (e) => {
  //   if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
  //     return;
  //   }
  //   console.error(e);
  // };
  
  // window.addEventListener("error", resizeObserverErrorHandler);
  // window.addEventListener("unhandledrejection", resizeObserverErrorHandler);

  // if (window.ResizeObserver) {
  //   const ro = new ResizeObserver(() => {});
  //   ro.observe(document.body);
  //   ro.disconnect();
  // }

  

  return (
    <>
      <Header />

      <section className="contact-sec1" style={{ backgroundColor: "" }}>
        <div className="containe" style={{ width: "90%", margin: "auto" }}>
          <div className="row  contact-row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div
              className="col-12 col-md-6 text-center text-lg-start"
              style={{ border: "" }}
            >
              <h2 className="contact-col1-heading">
                Cap sur Votre Révolution Digitale !
              </h2>

              <strong className="contact-col1-heading2">
                Bienvenue sur notre page de contact !{" "}
              </strong>
              <p className="contact-col1-para">
                Vous cherchez le partenaire idéal pour propulser votre société
                dans un futur digital ?{" "}
                <span>
                  <br />
                </span>
                Vous êtes au bon endroit ! Chez DIGITALY, nous savons à quel
                point il est crucial de{" "}
                <span>
                  <br />
                </span>
                trouver un expert de confiance pour réaliser vos ambitions
                digitales.
                <span>
                  <br />
                  <br />
                </span>
                Et notre mission est simple : prouver que nous sommes ce
                partenaire qui vous{" "}
                <span>
                  <br />
                </span>
                accompagne vers le succès.
              </p>

              <strong className="contact-col1-heading2">
                Pourquoi choisir DIGITALY ?
              </strong>

              <p className="contact-col1-para">
                Nous offrons des solutions sur mesure, adaptées à vos besoins et
                à vos objectifs, pour{" "}
                <span>
                  <br />
                </span>
                vous démarquer dans un monde numérique en constante évolution.
                <span>
                  <br />
                </span>
              </p>

              <strong className="contact-col1-heading2">
                Quels services propose DIGITALY ?
              </strong>

              <p className="contact-col1-para">
                De la création de sites web innovants à la stratégie digitale,
                en passant par le webdesign
                <span>
                  <br />
                </span>
                et le développement 3D, nos services sont conçus pour propulser
                votre entreprise
                <span>
                  <br />
                </span>
                au niveau supérieur.
                <span>
                  <br />
                </span>
              </p>

              <strong className="contact-col1-heading2">
                Envie d’en savoir plus ?
              </strong>

              <p className="contact-col1-para">
                Prenez rendez-vous dès aujourd'hui pour une consultation
                gratuite avec l’un de nos
                <span>
                  <br />
                </span>
                experts.
                <span> Appelez-nous au 09 74 56 69 69</span> ou remplissez
                simplement le formulaire à
                <span>
                  <br />
                </span>
                droite c'est rapide et facile !
                <span>
                  <br />
                </span>
              </p>

              <p className="contact-col1-para">
                Nos experts sont impatients de vous rencontrer et de transformer
                vos idées en succès.{" "}
                <span>
                  <br />
                </span>
                Ensemble, faisons de votre vision digitale une réalité !
              </p>
              {/* </p> */}
            </div>

            {/* project image */}
            <div
              className="col-12 col-md- my- py- contact-form-col2"
              style={{}}
            >
              <form onSubmit={handleSubmit}>
                <div className="contact-us-row-formField">
                  <div className="col-md-6 contact-us-input-left">
                    <label htmlFor="" class="contact-form-input-label">
                      Prénom<span>*</span>{" "}
                    </label>
                    <TextField
                      id=""
                      placeholder="Example: André"
                      type="text"
                      className="contact-input"
                      name="fname"
                      value={formValues.fname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 contact-us-input-right">
                    <label htmlFor="" class="contact-form-input-label">
                      Nom<span>*</span>{" "}
                    </label>
                    <TextField
                      id="outlined-password-input"
                      placeholder="Example: Dupont"
                      type="text"
                      name="Lname"
                      className="contact-input"
                      value={formValues.Lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-us-row-formField">
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      border: "",
                    }}
                    className="col-md-6 contact-us-input-left"
                  >
                    <label htmlFor="" class="contact-form-input-label">
                      Téléphone<span>*</span>{" "}
                    </label>

                    {/* <MuiPhoneNumber
                      defaultCountry="fr"
                      regions={["america", "europe", "asia", "africa"]}
                      onChange={handlePhoneChange}
                      className="contact-phoneNumberInput"
                    />
                    */}

                    <MuiTelInput
                      defaultCountry="FR"
                      onChange={handlePhoneChange}
                      value={formValues.phone}
                      className="contact-phoneNumberInput"
                    />

                    <FontAwesomeIcon
                      icon={faCaretDown} // Use the Font Awesome icon
                      className="phoneNumber-arrow"
                    />
                  </div>

                  <div className="col-md-6 contact-us-input-right">
                    <label htmlFor="" class="contact-form-input-label">
                      Email<span>*</span>{" "}
                    </label>
                    <TextField
                      id="outlined-password-input"
                      placeholder="Exemple : contact@digitaly.fr"
                      type="email"
                      name="email"
                      className="contact-input"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-us-row-formField">
                  <div className="col-md-6 contact-us-input-left">
                    <label htmlFor="" class="contact-form-input-label">
                      Fonction<span>*</span>{" "}
                    </label>
                    <TextField
                      id="outlined-password-input"
                      placeholder="Exemple : Chargé de communication"
                      type="text"
                      className="contact-input"
                      name="fonction"
                      value={formValues.fonction}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 contact-us-input-right">
                    <label htmlFor="" class="contact-form-input-label">
                      Enterprise<span>*</span>{" "}
                    </label>
                    <TextField
                      id="outlined-password-input"
                      placeholder="Exemple : Le nom de votre entreprise"
                      className="contact-input"
                      type="text"
                      name="enterprise"
                      value={formValues.enterprise}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12   contact-us-input-objet">
                  <label htmlFor="" class="contact-form-input-label">
                    Objet<span>*</span>{" "}
                  </label>
                  <TextField
                    id="outlined-password-input"
                    placeholder="Choississez votre type de demande"
                    type="text"
                    className="contact-input"
                    name="object"
                    value={formValues.object}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12 contact-us-message">
                  <label htmlFor="" class="contact-form-input-label">
                    Message<span>*</span>{" "}
                  </label>
                  <TextField
                    id="outlined-textarea"
                    placeholder="Your Query"
                    multiline
                    rows={4}
                    className="contact-input"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12 contact-us-checkbox ">
                  <Checkbox {...label} style={{ paddingLeft: "0px" }} />

                  <p>
                    En envoyant ce formulaire, je donne mon accord pour être
                    recontacté par la société{" "}
                    <span>
                      <br />
                    </span>{" "}
                    DIGITALY et j'accepte la politique de confidentialité de
                    l'entreprise.
                  </p>
                </div>

                <div className="col-md-12 contact-us-submitBtn">
                  <button type="submit">Envoyer le message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="rectangular-oval-white-sec1" style={{ border: "" }}>
        <img
          className="lagence-sec1-img1-2"
          src="./images/Rectangle 9543-new.png"
          alt
          style={{ border: "" }}
        />
      </section>
      {/* </section> */}

      <Footer />

      {/* Back to Top */}
      {/* <a
        href="#"
        className={`btn btn-lg btn-lg-square rounded-circle back-to-top ${
          isVisible ? "show" : "hide"
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
      </a> */}
    </>
  );
};

export default Contact;
