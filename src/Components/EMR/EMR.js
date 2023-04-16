import React, { useEffect, useState } from 'react';
import './EMR.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import ProgressBar3 from '../ProgressBar/ProgressBar3';



const EMR = ({ value }) => {






    const [emrDetails, setEMRDetails] = useState()
    const [drug, setDrug] = useState(value)

    const { id } = useParams()

    const getEMRData = async () => {
        const { data } = await axios.get(`http://localhost:8000/emr/getEMRDetails/${id}`)
        setEMRDetails(data?.emr[0])
        console.log(data)
    }

    const getDrugData = async () => {

    }

    console.log(emrDetails)


    useEffect(() => {
        getEMRData()
    }, [])

    return (
        <>
            <ProgressBar3 />
            <div className="right-side-container">


                <div className="row row1">

                    <div className="col col-md-6 patient-info1">
                        <div className="patient-info2 box1">
                            <div style={{ textAlign: "center" }}><h3>Patient information</h3></div>
                            <div className="row grid-container">
                                <div className="grid-item">Name:  {emrDetails?.fname} {emrDetails?.lname}</div>
                                <div className="grid-item">Date of birth:{emrDetails?.dob}</div>
                                <div className="grid-item">Gender: {emrDetails?.gender}</div>
                                <div className="grid-item">Blood group:{emrDetails?.bloodGroup}</div>
                                <div className="grid-item">Height:{emrDetails?.height} cm</div>
                                <div className="grid-item">Weight: {emrDetails?.weight}kg</div>
                                <div className="grid-item">BMI: {emrDetails?.BMI}</div>
                                <div className="grid-item">Id: {emrDetails?.id}</div>
                                <div className="grid-item">Age: {emrDetails?.age}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 medical-history1">
                        <div className="medical-history2 box1">
                            <div style={{ textAlign: "center" }}><h3>Medical history</h3></div>
                            <div className="row medical-history3 border border-dark" style={{ marginTop: "6%" }}>
                                <div className="col col-md-5 disease border border-dark  disease-box">
                                    {
                                        emrDetails && emrDetails?.medicalhis?.disease?.map((disease) => {
                                            return <div className="row">{disease}</div>
                                        })
                                    }
                                </div>
                                <div className="col col-md-4 border border-dark allergy allergy-box ms-auto">
                                    <div className="row" > <h5 style={{ paddingLeft: "0", paddingRight: "0" }}>Allergeis</h5></div>
                                    {
                                        emrDetails && emrDetails?.medicalhis?.allergies?.map((disease) => {
                                            return <div className="row">{disease}</div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col col-md-8" style={{ "paddingRight": "0" }}>
                        <div className="row requested-treatment1 box1">
                            <div className="requested-treatment2 d-flex flex-column">
                                <div style={{ textAlign: " center", marginBottom: "3%" }}><h3>Requested treatment</h3></div>
                                <div className='d-flex'>
                                    <div className="Issue col col-md-4 d-flex flex-column">
                                        <div className="issue-head"><h5>Disease</h5></div>
                                        <div className="issue-disease "><p>Disease: Leukemia</p></div>
                                        <div className="issue-severity">Severity: High</div>
                                    </div>
                                    <div className="drug col col-md-4 d-flex flex-column">
                                        <div className="issue-disease "><p>Disease: Leukemia</p></div>
                                        <div className="issue-severity">Severity: High</div>
                                    </div>
                                    <div className="dose col col-md-4 d-flex flex-row d-flex flex-column">
                                        <div className="issue-disease "><p>Disease: Leukemia</p></div>
                                        <div className="issue-severity">Severity: High</div>
                                        {/* <!-- <div className="drug-price row">value3</div> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row supporting-doc1 box1">
                            <div className="supporting-doc2">
                                <div className="row" style={{ textAlign: " center", marginBottom: "3%" }}><h3>Supporting doc</h3></div>
                                <div className="col col-md-4 supporting-doc">
                                    <div className="col col-md-4 supporting-doc2">
                                        <a href="#">doc1</a>
                                    </div>
                                </div>
                                <div className="col col-md-4 supporting-doc">
                                    <div className="col col-md-4 supporting-doc2">
                                        <a href="#">doc2</a>
                                    </div>
                                </div>
                                <div className="col col-md-4 supporting-doc">
                                    <div className="col col-md-4 supporting-doc2">
                                        <a href="#">doc3</a>
                                    </div>
                                </div>
                                {/* <!-- <h3>Supporting Doc</h3> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="family-his1">
                            <div className="family-his2">
                                <div className="row" style={{ textAlign: " center", marginBottom: "3%" }}><h3>Family history</h3></div>
                                <div className="row father-history">
                                    <div className="row" style={{ paddingLeft: "0", paddingRight: "0" }}><h5>Father family side</h5></div>

                                    {
                                        emrDetails && emrDetails?.familyhis?.fatherSide?.map((disease) => {
                                            return <div className="row">{disease}</div>
                                        })
                                    }
                                </div>
                                <div className="row mother-history">
                                    <div className="row" style={{ paddingLeft: "0", paddingRight: "0" }}><h5>Mother family side</h5></div>
                                    {
                                        emrDetails && emrDetails?.familyhis?.motherSide?.map((disease) => {
                                            return <div className="row">{disease}</div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row3">
                    <div className="contact-info1">
                        <div className="contact-info2">
                            <div className="col col-md-3">
                                <div className="row" style={{ paddingLeft: "0", paddingRight: "0", textAlign: " center", marginBottom: "3%" }}> <h3>Status</h3></div>
                                <div className="row">{emrDetails?.status}</div>
                                {/* <!-- <h3>Status</h3> --> */}
                            </div>
                            <div className="col col-md-6">
                                <div className="row" style={{ paddingLeft: "0", paddingRight: "0", textAlign: " center", marginBottom: "3%" }}> <h3>Lab report</h3></div>
                                <div className="row">
                                    <div className="col col-md-4 lab-report">
                                        <div className="col col-md-4 lab-report2">
                                            <a href="#">Report1</a>
                                        </div>
                                    </div>
                                    <div className="col col-md-4 lab-report">
                                        <div className="col col-md-4 lab-report2">
                                            <a href="#">Report2</a>
                                        </div>
                                    </div>
                                    <div className="col col-md-4 lab-report">
                                        <div className="col col-md-4 lab-report2">
                                            <a href="#">Report3</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- <h3>Lab Test</h3> --> */}
                            </div>
                            <div className="col col-md-3">

                                <div className="row" style={{ paddingLeft: "0", paddingRight: "0", textAlign: "center", marginBottom: "3%" }}><h3>Contact information</h3></div>
                                <div className="row">Contact no.:+91 836xxxxxxx</div>
                                <div className="row">Email: anuxxx@mail.com</div>
                                {/* <!-- <h3>Contact info</h3> --> */}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginLeft: "89%", fontSize: "2rem", backgroundColor: "white", width: "6.5rem", textAlign: 'center', marginTop: "1rem", borderRadius: "30px" }}>

                        <Link to={`/questionnaire/${id}`}>Next</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EMR