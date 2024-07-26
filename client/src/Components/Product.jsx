import React from "react";
import Orange from "../Images/Orange.png";
import Pineapple from "..//Images/Pineapple.png";
import Apple from "../Images/Apple.png";
import Kiwi from "../Images/Kiwi.png";

import Grapes from "../Images/Grapes.png";

const Product = ({productName,description, price, image}) => {
  return (
    <div className="m-1 flex h-full  overflow-y-scroll no-scrollbar justify-around flex-wrap ">
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2  bg-white shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">{productName}</h2>
            <p className="text-xs ">{description}</p>
            <h1 className="text-lg ">{price} rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 font-Merriweather text-white hover:scale-105 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      {/* <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">PineApple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg font-Merriweather">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Pineapple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Apple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Apple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Grapes</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Grapes} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Kiwi</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Kiwi} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Orange</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Orange} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">PineApple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg font-Merriweather">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Pineapple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Apple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Apple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Grapes</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Grapes} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Kiwi</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Kiwi} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Orange</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Orange} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">PineApple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg font-Merriweather">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Pineapple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Apple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Apple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Grapes</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Grapes} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Kiwi</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Kiwi} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Orange</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Orange} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">PineApple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg font-Merriweather">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Pineapple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Apple</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Apple} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow  rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Grapes</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Grapes} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="m-6 relative ">
        <div className="w-[200px] h-[130px] p-2 shadow rounded-lg">
          <div className=" flex justify-center flex-col items-center">
            <h2 className="text-2xl font-Merriweather ">Kiwi</h2>
            <p className="text-xs ">Description</p>
            <h1 className="text-lg ">52rs</h1>
          </div>
          <div className="">
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              buy
            </button>
            <button className="p-1 m-1 w-16 bg-orange-500 rounded-lg">
              cart
            </button>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px]  rounded-xl top-[60px] left-[130px]">
          <img src={Kiwi} alt="" className="h-full w-full object-cover" />
        </div>
      </div> */}

      {/* <div className="m-6 relative">
        <div className="w-[300px] h-[180px] border-2 border-black"></div>
        <div className="absolute w-[150px] h-[150px] border-2 border-black top-[50px] left-[180px]"></div>
      </div>
      <div className="m-6 relative">
        <div className="w-[300px] h-[180px] border-2 border-black"></div>
        <div className="absolute w-[150px] h-[150px] border-2 border-black top-[50px] left-[180px]"></div>
      </div> */}
    </div>
  );
};

export default Product;
