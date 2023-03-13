import React, { useState } from "react";
import { Card, TextField } from "@mui/material";
import axios from "axios";
import ButtonUI from "../../../common/button";
import "./index.css";

const Contact = () => {
  const [disableButton, setDisableButton] = useState(true)
  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    phone: false,
    city: false,
    message: false,
  });
  const [helperText, setHelperText] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegEx = /^\d{10}$/;
  const textRegex = /^[a-zA-Z ]+$/;

  const changeHandler = (e, type) => {
    setDisableButton(false)
    let value = e.target.value;
    setEnquiry((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const onBlurHandler = (e, type) => {
    let value = e.target.value;
    if (value === "") {
      setIsError((prev) => ({
        ...prev,
        [type]: true,
      }));
      setHelperText((prev) => ({
        ...prev,
        [type]: "This field cannot be left empty",
      }));
      return;
    }
    if (type === "email") {
      emailRegEx.test(value)
        ? setIsError((prev) => ({
            ...prev,
            [type]: false,
          }))
        : setIsError((prev) => ({
            ...prev,
            [type]: true,
          }));
          setHelperText((prev) => ({
            ...prev,
            [type]: "Invalid email",
          }));
    } else if (type === "phone") {
      phoneRegEx.test(value)
        ? setIsError((prev) => ({
            ...prev,
            [type]: false,
          }))
        : setIsError((prev) => ({
            ...prev,
            [type]: true,
          }));
          setHelperText((prev) => ({
            ...prev,
            [type]: "Invalid number",
          }));
    } else if (type === "name") {
      textRegex.test(value)
        ? setIsError((prev) => ({
            ...prev,
            [type]: false,
          }))
        : setIsError((prev) => ({
            ...prev,
            [type]: true,
          }));
      setHelperText((prev) => ({
        ...prev,
        [type]: "Only alphabets are allowed",
      }));
    }
    else {
      setIsError((prev) => ({
        ...prev,
        [type]: false,
      }))
      setHelperText((prev) => ({
        ...prev,
        [type]: "",
      }));
    }
  };

  const clickHandler = async () => {
    const { name, email, phone, city, message } = enquiry;

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      city === "" ||
      message === ""
    ) {
      for (const item in enquiry) {
        if (enquiry[item] === "") {
          console.log(item + ":" + enquiry[item]);
          setIsError((prev) => ({
            ...prev,
            [item]: true,
          }));
          setHelperText((prev) => ({
            ...prev,
            [item]: "This field cannot be left empty",
          }));
        }
      }
      return;
    }
    const res = await axios.post("http://localhost:5000/enquiry", {
      name,
      email,
      city,
      phone,
      message,
    });
    console.log({ res });
  };
  return (
    <div className="contact-container">
      <div className="contact-head">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-div">
        <div className="contact-map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.34532679544!2d88.3472478!3d22.5758742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a25c0c28a1%3A0x4385538ecbb20738!2sDiamond%20Heritage!5e0!3m2!1sen!2sin!4v1676743082944!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <Card className="contact-form-div">
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            error={isError.name}
            helperText={isError.name && helperText.name}
            value={enquiry?.name}
            onChange={(e) => changeHandler(e, "name")}
            onBlur={(e) => onBlurHandler(e, "name")}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            variant="outlined"
            value={enquiry?.phone}
            error={isError.phone}
            helperText={isError.phone && helperText.phone}
            onChange={(e) => changeHandler(e, "phone")}
            onBlur={(e) => onBlurHandler(e, "phone")}
          />
          <TextField
            label="Email"
            margin="normal"
            fullWidth
            variant="outlined"
            error={isError.email}
            helperText={isError.email && helperText.email}
            value={enquiry?.email}
            onChange={(e) => changeHandler(e, "email")}
            onBlur={(e) => onBlurHandler(e, "email")}
          />
          <TextField
            label="City"
            margin="normal"
            fullWidth
            variant="outlined"
            error={isError.city}
            helperText={isError.city && helperText.city}
            value={enquiry?.city}
            onChange={(e) => changeHandler(e, "city")}
            onBlur={(e) => onBlurHandler(e, "city")}
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
            error={isError.message}
            helperText={isError.message && helperText.message}
            value={enquiry?.message}
            onChange={(e) => changeHandler(e, "message")}
            onBlur={(e) => onBlurHandler(e, "message")}
          />
          <ButtonUI
            btnText="Send Message"
            onClick={clickHandler}
            disabled={
              Object.values(isError).every((item) => item === false)
                ? false
                : true
            }
          />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
