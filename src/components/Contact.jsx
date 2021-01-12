/**
 * Date:19/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Contact Component
 * Description: This is a Home page of root path
 * **/

//  Included Third Pertty Components Or Packages
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  useMediaQuery,
  Typography,
} from "@material-ui/core";

// Included icons of Material-UI
import {
  Send as SendIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Duo as DuoIcon,
} from "@material-ui/icons";

// Included Custom Components
import styled from "../../styles/contact.module.css";

// Included Redux actions for contact
import app from "../../redux/actions/app";

const { handleChange, handleSubmit } = app.contact;

const Address = (props) => (
  <div className={styled.item}>
    <div className={styled.icon}>
      <props.icon />
    </div>
    <div className={styled.content}>
      <Typography variant="overline" display="block" className={styled.title}>
        {props.title}
      </Typography>
      <Typography variant="caption" className={styled.text}>
        {props.text}
      </Typography>
    </div>
  </div>
);

// create contact object
function createContactObject(icon, title, text) {
  return {
    icon,
    title,
    text,
  };
}
// Create Form Fields Object
function createFormFieldsObj(name, label, others) {
  return {
    name,
    label,
    ...others,
  };
}

const contactLists = [
  createContactObject(EmailIcon, "~Email", "dev.mdminhaj@gmail.com"),
  createContactObject(PhoneIcon, "~Phone", "+8801831-137771"),
  createContactObject(DuoIcon, "~Skype", "@N/A"),
  createContactObject(
    LocationOnIcon,
    "~Address",
    "Amin Textiles Ltd.-2, Sholashahar,Chittagong,4211,Chittagong, Bangladesh"
  ),
];

const Contact = () => {
  const isMatchedWidth = useMediaQuery("(min-width:576px)");
  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.app);

  // Contact form fields
  const formFields = [
    createFormFieldsObj("name", "Name", contact.name),
    createFormFieldsObj("email", "Email", contact.email),
    createFormFieldsObj("subject", "Subject", contact.subject),
    createFormFieldsObj("message", "Message", contact.message),
  ];

  return (
    <>
      {isMatchedWidth && (
        <h3 style={{ textAlign: "center", color: "#f50057" }}>OR</h3>
      )}

      <Grid container>
        {/* Contact Address */}
        <Grid container item sm={6}>
          <div className={styled.contactAddress}>
            {contactLists.map((list, ind) => (
              <Address
                key={ind}
                icon={list.icon}
                title={list.title}
                text={list.text}
              />
            ))}
          </div>
        </Grid>

        {!isMatchedWidth && (
          <h3 style={{ margin: "auto", color: "#f50057" }}>OR</h3>
        )}
        {/* Contact Form */}
        <Grid container item sm={6}>
          <div className={styled.contactForm}>
            <form onSubmit={(e) => dispatch(handleSubmit(e))}>
              {formFields.map(({ name, label, value, error }, i) => (
                <TextField
                  key={i}
                  name={name}
                  label={label}
                  value={value}
                  error={error ? true : false}
                  helperText={error}
                  fullWidth
                  placeholder="Name"
                  margin="normal"
                  size="medium"
                  color="secondary"
                  multiline={name === "message" ? true : false}
                  rows={10}
                  onChange={(e) => dispatch(handleChange(e))}
                />
              ))}
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                endIcon={<SendIcon>send</SendIcon>}
                size="large"
              >
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
