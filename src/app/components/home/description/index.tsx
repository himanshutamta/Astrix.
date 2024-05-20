"use client";

import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

const Description = () => {
  return (
    <div className=" bg-[#FFF4DF]">
      <div className="text-primary max-w-[90%] mx-auto h-[100vh] flex justify-center items-center">
        <Root className="text-5xl font-bold space-y-8 ">
          <div className="flex items-center  gap-3">
            WE
            <div className="ballon relative h-12 w-[300px]">
              <Image
                src="/images/ballon.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>{" "}
            ORGANIZE THE
          </div>
          <div className="flex items-center gap-3">
            CONNECTION
            <div className="nature relative h-12 w-[400px]">
              <Image
                src="/images/nature.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="party relative h-12 w-[180px]">
              <Image
                src="/images/party.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>{" "}
            BETWEEN
            <div className="relative h-12 w-[120px]">
              <Image
                src="/images/singer.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            MUSIC
          </div>
          <div className="flex items-center gap-3">
            ARTIST
            <div className="cons relative h-12 w-[200px]">
              <Image
                src="/images/cons.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>{" "}
            CULTURE
            <div className="people relative h-12 w-[100px]">
              <Image
                src="/images/people.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flower relative h-12 w-[100px]">
              <Image
                src="/images/flower.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>{" "}
            ART
            <div className="relative h-12 w-[100px]">
              <Image
                src="/images/dress.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            & COLLECTIONS
          </div>
        </Root>
      </div>
    </div>
  );
};

export default Description;
const ballonanime = keyframes`
0% {
    width: 300px;
  }
  50% {
    width: 200px;
  }
  100% {
    width: 300px;
  }`;
const nature = keyframes`
0% {
    width: 400px;
  }
  50% {
    width: 300px;
  }
  100% {
    width: 400px;
  }`;
const party = keyframes`
0% {
    width: 150px;
  }
  50% {
    width: 180px;
  }
  100% {
    width: 150px;
  }`;
const cons = keyframes`
0% {
    width: 200px;
  }
  50% {
    width: 150px;
  }
  100% {
    width: 200px;
  }`;
const flower = keyframes`
0% {
    width: 150px;
  }
  50% {
    width: 100px;
  }
  100% {
    width: 150px;
  }`;
const Root = styled.div`
  .ballon {
    animation-name: ${ballonanime};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .nature {
    animation-name: ${nature};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .party {
    animation-name: ${party};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .cons {
    animation-name: ${cons};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .flower {
    animation-name: ${flower};
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`;
