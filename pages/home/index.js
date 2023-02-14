import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" relative overflow-hidden w-full min-h-full ">
        <Navbar />
        <div className=" pt-0 bg-white">
          <Slider />
          <Category />
          <New />
          <Review />
          <KeyItem/>
        </div>
      </div>
    </>
  );
}

// slider
export function Slider() {
  return (
    <>
      <section className=" mb-0 overflow-hidden w-full">
        <div className=" relative">
          <div className=" touch-pan-y">
            <div className=" relative w-full h-full z-0 flex transition-transform box-content">
              <img
                width="100%"
                height="100%"
                src="/images/home/202302101407120.jpeg"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// category
export function Category() {
  const defaultContents = [
    {
      image: "/images/home/ladies.jpg",
      text: "LADIES",
    },
    {
      image: "/images/home/men.jpg",
      text: "MEN",
    },
    {
      image: "/images/home/acc.png",
      text: "ACC",
    },
    {
      image: "/images/home/golf.jpeg",
      text: "GOLF",
    },
    {
      image: "/images/home/outlet.png",
      text: "OUTLET",
    },
    {
      image: "/images/home/beauty.png",
      text: "BEAUTY",
    },
    {
      image: "/images/home/gift.jpeg",
      text: "GIFT",
    },
  ];

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
            {defaultContents.map((item, index) => (
              <ul
                key={index}
                className=" py-0 px-5 order-1 relative inline-flex flex-nowrap list-outside list-none"
              >
                <li className=" ml-0 max-w-full text-center list-outside list-none">
                  <a className=" cursor-pointer text-gray-900" href="/">
                    <span className=" rounded-full inline-block w-16 h-16 overflow-hidden mb-1 align-top text-center">
                      <img
                        className=" w-full h-auto align-middle"
                        src={item.image}
                        alt="LADIES"
                      />
                    </span>
                    <span className=" block text-slate-500 text-sm font-bold leading-4 text-center">
                      {item.text}
                    </span>
                  </a>
                </li>
              </ul>
            ))}

            <ul className=" py-0 px-5 order-2 relative inline-flex flex-nowrap list-outside list-none">
              <li className=" ml-0 max-w-full text-center list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-yellow-400 inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xs">
                    피즈
                  </span>
                </a>
              </li>
              <li className=" max-w-full text-center ml-3 list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-blue-900 inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xs">
                    피즈
                  </span>
                </a>
              </li>
              <li className=" max-w-full text-center ml-3 list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-orange-500 inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xs">
                    위아워스
                  </span>
                </a>
              </li>
              <li className=" max-w-full text-center ml-3 list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-slate-600 inline-flex items-center justify-center w-16 h-16 rounded-full text-white text-xs">
                    헤리아토
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

// new
export function New() {
  const defaultNew = [
    {
      link: "/",
      text: "LADIES",
    },
    {
      link: "/",
      text: "MEN",
    },
    {
      link: "/",
      text: "ACC",
    },
    {
      link: "/",
      text: "GOLF",
    },
  ];

  return (
    <>
      <section className=" mb-24">
        <h2 className=" text-center py-0 px-5 mb-3 text-4xl font-light leading-9 font-sans text-black">
          <span className=" block text-left">반가워요&nbsp;</span>
          <span className=" block text-left">오늘의 신상품을&nbsp;</span>
          <span className=" block text-left">소개할게요!&nbsp;</span>
        </h2>
        <div className=" overflow-x-auto overflow-y-hidden text-center">
          {defaultNew.map((item, index) => (
            <ul
              key={index}
              className=" inline-flex flex-nowrap my-0 mx-auto text-base text-black items-center justify-center list-outside list-none"
            >
              <li className=" h-auto py-4 px-3 border-b-0 flex items-center justify-center flex-1 list-outside list-none">
                <a
                  className=" inline-block py-2 px-3 text-black whitespace-nowrap cursor-pointer"
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className=" flex-nowrap p-0 flex">
          <div className=" touch-pan-y mx-auto relative overflow-hidden list-none p-0 z-0">
            <div class="swiper-wrapper">
              <img
                width="348px"
                height="441px"
                src="/images/home/HUGF3E990BK_00.jpeg"
                alt="product"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// review
export function Review() {
  const defaultReview = [
    {
      link: "/",
      text: "체험단리뷰",
    },
    {
      link: "/",
      text: "스태프리뷰",
    },
    {
      link: "/",
      text: "H사진관리뷰",
    },
    {
      link: "/",
      text: "고객리뷰",
    },
  ];

  return (
    <>
      <section className=" mb-24">
        <div className=" max-w-screen-2xl w-full h-full my-0 mx-auto p-0">
          <h2 className=" text-center py-0 px-5 mb-3 text-4xl font-light leading-9 m-0 font-sans text-black">
            <span className=" block text-left">‘리뷰 맛집’&nbsp;</span>
            <span className=" block text-left">헤지스닷컴의&nbsp;</span>
            <span className=" block text-left">패션피플은?&nbsp;</span>
          </h2>
          <div className=" overflow-x-auto overflow-y-hidden text-center">
            <ul className=" py-0 px-4 inline-flex flex-nowrap my-0 mx-auto text-base text-black items-center justify-center list-outside list-none">
              {defaultReview.map((item, index) => (
                <li
                  key={index}
                  className=" py-5 px-2 font-bold h-auto border-b-0 flex items-center justify-center flex-1 list-outside list-none"
                >
                  <a
                    className=" py-2 px-3 border-solid border border-black inline-block text-black whitespace-nowrap cursor-pointer"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" pt-10 flex justify-center">
            <div className=" w-full pt-0 pb-10 px-4 mx-auto relative overflow-hidden list-none z-0">
              <div class="swiper-wrapper"><img src="/images/home/review.png" alt="slide"/></div>
            </div>
          </div>
          <div className=" max-w-xs my-0 mx-auto relative">
            <a
              className=" bg-white text-black border border-solid border-gray-600 flex items-center justify-center w-full h-12 text-base font-bold cursor-pointer"
              href="/"
            >
              리뷰 전체 보기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// key item
export function KeyItem() {
  return (
    <>
    <section className=" mb-24 overflow-hidden w-full">
      <div className=" max-w-screen-2xl w-full h-full my-0 mx-auto">
        <div className=" flex-col relative flex items-start">
          <div className=" static pt-0 pb-5 px-0 transform-none w-full max-w-6xl">
            <h2 className=" py-0 px-5 mb-3 text-4xl font-light leading-9 text-black font-sans">
              <span className=" block text-left">화창하게</span>
              <span className=" block text-left">시작해요!</span>
            </h2>
          </div>
          <div className=" w-5/12 min-w-fit mt-24 ml-5 pt-0 pr-0 pb-48 pl-6">
            <div className=" max-w-full -mt-24 relative mb-5">
              <p><img className=" max-w-none" width='346px' height='458px' src="/images/home/keyitem.png" alt="item" /></p>
              <a className=" absolute right-0 bottom-0 inline-flex items-center justify-center w-10 h-10 bg-black cursor-pointer text-gray-900" href="/">
                <span className=" sr-only">자세히보기</span>
              </a>
            </div>
            <div className=" max-w-full pr-5">
              <h3 className=" p-0 text-left text-3xl font-normal leading-9 mb-3 font-sans text-black">봄을 기다리며</h3>
              <p className=" text-left text-black">벌써 봄이 온 것 같죠? 컬러풀한 봄 신상품만 픽해봤습니다. 무채색 코트는 이제 안녕!</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className=" w-full mx-auto relative overflow-hidden list-none p-0 z-0">
              <div class='swiper-wrapper'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}