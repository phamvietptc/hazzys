import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className=" relative overflow-hidden w-full min-h-full ">
        <Navbar />
        <div className=" pt-0 bg-white mt-0 mx-0 -mb-636px px-0 pb-716px min-h-full md:pt-120px md:pb-433px">
          <Slider />
          <Category />
          <New />
          <Review />
          <KeyItem />
          <Item />
          <KeyWord />
          <Best />
          <Promo />
          <Floating />
        </div>
        <Footer />
      </div>
    </>
  );
}

// slider
export function Slider() {
  return (
    <>
      <section className=" mb-0 md:mb-50px overflow-hidden w-full">
        <div className=" relative md:overflow-hidden">
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
      <section className=" mb-10 md:mb-20">
        <div className=" overflow-x-auto overflow-y-hidden text-center">
          <ul className=" flex text-sm text-slate-400 flex-nowrap my-0 mx-auto items-center justify-center list-outside list-none md:inline-flex">
            <li className=" border-b-0 hover:font-bold text-black w-1/2 md:w-auto relative h-auto py-3 px-6 flex items-center justify-center flex-1 list-outside list-none">
              <a className=" text-black inline-block p-3 whitespace-nowrap cursor-pointer">
                CATEGORY
              </a>
            </li>
            <li className=" w-1/2 md:w-auto relative hover:font-bold h-auto py-3 px-6 border-b-0 flex items-center justify-center flex-1 list-outside list-none before:absolute before:top-1/2 before:left-0 before:block before:w-1px before:h-18px before:bg-slate-300 before:-translate-y-1/2">
              <a className=" inline-block p-3 text-black whitespace-nowrap cursor-pointer">
                COLLECTION
              </a>
            </li>
          </ul>
        </div>

        <div className=" overflow-x-auto overflow-y-hidden text-center pb-5">
          <div className=" inline-flex items-start flex-nowrap">
            <ul className=" py-0 px-5 md:px-30px order-1 relative inline-flex flex-nowrap list-outside list-none">
              {defaultContents.map((item, index) => (
                <li
                  key={index}
                  className=" ml-10px max-w-full md:max-w-70px text-center list-outside list-none"
                >
                  <a className=" cursor-pointer text-gray-900" href="/">
                    <span className=" rounded-full inline-block w-70px h-70px overflow-hidden mb-1 align-top text-center">
                      <img className=" w-full" src={item.image} alt="LADIES" />
                    </span>
                    <span className=" block text-slate-500 text-sm font-bold leading-4 text-center">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <ul className=" py-0 px-10px md:px-30px order-2 relative inline-flex flex-nowrap list-outside list-none">
              <li className=" ml-0 max-w-full text-center list-outside list-none">
                <a className=" cursor-pointer text-gray-900" href="/">
                  <span className=" bg-yellow-400 inline-flex items-center justify-center w-70px h-70px rounded-full text-white text-xs">
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
      <section className=" mb-24 md:mb-150px">
        <h2 className=" text-center py-0 px-5 md:p-0 mb-3 text-4xl font-light leading-9 font-sans text-black">
          <span className=" block text-left md:inline-block">
            반가워요&nbsp;
          </span>
          <span className=" block text-left md:inline-block">
            오늘의 신상품을&nbsp;
          </span>
          <span className=" block text-left md:inline-block">
            소개할게요!&nbsp;
          </span>
        </h2>
        <div className=" overflow-x-auto overflow-y-hidden text-center">
          {defaultNew.map((item, index) => (
            <ul
              key={index}
              className=" inline-flex flex-nowrap my-0 mx-auto text-base text-black items-center justify-center list-outside list-none"
            >
              <li className=" h-auto py-4 px-3 border-b-0 flex items-center justify-center flex-1 list-outside list-none">
                <a
                  className=" inline-block py-2 px-3 text-black whitespace-nowrap cursor-pointer active:hover:font-bold active:hover:text-orange-500"
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className=" flex-nowrap flex">
          <div className=" mx-auto relative overflow-hidden list-none z-0">
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
      <section className=" mb-24 md:mb-100px">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <h2 className=" text-center py-0 px-5 md:p-0 mb-3 text-4xl font-light leading-9 m-0 font-sans text-black">
            <span className=" block text-left md:inline-block">
              ‘리뷰 맛집’&nbsp;
            </span>
            <span className=" block text-left md:inline-block">
              헤지스닷컴의&nbsp;
            </span>
            <span className=" block text-left md:inline-block">
              패션피플은?&nbsp;
            </span>
          </h2>
          <div className=" overflow-x-auto overflow-y-hidden text-center">
            <ul className=" py-0 px-4 inline-flex flex-nowrap my-0 mx-auto text-base text-black items-center justify-center list-outside list-none">
              {defaultReview.map((item, index) => (
                <li
                  key={index}
                  className=" py-5 px-2 font-bold h-auto border-b-0 flex items-center justify-center flex-1 list-outside list-none"
                >
                  <a
                    className=" py-2 px-3 border-solid border border-black inline-block text-black whitespace-nowrap cursor-pointer hover:bg-black hover:text-white"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" pb-10 md:pb-60px flex justify-center">
            <div className=" touch-pan-y w-full md:w-auto pt-0 pb-10 px-4 md:p-0 mx-auto relative overflow-hidden list-none z-0">
              <div class="swiper-wrapper">
                <img src="/images/home/review.png" alt="slide" />
              </div>
            </div>
          </div>
          <div className=" max-w-xs my-0 mx-auto relative">
            <a
              className=" bg-white text-black border border-solid border-gray-600 flex items-center justify-center w-full h-12 text-base font-bold cursor-pointer hover:bg-black hover:text-white"
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
      <section className=" mb-24 md:mb-150px overflow-hidden w-full">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <div className=" flex-col relative flex items-start md:flex-row">
            <div className=" static pt-0 pb-5 px-0 transform-none w-full max-w-6xl md:absolute md:top-85px md:left-1/2 md:max-w-6xl md:pb-0 md:pl-10 md:-translate-x-1/2">
              <h2 className=" py-0 px-5 md:p-0 mb-3 text-4xl font-light leading-9 text-black font-sans">
                <span className=" block text-left">화창하게</span>
                <span className=" block text-left">시작해요!</span>
              </h2>
            </div>
            <div className=" bg-red-100 w-5/12 min-w-fit md:min-w-580px mt-24 md:mt-68px ml-5 md:ml-auto pt-0 pr-0 md:pr-2.6041666667% pb-48 md:pb-20 pl-6 md:pl-7.9166666667%">
              <div className=" max-w-full md:max-w-591px -mt-24 md:-mt-68px relative mb-5">
                <img src="/images/home/keyitem.png" alt="item" />
                <a
                  className=" absolute right-0 bottom-0 inline-flex items-center justify-center w-10 h-10 bg-black cursor-pointer text-gray-900"
                  href="/"
                >
                  <span className=" sr-only">자세히보기</span>
                  <img
                    className=" block w-4 h-4"
                    src="/images/home/ico_arr_right_white.png"
                    alt="next"
                  />
                </a>
              </div>
              <div className=" max-w-full pr-5 md:max-w-591px md:p-0">
                <h3 className=" text-left text-3xl font-normal leading-9 mb-3 font-sans text-black">
                  봄을 기다리며
                </h3>
                <p className=" text-left text-black">
                  벌써 봄이 온 것 같죠? 컬러풀한 봄 신상품만 픽해봤습니다.
                  무채색 코트는 이제 안녕!
                </p>
              </div>
            </div>
            <div className=" static w-calc-10px m-calc-147px flex flex-wrap md:top-280px md:w-calc-505px md:absolute md:left-0 md:my-0 md:-mx-10px">
              <div className=" w-full mx-auto relative overflow-hidden list-none p-0 z-0">
                <div class=" transform-gpu"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//item
export function Item() {
  return (
    <>
      <section className=" mb-24 md:mb-150px overflow-hidden w-full">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <div className=" flex-col relative flex items-start">
            <div className=" static pt-0 px-0 pb-5 transform-none w-full max-w-6xl md:absolute md:top-85px md:left-1/2 md:max-w-6xl md:py-0 md:pr-0 md:pl-10 md:-translate-x-1/2">
              <h2 className=" py-0 px-5 mb-3 text-4xl font-light leading-9 text-black font-sans md:p-0">
                <span className=" block text-left">HAZZYS</span>
                <span className=" block text-left">SIGNATURE ITEM</span>
              </h2>
            </div>
            <div className=" bg-cyan-200 w-5/12 min-w-fit mt-24 ml-5 pt-0 pr-0 pb-48 pl-6 md:min-w-580px md:mt-68px md:ml-auto md:pr-2.6041666667% md:pb-20 md:pl-7.9166666667%">
              <div className=" max-w-full -mt-24 relative mb-5 md:max-w-591px md:-mt-68px">
                <img src="/images/home/item.jpeg" alt="item" />
                <a
                  className=" absolute right-0 bottom-0 inline-flex items-center justify-center w-10 h-10 bg-black cursor-pointer text-gray-900"
                  href="/"
                >
                  <span className=" sr-only">자세히보기</span>
                  <img
                    className=" block w-4 h-4"
                    src="/images/home/ico_arr_right_white.png"
                    alt="next"
                  />
                </a>
              </div>
              <div className=" max-w-full pr-5 md:max-w-591px">
                <h3 className=" text-left text-3xl font-normal leading-9 mb-3 font-sans text-black">
                  클래식 끝판왕 , 아이코닉 신상을 지금 확인해보세요.
                </h3>
                <p className=" text-left text-black">
                  23S/S 아이코닉 바로가기.
                </p>
              </div>
            </div>
            <div className=" static w-calc-10px m-calc-147px flex flex-wrap md:absolute md:top-340px md:left-0 md:w-63.125% md:my-0 md:-mx-10px">
              <div className=" w-full mx-auto relative overflow-hidden list-none p-0 z-0">
                <div class=" transform-gpu"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//key word
export function KeyWord() {
  return (
    <>
      <section className=" mb-24 py-0 px-5 md:mb-150px md:p-0">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <div className=" flex-col relative flex items-start md:flex-row">
            <h2 className=" static mb-8 text-7xl leading-none font-light text-black md:absolute md:top-270px md:left-57.0833333333% md:mb-60px md:text-7.7 md:leading-835">
              <span className=" block">3 in 1</span>
              <span className=" pl-10 md:pl-13.5% text-slate-300 block">
                Men's
              </span>
              <span className=" block">Bag</span>
            </h2>
            <div className=" w-full h-auto relative md:w-57.0833333333% md:h-980px">
              <a className=" cursor-pointer text-gray-900" href="/">
                <p className=" static max-w-full md:absolute md:max-w-500px md:top-40 md:right-8.4854014599% md:z-10">
                  <img src="/images/home/keyword.jpeg" alt="key word" />
                </p>
                <i className=" bg-[url('/images/home/keyword.jpeg')] hidden absolute top-0 left-0 bottom-0 w-2/3 bg-no-repeat bg-center bg-cover grayscale opacity-30 z-0 md:block md:h-980px"></i>
              </a>
            </div>
            <div className=" max-w-full mt-5 md:max-w-330px md:mt-630px">
              <h3 className=" text-left text-2xl font-sans font-normal mb-3 leading-9 text-black md:text-3xl">
                하나의 가방으로 세 가지 기능을
              </h3>
              <span className=" text-left text-black">
                업그레이드된 캐빈 기어 시리즈를 만나보세요
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//best
export function Best() {
  const defaultBest = [
    {
      link: "/",
      text: "ALL",
    },
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
    {
      link: "/",
      text: "OUTLET",
    },
  ];

  return (
    <>
      <section className=" mb-24 md:mb-150px">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <h2 className=" text-center py-0 px-5 md:p-0 mb-3 text-4xl font-light leading-9 text-black font-sans">
            <span className=" block text-left md:inline-block">
              오늘의 베스트&nbsp;
            </span>
            <span className=" block text-left md:inline-block">
              #놓치지 말아요&nbsp;
            </span>
          </h2>
          <p className=" -mt-1 pt-0 px-5 pb-3 md:py-10px md:px-0 text-left md:text-center text-7xl font-light leading-none md:leading-60px text-black font-sans">
            230215
          </p>
          <div className=" overflow-x-auto overflow-y-hidden text-center">
            <ul className=" py-0 px-4 inline-flex flex-nowrap my-0 mx-auto text-base text-black items-center justify-center list-outside list-none">
              {defaultBest.map((item, index) => (
                <li
                  key={index}
                  className=" py-5 px-2 font-bold h-auto border-b-0 flex items-center justify-center flex-1 list-outside list-none"
                >
                  <a
                    className=" py-2 px-10px border border-solid border-black inline-block whitespace-nowrap cursor-pointer hover:bg-black hover:text-white"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className=" flex-nowrap pt-0 px-0 pb-5 flex md:my-0 md:-mx-10px">
            <div className=" mx-auto relative overflow-hidden list-none z-0">
              <div class="swiper-wrapper"></div>
            </div>
          </div> */}
          <div className=" max-w-xs my-0 mx-auto relative block">
            <a
              className=" text-black bg-white border border-solid border-gray-800 flex items-center justify-center w-full h-12 text-base font-bold cursor-pointer hover:bg-black hover:text-white"
              href="/"
            >
              베스트 전체 순위 보기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

//promo
export function Promo() {
  return (
    <>
      <section className=" pt-5 px-0 pb-20 md:pt-70px md:pb-150px text-white bg-black">
        <div className=" max-w-1920px w-full h-full my-0 mx-auto">
          <div className=" items-center flex-col md:flex-row flex justify-center">
            <div className=" w-full py-0 pr-0 pl-4 md:w-auto md:px-6">
              <div className=" relative block pl-6 mb-5 text-white">
                <h2 className=" absolute top-24 left-0 pb-10 px-5 md:px-0 mb-10px text-4xl font-light leading-9 before:w-99px before:h-2px before:mb-9px before:bg-white before:absolute before:left-0 before:bottom-0 before:block after:w-11px after:h-11px after:mt-0 after:mr-0 after:mb-1 after:ml-87px after:border-t-2 after:border-r-2 after:border-b-0 after:border-l-0 after:border-solid after:border-white after:rotate-45 after:absolute after:left-0 after:bottom-0 after:block">
                  <strong className=" font-bold">HAZZYS NOW</strong>
                </h2>
                <i className=" bg-[url('/images/home/promo.jpeg')] w-full flex items-center justify-center px-0 pb-0 pt-full font-bold not-italic bg-no-repeat bg-center bg-cover text-white"></i>
              </div>
              <div className=" px-5 md:pl-5">
                <h3 className=" text-left text-3xl font-normal mb-10px leading-9">
                  HAZZYS MAGAZINE
                </h3>
                <p className=" mt-1 text-left">
                  헤지스의 다양한 콜라보, 팝업, 이벤트 등 최신 브랜드 소식을
                  만나보세요
                </p>
                <a
                  className=" text-white inline-flex items-center mt-3 py-1 px-0 font-bold leading-6 cursor-pointer"
                  href="/"
                >
                  자세히보기
                  <i className=" border-white inline-block w-2 h-2 mt-0 mr-0 mb-0 ml-1 border-t border-r border-b-0 border-l-0 border-solid rotate-45" />
                </a>
              </div>
            </div>
            <div className=" w-full md:w-auto flex pt-8 px-5 pb-0 md:pt-2 md:pr-0 md:pb-0 md:pl-52px items-start">
              <a className=" bg-[url('/images/home/promo1.jpeg')] mr-10px mt-87px mb-0 ml-0 md:mr-5 w-full md:w-155px py-28.125% px-0 flex items-center justify-center not-italic font-bold bg-no-repeat bg-center bg-cover text-white cursor-pointer">
                <span>리뷰의 모든 것</span>
              </a>
              <a className=" bg-[url('/images/home/promo2.jpeg')] w-full md:w-155px py-28.125% px-0 flex items-center justify-center not-italic font-bold bg-no-repeat bg-center bg-cover text-white cursor-pointer">
                <span>H사진관</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//floating
export function Floating() {
  return (
    <>
      <aside className=" right-2.5 md:right-50px fixed bottom-0 mb-5 z-50">
        <a
          className=" flex items-center justify-center overflow-hidden w-9 h-9 mt-10px border border-solid border-white rounded-50% bg-white cursor-pointer"
          href="https://pf.kakao.com/_wdUuI/chat"
          target="_blank"
        >
          <i className=" bg-[url('/icons/home/icon-kakao.png')] inline-block w-26px h-26px bg-center bg-cover bg-no-repeat"></i>
          <span className=" sr-only">카카오톡 고객센터</span>
        </a>
        <button className=" flex items-center justify-center overflow-hidden w-9 h-9 mt-10px border border-solid border-white rounded-50% bg-white cursor-pointer">
          <i className=" bg-[url('/icons/home/icon-arr-top.png')] inline-block w-5 h-5 bg-center bg-cover bg-no-repeat"></i>
          <span className=" sr-only">맨 위로 이동</span>
        </button>
      </aside>
    </>
  );
}
