import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

// export const metaData: Metadata = {
//   title: "users",
// };

async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <Link href={"/"}>Back to Home page</Link>
      <>
        {users.map((user) => {
          return (
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </p>
          );
        })}
      </>
    </section>
  );
  return content;
}

export default UsersPage;
