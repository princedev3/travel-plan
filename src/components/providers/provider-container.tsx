"use client";
import React, { useEffect, useState } from "react";
import { SidebarToggle } from "./side-toggle";

const ProviderContainer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <SidebarToggle />
    </>
  );
};

export default ProviderContainer;
