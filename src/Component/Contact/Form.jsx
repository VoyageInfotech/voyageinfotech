import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      mobile: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string().required("Mobile number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://editsh-back.onrender.com/api/contact/add",
          values
        );
        console.log("Submitted Data:", response.data);
        toast.success(response.data.message);
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form!");
      } finally {
        setSubmitting(false);
        resetForm();
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: theme.palette.lightBlack,
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* Name Field */}
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="filled"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
            shrink: true,
          }}
          InputProps={{
            style: { color: theme.palette.white },
            placeholder: "Name",
          }}
        />
        {/* Email Field */}
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
            shrink: true,
          }}
          InputProps={{
            style: { color: theme.palette.primary.main },
            placeholder: "Email",
          }}
        />
        {/* Mobile Number Field */}
        <TextField
          id="mobile"
          name="mobile"
          label="Mobile Number"
          type="tel"
          variant="filled"
          placeholder="+91 00000 00000"
          fullWidth
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
            shrink: true,
          }}
          InputProps={{
            style: { color: theme.palette.primary.main },
            placeholder: "+91 00000 00000",
          }}
        />
        {/* Subject Field */}
        <TextField
          id="subject"
          name="subject"
          placeholder="Subject"
          label="Subject"
          variant="filled"
          fullWidth
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
            shrink: true,
          }}
          InputProps={{
            style: { color: theme.palette.primary.main },
            placeholder: "Subject",
          }}
        />
        {/* Message Field */}
        <TextField
          id="message"
          name="message"
          label="Message"
          placeholder="Messages"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          InputLabelProps={{
            style: { color: theme.palette.primary.main },
            shrink: true,
          }}
          InputProps={{
            style: { color: theme.palette.primary.main },
            placeholder: "Message",
          }}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          variant="outlined"
          sx={{
            width: "130px",
            borderRadius: 5,
            border: `1px dotted ${theme.palette.primary.main}`,
            "&:hover": {
              backgroundColor: theme.palette.grey[800],
              color: theme.palette.secondary.second,
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Form;
