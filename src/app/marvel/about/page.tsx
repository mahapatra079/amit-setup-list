"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <h1>Marvel About Page</h1>
      <Link href={isAbout ? "/marvel/about" : "/marvel"}>
        {isAbout ? "Back to Marvel Page" : "Go to About Page"}
      </Link>
      <button onClick={() => setIsAbout((prev) => !prev)}>
        Toggle About Page
      </button>
    </div>
  );
}
