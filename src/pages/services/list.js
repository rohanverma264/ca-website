import React from "react";

const List = (props) => {
  const { data, heading } = props;
  return (
    <>
      <div>
        <br />
        <h3 style={{ marginBottom: "10px" }}>{heading} :</h3>
        <ul style={{ marginLeft: "20px" }}>
          {data.map((el) => (
            <li key={el.title} style={{marginBottom: '5px'}}>
              <h4 style={{ marginBottom: "5px" }}>
                <b>{el.title}</b>
              </h4>
              <p style={{ fontSize: "14px" }}>{el.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
