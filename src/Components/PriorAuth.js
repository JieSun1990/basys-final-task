import { Button, Image, Box, Flex, Spacer, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../Styles/PriorAuth.css'

const PriorAuth = ({setValue}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ID, setID] = useState('.')
    const [pageData, setData] = useState([]);
    const togglePopup = () => {
        setIsOpen(true);
        console.log('open');
        setValue(prevValue => ({...prevValue, ['DrugName']: ID}));
    }

    const handleOnChange = (event) => {
        setID(event.target.value);
    }
    return (
        <div>
            <h1>Ontology Search</h1>
            <div className="drugSearch">
                <p>Enter the Drug Name: </p>
                <div className="drugInput">
                    <HStack>
                        <p>Drug name:</p>
                        <input type="text" size='50' onChange={handleOnChange} />
                        <Spacer/>
                        <Button onClick={togglePopup}>Search</Button>
                        <Spacer/>

                    </HStack>
                </div>
            </div>

            {isOpen &&
                <div className="searchResult">
                    <p>Search Results: </p>
                    <div className="results">
                        <Flex>
                            <div>
                                <div>Drug Name:</div>
                                <br />
                                <div>Dosage Form:</div>
                                <br />
                                <div>Package Size:</div>
                            </div>
                            <Spacer />
                            <div>
                                <div>{ID}</div>
                                <br />
                                <div>VIAL (EA)</div>
                                <br />
                                <div>1.0 each</div>
                            </div>
                            <Spacer />
                            <div>
                                <div>150 mg</div>
                                <br />
                                <div>Drug Class:</div>
                                <br />
                                <div>CPT Code:</div>
                            </div>
                            <Spacer />
                            <div>
                                <div><br /></div>
                                <br />
                                <div>RX</div>
                                <br />
                                <div>J2357</div>
                            </div>
                            <Spacer />

                        </Flex>
                    </div>
                    <div className='buttons'>
                        <Flex>
                            <Spacer />
                            <div>
                                <Button>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/dragdrop'>
                                        Back
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/details'>
                                        Next
                                    </Link>
                                </Button>
                            </div>
                        </Flex>
                    </div>
                </div>


            }



        </div>

    )
}

export default PriorAuth
