import React, { useEffect, useState } from "react";
import { NavContainer, Container, Draggable } from "./styles";
import data from "../../utils/patientData";
import PatientBox from "../PatientBox/PatientBox";
import { Link } from "react-router-dom";
import ProgressBar1 from "../ProgressBar/ProgressBar1.js";
const dummyPatient = {
  fname: "",
  lname: "",
  dob: "",
  age: "",
  gender: "",
  id: "",
  height: "", // height in cm
  weight: "", // weight in kg
  bloodGroup: "",
};

function DragAndDropForm() {
  const [patients, setPatients] = useState([data]);
  const [formData, setFormData] = useState(dummyPatient);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await fetch("http://localhost:5555/api/patientInfo");
      let res = await result.json();
      console.log(res);
    }
    getData();
  }, []);

  const handleDrop = (event) => {
    event.preventDefault();
    const jsonString = event.dataTransfer.getData("text/plain");
    const patientData = JSON.parse(jsonString);
    setFormData(patientData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(dummyPatient);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  // console.log(patients[0]);
  const filteredPatients = patients[0].filter(
    (patient) =>
      // console.log(patient)
      patient.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toString().includes(searchTerm)
  );

  return (
    <Container>
      <ProgressBar1 />
      <div className="box">
        <div className="patient-info">
          <div className="patient-search">
            <h2>List of Patients</h2>

            <input
              type="text"
              placeholder="Search by name or ID"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>

          <div className="patient-list">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <Draggable
                  key={index}
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData(
                      "text/plain",
                      JSON.stringify(patient)
                    );
                  }}
                >
                  <PatientBox
                    id={patient.id}
                    fname={patient.fname}
                    lname={patient.lname}
                    age={patient.age}
                    dob={patient.dob}
                    gender={patient.gender}
                    height={patient.height}
                    weight={patient.weight}
                    bloodGroup={patient.bloodGroup}
                  ></PatientBox>
                </Draggable>
              ))
            ) : (
              <strong>NO RESULT FOUND </strong>
            )}
          </div>
        </div>
        <div className="patient-form">
          <h2>Patient Form</h2>
          <form
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label>Patient Id :</label>
              <input
                id="id"
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label>First Name :</label>
              <input
                id="fname"
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Last Name :</label>
              <input
                id="lname"
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Age :</label>
              <input
                id="age"
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>DOB :</label>
              <input
                id="dob"
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Gender :</label>
              <input
                id="gender"
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Height (in cm) :</label>
              <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Weight (in KG) :</label>
              <input
                id="weight"
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Blood Group :</label>
              <input
                id="bloodGroup"
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
              />
            </div>

            <Link to={"/priorauth"}>
              <button type="submit" value="Next" className="next-btn">
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default DragAndDropForm;
