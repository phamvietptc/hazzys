import Image from "next/image";

export default function Navbar() {
  const defaultMenuList = [
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
      text: "BEAUTY",
    },
    {
      link: "/",
      text: "OUTLET",
    },
    {
      link: "/",
      text: "BEST",
    },
  ];

  return (
    <>
      <header className=" top-0 bg-white h-11 md:h-32 border-b-0 md:border md:border-solid md:border-slate-700 fixed w-full z-50">
        <div className=" z-20 relative transition-all border-b border-solid border-slate-100">
          <div className=" h-11 md:h-59px py-0 pr-3 md:pr-45px pl-4 md:pl-50px flex items-center justify-between w-full my-0 mx-auto md:max-w-1920px">
            <a className=" cursor-pointer text-slate-800" href="/">
              <h1 className=" overflow-hidden w-20 h-9 font-medium text-black bg-[url('/images/home/img_logo.png')]"></h1>
            </a>
            <div className=" flex ml-auto">
              <a
                className=" bg-[url('/images/home/ico_search.png')] overflow-hidden w-8 h-8 my-0 mx-1 bg-no-repeat bg-center block cursor-pointer"
                href="javascript:fnOpenSearchPopup()"
              ></a>
              <a className=" hidden overflow-hidden h-8 my-0 mx-1 bg-no-repeat bg-center ml-6 w-auto indent-0 md:flex md:items-center cursor-pointer text-slate-800">로그인</a>
              <a className=" hidden overflow-hidden h-8 mt-0 mx-1 bg-no-repeat bg-center ml-6 w-auto indent-0 md:flex md:items-center cursor-pointer text-slate-800">회원가입</a>
              <a
                className=" bg-[url('/images/home/ico_menu.png')] overflow-hidden w-8 h-8 mt-0 mx-1 bg-no-repeat bg-center block cursor-pointer md:hidden"
                href="javascript:void(0)"
              >사이트맵</a>
            </div>
          </div>
        </div>

        <div className=" fixed block overflow-hidden top-0 left-full h-full border-t-0 w-full min-h-60px z-20 md:absolute md:top-60px md:left-0 md:min-h-60px md:h-auto">
          <div className=" relative flex-col md:flex-row overflow-auto md:overflow-hidden w-full h-full min-h-full pt-52px bg-white flex md:justify-center md:h-60px md:p-0">
            {/* menu mobile*/}
            <div className=" fixed z-0 flex top-0 left-full items-center h-52px w-full py-0 pr-0 pl-5 bg-white md:hidden">
              <a className=" flex items-center font-bold mr-30px cursor-pointer text-slate-800 before:bg-[url('/images/home/icon-loginout.png')] before:bg-no-repeat before:bg-center before:bg-24px before:w-6 before:h-6 before:block before:mr-10px" href="/">로그인</a>
              <a className=" flex items-center font-bold mr-30px cursor-pointer text-slate-800 before:bg-[url('/images/home/icon-join.png')] before:bg-no-repeat before:bg-center before:bg-24px before:w-6 before:h-6 before:block before:mr-10px" href="/">회원가입</a>
              <a className=" block overflow-hidden w-11 h-11 ml-auto -indent-60px bg-[url('/images/home/icon-close.png')] bg-24px cursor-pointer text-slate-800">닫기</a>
            </div>
            <ul className=" block font-bold list-outside list-none md:flex md:items-center"></ul>
            <ul className=" block font-bold list-outside list-none md:flex md:items-center">
              {defaultMenuList.map((item, index) => (
              <li key={index} className=" relative py-0 pr-3 pl-5 list-outside list-none md:pl-2 md:pr-0">
                <a className=" flex items-center h-52px py-0 px-0.520833px cursor-pointer text-slate-900 md:h-60px after:bg-[url('/images/home/icon-arr-left-black.png')] after:absolute after:top-1/2 after:right-3 after:block after:w-6 after:h-6 after:translate-y-1/2" href={item.link}>{item.text}</a>
              </li>
              ))}
            </ul>
            <ul className=" border-t-8 border-solid border-slate-100 font-light block list-outside list-none md:flex md:items-center md:border-none before:block before:w-1 before:h-1 before:my-0 before:mr-0 before:ml-0.46875px before:bg-white">
              <li className=" relative py-0 pr-3 pl-5 list-outside list-none md:pl-2">
                <a className=" flex items-center h-52px py-0 px-0.520833px cursor-pointer text-slate-900 md:h-60px md:after:block md:after:w-1 md:after:h-1 md:after:mb-14px md:after:rounded-50% md:after:bg-red-600" href="/">헤지스 입어봤어요</a>
              </li>
              <li className=" relative py-0 pr-3 pl-5 list-outside list-none md:pl-2">
                <a className=" flex items-center h-52px py-0 px-0.520833px cursor-pointer text-slate-900 md:h-60px" href="/">EVENT</a>
              </li>
              <li className=" relative py-0 pr-3 pl-5 list-outside list-none md:pl-2">
                <a className=" flex items-center h-52px py-0 px-0.520833px cursor-pointer text-slate-900 md:h-60px" href="/">MAGAZINE</a>
              </li>
              <li className=" relative py-0 pr-3 pl-5 list-outside list-none md:pl-2">
                <a className=" flex items-center h-52px py-0 px-0.520833px cursor-pointer text-slate-900 md:h-60px" href="/">ABOUT ‘H’</a>
              </li>
            </ul>
            <div className=" left-479.219px w-0 hidden absolute bottom-0 h-1 bg-black md:left-746px md:block"></div>
            <div className=" flex w-full mt-auto bg-white border border-solid border-slate-100 md:hidden"></div>
          </div>
          <div className=" fixed top-52px bottom-0 left-full right-0 z-10 block overflow-auto md:overflow-hidden w-full h-calc-52px md:h-0 bg-white border-t-0 md:border-t md:border-solid md:border-slate-500 shadow-0px24px20px">
            <div className=" block max-w-1920px p-0 my-0 mx-auto md:flex md:justify-center md:pr-203px md:pl-50px"></div>
          </div>
        </div>
      </header>
    </>
  );
}
