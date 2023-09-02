import React from "react";

async function getAUserByIdPost(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userID=${userId}`,
    // { cache: "no-store" }
    //next render rvalidate in 60s
    {next: {revalidate: 60}}
  );
  if (!res.ok) return undefined
  return res.json();
}

export default getAUserByIdPost;
