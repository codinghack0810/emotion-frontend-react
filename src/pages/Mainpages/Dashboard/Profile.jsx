import { Carousel } from "flowbite-react";

function Profile() {
  return (
    <div className="h-[80vh] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className=" flex flex-row h-[80vh] px-20 ">
          <img
            src="./profile/carousel-1.png"
            alt="..."
            className=" w-[30vw] h-[80vh] "
          />
          <div className=" w-[50vw] h-[100%] flex flex-col justify-center items-start gap-5 ">
            <div className=" text-white text-[2.5rem] w-[50vw] ">
              The best AI for informative articles
            </div>
            <p className=" text-white ">
              "Escribelo is an artificial intelligence that generates texts with
              a fairly high quality and optimal for niche websites. It is
              currently the best trained and advanced tool in Spanish, which you
              can save a lot of time and money."
            </p>
            <p className="text-white">
              <b>Dean Romero</b>
              <br />
              DinoRank CEO
            </p>
          </div>
        </div>
        <div className=" flex flex-row h-[80vh] px-20 ">
          <img
            src="./profile/carousel-2.png"
            alt="..."
            className=" w-[30vw] h-[80vh] "
          />
          <div className=" w-[50vw] h-[100%] flex flex-col justify-center items-start gap-5 ">
            <div className=" text-white text-[2.5rem] w-[50vw] ">
              The best AI for informative articles
            </div>
            <p className=" text-white ">
              "Escribelo is an artificial intelligence that generates texts with
              a fairly high quality and optimal for niche websites. It is
              currently the best trained and advanced tool in Spanish, which you
              can save a lot of time and money."
            </p>
            <p className="text-white">
              <b>Dean Romero</b>
              <br />
              DinoRank CEO
            </p>
          </div>
        </div>
        <div className=" flex flex-row h-[80vh] px-20 ">
          <img
            src="./profile/carousel-3.png"
            alt="..."
            className=" w-[30vw] h-[80vh] "
          />
          <div className=" w-[50vw] h-[100%] flex flex-col justify-center items-start gap-5 ">
            <div className=" text-white text-[2.5rem] w-[50vw] ">
              The best AI for informative articles
            </div>
            <p className=" text-white ">
              "Escribelo is an artificial intelligence that generates texts with
              a fairly high quality and optimal for niche websites. It is
              currently the best trained and advanced tool in Spanish, which you
              can save a lot of time and money."
            </p>
            <p className="text-white">
              <b>Dean Romero</b>
              <br />
              DinoRank CEO
            </p>
          </div>
        </div>
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}

export default Profile;
