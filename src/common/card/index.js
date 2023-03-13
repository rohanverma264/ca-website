import * as React from "react";
import Card from "@mui/material/Card";
import "./index.css";

export default function CardUI(props) {
  return (
    <div>
      <Card className="card" style={{backgroundColor: props.backgroundColor || "#ffffff"}}>
        <div className="card-div">
          {props.icon}
          <h3 style={{ color: "#0580c6", marginBottom: '10px' }}>{props.title}</h3>
          <p style={{ color: "#56595c", fontSize: '14px' }}>{props.content}</p>
        </div>
      </Card>
    </div>
  );
}
