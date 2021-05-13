import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {Spinner, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export const Characters = () => {

    const [people, setPeople] = useState([]);
    const [stopper, setStopper] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getPeople = async () => {
            let res = await axios.get('https://api.got.show/api/general/characters');   
            let temp = res.data.show;
            setPeople(temp);
            setStopper(true);
            setIsLoading(false);
        }
        getPeople();
    }, [stopper]);


    return isLoading ? (

        <Spinner animation="grow" />

    ) : (
        
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {people.map(elem => (
                    <div class="col">
                        <Card style={{ width: '18rem',padding:'5px',marginTop:'20px' }}>
                            <Card.Img variant="top" src={elem.image}  style={{ width: 'auto', height: '400px' }} />
                            <Card.Body>
                                <Card.Title>{elem.name}</Card.Title>
                                <Card.Text>
                                {elem.house}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Spouse: {elem.spouse.length === 0 ? 'None/Unknown' : elem.spouse.join(', ')}</ListGroupItem>
                                <ListGroupItem>Allegiances: {elem.allegiances.join(', ')}</ListGroupItem>
                                <ListGroupItem>Titles: {elem.titles.length===0?'None / Unknown': elem.titles.join(', ')}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </div>
                ))}
            </div>              
    )
}
