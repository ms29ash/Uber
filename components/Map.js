import React, { useRef, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
// import ReactMapGL, { Marker } from 'react-map-gl';

mapboxgl.accessToken =
    "pk.eyJ1IjoibXMyOWFzaCIsImEiOiJja3l5NWQ1ZnAwcDkxMzBteGw2ZDhhbzM2In0.OCf97Qt6qN_Q2ghGbqUYaw";

function Map(props) {

    const mapContainer = useRef(null);
    const map = useRef(null);

    const [lng, setLng] = useState(77.7064137);
    const [lat, setLat] = useState(28.9844618);
    const [zoom, setZoom] = useState(6);

    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        })

        const addToMap = (map, coordinates) => {


            const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map.current);
        }
        if (props.pickup) {

            addToMap(map, props.pickup);
        }
        if (props.dropoff) {

            addToMap(map, props.dropoff);
        }

        if (props.pickup && props.dropoff) {
            // 🔥 Fabio
            map.current.fitBounds([
                props.dropoff,
                props.pickup
            ], {
                padding: 60
            })
        }

        console.log('pickup', props.pickup)
        console.log('dropoff', props.dropoff)

    }, [props.pickup, props.dropoff]);
    return (
        <Wrapper className="" ref={mapContainer}>


        </Wrapper>
    )
}

export default Map


const Wrapper = tw.div`
flex-1 w-full min-h-1/2

`;
