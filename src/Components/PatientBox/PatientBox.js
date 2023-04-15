import React from "react";
import { Container } from "./styles";

function PatientBox({
  id,
  fname,
  lname,
  age,
  dob,
  gender,
  height,
  weight,
  bloodGroup,
}) {
  return (
    <Container>
    <div className="info"><span>
        <b>Patient Id : </b>
        <p>{id}</p>
      </span>
      <span>
        <b>Name : </b>
        <p>{fname} {lname}</p>
      </span>
      <span>
        <b>Gender : </b>
        <p>{gender}</p>
      </span></div>
    <div className="detail"><span>
        <b>Age : </b>
        <p>{age}</p>
      </span>
      <span>
        <b>DOB : </b>
        <p>{dob}</p>
      </span></div>
    <div className="misc"><span>
        <b>Height : </b>
        <p>{height}</p>
      </span>
      <span>
        <b>Weight : </b>
        <p>{weight}</p>
      </span>
      <span>
        <b>Blood Group : </b>
        <p>{bloodGroup}</p>
      </span></div>
      
      
      
    </Container>
  );
}

export default PatientBox;