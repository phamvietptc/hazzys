import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

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
  const defaultSlider = [
    {
      link: "/",
      image: "/images/home/202302101407120.jpeg",
      title: "CHANGE OF SEASON -",
      introduce: "간절기 퀼팅아우터 l 닷컴 특가 20%",
    },
    {
      link: "/",
      image: "/images/home/202302101407120.jpeg",
      title: "CHANGE OF SEASON -",
      introduce: "간절기 퀼팅아우터 l 닷컴 특가 20%",
    },
    {
      link: "/",
      image: "/images/home/202302101407120.jpeg",
      title: "CHANGE OF SEASON -",
      introduce: "간절기 퀼팅아우터 l 닷컴 특가 20%",
    },
    {
      link: "/",
      image: "/images/home/202302101407120.jpeg",
      title: "CHANGE OF SEASON -",
      introduce: "간절기 퀼팅아우터 l 닷컴 특가 20%",
    },
  ];

  return (
    <>
      <section className=" mb-0 md:mb-50px overflow-hidden w-full">
        <div className=" relative md:overflow-hidden">
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={40}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {defaultSlider.map((item, index) => (
              <SwiperSlide role="group" aria-label={index} key={index}>
                <div class="banner">
                  <a
                    className=" relative block w-full pt-138.889% md:pt-full cursor-pointer before:absolute before:inset-0 before:z-10 before:bg-rgba"
                    href={item.link}
                  >
                    <img
                      className=" absolute top-0 left-0 w-full h-full z-0 object-cover"
                      src={item.image}
                      alt="배너 제목"
                    />
                  </a>
                  <a
                    className=" absolute bottom-10 left-0 py-0 px-5 z-20 cursor-pointer md:bottom-120px"
                    href={item.link}
                  >
                    <p className=" translate-y-0 opacity-100 w-260px text-white text-4xl font-bold leading-9 delay-150 ease-linear duration-150">
                      {item.title}
                    </p>
                    <p className=" translate-y-0 opacity-100 mt-1 text-white text-base font-normal delay-150 ease-linear duration-150">
                      {item.introduce}
                    </p>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

  const cardNew = [
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
    },
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
    },
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
    },
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
    },
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
    },
    {
      image: "/images/home/HUGF3E990BK_00.jpeg",
      linkCard: "/",
      label: "HAZZYS MEN",
      name: "[HIS] [아벨] 오버핏 워크자켓",
      sale: "186,480",
      price: "259,000",
      ratio: "28%",
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
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cardNew.map((item, index) => (
              <SwiperSlide role="group" aria-label={index} key={index}>
                <div className=" w-full relative overflow-hidden">
                  <div className=" relative">
                    <a
                      className=" relative block pt-129% cursor-pointer"
                      href={item.linkCard}
                    >
                      <img
                        className=" absolute top-0 w-full object-cover"
                        src={item.image}
                        alt="product"
                      />
                    </a>
                  </div>
                  <div className=" pt-5 px-5 pb-0 cursor-pointer md:px-0">
                    <p className=" text-black">{item.label}</p>
                    <p
                      className={` text-black max-h-5 overflow-hidden text-ellipsis ${styles.box}`}
                    >
                      {item.name}
                    </p>
                    <div className=" flex-row items-center flex justify-between mt-10px">
                      <p className=" mb-1 font-bold text-black md:m-0">
                        {item.sale}
                      </p>
                      <p className=" font-normal text-black">
                        <span className=" mr-1 text-sm text-rgba33 line-through">
                          {item.price}
                        </span>
                        <span className=" text-orange-400">{item.ratio}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

  const listReview = [
    {
      image: "/images/home/202302270948390.jpeg",
      link: "/",
      intro:
        "172/64 인데 s가 딱 (제 기준에서) 적당한 세미오버핏 같아요! 퀄리티는 딱 보기에도 좋고, 특유의 오프 패턴 너무 맘에 들어요. 헤지스에서 이런 클래식한 블레이져도 만드...",
      productImg: "images/home/HZJA2F801W2_00.jpeg",
      label: "HAZZYS MEN",
      name: "[HIS] [험프리] 울 체크 자켓",
      sale: "228,730",
      price: "299,000",
      ratio: "23%",
    },
    {
      image: "/images/home/202302270948390.jpeg",
      link: "/",
      intro:
        "172/64 인데 s가 딱 (제 기준에서) 적당한 세미오버핏 같아요! 퀄리티는 딱 보기에도 좋고, 특유의 오프 패턴 너무 맘에 들어요. 헤지스에서 이런 클래식한 블레이져도 만드...",
      productImg: "images/home/HZJA2F801W2_00.jpeg",
      label: "HAZZYS MEN",
      name: "[HIS] [험프리] 울 체크 자켓",
      sale: "228,730",
      price: "299,000",
      ratio: "23%",
    },
    {
      image: "/images/home/202302270948390.jpeg",
      link: "/",
      intro:
        "172/64 인데 s가 딱 (제 기준에서) 적당한 세미오버핏 같아요! 퀄리티는 딱 보기에도 좋고, 특유의 오프 패턴 너무 맘에 들어요. 헤지스에서 이런 클래식한 블레이져도 만드...",
      productImg: "images/home/HZJA2F801W2_00.jpeg",
      label: "HAZZYS MEN",
      name: "[HIS] [험프리] 울 체크 자켓",
      sale: "228,730",
      price: "299,000",
      ratio: "23%",
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
            <Swiper
              spaceBetween={20}
              slidesPerView={1.55}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {listReview.map((item, index) => (
                <SwiperSlide role="group" aria-label={index} key={index}>
                  <div className=" flex-col md:flex-row md:flex-1 max-w-full py-0 px-1 flex md:max-w-876px md:px-5">
                    <div className=" w-full md:w-52.63%">
                      <figure className=" relative">
                        {/* <span className=" border-slate-100 border-solid border text-black bg-white absolute right-0 bottom-0 py-2px px-1 font-light z-10 flex items-center justify-center h-6 text-sm">hazzys****</span> */}
                        <img src={item.image} alt="product" />
                      </figure>
                    </div>
                    <div className=" w-full flex flex-col md:w-47.37% md:pt-5 md:pr-0 md:pb-0 md:pl-10">
                      <div className=" order-2 md:order-none mt-5 mb-auto text-slate-800 font-light">
                        <a className=" cursor-pointer" href={item.link}>
                          <p>{item.intro}</p>
                        </a>
                      </div>
                      <div className=" order-1 md:order-none">
                        <a
                          className=" pb-14px flex items-center pt-5 px-0 md:py-5 text-black cursor-pointer after:inline-block after:w-6px after:h-6px after:ml-5px after:border-solid after:border-black after:border-t after:border-r after:rotate-45"
                          href="/"
                        >
                          구매고객이 착용한 제품 보러가기
                        </a>
                        <div className=" flex w-full relative overflow-hidden">
                          <div className=" w-20 min-w-80px relative md:w-98px md:min-w-98px">
                            <a className=" cursor-pointer" href={item.link}>
                              <img src={item.productImg} />
                            </a>
                          </div>
                          <div className=" py-1 pr-0 pl-5 md:py-2 flex flex-col cursor-pointer">
                            <a href="/">
                              <p className=" text-slate-800">{item.label}</p>
                              <p
                                className={` text-slate-800 pb-5px max-h-21px overflow-hidden ${styles.box}`}
                              >
                                {item.name}
                              </p>
                              <div className=" mt-auto items-start flex-col flex justify-between">
                                <p className=" text-slate-800 font-bold mb-3px md:m-0">
                                  {item.sale}
                                </p>
                                <p className=" font-normal">
                                  <span className=" mr-5px text-sm text-rgba33 line-through">
                                    {item.price}
                                  </span>
                                  <span className=" text-orange-500">
                                    {item.ratio}
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
  const defaultKeyItem = [
    {
      link: "/",
      image: "/images/home/HZTS3A753E2_00.jpg",
      name: "그린 퍼피자수 면 후드티셔츠",
      sale: "197,100",
      price: "219,000",
      ratio: "10%",
    },
    {
      link: "/",
      image: "/images/home/HZTS3A753E2_00.jpg",
      name: "그린 퍼피자수 면 후드티셔츠",
      sale: "197,100",
      price: "219,000",
      ratio: "10%",
    },
    {
      link: "/",
      image: "/images/home/HZTS3A753E2_00.jpg",
      name: "그린 퍼피자수 면 후드티셔츠",
      sale: "197,100",
      price: "219,000",
      ratio: "10%",
    },
    {
      link: "/",
      image: "/images/home/HZTS3A753E2_00.jpg",
      name: "그린 퍼피자수 면 후드티셔츠",
      sale: "197,100",
      price: "219,000",
      ratio: "10%",
    },
    {
      link: "/",
      image: "/images/home/HZTS3A753E2_00.jpg",
      name: "그린 퍼피자수 면 후드티셔츠",
      sale: "197,100",
      price: "219,000",
      ratio: "10%",
    },
  ];

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
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {defaultKeyItem.map((item, index) => (
                  <SwiperSlide role="group" aria-label={index} key={index}>
                    <div className=" w-full relative overflow-hidden">
                      <div className=" relative">
                        <a
                          className=" relative block pt-125% cursor-pointer"
                          href={item.link}
                        >
                          <img
                            className=" absolute top-0 w-full object-cover"
                            src={item.image}
                            alt="product"
                          />
                        </a>
                      </div>
                      <div className=" pt-10px px-0 pb-0 cursor-pointer md:pt-5">
                        <p
                          className={`pb-10px max-h-5 overflow-hidden text-ellipsis text-black ${styles.box}`}
                        >
                          {item.name}
                        </p>
                        <div className=" mt-auto items-start flex-col justify-between md:flex">
                          <p className=" mb-1 md:m-0 font-bold text-black">
                            {item.sale}
                          </p>
                          <p className=" font-normal text-black">
                            <span className=" mr-1 text-sm text-rgba33 line-through">
                              {item.price}
                            </span>
                            <span className=" text-orange-500">
                              {item.ratio}
                            </span>
                          </p>
                        </div>
                        <a
                          className=" absolute top-10px right-10px z-10 opacity-40 flex items-center overflow-hidden w-7 h-7 -indent-96 bg-no-repeat bg-center cursor-pointer bg-[url('/icons/home/icon-heart.png')]"
                          href="#"
                        >
                          heart
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//item
export function Item() {
  const defaultItem = [
    {
      link: "/",
      image: "/images/home/HZTS2D385BK_00.jpg",
      name: "블랙 퍼피자수 면혼방 반집업티셔츠",
      sale: "125,370",
      price: "199,000",
      ratio: "37%",
    },
    {
      link: "/",
      image: "/images/home/HZTS2D385BK_00.jpg",
      name: "블랙 퍼피자수 면혼방 반집업티셔츠",
      sale: "125,370",
      price: "199,000",
      ratio: "37%",
    },
    {
      link: "/",
      image: "/images/home/HZTS2D385BK_00.jpg",
      name: "블랙 퍼피자수 면혼방 반집업티셔츠",
      sale: "125,370",
      price: "199,000",
      ratio: "37%",
    },
    {
      link: "/",
      image: "/images/home/HZTS2D385BK_00.jpg",
      name: "블랙 퍼피자수 면혼방 반집업티셔츠",
      sale: "125,370",
      price: "199,000",
      ratio: "37%",
    },
    {
      link: "/",
      image: "/images/home/HZTS2D385BK_00.jpg",
      name: "블랙 퍼피자수 면혼방 반집업티셔츠",
      sale: "125,370",
      price: "199,000",
      ratio: "37%",
    },
  ];

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
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {defaultItem.map((item, index) => (
                  <SwiperSlide role="group" aria-label={index} key={index}>
                    <div className=" w-full relative overflow-hidden">
                      <div className=" relative">
                        <a
                          className=" relative block pt-125% cursor-pointer"
                          href={item.link}
                        >
                          <img
                            className=" absolute top-0 w-full object-cover"
                            src={item.image}
                            alt="product"
                          />
                        </a>
                      </div>
                      <div className=" pt-10px px-0 pb-0 cursor-pointer md:pt-5">
                        <p
                          className={`pb-10px max-h-5 overflow-hidden text-ellipsis text-black ${styles.box}`}
                        >
                          {item.name}
                        </p>
                        <div className=" mt-auto items-start flex-col justify-between md:flex">
                          <p className=" mb-1 md:m-0 font-bold text-black">
                            {item.sale}
                          </p>
                          <p className=" font-normal text-black">
                            <span className=" mr-1 text-sm text-rgba33 line-through">
                              {item.price}
                            </span>
                            <span className=" text-orange-500">
                              {item.ratio}
                            </span>
                          </p>
                        </div>
                        <a
                          className=" absolute top-10px right-10px z-10 opacity-40 flex items-center overflow-hidden w-7 h-7 -indent-96 bg-no-repeat bg-center cursor-pointer bg-[url('/icons/home/icon-heart.png')]"
                          href="#"
                        >
                          heart
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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

  const productSlider = [
    {
      number: "1",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
    {
      number: "2",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
    {
      number: "3",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
    {
      number: "4",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
    {
      number: "5",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
    {
      number: "6",
      label: "HAZZYS ACC",
      name: "[populet]블랙 퍼피장식 소가죽 반지갑",
      sale: "57,600",
      price: "158,000",
      ratio: "40%",
    },
  ];

  const productPictures = [
    {
      link: "/",
      picture: "images/home/WUWA1F171BK_00.jpeg",
    },
    {
      link: "/",
      picture: "images/home/WUWA1F171BK_00.jpeg",
    },
    {
      link: "/",
      picture: "images/home/WUWA1F171BK_00.jpeg",
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
          <div className=" flex-nowrap pt-0 px-0 pb-5 flex md:my-0 md:-mx-10px">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4.5}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {productSlider.map((item, index) => (
                <SwiperSlide role="group" aria-label={index} key={index}>
                  <div className=" w-full relative overflow-hidden">
                    <div className=" relative">
                      <Swiper
                        modules={[Scrollbar]}
                        spaceBetween={0}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        {productPictures.map((item, index) => (
                          <SwiperSlide
                            role="group"
                            aria-label={index}
                            key={index}
                          >
                            <a
                              className=" pt-129% relative block overflow-hidden w-full cursor-pointer"
                              href={item.link}
                            >
                              <img
                                className=" object-cover absolute top-0 left-1/2 h-full -translate-x-1/2"
                                src={item.picture}
                                alt="product"
                              />
                            </a>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className=" relative pt-2 pr-4 pb-9 pl-5 md:pt-5 md:pr-0 md:pb-10 md:pl-20 cursor-pointer">
                        <i className=" top-54px md:top-5 left-5 md:left-0 w-auto md:w-72px h-10 md:h-60px text-black text-2.85 md:text-3.5 absolute flex items-center justify-center">
                          {item.number}
                        </i>
                        <p className=" text-black">{item.label}</p>
                        <p
                          className={` text-black max-h-5 overflow-hidden ${styles.box}`}
                        >
                          {item.name}
                        </p>
                        <div className=" block text-right ml-10 md:ml-0 mt-1 md:flex md:items-center md:justify-between">
                          <p className=" text-black font-bold mb-3px md:m-0">
                            {item.sale}
                          </p>
                          <p className=" font-normal">
                            <span className=" mr-5px text-sm text-rgba33 line-through">
                              {item.price}
                            </span>
                            <span className=" text-orange-500">
                              {item.ratio}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
