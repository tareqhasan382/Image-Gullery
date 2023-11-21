import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    //lg:px-48 md:px-20  w-full flex items-center justify-between h-full px-10  || flex w-full flex-col items-center justify-between md:px-24 px-5
    <main className="lg:px-48 md:px-20 flex flex-col  w-full items-center justify-between px-10 mt-32 ">
      <Hero />
      <div className=" pb-10 flex flex-col items-center pt-10 ">
        <h1 className=" lg:text-5xl text-3xl font-bold leading-tight font-sans ">
          <span className=" text-green-500 font-serif ">Photos Gallery</span>
        </h1>
        <hr className="border-t border-black text-center w-60 " />
      </div>
      <div>
        <HomePage />
      </div>
    </main>
  );
}
//md:grid-cols-2 lg:grid-cols-3
