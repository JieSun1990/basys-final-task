import { Button, Flex, HStack, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Details.css'
import ProgressBar2 from './ProgressBar/ProgressBar2';
function Details({ value, setValue }) {
    const [qty, setQty] = useState('')
    const [day, setDay] = useState('')
    const handleOnChangeQty = (event) => {
        setQty(event.target.value);
        setValue(prevValue => ({ ...prevValue, ['Quantity']: qty }));
    }
    const handleOnChangeDay = (event) => {
        setDay(event.target.value);
        setValue(prevValue => ({ ...prevValue, ['SupplyDay']: day }));
    }

    return (
        <div>
            <ProgressBar2/>
            <div className="drugDetail">
                <p>Enter the details of selected Drug: </p>
                <div className="details">
                    <HStack>
                        <p>Drug name:</p>
                        <p>{value.DrugName}</p>
                    </HStack>
                    <HStack>
                        <label>Quantity: </label>
                        {/* <Spacer /> */}
                        <input type="text" onChange={handleOnChangeQty} />
                        <Spacer />
                        {/* <Spacer /> */}
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
                            <Button>
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