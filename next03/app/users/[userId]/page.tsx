import getAUserById from "@/lib/getAUserById";
import getAUserByIdPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPost from "./component/UserPost";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";
type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getAUserById(userId);
  const userPostsData: Promise<Post[]> = getAUserByIdPost(userId);
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;
  if (!user?.name) return notFound();
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loasing...</h2>}>
        <UserPost promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
