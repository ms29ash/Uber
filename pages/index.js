import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "../components/Map";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ name: user.displayName, photoUrl: user.photoURL });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  });
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo-768x269.png" />

          <Profile>
            <Name>{user?.name}</Name>
            <UserImg
              src={user?.photoUrl}
              onClick={() => {
                signOut(auth);
              }}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton contentEditable="true">Where To </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen

`;

const ActionItems = tw.div`
    p-8  flex-1 bg-white
`;

const Header = tw.div`
flex justify-between items-center
mb-5
`;

const UberLogo = tw.img`
  h-16
`;

const Profile = tw.div`
flex items-center
  
`;
const Name = tw.div`
mr-4 w-20 text-xl  font-semibold
`;

const UserImg = tw.img`
h-16 w-16 rounded-full border-gray-200 p-px cursor-pointer
`;
const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
bg-gray-200 flex-1 m-3 h-32 items-center flex flex-col justify-center rounded-lg hover:scale-105 cursor-pointer origin-center transition-transform	text-xl font-bold
  
`;
const ActionButtonImage = tw.img`
  h-3/5
`;
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl  p-4 flex items-center mt-8 rounded-lg
`;
