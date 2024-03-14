"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <div className={clsx("h-screen w-full relativ", className)}>
      <Canvas>
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
};

export default RenderModel;
