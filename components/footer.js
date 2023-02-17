import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" -mt-668px h-668px overflow-hidden w-full md:-mt-353px md:h-353px">
        <div className=" pt-6 px-0 pb-4 bg-slate-200 md:p-0">
          <div className=" flex flex-col items-center py-0 px-5 justify-between max-w-1920px w-full h-full my-0 mx-auto md:flex-row md:px-50px">
            <p>
              <img src="/images/home/img_logo_f.png" alt="Logo" />
            </p>
            <div className=" flex items-center">
              <a
                className=" bg-[url('/icons/home/icon-instagram-chat.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.instagram.com/standup.haesu/"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-instagram.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.instagram.com/hazzys_official/?hl=ko"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-facebook.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.facebook.com/hazzysstory"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-youtube.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.youtube.com/channel/UC6yEGGt6akQlqIk20RQ1zHQ"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-spotify.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://open.spotify.com/user/usoi3l1bc4r72or66ganxkbd2?si=2a8ac5d6b5c14e9f&nd=1"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-kakao.png')] block overflow-hidden w-14 md:w-58px h-16 md:h-70px bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://pf.kakao.com/_wdUuI"
              ></a>
            </div>
          </div>
        </div>
        <div className=" block py-0 px-5 max-w-1920px w-full h-full my-0 mx-auto md:flex md:justify-between md:flex-row-reverse md:px-50px">
          <div className=" mt-10 flex md:mt-30px">
            <div className=" p-0 w-1/2 md:py-0 md:pr-50px md:pl-30px md:w-full">
              <strong className=" text-base font-bold text-left not-italic text-black">
                NOTICE
              </strong>
              <ul className=" mt-4 whitespace-nowrap list-outside list-none">
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-800"
                    href="/"
                  >
                    공지사항
                  </a>
                </li>
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-800"
                    href="/"
                  >
                    이용약관
                  </a>
                </li>
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-800"
                    href="/"
                  >
                    <b className=" font-bold">개인정보 처리방침</b>
                  </a>
                </li>
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-900"
                    href="/"
                  >
                    <b className=" font-bold">읽기쉬운 개인정보처리방침</b>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" p-0 w-1/2 md:py-0 md:pr-50px md:pl-30px md:w-full">
              <strong className=" text-base font-bold text-left not-italic text-black">
                HELP
              </strong>
              <ul className=" mt-4 whitespace-nowrap list-outside list-none">
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-800"
                    href="/"
                  >
                    고객센터
                  </a>
                </li>
                <li className=" list-outside list-none">
                  <a
                    className=" block py-1 px-0 cursor-pointer text-slate-800"
                    href="/"
                  >
                    패밀리인증
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-10 text-sm text-slate-500 md:mt-6">
            <address className=" not-italic">
              <ul className=" flex flex-wrap items-center list-outside list-none">
                <li className=" flex items-center py-1 px-0 list-outside list-none">
                  (주)LF
                </li>
                <li className=" w-full md:w-none flex items-center py-1 px-0 list-outside list-none md:before:block md:before:w-1px md:before:h-3 md:before:my-0 md:before:mx-3 md:before:bg-slate-100">
                  대표이사 오규식/김상균
                </li>
              </ul>
              <ul className=" flex flex-wrap items-center list-outside list-none">
                <li className=" flex items-center py-1 px-0 list-outside list-none">
                  서울 강남구 언주로 870
                </li>
                <li className=" flex items-center py-1 px-0 list-outside list-none before:bg-slate-100 before:block before:w-1px before:h-3 before:my-0 before:mx-3">
                  1544-5114 (유료)
                </li>
                <li className=" w-full flex items-center py-1 px-0 list-outside list-none">
                  lfcs@lfcorp.com
                </li>
              </ul>
              <ul className=" flex flex-wrap items-center list-outside list-none">
                <li className=" flex items-center py-1 px-0 list-outside list-none">
                  통신판매업신고 : 제2010-서울강남-00066호
                </li>
                <li className=" w-full flex items-center py-1 px-0 list-outside list-none">
                  사업자등록번호 : 211-87-87724
                  <a
                    className=" block font-bold text-black ml-3 cursor-pointer"
                    href="javascript:void(0)"
                    onClick="openInNewTab('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118787724&apv_perm_no=')"
                  >
                    사업자 정보확인
                  </a>
                </li>
              </ul>
            </address>
            <div className=" mt-4 flex flex-wrap mb-3">
              <a className=" hidden"></a>
              <a className=" hidden"></a>
              <a className=" overflow-hidden w-76px mr-30px flex items-center my-2 ml-0 text-slate-800 cursor-pointer">
                <img
                  className=" max-w-none"
                  src="/images/home/img-parenter.png"
                  alt="고객님께서 안전거래를 위해 현금 등으로 결제하신 경우 저희 쇼핑몰에서 가입한 우리은행의 채무자 지급보증(구매안전서비스)을 이용하실 수 있습니다."
                />
              </a>
              <a className=" h-8 mr-0 py-0 px-3 text-sm border border-solid border-slate-300 flex items-center my-2 mb-0 cursor-pointer text-slate-800">
                서비스가입사실확인
              </a>
            </div>
            <p class="copyright">© 2022 HAZZYS ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
}