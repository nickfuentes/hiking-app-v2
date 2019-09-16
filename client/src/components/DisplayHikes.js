import React, {useState, useEffect} from 'react'


function DisplayHikes() {

    const [hikes, setHikes] = useState([])

    useEffect(() => {
        fetchHikes()
    })

    const fetchHikes = () => {
        fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(hikes => {
            setHikes(hikes)
        })
    }

        return <div>{hikes.map(hike => {
            return <div>
                <h1>Location:</h1>
                <h3>Latitude: {hike.latitude}</h3>
                <h3>Longitude: {hike.longitude}</h3>
            </div>
        })}</div>
}

export default DisplayHikes