import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div>
      <div className="my-3">
        <h2>About CloudNotebook</h2>
        <p>Welcome to CloudNotebook, your digital notepad in the cloud!</p>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Who We Are</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{ textAlign: "justify" }}>
              At CloudNotebook, we're passionate about simplifying your
              note-taking experience. We understand that in today's fast-paced
              world, you need a convenient and secure way to capture your
              thoughts, ideas, and important information. That's why we've
              created a user-friendly web application that allows you to store
              and access your notes effortlessly from anywhere, at any time.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{ textAlign: "justify" }}>
              Our mission is to empower individuals and businesses by providing
              them with a reliable, accessible, and organized platform for
              note-taking. We believe that your notes should be as dynamic as
              your life, and we're committed to making it easier for you to
              manage and share your digital notebooks.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Key Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{ textAlign: "justify" }}>
              <strong>Cloud Storage:</strong> Your notes are securely stored in
              the cloud, ensuring you never lose your valuable information.
              Access them from any device with an internet connection.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong>User-Friendly Interface:</strong> Our intuitive interface
              makes note-taking a breeze. Create, edit, and organize your notes
              with ease, whether you're a student, professional, or creative
              thinker.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong>Collaboration:</strong> Collaborate with friends,
              colleagues, or classmates by sharing your notebooks. Work together
              in real-time and keep everyone on the same page.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong>Privacy and Security: </strong> Your data's security is
              our top priority. We employ industry-standard encryption and
              security measures to keep your notes safe and confidential.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong>Customization:</strong> Personalize your notebooks with
              themes, colors, and fonts to make them uniquely yours.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="my-5">
        <h2>Join Us</h2>
        <p style={{ textAlign: "justify" }}>
          Today Join the CloudNotebook community and experience a smarter way to
          take notes. Whether you're a student, professional, or simply someone
          who loves jotting down their ideas, CloudNotebook is here to simplify
          and enhance your note-taking journey. Get started today and unlock the
          power of organized, accessible, and secure note-taking with
          CloudNotebook!
        </p>
      </div>
    </div>
  );
}
