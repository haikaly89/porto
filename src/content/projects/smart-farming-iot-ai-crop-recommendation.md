---
title: "Smart Farming IoT and AI-Driven Crop Recommendation System"
date: 2025-12-20
summary: "An integrated system using ESP32 sensors and AI to analyze soil conditions and market prices, providing real-time crop recommendations for small-to-medium scale farmers."
tags:
- IoT
- Artificial Intelligence
- ESP32
- Python
- MongoDB
cover: "/images/projects/smart-farming-iot-ai/prototype.png"
---

<div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 bg-white dark:bg-[#1c1e26] shadow-sm">
  <h3 class="text-xl font-bold mb-4 mt-0 text-gray-900 dark:text-white">Project Overview</h3>
  <p class="mb-0 text-gray-600 dark:text-gray-300 text-justify">
    Farmers in Indonesia frequently face harvest failures and volatile market prices, leading to significant financial losses and reduced welfare. This project offers a technological solution by integrating IoT sensors with AI models to analyze soil content and predict optimal crop suitability. By combining real-time environmental data with market price information, the system empowers small-to-medium scale farmers to make informed, data-driven planting decisions. The ultimate goal is to optimize agricultural yields and improve the economic sustainability of farming practices.
  </p>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">System Architecture</h2>

<div class="space-y-4 mb-12">
  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      1</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">ESP32 Microcontroller</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Acts as the central hub for developing sensors and managing data transmission from the agricultural field.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      2</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Multi-Sensor Array</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Includes DHT22, pH, and soil moisture sensors to collect comprehensive environmental and soil data.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      3</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">MongoDB Atlas</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Provides a scalable cloud-based NoSQL database for centralized storage of all captured sensor information.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      4</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">AI Model (Python)</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Analyzes soil content data and market price trends to predict the most suitable crops.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      5</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Streamlit Web App</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Serves as the interactive user interface to display sensor data and crop recommendations to farmers.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">Key Features</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Real-Time Soil Analysis</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Continuous monitoring of moisture, pH, and temperature through an integrated IoT sensor network.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">AI-Powered Predictions</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Utilizes machine learning to compare real-time sensor data with ideal crop growth parameters.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Market Price Integration</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Real-time food price data is incorporated to ensure recommendations are economically viable for farmers.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Unified Dashboard</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">A centralized website displays detailed sensor metrics (NPK, Humidity, Temp) alongside specific crop results.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Multi-Device Compatibility</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Designed as an improvement over manual methods, allowing integration with various hardware devices.</p>
      </div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">System Flow</h2>

<div class="relative pl-10 border-l-2 border-gray-200 dark:border-gray-700 space-y-10 mb-12 ml-4">
  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      1</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Data Acquisition</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">IoT sensors deployed in the field collect real-time soil and atmospheric data via ESP32.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      2</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Data Classification</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The collected raw sensor metrics are processed and categorized for analysis.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      3</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">AI Comparison</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The system compares categorized sensor data against AI models and integrated market price datasets.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      4</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Recommendation Generation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Based on the analysis, the system identifies and recommends the best crop for the current conditions.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      5</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Web Visualization</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Final results and crop suggestions (e.g., "coffee") are displayed on the farmer's web dashboard.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl relative overflow-hidden mb-12">
  <div class="relative z-10">
    <h3 class="text-2xl font-bold mb-2 text-white m-0 border-b border-white/20 pb-4">Project Outcome</h3>
    <div class="mt-4 flex items-start">
      <i class="fas fa-check-circle mt-1 mr-4 text-white/80"></i>
      <p class="m-0 font-medium leading-relaxed text-white/90 text-justify">
        The project successfully delivered an end-to-end smart farming solution that replaces manual analysis with automated AI insights. Real-world testing demonstrated the system's ability to ingest data to accurately suggest crops like coffee. This tool provides farmers with a measurable unique value proposition through improved decision-making accuracy and integrated market awareness.
      </p>
    </div>
  </div>
  <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
  <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">Screenshots</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img src="/images/projects/smart-farming-iot-ai/prototype.png" class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" alt="Prototype" />
  </div>
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img 
      src="/images/projects/smart-farming-iot-ai/dashboard.png" 
      class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" 
      alt="Dashboard" 
    />
  </div>
</div>
