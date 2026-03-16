import React from "react";
import ProjectPages from "@/app/components/ProjectPages";
import LSTM from "@/public/assets/Projects/LSTM Stock/DF_and_MA100.png";

export default function StockPrediction() {
  return (
    <ProjectPages
      backgroundImage={LSTM}
      title="Stock Prediction using LSTM Model"
      projectDescription={[
        {
          descriptionTitle: "Overview",
          data: [
            "This web application predicts stock prices using a Long Short-Term Memory (LSTM) deep learning model trained on historical stock data.",
            "The backend is built using Python Flask, which retrieves historical stock data from Yahoo Finance and processes it to generate predictions using the trained LSTM model.",
          ],
        },
        {
          descriptionTitle: "Backend Processing",
          data: [
            "Flask handles the data pipeline by fetching stock data, preparing the dataset, and passing it through the LSTM model to produce future stock price predictions.",
            "The backend converts prediction results and historical data into JSON format and exposes them through an API for the frontend to consume.",
          ],
        },
        {
          descriptionTitle: "Frontend Visualization",
          data: [
            "The frontend application is built using React.js, where the stock data and prediction results are displayed in an interactive interface.",
            "Users can explore historical stock trends, predicted future prices, and graphical visualizations such as moving averages and line charts.",
          ],
        },
      ]}
      keyFeature={[
        "Stock price prediction using LSTM deep learning model",
        "Historical stock data fetched from Yahoo Finance",
        "Backend API built with Python Flask",
        "Interactive frontend interface built with React",
        "Visualization of stock trends and predictions",
        "Data communication between backend and frontend using JSON APIs",
      ]}
      techStack={[
        "React",
        "JavaScript",
        "Python",
        "Flask",
        "Bootstrap",
        "LSTM Model",
        "Yahoo Finance API",
      ]}
    />
  );
}
