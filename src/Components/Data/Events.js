import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Spinner, Card} from 'react-bootstrap';


const Events = () => {

    const [events, setEvents] = useState([]);
    const [stopper, setStopper] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getEvents = async () => {
            let res = await axios.get('https://api.got.show/api/show/events');
            let temp = res.data;
            setEvents(temp);    
            setStopper(true);
            setIsLoading(false);

        }
        getEvents();
    }, [stopper]);


    return isLoading ? (

        <Spinner animation="grow" />

    )
        :
        (
            <div class="row row-cols-1 row-cols-md-3 g-4" >
            {events.map(elem => (
                <div class="col" style={{alignContent:'center'}}>
                <Card border="info" style={{ width: '18rem',padding:'5px',marginTop:'20px' }}>
                    <Card.Header><text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#4CAF50'}}>Place:</text>  <br /><text style={{fontFamily: 'Verdana, sans-serif'}}>{elem.place.join(', ')}</text></Card.Header>
                    <Card.Body>
                        <Card.Title>{elem.name}</Card.Title>
                        <Card.Text>
                        <section><text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#FF8C00'}}>Participants:</text> <br /><text style={{fontFamily: 'Verdana, sans-serif'}}>{elem.participants.length === 0 ? `Unattended` : elem.participants.join(', ')}</text>
                        </section>
                        <section><text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#DC143C'}}>Casualties:</text> <br/><text style={{fontFamily: 'Verdana, sans-serif'}}>{elem.casualties.length === 0 ? `None` : elem.casualties.join(', ')}</text>
                        </section>
                        <section><text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#999900'}}>Conflict: </text> <br/><text style={{fontFamily: 'Verdana, sans-serif'}}>{elem.conflict === '' ? `Unknown` : elem.conflict}</text></section>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                ))}
                </div>
            
                
        )
}

export default Events
