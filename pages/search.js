import React, { useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";

function Search() {
  const [pickup, setPickup] = useState();
  const [dropoff, setDropoff] = useState();

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
        passHref>
        <Button>Confirm Locations</Button>
      </Link>
    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen 

`;
const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img`
h-12 cursor-pointer
`;
const InputContainer = tw.div`
bg-white flex p-4 items-center 
`;
const FromToIcons = tw.div`
w-10  flex flex-col items-center
`;

const Circle = tw.img`
 w-6
`;

const Line = tw(Circle)`
h-10

`;

const Square = tw(Circle)`
`;

const InputBoxes = tw.div`
flex flex-col flex-1
 
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-lg p-2 border-none outline-none 
`;
const PlusIcon = tw.img`
h-12  ml-3 rounded-full bg-gray-200
`;
const SavedPlaces = tw.div`
flex px-4 py-2  items-center font-bold bg-white my-2 text-xl `;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-4 `;

const Button = tw.button`
w-[97%] block bg-black font-bold text-white  py-3 text-md mx-auto hover:bg-gray-800
`;
