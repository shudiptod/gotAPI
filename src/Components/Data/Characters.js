import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card,Image,Segment,Loader } from 'semantic-ui-react';


export const Characters = () => {

    const [people, setPeople] = useState([]);
    const [stopper, setStopper] = useState(false);
    const[isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const getPeople = async () => {
            let res = await axios.get('https://api.got.show/api/general/characters');
            //console.log(res.data.show);    
            let temp = res.data.show;
            console.log(temp);
            setPeople(temp);
            console.log("people", people);
            setStopper(true);
            setIsLoading(false);
        }
        getPeople();
    }, [stopper]);


    return isLoading ?(
        
        <Segment padded='very'>
            <Loader active inline='centered' />
      </Segment>
      
      ):(
            <Card.Group itemsPerRow={4}>
               
                {people.map(elem=> (
                        
                    
                        <Card color='black'>
                        <Image src={elem.image} size='medium' />
                        <Card.Content>
                            <Card.Header>{elem.name}</Card.Header>
                            <Card.Meta>
                                <span >{elem.house}</span>
                            </Card.Meta>
                            <Card.Description>
                                Spouse: {elem.spouse}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {/*elem[titles[0]]*/}
                        </Card.Content>
                    </Card>
                    
                ))}

            </Card.Group>
    )
}
