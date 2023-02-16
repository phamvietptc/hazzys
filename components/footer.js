import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className=" -mt-636px h-636px overflow-hidden w-full">
        <div className=" pt-6 px-0 pb-4 bg-slate-200">
          <div className=" flex flex-col items-center py-0 px-5 justify-between max-w-1920px w-full h-full my-0 mx-auto">
            <p>
              <img src="/images/home/img_logo_f.png" alt="Logo" />
            </p>
            <div className=" flex items-center">
              <a
                className=" bg-[url('/icons/home/icon-instagram-chat.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.instagram.com/standup.haesu/"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-instagram.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.instagram.com/hazzys_official/?hl=ko"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-facebook.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.facebook.com/hazzysstory"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-youtube.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://www.youtube.com/channel/UC6yEGGt6akQlqIk20RQ1zHQ"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-spotify.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://open.spotify.com/user/usoi3l1bc4r72or66ganxkbd2?si=2a8ac5d6b5c14e9f&nd=1"
              ></a>
              <a
                className=" bg-[url('/icons/home/icon-kakao.png')] block overflow-hidden w-14 h-16 bg-center bg-24px bg-no-repeat cursor-pointer"
                target="_blank"
                href="https://pf.kakao.com/_wdUuI"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
