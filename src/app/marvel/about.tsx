"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <div>
      <h1>Marvel Page</h1>
      <Link href={isAbout ? "/marvel/about" : "/marvel"}>
        <a>{isAbout ? "Back to Marvel Page" : "Go to About Page"}</a>
      </Link>
      <button onClick={() => setIsAbout((prev) => !prev)}>
        Toggle About Page
      </button>
    </div>
  );
}
