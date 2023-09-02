import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // throw new Error("not today")
  return (
    <main className={styles.main}>
      <h1>Main page</h1>
    </main>
  );
}
