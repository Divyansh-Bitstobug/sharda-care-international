"use client";
import RequestCallBackForm from '@/components/RequestCallbackForm';
import React, { useEffect, useRef, useState } from 'react';

const FORM_WIDTH = 370;

const RequestCallBackFormFixed: React.FC = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { root: null, threshold: 0 }
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  let styleObj: React.CSSProperties = {
    width: FORM_WIDTH,
    zIndex: 50,
    right: 'max(calc((100vw - 1300px)/2), 20px)',
  };

  if (isFooterVisible) {
    const footerEl = document.getElementById("footer");
    if (footerEl && formRef.current) {
      const footerRect = footerEl.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      styleObj.position = 'absolute';
      styleObj.top = scrollY + footerRect.top - formRef.current.offsetHeight - 20;
    }
  } else {
    styleObj.position = 'fixed';
    styleObj.top = 110;
  }

  return (
    <div
      ref={formRef}
      style={styleObj}
      className="hidden md:block"
    >
      <RequestCallBackForm />
    </div>
  );
};

export default RequestCallBackFormFixed;
