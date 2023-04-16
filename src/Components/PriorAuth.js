import { Button, Image, Box, Flex, Spacer, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../Styles/PriorAuth.css'
import ProgressBar2 from './ProgressBar/ProgressBar2'
import data from "../utils/drugDetails";
// import drugDetail from '../../backend/models/drugDetails'
import axios from 'axios'

const PriorAuth = ({ setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ID, setID] = useState('.')
    const [pageData, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [drugData, setDrugData] = useState([data])

    const handleOnSearch = () => {
        setIsOpen(true);
    }

    // useEffect(() => {
    //     if (isOpen === true) {
    //         axios
    //             .get(`http://localhost:5555/drugDetails/${ID}`)
    //             .then((response) => {
    //                 setData(response.data);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }, [isOpen]);
    // console.log(pageData)

    const handleOnChange = (event) => {
        setID(event.target.value);
        setSearchTerm(event.target.value);
    }

    const filteredDrug = drugData[0].filter(
        (drugData) =>
            drugData.drugname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            drugData.cptCode.toString().includes(searchTerm)
    );
    
    return (
        <div className='drug'>
            <ProgressBar2 />
            <br />
            <div className="drugSearch">
                <p>Enter the Drug Name: </p>
                <div className="drugInput">
                    <HStack>
                        <p>Drug name:</p>
                        <input type="text" size='50' onChange={handleOnChange} value={searchTerm} />
                        <Spacer />
                        <Button onClick={handleOnSearch}>Search</Button>
                        <Spacer />

                    </HStack>
                </div>
            </div>

            {isOpen &&
                <div className="searchResult">
                    <p>Search Results: </p>
                    
                    <div className="results">
                        {filteredDrug.length > 0 ? (
                        filteredDrug.map((drugData, index) =>(
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
                                <div>{drugData.drugname}</div>
                                <br />
                                <div>{drugData.dosageForm}</div>
                                <br />
                                <div>{drugData.packageSize}</div>
                            </div>
                            <Spacer />
                            <div>
                                <div>{drugData.conc}</div>
                                <br />
                                <div>Drug Class:</div>
                                <br />
                                <div>CPT Code:</div>
                            </div>
                            <Spacer />
                            <div>
                                <div><br /></div>
                                <br />
                                <div>{drugData.drugClass}</div>
                                <br />
                                <div>{drugData.cptCode}</div>
                            </div>
                            <Spacer />

                        </Flex>
                    
                     ))
                     ) : (
                      <strong>NO RESULT FOUND </strong>
                    )} 
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
