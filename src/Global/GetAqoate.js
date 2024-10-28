import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@emotion/react";

const GetAquote = () => {
  const theme = useTheme();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    service: Yup.string().required("Service is required"),
  });

  return (
    <>
      <ToastContainer />

      <Box
        sx={{
          py: {
            xs: 4,
            md: 4,
            lg: 8,
          },
          backgroundColor: theme.palette.customColors.white,
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              color: theme.palette.secondary.third,
              fontFamily: theme.typography.fontFamily,
              fontWeight: "bold",
              mb: 2,
              mt: 5,
            }}
          >
            Let's Talk Business!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.lightgrey,
              fontWeight: 400,
              fontFamily: theme.typography.fontFamily,
              maxWidth: 700,
              margin: "auto",
            }}
          >
            Have questions about your idea? Drop your details to discuss with
            our technical expert. We look forward to hearing from you.
          </Typography>
        </Box>
        <Container sx={{ py: 2 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Box>
                <img
                  src="https://i.postimg.cc/ZKt4FcHc/2.png"
                  alt="Business discussion"
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box className="form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                    service: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log(values);

                    try {
                      const response = await axios.post(
                        "https://voyage-back.onrender.com/api/gettouch/add",
                        values
                      );
                      toast.success(response.data.message);
                    } catch (error) {
                      console.error("Error submitting form:", error);
                      toast.error("Error submitting form!");
                    } finally {
                      setSubmitting(false);
                      resetForm();
                    }
                  }}
                >
                  {({ handleChange, values, errors, touched }) => (
                    <Form noValidate autoComplete="off">
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Name"
                            fullWidth
                            variant="filled"
                            InputLabelProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                            }}
                            error={touched.name && !!errors.name}
                            helperText={<ErrorMessage name="name" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            fullWidth
                            placeholder="Email"
                            variant="filled"
                            InputLabelProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                            }}
                            error={touched.email && !!errors.email}
                            helperText={<ErrorMessage name="email" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            fullWidth
                            placeholder="+91 0000 00000"
                            variant="filled"
                            InputLabelProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                            }}
                            error={touched.mobile && !!errors.mobile}
                            helperText={<ErrorMessage name="mobile" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="filled">
                            <InputLabel
                              style={{
                                color: theme.palette.secondary.main,
                              }}
                              shrink
                            >
                              Service
                            </InputLabel>
                            <Field
                              as={Select}
                              name="service"
                              value={values.service}
                              onChange={handleChange}
                              displayEmpty
                              style={{
                                color: theme.palette.secondary.main,
                              }}
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="" disabled>
                                Select a service
                              </MenuItem>
                              <MenuItem value="Mobile App Development">
                                Mobile App Development
                              </MenuItem>
                              <MenuItem value="Web Development">
                                Web Development
                              </MenuItem>
                            </Field>
                            <ErrorMessage name="service" />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            variant="filled"
                            InputLabelProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                              shrink: true,
                            }}
                            InputProps={{
                              style: {
                                color: theme.palette.secondary.main,
                              },
                            }}
                            error={touched.message && !!errors.message}
                            helperText={<ErrorMessage name="message" />}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="outlined"
                            sx={{
                              width: "130px",
                              borderRadius: 5,
                              borderColor: theme.palette.primary.main,
                              color: theme.palette.primary.main,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white,
                              },
                            }}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GetAquote;
