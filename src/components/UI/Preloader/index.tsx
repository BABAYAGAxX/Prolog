'use client';
import { Loader2 } from "lucide-react";
import styled from 'styled-components';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const wrapperRef = useRef(null);
  const spinnerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in the spinner
    tl.to(spinnerRef.current, {
      opacity: 1,
      duration: 0.5,
    });

    // After a delay, fade out the spinner and the wrapper
    tl.to([spinnerRef.current, wrapperRef.current], {
      opacity: 0,
      duration: 0.5,
      delay: 2, // Adjust this delay as needed
      onComplete: () => {
        setComplete(true);
      },
    });

  }, [setComplete]);

  return (
    <Wrapper ref={wrapperRef}>
      <div ref={spinnerRef} className="flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      </div>
    </Wrapper>
  );
};

export default Preloader;