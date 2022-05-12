import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "../../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
