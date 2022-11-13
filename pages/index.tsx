import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";
import {useRouter} from "next/router";

export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Git Tribes</title>
        <meta name="description" content="Git War platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Git Tribes!
        </h1>

        <p className={styles.description}>
          Please enter your GitHub username:
        </p>

        <div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => router.push(username)}>Go</button>
        </div>
      </main>
    </div>
  )
}
