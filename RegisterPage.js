import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Inline style objects
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  left: {
    flex: 1,
    background: `url('https://www.passportandpixels.com/wp-content/uploads/2022/11/really-wildlife-nature-holiday-collab_pp.jpg') center/cover no-repeat`,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "40px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  leftContent: {
    position: "relative",
    zIndex: 2,
    marginBottom: "40px",
  },
  right: {
    flex: 1,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  formBox: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    padding: "32px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "8px",
    textAlign: "center",
  },
  subtitle: {
    color: "#666",
    fontSize: "1rem",
    marginBottom: "24px",
    textAlign: "center",
  },
  label: {
    fontWeight: 500,
    marginBottom: "4px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "12px",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s",
  },
  error: {
    color: "#d32f2f",
    fontSize: "0.9rem",
    marginBottom: "8px",
    marginTop: "-8px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "8px",
    marginBottom: "16px",
    transition: "background 0.2s",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
  or: {
    textAlign: "center",
    margin: "16px 0",
    color: "#888",
    fontSize: "0.95rem",
  },
  socialBtn: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#fff",
    color: "#333",
    fontWeight: 500,
    marginBottom: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const RegisterPage = () => (
  <div style={styles.container}>
    <div style={styles.left}>
      <div style={styles.overlay}></div>
      <div style={styles.leftContent}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "12px" }}>Travels</h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>Welcome!</h2>
        <p style={{ fontSize: "1.1rem", margin: "10px 0 0" }}>
          Register your account to manage your bookings, preferences, and more.
        </p>
        {/* <div style={{ marginTop: "40px", fontSize: "0.95rem", color: "#ccc" }}>
          Viatio 2024. All rights reserved. &nbsp;
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>Terms of Service</span> &nbsp;
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>
        </div> */}
      </div>
    </div>
    <div style={styles.right}>
      <div style={styles.formBox}>
        <div style={styles.title}>Register Now!</div>
        <div style={styles.subtitle}>Create your account. Please enter your details.</div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert("Registration successful!\n\n" + JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label style={styles.label} htmlFor="name">Name</label>
              <Field style={styles.input} name="name" type="text" placeholder="Your Name" />
              <ErrorMessage name="name" component="div" style={styles.error} />

              <label style={styles.label} htmlFor="email">Email</label>
              <Field style={styles.input} name="email" type="email" placeholder="you@email.com" />
              <ErrorMessage name="email" component="div" style={styles.error} />

              <label style={styles.label} htmlFor="password">Password</label>
              <Field style={styles.input} name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={styles.error} />

              <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
              <Field style={styles.input} name="confirmPassword" type="password" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="div" style={styles.error} />

              <button style={styles.button} type="submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
        <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.95rem" }}>
          Already have an account?{" "}
          <span style={styles.link}>Log In</span>
        </div>
        <div style={styles.or}>Or continue with</div>
        <button style={styles.socialBtn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" width="20" />
          Google
        </button>
        <button style={styles.socialBtn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" width="20" />
          Facebook
        </button>
      </div>
    </div>
  </div>
);

export default RegisterPage;