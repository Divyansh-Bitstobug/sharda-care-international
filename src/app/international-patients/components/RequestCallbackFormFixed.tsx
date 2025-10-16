"use client"
import RequestCallBackForm from '@/components/RequestCallbackForm';
import React, { useEffect, useState } from 'react';

const FORM_WIDTH = 370;

const RequestCallBackFormFixed: React.FC = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Detect when footer is visible
    const footer = document.getElementById("footer"); // Add id="footer" to your footer
    if (!footer) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { root: null, threshold: 0 }
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 110,
        right: 'max(calc((100vw - 1300px)/2), 20px)', // positions within max-width container, 20px margin if over
        width: FORM_WIDTH, 
        zIndex: 50,
        display: hide ? 'none' : 'block'
      }}
      className="hidden md:block"
    >
      <RequestCallBackForm />
    </div>
  );
};

export default RequestCallBackFormFixed;
