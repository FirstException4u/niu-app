import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { cn } from "@/lib/utils";
import LazyLoadComponent from "@/components/LandingPage/LazyLoadComponent";
import DashboardWrapper from "@/components/dashboard/DashboardWrapper";

export default function Home() {

  return (
    <div className={cn(
      "font-boston transition-bg",
      "bg-background",
      "flex",
    )}
      id="changing-bg"
    >
      <LazyLoadComponent>
        <DashboardWrapper />
      </LazyLoadComponent>
    </div>
  );
}

