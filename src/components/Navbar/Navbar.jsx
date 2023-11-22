"use client";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Hourglass } from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import { BsXLg, BsList, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { authKey } from "@/utils/authKey";
const styles = {
  navlink:
    " cursor-pointer ml-10 uppercase border-b border-black hover:border-red-300 text-xl ",
};

const Navbar = () => {
 // console.log("isLoggedIn:",isLoggedIn());
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, loading, userLoggedIn]);

  if (!loading) {
    <div className=" py-5 text-center flex items-center justify-center ">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
  }
  //=============================
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMeno = () => setMenuOpen(!menuOpen);
  return (
    <header className="  ">
      <nav className=" w-full h-16 shadow-xl bg-slate-200 ">
        {/*======================================== Dekstop menu ============================================*/}
        <div className=" lg:px-48 md:px-20  w-full flex items-center justify-between h-full px-10 ">
          <Link href="/">
            <h1 className=" font-bold text-3xl font-serif text-green-500 leading-tight ease-in-out duration-500 ">Gallery</h1>
            
          </Link>
          <div className=" text-black hidden sm:flex  ">
            <ul className=" hidden sm:flex ">
              
              <li className={styles.navlink}>
                <Link href="/gullery">Gullery</Link>
              </li>
              {
                userLoggedIn? <>
                
              <li onClick={()=>removeUserInfo(authKey)} className=" ml-10 text-lg ">
                <Link href="/">
                  {/* <BsCartCheckFill size={24} /> */}
                  <p className=" px-5 py-1  text-white  rounded-full bg-black hover:bg-red-800 text-center ">Log out</p>
                </Link>
              </li>
                </> :<>
                <li className={styles.navlink}>
                <Link href="/login">
                  {/* <BsCartCheckFill size={24} /> */}
                  <p>Log in</p>
                </Link>
              </li>
              </>
              }
              
            </ul>
          </div>
          {/*======================================== Mobile menu ============================================*/}
          <div className=" sm:hidden pl-24 flex ">
            {/* <div className=" px-6 ">
              <Link href="/cart">
                <BsCartCheckFill size={24} />
              </Link>
            </div> */}
            <BsList
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer h-8 w-8 text-black  "
            />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gray-400 p-10 ease-in-out duration-500"
              : " fixed left-[-100%] top-0 p-10 ease-in-out duration-500  "
          }
        >
          <div className=" flex w-full items-center justify-end ">
            <div onClick={toggleMeno} className=" cursor-pointer  ">
              <BsXLg className=" cursor-pointer h-8 w-8 text-black " />
            </div>
          </div>
          {/*======================================== Mobile menu icon list ============================================*/}
          <div className=" flex-col py-4  ">
            <ul>
              
              <li className=" py-3 hover:underline hover:decoration-red-500  ">
                {" "}
                <Link onClick={() => setMenuOpen(false)} href="/gullery">
                GULLERY
                </Link>{" "}
              </li>
            


            </ul>
          </div>
          {/*======================================== Social Media link =======================================*/}
          <div className=" flex flex-col justify-around pt-10 items-center gap-2  ">
            <Link href="/gullery">
              <p className=" bg-black border-2 border-black hover:border-black hover:bg-gray-400 hover:ease-out duration-300 w-32 h-10 rounded-full items-center flex justify-center text-center ">
                <FcGoogle
                  size={30}
                  className=" text-center items-center justify-center "
                />
              </p>
            </Link>
            <Link href="/gullery">
              <p className=" bg-black  border-2 border-black hover:border-black hover:text-black hover:bg-gray-400 hover:ease-out duration-300 w-32 h-10 rounded-full items-center flex justify-center text-center ">
                <BsGithub
                  size={30}
                  className="text-white hover:text-black text-center items-center justify-center "
                />
              </p>
            </Link>
          </div>
          
          <h1 className=" bottom-0 text-center pt-5 ">Generated by Tareq</h1>
        </div>

        
      </nav>
    </header>
  );
};

export default Navbar;