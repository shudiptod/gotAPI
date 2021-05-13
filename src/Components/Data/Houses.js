import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {Image, Spinner} from 'react-bootstrap';
import dhouse from '../../../src/dhouse.jpg';


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
        
        <Spinner animation="grow" />
          
          ):(
              
              <div class="row row-cols-1 row-cols-md-3 g-4">
                {house.map(elem => (
                    <div class="col">
                        <div class="card" style={{ width: '18rem',padding:'5px',marginTop:'20px' }}>
                        <Image src={elem.logoURL===undefined?dhouse:elem.logoURL} style={{ width: 'auto', height: 'auto' }} />
                            <div class="card-body">
                                <h5 class="card-title">{elem.name}</h5>
                                <p class="card-text"> Region: {elem.region}</p>
                                <p class="card-text"> Sigil: {elem.sigil===''?`None`:elem.sigil} </p>
                                
                                <section>Words: {elem.words===''?`None`:elem.words}</section>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       
    )
}
