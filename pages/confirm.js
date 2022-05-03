import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import RideSelector from "../components/RideSelector";

function Confirm() {
  const router = useRouter();
  const [pickup, setPickup] = useState();
  const [dropoff, setDropoff] = useState();
  const getPickUpCoordinates = async () => {
    const pickupLocation = router.query.pickup;
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?limit=1&access_token=pk.eyJ1IjoibXMyOWFzaCIsImEiOiJja3l5NWQ1ZnAwcDkxMzBteGw2ZDhhbzM2In0.OCf97Qt6qN_Q2ghGbqUYaw`
    );
    const data = await res.json();
    setPickup(data.features[0].center);
  };
  const getDropUpCoordinates = async () => {
    const dropoffLocation = router.query.dropoff;
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffLocation}.json?limit=1&access_token=pk.eyJ1IjoibXMyOWFzaCIsImEiOiJja3l5NWQ1ZnAwcDkxMzBteGw2ZDhhbzM2In0.OCf97Qt6qN_Q2ghGbqUYaw`
    );
    const data = await res.json();

    setDropoff(data.features[0].center);
  };

  useEffect(() => {
    getPickUpCoordinates();
    getDropUpCoordinates();
  }, []);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      {pickup ? dropoff ? <><Map pickup={pickup} dropoff={dropoff} />
        <RideContainer>
          <RideSelector pickup={pickup} dropoff={dropoff} />

          <ConfirmButtonContainer>
            <ConfirmButton>Confirm</ConfirmButton>
          </ConfirmButtonContainer>
        </RideContainer>
      </> : "" : ""}
    </Wrapper>
  );
}

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col flex-1 bg-white
`;
const ButtonContainer = tw.div`rounded-full absolute top-3 left-3 z-50 bg-white cursor-pointer hover:bg-gray-100`;
const BackButton = tw.img`h-8 w-8 `;
const RideContainer = tw.div`
flex-1 flex h-1/2 flex-col 
`;
const ConfirmButtonContainer = tw.div`
border-t-2 
`;
const ConfirmButton = tw.button`
bg-black text-white my-4 py-3 text-center text-xl  w-[97%] block mx-auto hover:bg-gray-800
`;
