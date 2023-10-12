import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Basic page</h1>
      <Link href="/vartical">CLICK ME</Link>
      <br></br>
      <br></br>
      <Link href="/Horizontal"><button>CLICK ME</button></Link>
    </main>
  );
}
