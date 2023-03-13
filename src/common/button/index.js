import { Button } from "@mui/material";
import React from "react";

const ButtonUI = (props) => {
  const onMouseEnter = (e) => {
    e.target.style.backgroundColor = props.onHover?.backgroundColor || "#ffffff";
    e.target.style.color = props.onHover?.color || "#6aa323";
  };
  const onMouseLeave = (e) => {
    e.target.style.backgroundColor = props.backgroundColor || "#6aa323";
    e.target.style.color = props.color || "#ffffff";
  };
  return (
    <Button
      variant="contained"
      className="button"
      size="large"
      style={{
        ...props.style,
        backgroundColor: props.backgroundColor || "#6aa323",
        color: props.color || "#ffffff",
        margin: props.margin || "10px 0",
      }}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseEnter={(e) => onMouseEnter(e)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.btnText}
    </Button>
  );
};

export default ButtonUI;
