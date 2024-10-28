import * as React from "react";

import PropTypes from "prop-types";
import {
  Button,
  Typography,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Avatar,
} from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact({ sectionRef }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      ref={sectionRef}
      style={{
        height: "100vh",
        backgroundColor: "#D7E8E3",
        fontWeight: "900",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="div">
        Lets work together
      </Typography>
      <Button
        variant="outlined"
        style={{
          border: "2px solid #000",
          borderRadius: "10px",
          color: "#000",
          margin: "2vh"
        }}
        onClick={handleClickOpen}
      >
        Say Hello
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText sx={{}}>
            <a
              href="https://www.linkedin.com/in/ppradyu/"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
              }}
            >
              <Avatar sx={{ backgroundColor: "#fff", color: "#0077B5", padding:'0.5vw' }}>
                <LinkedIn fontSize="large"/>
              </Avatar>
              Pradyuman
            </a>
            <a
              href="https://github.com/legendary-acp"
              target="_blank"
              style={{
                margin: "3rem 0rem",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
              }}
            >
              <Avatar sx={{ backgroundColor: "#fff", color: "#000", padding:'0.5vw'}}>
                <GitHub fontSize="large"/>
              </Avatar>
              legendary-acp
            </a>
            <a
              href="mailto:meetupradyuman@gmail.com"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
              }}
            >
              <Avatar sx={{ backgroundColor: "#fff", color: "#000", padding:'0.5vw' }}>
                <Email fontSize="large"/>
              </Avatar>
              meetupradyuman@gmail.com
            </a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Contact.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};
