import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Title from "../components/Title";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { HiMail } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { FaAddressCard } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import PreviousNextButton from "../components/PreviousNextButton";


export default function Contact() {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Trop petit")
      .max(50, "Trop long !")
      .required("Ce champ est obligatoire"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    message: Yup.string()
      .min(2, "Trop petit")
      .max(10, "Trop long !")
      .required("Ce champ est obligatoire"),
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
};

const handleSubmit = (values) => {
  console.log(values)
};

  return (
    <>
      <Title title="Contactez-nous" />
      <Container>
        <Grid container className="GridContainer">
            <Grid item xs={12} md={6} className="contact">
              <div>
                <h2 className="first-title">Adresse</h2>
                <a href="https://www.google.com/maps/place/Rue+Montaigne,+59000+Lille/@50.6202582,3.0602369,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d59790e36d59:0x4a74dabe4609f835!8m2!3d50.6202548!4d3.0624256?hl=fr" target="_blank">
                <span><FaAddressCard className="icon" />265 rue Montaigne, Lille 59000</span></a>
                <h2>Email</h2>
                <a href="mailto:contact@academiejedi.fr"><span><HiMail className="icon" />contact@academiejedi.fr</span></a>
                <h2>Téléphone</h2>
                <a href="tel:+336XXXXXXXX"><span><AiFillPhone className="icon" />06XXXXXXXX</span></a>
                <h2>Horaires d'ouverture de l'accueil</h2>
                <span><AiFillClockCircle className="icon" />Du lundi au vendredi, de 9h à 18h</span>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className="gmaps">
              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=265%20rue%20Montaigne,%20Lille%2059000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </Grid>
          
          <Grid item xs={12} className="form">
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) =>handleSubmit(values)}
          >
              {({ resetForm }) => (
                  <Form>
                      <h2 className="first-title">Envoyez-nous un message !</h2>
                      <div className="form-group">
                        <div className="label">
                          <label htmlFor="name">
                              Nom :
                          </label>
                        </div>
                        <div className="field">
                          <Field
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                          />
                          <ErrorMessage
                              name="name"
                              component="small"
                              className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="label">
                          <label htmlFor="email">
                              Email :
                          </label>
                        </div>
                        <div className="field">
                          <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                          />
                          <ErrorMessage
                              name="email"
                              component="small"
                              className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="label">
                            <label htmlFor="message">
                                Message :
                            </label>
                          </div>
                          <div className="field">
                            <Field
                                type="text"
                                as="textarea"
                                id="message"
                                name="message"
                                className="form-control textarea"
                            />
                            <ErrorMessage
                              name="message"
                              component="small"
                              className="text-danger"
                            />
                          </div>
                          
                      </div>
                      <div className="form-check">
                        <div className="coche">
                          <Field
                              name="acceptTerms"
                              type="checkbox"
                              className="form-check-input"
                          />
                          <label
                              htmlFor="acceptTerms"
                              className="form-check-label"
                          >
                              J'ai lu et j'accepte
                              les conditions
                          </label>
                        </div>
                        <div>
                          <ErrorMessage
                              name="acceptTerms"
                              component="small"
                              className="text-danger d-block"
                          />
                        </div>
                      </div>
                      <div>
                        <PreviousNextButton
                          text="Envoyez"
                          onClick=""
                          isNext="true"
                        />
                      </div>
                  </Form>
              )}
          </Formik>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
