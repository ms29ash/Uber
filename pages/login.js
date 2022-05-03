import React, { useRef, useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from "next/router"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

import { app, analytics, provider, auth } from '../firebase'


function Login() {
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/')
            }
        })
    })
    return (
        <Wrapper>
            <UberLogo src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo-768x269.png" />
            <Title>Log in to access your account</Title>
            <Image src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="image" />
            <SignInBtn onClick={() => { signInWithPopup(auth, provider) }} >Sign in with Google</SignInBtn>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div` flex flex-col h-screen w-full bg-gray-200 p-6`
const SignInBtn = tw.button`
text-center bg-black text-white w-full border-none py-3 mt-6
`
const UberLogo = tw.img`
  h-10 w-auto object-contain self-start
`;
const Image = tw.img` object-contain`

const Title = tw.div`
text-4xl pt-4 text-gray-500 `