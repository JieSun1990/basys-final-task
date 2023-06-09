import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import ProgressBar4 from "./ProgressBar/ProgressBar4.js";
import "../Styles/Questionnaire.css";
import { Button, Flex, Spacer } from '@chakra-ui/react';
import patients from '../utils/patientData.js';

const disease = patients[6].medicalhis.disease[0].toLowerCase();
const height = patients[6].height;
const weight = patients[6].weight;

function Questionnaire(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        async function getData(){
            const que = await fetch(`http://localhost:5555/api/questions?disease=${disease}`);
            var questions = await que.json();
            console.log(questions)
            questions.sort((a,b)=>{
                return a.id-b.id;
            })
            questions.forEach((question)=>{
                if(question.default){
                    question.value=question.default;
                }
                else
                {
                    question.value='';
                }
            })
            setData(questions);
        }
        getData();
    },[]);
    
    function handleChange(e,index){
        const value = e.target.value
        const checked = e.target.checked
        const type = e.target.type
        if(type==="checkbox"){
            setData((prevFormFields) => {
                const updatedFields = prevFormFields.map((prevField) => {
                  if (prevField.id === data[index].id) {
                    const prevValue = prevField.value || [];
                    let newValue;
                    if (checked) {
                      newValue = [...prevValue, value];
                    } else {
                      newValue = prevValue.filter((prevOption) => prevOption !== value);
                    }
                    return { ...prevField, value: newValue };
                  } else {
                    return prevField;
                  }
                });
                return updatedFields;
            });
        }
        else
        {
            var updatedFormFields = [...data];
            updatedFormFields[index] = { ...updatedFormFields[index], value: value };
            setData(updatedFormFields); 
            if(updatedFormFields[index].dependencyValue){
                if(updatedFormFields[index].dependencyValue===value){
                    updatedFormFields[index].dependentQuestion.forEach((question)=>{
                        const idx = updatedFormFields.findIndex((q) => q.id===question);
                        if(idx!==-1){
                            updatedFormFields[idx].hidden=true;
                        }
                    })
                    setData(updatedFormFields);
                }
                else
                {
                    updatedFormFields[index].dependentQuestion.forEach((question)=>{
                        const idx = updatedFormFields.findIndex((q) => q.id===question);
                        if(idx!==-1){
                            updatedFormFields[idx].hidden=false;
                        }
                    })
                    setData(updatedFormFields);
                }
            }
        }
    }
    return (
        <div>
            <ProgressBar4 />
            <div id="questionnaire">
                <div>
                    <span style={{fontSize:"25px",textDecoration:"underline",textUnderlineOffset: "5px"}}>Complete all the applicable sections of the below Questionnaire ( <span style={{color:"red"}}>*</span> Mandatory )</span>
                    <form>
                        {data.map((question,index)=>{
                            if(question.hidden){
                                return null;
                            }
                            else if(question.type==="text" || question.type==="number" || question.type==="date"){
                                if(question.emr){
                                    return <div style={{margin:"20px 0px"}}><p style={{marginBottom:"8px",fontWeight:"bold"}}>{question.que} {question.required?<span style={{color:"red"}}>*</span>:null} (Autofilled from EMR)</p><input style={{width:"95%",height:"20px",borderRadius:"5px",padding:"5px",fontSize:"15px"}} id={question.id} type={question.type} value={question.weight?weight:height} required={question.required} disabled onChange={(event) => handleChange(event, index)}></input></div>
                                }
                                else
                                {
                                    return <div style={{margin:"20px 0px"}}><p style={{marginBottom:"8px",fontWeight:"bold"}}>{question.que} {question.required?<span style={{color:"red"}}>*</span>:null}</p><input style={{width:"95%",height:"20px",borderRadius:"5px",padding:"5px",fontSize:"15px"}} id={question.id} type={question.type} value={question.value} required={question.required} onChange={(event) => handleChange(event, index)}></input></div>
                                }
                            }
                            else if(question.type==="checkbox"){
                                return (
                                            <div style={{margin:"20px 0px"}}>
                                                <p style={{marginBottom:"8px",fontWeight:"bold"}}>{question.que} {question.required?<span style={{color:"red"}}>*</span>:null}</p>
                                                {question.options.map((option)=>(
                                                    <div>
                                                        <label>
                                                            <input name={question.id} type="checkbox" value={option} required={question.required} checked={question.value.includes(option)} onChange={(event) => handleChange(event, index)}></input>
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                            }
                            return (
                                        <div style={{margin:"20px 0px"}}>
                                            <p style={{marginBottom:"8px",fontWeight:"bold"}}>{question.que} {question.required?<span style={{color:"red"}}>*</span>:null}</p>
                                            {question.options.map((option)=>(
                                                <div>
                                                    <label>
                                                        <input name={question.id} type="radio" value={option} required={question.required} checked={question.value===option} onChange={(event) => handleChange(event, index)}></input>
                                                        {option}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )
                        })}
                    </form>
                    <div className='buttons'>
                        <Flex>
                            <Spacer />
                            <div>
                                <Button style={{margin:"0px 20px"}}>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/emr'>
                                        Back
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button style={{margin:"0px 20px"}}>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/submitted'>
                                        Submit
                                    </Link>
                                </Button>
                            </div>
                        </Flex>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Questionnaire;