import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Details.css'
import data from "../utils/drugDetails";
import ProgressBar2 from './ProgressBar/ProgressBar2';


function Details({ val, setDrug }) {
    const [qty, setQty] = useState('')
    const [day, setDay] = useState('')
    const [drugData, setDrugData] = useState([data])

    // const index = drugData.findIndex(item => item.cptCode === val);

    const handleOnChangeQty = (event) => {
        setQty(event.target.value);
        // setValue(prevValue => ({ ...prevValue, ['Quantity']: qty }));

    }
    const handleOnChangeDay = (event) => {
        setDay(event.target.value);
        // setValue(prevValue => ({ ...prevValue, ['SupplyDay']: day }));
    }

    const filteredDrug = drugData[0].filter(
        (drugData) =>
            drugData.drugname.toLowerCase().includes(val.toLowerCase()) ||
            drugData.cptCode.toString().includes(val)
    );

    const handleOnSubmit = () => {
        {
            filteredDrug.length > 0 ? (
                filteredDrug.map((drugData, index) => (
                    drugData.qty= qty,
                    drugData.day= day
                ))
            ) : (
            <strong>NO RESULT FOUND </strong>
        )
        }
        setDrug(filteredDrug);
        console.log(filteredDrug);
    }

    return (
        <div>
            <ProgressBar2 />
            <div className="drugDetail">
                <p>Enter the details of selected Drug: </p>
                <div className="details">
                    <HStack>
                        <p>Drug name:</p>
                        <p>{val}</p>
                    </HStack>
                    <HStack>
                        <label>Quantity: </label>
                        <input type="text" onChange={handleOnChangeQty} />
                        <Spacer />
                        <label>Day Supply: </label>
                        <Spacer />
                        <input type="text" onChange={handleOnChangeDay} />
                        <Spacer />
                        <Spacer />
                    </HStack>
                    <br />
                    <div>
                        <HStack>
                            <p>Directions:</p>
                            <textarea name="" id="" cols="100" rows="3" style={{ padding: '10px' }}></textarea>
                        </HStack>
                    </div>
                    <br />
                    <div>
                        <HStack>
                            <p>Urgency:</p>
                            <select>
                                <option value="">-- Select Urgency --</option>
                                <option value="option1">Yes</option>
                                <option value="option2">No</option>
                            </select>
                        </HStack>
                    </div>

                </div>
                <div className='buttons'>
                    <Flex>
                        <Spacer />
                        <div>
                            <Button>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to='/priorauth'>Back</Link>
                            </Button>
                        </div>
                        <div>
                            <Button onClick={handleOnSubmit}>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={'/emr'}>Next</Link>
                            </Button>
                        </div>
                    </Flex>
                </div>
            </div>

        </div>
    )
}

export default Details