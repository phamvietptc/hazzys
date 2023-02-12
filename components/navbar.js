import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className=" top-0 bg-white h-11 border-b-0 fixed w-full z-50">
        <div className=" z-20 relative bg-white transition-all border-b border-solid border-slate-100">
          <div className=" h-11 py-0 pr-3 pl-4 flex items-center justify-between w-full mt-0 mx-auto">
            <a className=" cursor-pointer" href="/">
              <h1 className=" overflow-hidden w-20 h-9 font-medium text-black bg-[url('/images/home/img_logo.png')]"></h1>
            </a>
            <div className=" flex ml-auto">
              <a
                className=" bg-[url('/images/home/ico_search.png')] overflow-hidden w-8 h-8 mt-0 mx-1 bg-no-repeat bg-center block cursor-pointer"
                href="javascript:fnOpenSearchPopup()"
              ></a>
              <a className=" hidden overflow-hidden h-8 mt-0 mx-1 bg-no-repeat bg-center ml-6 w-auto indent-0"></a>
              <a className=" hidden overflow-hidden h-8 mt-0 mx-1 bg-no-repeat bg-center ml-6 w-auto indent-0"></a>
              <a
                className=" bg-[url('/images/home/ico_menu.png')] overflow-hidden w-8 h-8 mt-0 mx-1 bg-no-repeat bg-center block cursor-pointer"
                href="javascript:void(0)"
              ></a>
            </div>
          </div>
        </div>

        <div></div>
      </header>
    </>
  );
}
