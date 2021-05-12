import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image, Segment, Loader } from 'semantic-ui-react';


const Battles = () => {


    const [battles, setBattles] = useState([]);
    const [stopper, setStopper] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getBattles = async () => {
            let res = await axios.get('https://api.got.show/api/show/battles');
            let temp = res.data;
            setBattles(temp);
            setStopper(true);
            setIsLoading(false);

        }
        getBattles();
    }, [stopper]);
    return isLoading ? (

        <Segment padded='very'>
            <Loader active inline='centered' />
        </Segment>

    ) : (
        <Card.Group itemsPerRow={3}>

            {battles.map(elem => (


                <Card color='red'>
                    <Card.Content>
                        <Card.Header>{elem.name}</Card.Header>
                        <Card.Content style={{ marginTop: '20px' }}>
                            <span >
                                1st Faction: {elem.factionsOne.join(', ')}
                            Faction Commander: {elem.commandersOne}
                            </span>
                            <span>
                                2nd Faction: {elem.factionsTwo.join(', ')}
                            Faction Commander: {elem.commandersTwo}
                            </span>
                        </Card.Content>
                        <Card.Content style={{ marginTop: '10px' }}>
                            Place: {elem.place.join(', ')}<br />
                        </Card.Content>
                        <Card.Content style={{ marginTop: '10px' }}>
                            <h5 style={{ color: 'red' }}>Casualties:</h5> {elem.casualties.length === 0 ? `None` : elem.casualties.join(', ')}
                        </Card.Content>
                    </Card.Content>
                    <Card.Content as='h2'>
                        <h5 style={{ color: 'orange' }}>Conflict:</h5> {elem.conflict === '' ? `Unknown` : elem.conflict}
                    </Card.Content>
                </Card>

            ))}

        </Card.Group>
    )
}

export default Battles