import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(url).then((res) => setResident(res.data));
    }, [url]);

    
    return (
        <li>
        <div className='card'>
            <img src={resident.image} alt="" />
            <h2>{resident.name}</h2>
            <hr />
            <h4 className='b'>Status:  {resident.status}</h4>
            <h4 className='b'>Origin: {resident.origin?.name}</h4>
            <h4 className='b'>Gender: {resident.gender}</h4>
            <h4 className='b'>Species: {resident.species}</h4>
            <h4 className='b'># Episodes: {resident.episode?.length}</h4>

        </div>
        </li>
    );
};

export default ResidentInfo;