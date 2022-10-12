import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Popup = ({ setPopup }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <AiFillCheckCircle style={{ color: "green", fontSize: "50px" }} />
      <div>Thank you for your feedback</div>
      <p>we will work towards improve your experience</p>
      <Button
        onClick={() => {
          setPopup(false);
        }}
      >
        Close
      </Button>
    </div>
  );
};

export default Popup;
