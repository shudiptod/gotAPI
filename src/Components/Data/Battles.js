import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Spinner } from 'react-bootstrap';

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

        <Spinner animation="grow" />

    ) : (
        <>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {battles.map(elem => (
                    <div class="col" style={{ width: '18rem',padding:'5px',marginTop:'20px' }}>
                        <div class="card">
                            <div class="card-body" style={{fontFamily: 'Verdana, sans-serif'}}>
                                <h5 class="card-title">{elem.name}</h5>
                                <p class="card-text"> <text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#FF8C00'}}>1st Faction: </text>{elem.factionsOne.join(', ')}<br/>
                                <text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#FF8C00'}}>Faction Commander:</text> {elem.commandersOne.join(', ')}</p>
                                <p class="card-text"> <text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#DC143C'}}>2nd Faction:</text> {elem.factionsTwo.join(', ')}<br/>
                                <text style={{fontStyle: 'italic',fontWeight: 'bold',color: '#DC143C'}}>Faction Commander:</text> {elem.commandersTwo.join(', ')}
                                </p>
                                <p>
                                <text style={{fontWeight: 'bold',color: '#228B22'}}>Place:</text> {elem.place.join(', ')}</p>
                                <section><text style={{fontWeight: 'bold',color: '#FF6347'}}>Casualties: </text>{elem.casualties.length === 0 ? `None` : elem.casualties.join(', ')}</section>
                                <br/><text style={{fontWeight: 'bold',color: ' 	#8B0000'}}>Conflict: </text>{elem.conflict === '' ? `Unknown` : elem.conflict}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            

        </>
    )
}

export default Battles
