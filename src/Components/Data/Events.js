import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card,Image,Segment,Loader } from 'semantic-ui-react';


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

        <Segment padded='very'>
            <Loader active inline='centered' />
        </Segment>

    )
        :
        (
            <Card.Group itemsPerRow={3}>

                {events.map(elem => (


                    <Card color='red'>
                        <Card.Content>
                            <Card.Header>{elem.name}</Card.Header>
                            <Card.Content  style={{marginTop:'20px'}}>
                                <span >Place: {elem.place.join(', ')}</span>
                            </Card.Content>
                            <Card.Content  style={{marginTop:'10px'}}>
                            <h5 style={{color:'brown'}}>Participants:</h5> {elem.participants.length === 0 ? `Unattended` : elem.participants.join(', ')}
                            </Card.Content>
                            <Card.Content  style={{marginTop:'10px'}}>
                                <h5 style={{color:'red'}}>Casualties:</h5> {elem.casualties.length === 0 ? `None` : elem.casualties.join(', ')}
                            </Card.Content>
                        </Card.Content>
                        <Card.Content as='h2'>
                            <h5 style={{color:'orange'}}>Conflict:</h5> {elem.conflict === '' ? `Unknown` : elem.conflict}
                        </Card.Content>
                    </Card>

                ))}

            </Card.Group>
        )
}

export default Events
