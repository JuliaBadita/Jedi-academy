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


export default function Contact() {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(5, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
    lastName: Yup.string()
        .min(2, "trop petit")
        .max(10, "trop long!")
        .required("Ce champ est obligatoire"),
    email: Yup.string()
        .email("email invalide")
        .required("l'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(8, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string()
        .required("Confirmation de mot de passe est obligatoire")
        .oneOf(
            [Yup.ref("password"), null],
            "Le mot de passe de confirmation ne correspond pas"
        ),
    acceptTerms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=265%20rue%20Montaigne,%20Lille%2059000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </Grid>
          
          <Grid item xs={12} className="form">
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) =>handleSubmit(values)}
          >
              {({ resetForm }) => (
                  <Form>
                      <div className="form-group mb-3">
                          <label htmlFor="firstName">
                              Prénom :
                          </label>
                          <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="form-control"
                          />
                          <ErrorMessage
                              name="firstName"
                              component="small"
                              className="text-danger"
                          />
                      </div>
                      <div className="form-group mb-3">
                          <label htmlFor="lastName">
                              Nom :
                          </label>
                          <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="form-control"
                          />
                          <ErrorMessage
                              name="lastName"
                              component="small"
                              className="text-danger"
                          />
                      </div>
                      <div className="form-group mb-3">
                          <label htmlFor="email">
                              Message :
                          </label>
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
                      <div className="form-group mb-3">
                          
                      </div>
                      <div className="form-group mb-3">
                          
                      </div>
                      <div className="form-group form-check mb-5">
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
                          <ErrorMessage
                              name="acceptTerms"
                              component="small"
                              className="text-danger d-block"
                          />
                      </div>
                      <div className="form-group d-flex justify-content-end gap-3">
                          <button
                              type="submit"
                              className="btn btn-primary"
                          >
                              Envoyer
                          </button>
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
