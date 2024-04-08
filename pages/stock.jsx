import Image from "next/image";
import React from "react";
import LSTM from "../public/assets/Projects/LSTM Stock/DF_and_MA100.png";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
const stock = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={LSTM}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2 text-white">Stock Predicton using LSTM model</h2>
          <h3> React JavaScript / Python Flask/ BootStrap</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-lg">
            <p className="py-2">
              {" "}
              The Stock Prediction web application utilizes an LSTM (Long
              Short-Term Memory) model for forecasting stock prices. Python
              Flask serves as the backend framework, fetching historical stock
              data from Yahoo Finance. This data is processed and utilized to
              train the LSTM model, which then generates predictions for future
              stock prices.
            </p>
            <p className="py-2">
              Once the predictions are made, Flask converts the relevant
              information, including the stock data, predicted values, and any
              visualizations, into a JSON format. This JSON data is then sent to
              the frontend built with React.js.
            </p>
            <p className="py-2">
              In the frontend, React.js organizes and displays the received data
              in a user-friendly manner. Users can view the historical stock
              data, the predicted future values, and any accompanying
              visualizations, such as line graphs or candlestick charts. The
              interface is designed to be intuitive and visually appealing,
              providing users with valuable insights into the potential trends
              of the selected stock.
            </p>

            <Link
              href="https://github.com/Dheeraj164/StockPrediction_usingLSTM_flask_react"
              target="_blank">
              <button className="px-8 py-4 mt-4 mr-8">code</button>
            </Link>
            {/* <button className="px-8 py-4 mt-4">demo</button> */}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-2xl font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> React
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> JavaScript
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Python Flask
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> BootStrap
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> LSTM Model
              </p>
              <p className="text-gray-600 text-xl py-2 flex items-center">
                <RiRadioButtonFill className="mr-3" /> Yahoo Finance
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#project">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default stock;
