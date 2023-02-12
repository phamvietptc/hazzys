import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <div className=" relative overflow-hidden w-full min-h-full ">
        <Navbar />
        <div className=" pt-0 bg-white">
          <Slider />
          <Category />
        </div>
      </div>
    </>
  );
}

{
  /* slider */
}
export function Slider() {
  return (
    <>
      <section className=" mb-0 overflow-hidden w-full">
        <div className=" relative">
          <div className=" touch-pan-y"></div>
        </div>
      </section>
    </>
  );
}

{
  /* category */
}
export function Category() {
  return (
    <>
      <section className=" mb-10">
        <div className=" overflow-x-auto overflow-y-hidden text-center">
          <ul className=" flex text-sm text-slate-400 flex-nowrap mt-0 mx-auto items-center justify-center list-outside list-none">
            <li className=" border-b-0 font-bold text-black w-1/2 relative h-auto py-3 px-6 flex items-center justify-center flex-1 list-outside list-none">
              <a className=" text-black inline-block p-3 whitespace-nowrap cursor-pointer">
                CATEGORY
              </a>
            </li>
            <li className=" w-1/2 relative h-auto py-3 px-6 border-b-0 flex items-center justify-center flex-1 list-outside list-none">
              <a className=" inline-block p-3 text-black whitespace-nowrap cursor-pointer">
                COLLECTION
              </a>
            </li>
          </ul>
        </div>

        <div className=" overflow-x-auto overflow-y-hidden text-center pb-5">
          <div className=" inline-flex items-start flex-nowrap">
            <ul className=" py-0 px-5 order-1 relative inline-flex flex-nowrap list-outside list-none">
              <li className=" ml-0 max-w-full text-center list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" inline-block w-16 h-16 overflow-hidden mb-1 rounded-bl-full align-top text-center">
                    <img
                      className=" w-full h-auto align-middle"
                      src="/images/home/ladies.jpg"
                      alt="LADIES"
                    />
                  </span>
                  <span className=" block text-slate-500 text-sm font-bold leading-4 text-center">
                    LADIES
                  </span>
                </a>
              </li>
            </ul>
            <ul className=" py-0 px-5 order-2 relative inline-flex flex-nowrap list-outside list-none">
              <li className=" ml-0 max-w-full text-center list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-yellow-400 inline-flex items-center justify-center w-16 h-16 rounded-bl-full text-white text-xs"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
