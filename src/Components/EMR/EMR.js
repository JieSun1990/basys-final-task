import React, { useEffect, useState } from "react";
import "./EMR.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import data from "../../utils/patientData";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import ProgressBar3 from "../ProgressBar/ProgressBar3";
import drugData from "../../utils/drugDetails";

const EMR = ( {value} ) => {
  const [emrDetails, setEMRDetails] = useState(data);
  console.log(emrDetails);
  const [drug, setDrug] = useState(drugData[0]);

  //   const {id} = useParams()

  // const getEMRData =async()=>{
  //     const {data} = await axios.get(`http://localhost:8000/emr/getEMRDetails/:id`)
  //     setEMRDetails(data?.emr[0])
  //     console.log(data)
  // }

  // const getDrugData = async()=>{

  // }

  // console.log(emrDetails)

  // useEffect(()=>{
  //     getEMRData()
  // },[])
//   console.log(emrDetails[6].fname);
  return (
    <div className="right-side-container">
      <ProgressBar3 />
      <table>
        <tr class="roww">
          <td className="patient-info1">
            <div class="patient-info2 box1">
              <div style={{ textAlign: "center" }}>
                <h3>Patient information</h3>
              </div>
              <div class="row grid-container">
                <div class="grid-item">
                  Name: {emrDetails[6].fname} {emrDetails[6].lname}
                </div>
                <div class="grid-item">Date of birth:{emrDetails[6].dob}</div>
                <div class="grid-item">Gender: {emrDetails[6].gender}</div>
                <div class="grid-item">
                  Blood group:{emrDetails[6].bloodGroup}
                </div>
                <div class="grid-item">Height:{emrDetails[6].height} cm</div>
                <div class="grid-item">Weight: {emrDetails[6].weight}kg</div>
                <div class="grid-item">BMI: {emrDetails[6].BMI}</div>
                <div class="grid-item">Id: {emrDetails[6].id}</div>
                <div class="grid-item">Age: {emrDetails[6].age}</div>
              </div>
            </div>
          </td>
          <td className="medical-history1">
            <div class="medical-history2 box1">
              <div style={{ textAlign: "center" }}>
                <h3>Medical history</h3>
              </div>
              <tr class="medical-history3" style={{ marginTop: "6%" }}>
                <td class="disease  disease-box">
                  {emrDetails &&
                    emrDetails[6].medicalhis.disease.map((disease) => {
                      return <tr class="">{disease}</tr>;
                    })}
                </td>
                <td class="allergy allergy-box">
                  <tr class="">
                    {" "}
                    <h5 style={{ paddingLeft: "0", paddingRight: "0" }}>
                      Allergeis
                    </h5>
                  </tr>
                  {emrDetails &&
                    emrDetails[6].medicalhis.allergies?.map((disease) => {
                      return <tr class="">{disease}</tr>;
                    })}
                </td>
              </tr>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ paddingRight: "0", width: "60%" }}>
            <tr class="requested-treatment1 box1">
              <div class="requested-treatment2">
                <div style={{ textAlign: " center", marginBottom: "3%" }}>
                  <h3>Requested treatment</h3>
                </div>
                <td class=" " style={{ width: "33.33%" }}>
                  <div class="issue-head row">
                    <h5>Disease</h5>
                  </div>
                  <div class="issue-disease row">
                    <p>Disease: {emrDetails[6].medicalhis.disease[0]}</p>
                  </div>
                  <div class="issue-severity row">Severity: High</div>
                </td>
                <td class="drug">
                  <div class="drug-name row">Name of Drug: {drug.drugname}</div>
                  <div class="drug-brand row">Drug Class: {drug.drugClass}</div>
                  <div class="drug-price row">Drug price: ﹩11.5</div>
                </td>
                <td class="dose">
                  <div class="drug-quantity row">
                    {drug.quantity} dose daily
                  </div>
                  <div class="drug-timing row">Date: {drug.day}</div>
                </td>
              </div>
            </tr>
            <tr class="supporting-doc1 box1 ">
              <div
                class="supporting-doc2"
                style={{ textAlign: "center", paddingTop: "1%" }}
              >
                <tr
                  class=""
                  style={{
                    textAlign: "center",
                    marginBottom: "5%",
                    paddingTop: "5%",
                  }}
                >
                  <h3>Supporting doc</h3>
                </tr>
                <td class=" supporting-doc">
                  <td class="supporting-doc2">
                    <a href="#">doc1</a>
                  </td>
                </td>
                <td class="supporting-doc">
                  <td class="supporting-doc2">
                    <a href="#">doc2</a>
                  </td>
                </td>
              </div>
            </tr>
          </td>
          <td class="">
            <div class="family-his1" style={{ widht: "100%", height: "20rem" }}>
              <div
                class="family-his2"
                style={{ widht: "100%", height: "100%" }}
              >
                <tr
                  class=""
                  style={{
                    textAlign: " center",
                    marginBottom: "2%",
                    paddingTop: "10px",
                  }}
                >
                  <h3>Family history</h3>
                </tr>
                <tr class="row father-history">
                  <div
                    class=""
                    style={{
                      paddingLeft: "11px",
                      paddingRight: "0",
                      paddingTop: "20px",
                    }}
                  >
                    <h5>Father family side</h5>
                  </div>

                  {emrDetails &&
                    emrDetails[6].familyhis?.fatherside?.map((disease) => {
                      return <tr class="">{disease}</tr>;
                    })}
                </tr>
                <tr class=" mother-history">
                  <tr
                    class=""
                    style={{
                      paddingLeft: "0",
                      paddingRight: "0",
                      marginTop: "20px",
                    }}
                  >
                    <h5>Mother family side</h5>
                  </tr>
                  {emrDetails &&
                    emrDetails[6].familyhis?.motherside?.map((disease) => {
                      return <tr class="">{disease}</tr>;
                    })}
                </tr>
              </div>
            </div>
          </td>
        </tr>
        <tr
          className="row3"
          style={{
            paddingRight: "0",
            width: "150%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div class="contact-info1" style={{ width: "100%" }}>
            <div class="contact-info2" style={{ width: "100%" }}>
              <td class="">
                <tr
                  class=""
                  style={{
                    paddingLeft: "0",
                    paddingRight: "0",
                    textAlign: " center",
                    marginBottom: "3%",
                  }}
                >
                  {" "}
                  <h3>Status</h3>
                </tr>
                <tr class="">{emrDetails[6].status}</tr>
              </td>
              <td class="">
                <tr
                  class=""
                  style={{
                    paddingLeft: "2rem",
                    paddingRight: "100px",
                    textAlign: " center",
                    marginBottom: "3%",
                    marginRight: "40px",
                  }}
                >
                  {" "}
                  <h3>Report</h3>
                </tr>
                <tr class="">
                  <td class="lab-report" style={{ textAlign: "center" }}>
                    <td class="lab-report2" style={{ textAlign: "center" }}>
                      <a href="#">Report1</a>
                    </td>
                  </td>
                </tr>
              </td>
              <td class="">
                <tr
                  class=""
                  style={{
                    paddingLeft: "2rem",
                    paddingRight: "",
                    textAlign: "center",
                    marginBottom: "3%",
                  }}
                >
                  <h3>Contact information</h3>
                </tr>
                <tr class="" style={{ paddingLeft: "1rem" }}>
                  Contact no.:+91 836xxxxxxx
                </tr>
                <tr class="" style={{ paddingLeft: "1rem" }}>
                  Email: anuxxx@mail.com
                </tr>
              </td>
            </div>
          </div>
        </tr>
      </table>
      {/* <div class="row row1">
            <div class="col col-md-6 patient-info1">
                <div class="patient-info2 box1">
                    <div style={{textAlign:"center"}}><h3>Patient information</h3></div>
                    <div class="row grid-container">
                        <div class="grid-item">Name:  {emrDetails?.fname} {emrDetails?.lname}</div>
                        <div class="grid-item">Date of birth:{emrDetails?.dob}</div>
                        <div class="grid-item">Gender: {emrDetails?.gender}</div>
                        <div class="grid-item">Blood group:{emrDetails?.bloodGroup}</div>
                        <div class="grid-item">Height:{emrDetails?.height} cm</div>
                        <div class="grid-item">Weight: {emrDetails?.weight}kg</div>
                        <div class="grid-item">BMI: {emrDetails?.BMI}</div>
                        <div class="grid-item">Id: {emrDetails?.id}</div>
                        <div class="grid-item">Age: {emrDetails?.age}</div>
                    </div>
                </div>
            </div>
            <div class="col col-md-6 medical-history1">
                <div class="medical-history2 box1">
                    <div style={{textAlign:"center"}}><h3>Medical history</h3></div>
                    <div class="row medical-history3" style={{marginTop:"6%"}}>
                        <div class="col col-md-5 disease  disease-box">
                        {
                            emrDetails && emrDetails?.medicalhis?.disease?.map((disease)=>{
                                return   <div class="row">{disease}</div>
                            })
                          }
                        </div>
                        <div class="col col-md-4 allergy allergy-box">
                            <div class="row" > <h5 style={{paddingLeft:"0",paddingRight:"0"}}>Allergeis</h5></div>
                            {
                            emrDetails && emrDetails?.medicalhis?.allergies?.map((disease)=>{
                                return   <div class="row">{disease}</div>
                            })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row2">
            <div class="col col-md-8" style={{"paddingRight": "0"}}>
                <div class="row requested-treatment1 box1">
                    <div class="requested-treatment2">
                        <div style={{textAlign:" center", marginBottom: "3%"}}><h3>Requested treatment</h3></div>
                        <div class="Issue col col-md-4 d-flex flex-row">
                            <div class="issue-head row"><h5>Disease</h5></div>
                            <div class="issue-disease row"><p>Disease: Leukemia</p></div>
                            <div class="issue-severity row">Severity: High</div>
                        </div>
                        <div class="drug col col-md-4 d-flex flex-row">
                            <div class="drug-name row">Name of Drug: {drug.name}</div>
                            <div class="drug-brand row">Drug brand: Value 1</div>
                            <div class="drug-price row">Drug price: ﹩11.5</div>
                        </div>
                        <div class="dose col col-md-4 d-flex flex-row">
                            <div class="drug-quantity row">{drug.quantity} dose daily</div>
                            <div class="drug-timing row">Date: {drug.day}</div>
                        </div>
                    </div>
                </div>
                <div class="row supporting-doc1 box1">
                    <div class="supporting-doc2">
                        <div class="row" style={{textAlign:" center", marginBottom: "3%"}}><h3>Supporting doc</h3></div>
                        <div class="col col-md-4 supporting-doc">
                            <div class="col col-md-4 supporting-doc2">
                                <a href="#">doc1</a>
                            </div>
                        </div>
                        <div class="col col-md-4 supporting-doc">
                            <div class="col col-md-4 supporting-doc2">
                                <a href="#">doc2</a>
                            </div>
                        </div>
                        <div class="col col-md-4 supporting-doc">
                            <div class="col col-md-4 supporting-doc2">
                                <a href="#">doc3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-4">
                <div class="family-his1">
                    <div class="family-his2">
                        <div class="row" style={{textAlign:" center", marginBottom: "3%"}}><h3>Family history</h3></div>
                        <div class="row father-history">
                            <div class="row" style={{paddingLeft: "0", paddingRight: "0"}}><h5>Father family side</h5></div>
                          
                          {
                            emrDetails && emrDetails?.familyhis?.fatherSide?.map((disease)=>{
                                return   <div class="row">{disease}</div>
                            })
                          }
                        </div>
                        <div class="row mother-history">
                            <div class="row" style={{paddingLeft: "0", paddingRight: "0"}}><h5>Mother family side</h5></div>
                            {
                            emrDetails && emrDetails?.familyhis?.motherSide?.map((disease)=>{
                                return   <div class="row">{disease}</div>
                            })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row3">
            <div class="contact-info1">
                <div class="contact-info2">
                    <div class="col col-md-3">
                        <div class="row" style={{paddingLeft: "0", paddingRight: "0", textAlign:" center", marginBottom: "3%"}}> <h3>Status</h3></div>
                        <div class="row">{emrDetails?.status}</div>
                    </div>
                    <div class="col col-md-6">
                        <div class="row" style={{paddingLeft: "0", paddingRight: "0", textAlign:" center", marginBottom: "3%"}}> <h3>Lab report</h3></div>
                        <div class="row">
                            <div class="col col-md-4 lab-report">
                                <div class="col col-md-4 lab-report2">
                                    <a href="#">Report1</a>
                                </div>
                            </div>
                            <div class="col col-md-4 lab-report">
                                <div class="col col-md-4 lab-report2">
                                    <a href="#">Report2</a>
                                </div>
                            </div>
                            <div class="col col-md-4 lab-report">
                                <div class="col col-md-4 lab-report2">
                                    <a href="#">Report3</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col col-md-3">
                        
                        <div class="row" style={{paddingLeft: "0", paddingRight: "0", textAlign:"center", marginBottom: "3%"}}><h3>Contact information</h3></div>
                        <div class="row">Contact no.:+91 836xxxxxxx</div>
                        <div class="row">Email: anuxxx@mail.com</div>

                    <div style={{ marginLeft: "89%", fontSize: "2rem", backgroundColor: "white", width: "6.5rem", textAlign: 'center', marginTop: "1rem", borderRadius: "30px" }}>

                        <Link to={`/questionnaire`}>Next</Link>

                    </div>
                </div>
            </div>
        </div> */}

      <div className="buttons">
        <Flex>
          {/* <Spacer /> */}
          <div>
            <Button>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/details"
              >
                Back
              </Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/questionnaire"
              >
                Next
              </Link>
            </Button>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default EMR;
