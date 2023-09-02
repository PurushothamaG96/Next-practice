import React from "react";

function RootAbout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About nav bar</nav>
      <main>
        {children}
      </main>
    </>
  );
}

export default RootAbout;
