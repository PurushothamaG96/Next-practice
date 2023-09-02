import Link from "next/link";
import React from "react";

function About() {
  // throw new Error("Not Today!")
  return (
    <main>
      <h2>About Page</h2>
      <Link href={"/"}>Link to Home page</Link>
    </main>
  );
}

export default About;
