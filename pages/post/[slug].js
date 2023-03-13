import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { useDeviceSize } from "@/hooks/useScreenWidth";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  const { width } = useDeviceSize();
  const breakpoint = 768;
  const spaceBetween = width < breakpoint ? 0 : 12;
  const slidesPerView = width < breakpoint ? 1 : 1;

  return (
    // <div className="prose mx-auto">
    //   <h1>{frontmatter.title}</h1>
    //   <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    // </div>
    <>
      <div className=" relative overflow-hidden w-full min-h-full bg-white">
        <Navbar />
        <div className=" mt-0 mx-0 pt-11 px-0 pb-716px md:pt-120px md:pb-433px min-h-full">
          <div className=" max-w-1920px w-full h-full my-0 mx-auto">
            <div className=" flex-col md:flex-row border-b-8 border-solid border-slate-100 md:border-none flex justify-center items-start w-full md:pt-60px md:px-50px md:pb-120px">
              <div className=" max-w-full md:max-w-595px overflow-visible md:overflow-hidden max-h-none md:max-h-831px relative w-full">
                <div className=" relative w-full">
                  <div className=" absolute top-5 left-5 z-50"></div>
                  <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}
                    spaceBetween={spaceBetween}
                    slidesPerView={slidesPerView}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    aria-live="polite"
                  >
                    <SwiperSlide role="group">
                      <div className=" h-full">
                        <img
                          src={`/${frontmatter.socialImage}`}
                          alt={frontmatter.productCode}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className=" max-w-full md:max-w-525px py-6 px-5 overflow-hidden w-full md:ml-50px">
                <div className=" flex flex-wrap justify-between items-center">
                  <div className=" flex flex-wrap">
                    <span className=" text-orange-500 border border-solid border-orange-500 flex items-center py-0 px-1 h-6 text-sm mt-0 mr-1 mb-14px ml-0">
                      선물포장
                    </span>
                  </div>
                  <div className=" flex justify-end flex-1">
                    <a
                      className=" opacity-100 bg-[url('/icons/home/icon-heart.png')] bg-no-repeat bg-center flex items-center justify-center overflow-hidden w-7 h-6 -indent-96 cursor-pointer"
                      href=""
                    >
                      heart
                    </a>
                    <a
                      className=" opacity-100 bg-[url('/icons/home/ico-share.png')] bg-no-repeat bg-center ml-2 flex items-center justify-center overflow-hidden w-7 h-6 -indent-96 cursor-pointer"
                      href=""
                    >
                      share
                    </a>
                  </div>
                  <div className=" flex flex-wrap justify-between mt-4 w-full">
                    <span className=" text-black mt-2px mx-0 mb-0">
                      {frontmatter.brand}
                    </span>
                    <a className=" cursor-pointer">
                      <span className=" text-black flex items-center text-xl before:block before:w-6 before:h-6 before:mr-2 before:bg-[url('/icons/home/ico-review.png')] before:bg-no-repeat before:bg-center after:block after:w-4 after:h-4 after:ml-2 after:bg-[url('/icons/home/ico-arr-left-16.png')] after:bg-no-repeat after:bg-center">
                        0
                      </span>
                    </a>
                    <p className=" mt-2 md:mt-5px w-full text-2xl font-medium text-black leading-normal">
                      {frontmatter.name}
                    </p>
                  </div>
                  <div className=" mt-4 md:mt-10 flex items-center justify-between w-full">
                    <div className=" flex items-center">
                      <span className=" text-2xl font-bold leading-normal text-black">
                        {frontmatter.sale}원
                      </span>
                      <a className=" flex items-center justify-center overflow-hidden -indent-96 border-0 bg-rgba0 basis-7 w-7 h-7 rounded-50% bg-no-repeat bg-center cursor-pointer after:block after:w-18px after:h-18px after:bg-white after:bg-[url('/icons/home/icon-tip-black.png')]">
                        안내
                      </a>
                    </div>
                    <div className=" flex items-center">
                      <span className=" text-sm text-rgba33 line-through">
                        {frontmatter.price}
                      </span>
                      <span className=" text-2xl font-bold text-orange-500 ml-1 leading-normal">
                        {frontmatter.ratio}
                      </span>
                    </div>
                    {/* <div class="list-acc-wrap"></div> */}
                    {/* <div class="box-color"></div> */}
                    {/* <div class="box-size"></div> */}
                  </div>
                  <div className=" w-full mt-10 flex justify-center relative">
                    <a
                      className=" text-black bg-white border border-solid border-slate-600 flex items-center justify-center w-full h-12 text-base font-bold leading-normal cursor-pointer"
                      href=""
                    >
                      선물하기
                    </a>
                    <a
                      className=" ml-2 text-black bg-white border border-solid border-slate-600 flex items-center justify-center w-full h-12 text-base font-bold leading-normal cursor-pointer"
                      href=""
                    >
                      장바구니
                    </a>
                    <button
                      className=" ml-2 text-white bg-orange-500 border border-solid border-orange-500 flex items-center justify-center w-full h-12 text-base font-bold leading-normal"
                      href
                    >
                      바로구매
                    </button>
                  </div>
                  <div className=" mt-6 md:mt-10 w-full px-0 pb-14px border-y border-solid border-slate-600">
                    <ul className=" list-none list-outside">
                      <li className=" text-base pt-14px flex justify-between text-slate-500 leading-normal">
                        <strong className=" font-normal text-black">
                          상품코드
                        </strong>
                        <span className=" w-calc-96px text-left">
                          {frontmatter.productCode}
                        </span>
                      </li>
                      <li className=" text-base pt-14px flex justify-between text-slate-500 leading-normal">
                        <strong className=" font-normal text-black">
                          소재
                        </strong>
                        <span className=" w-calc-96px text-left">
                          {frontmatter.material}
                        </span>
                      </li>
                      <li className=" text-base pt-14px flex justify-between text-slate-500 leading-normal">
                        <strong className=" font-normal text-black">
                          무게
                        </strong>
                        <span className=" w-calc-96px text-left">
                          {frontmatter.weight}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" cont-wrap">
              <div className=" relative">
                <div className=" mb-6 absolute top-0 left-0 z-10 w-full bg-white border-y-slate-300 border border-solid">
                  <a className=" pt-1 px-4 text-black font-bold flex items-center justify-center whitespace-nowrap h-12 md:h-58px text-lg leading-normal">
                    상품정보
                  </a>
                </div>
                <div className=" pt-74px md:pt-98px">
                  <div className=" border-t-0 px-5 md:p-0 block mx-auto w-full max-w-800px">
                    <div className=" h-auto mb-6 md:mb-10 relative overflow-hidden pb-78px">
                      <div className="view-info__cont">
                        <h2 className=" mt-10 mx-0 mb-3 text-lg font-bold leading-normal text-left text-black">
                          상품 상세 정보
                        </h2>
                        <p className=" text-sm text-slate-900 leading-normal font-normal">
                          {frontmatter.detail}
                        </p>
                        <div className=" flex items-center justify-center flex-wrap py-30px">
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.socialImage}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image1}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image2}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image3}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image4}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image5}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                          <img
                            className=" mt-5"
                            src={`/${frontmatter.image6}`}
                            alt={frontmatter.productCode}
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
