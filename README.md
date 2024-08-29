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

## Instructions for Running the Web Application

To access and run the web application on your device, please follow these steps:

### Step 1: Clone or Download the Repository
- **Clone the repository** using the following command in your terminal:
    ```bash
    git clone <repository_url>
    ```
- Alternatively, **download the repository as a ZIP file** and extract it to your desired location.

### Step 2: Open the Jupyter Notebook
- Navigate to the repository folder and open the `app.ipynb` file using Jupyter Notebook.

### Step 3: Install Required Libraries
If not already installed, you need to install the following Python libraries:
- **Flask**: Run `pip install Flask`
- **Joblib**: Run `pip install joblib`

You can install them directly from the Jupyter Notebook or through your terminal.

### Step 4: Run the Web Application
- In the `app.ipynb` notebook, locate and run the main code block that initializes the Flask application.
- Upon execution, you will receive an HTTP link in the output.

### Step 5: Access the Web Application
- Click on the HTTP link provided in the notebook output.
- This link will open the web application in your web browser.
- You can now interact with the application and test its features.

## Web Application Snapshots

![3](https://github.com/user-attachments/assets/74451729-c402-4c58-836d-0ae7db29caa5)

![2](https://github.com/user-attachments/assets/809ea0db-0d5e-481b-8ac6-74f420bfddcc)
