import React, { useRef, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import carList from "../data/carList";

function RideSelector(props) {
  const { pickup, dropoff } = props;
  const [rideDuration, setRideDuration] = useState();
  const accessToken = "pk.eyJ1IjoibXMyOWFzaCIsImEiOiJja3l5NWQ1ZnAwcDkxMzBteGw2ZDhhbzM2In0.OCf97Qt6qN_Q2ghGbqUYaw";

  useEffect(() => {
    async function direction() {

      const res = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?access_token=pk.eyJ1IjoibXMyOWFzaCIsImEiOiJja3l5NWQ1ZnAwcDkxMzBteGw2ZDhhbzM2In0.OCf97Qt6qN_Q2ghGbqUYaw
      `)
      const data = await res.json();
      console.log(data)
      setRideDuration(data.routes[0].duration / 10)

    }
    direction();
  }, [pickup, dropoff])
  return (
    <Wrapper>
      <Title> Choose a ride ,or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => {
          return (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>5 min away</Time>
              </CarDetails>
              <Price>&#8377; {Math.ceil(car.multiplier * rideDuration)}</Price>
            </Car>
          );
        })}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-scroll h-1/2
`;
const Title = tw.div`text-gray-500 text-center text-xs border-b p-1`;
const CarList = tw.div``;

const Car = tw.div`flex px-4 py-2 items-center`;
const CarImage = tw.img`h-14 mr-4`;
const CarDetails = tw.div`flex-1 `;
const Service = tw.div` font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div``;
