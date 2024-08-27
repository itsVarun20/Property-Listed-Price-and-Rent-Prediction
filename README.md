# Property Listed Price and Rent Prediction

![image](https://github.com/user-attachments/assets/15ca1444-c045-4ac9-9fb1-3c719b947231)

Project Domain: Real Estate Analytics

This repository contains the dataset, code, and web application for predicting property listed prices and rental values in the United States using machine learning algorithms.

## Overview

This project aims to develop a web application that predicts property prices and rental values based on various features using machine learning. The application leverages multiple algorithms to analyze key property characteristics such as the number of bedrooms, bathrooms, total area, price per sq.ft, and location to provide accurate estimates for both sale and rental prices.

Dataset: The dataset used in this project is "United States House Listings: Zillow Extract 2023" from Kaggle, containing a diverse snapshot of housing characteristics across various U.S. states, cities, and neighbourhoods. URL: https://www.kaggle.com/datasets/febinphilips/us-house-listings-2023

## Algorithms Used

The following machine-learning algorithms are employed in this project:

* *Linear Regression*
* *Random Forest*
* *Gradient Boosting*
* *XGBoost*
* *CatBoost*
* *LightGBM*

## Repository Structure

* `data/`: Contains the cleaned dataset
* `static/`: Includes CSS and JavaScript files for web application functionality along with image files
* `templates/`: Contains HTML file for the web application’s user interface
* `Code_EDA.ipynb`: Script for exploratory data analysis (EDA)
* `Code_Predicting.ipynb`: Script for machine learning modeling and predictions
* `app.ipynb`: Flask integration script for backend operations
* `final_model_listed.pkl`: Trained model for predicting listed prices
* `final_model_rent.pkl`: Trained model for predicting rental prices
* `scaler_listed.pkl`: Scaler used for normalizing listed price data
* `scaler_rent.pkl`: Scaler used for normalizing rental price data
* `README.md`: This file

## Web Application Snapshots

![3](https://github.com/user-attachments/assets/74451729-c402-4c58-836d-0ae7db29caa5)

![2](https://github.com/user-attachments/assets/809ea0db-0d5e-481b-8ac6-74f420bfddcc)
