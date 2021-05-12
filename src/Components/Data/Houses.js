import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card,Image, Segment,Loader } from 'semantic-ui-react';
import dhouse from '../../../src/dhouse.jpg'


export const Houses = () => {

    const [house, setHouse] = useState([]);
    const [stopper, setStopper] = useState(false);
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        const getHouse = async () => {
            let res = await axios.get('https://api.got.show/api/show/houses');
            //console.log(res.data.show);    
            let temp = res.data;
            temp.shift();
            temp.shift();
            console.log(temp);
            setHouse(temp);
            console.log("house", house);
            setStopper(true);
            setIsLoading(false);
            
        }
        getHouse();
    }, [stopper]);

    return isLoading ?(
        
            <Segment padded='very'>
                <Loader active inline='centered' />
            
          </Segment>
          
          ):(
        <Card.Group itemsPerRow={4}>
               
        {house.map(elem=> (
                
            
                <Card color='red'>
                <Image src={elem.logoURL===undefined?dhouse:elem.logoURL} size='medium' />
                <Card.Content>
                    <Card.Header>{elem.name}</Card.Header>
                    <Card.Meta>
                        <span >Region: {elem.region}</span>
                    </Card.Meta>
                    <Card.Description>
                        Sigil: {elem.sigil===''?`None`:elem.sigil}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                   Words: {elem.words===''?`None`:elem.words}
                </Card.Content>
            </Card>
            
        ))}

    </Card.Group>
    )
}
