---
title: "SMS Spam Detection System with CNN and LSTM Architectures"
date: 2025-06-16
summary: "A comprehensive deep learning project implementing hybrid CNN-LSTM and BiLSTM-CNN models to accurately classify SMS messages as spam or legitimate ham."
tags:
- NLP
- Deep Learning
- TensorFlow
- LSTM
- CNN
cover: "/images/projects/sms-spam-detection/ensemble.png"
---

<div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 bg-white dark:bg-[#1c1e26] shadow-sm">
  <h3 class="text-xl font-bold mb-4 mt-0 text-gray-900 dark:text-white">Project Overview</h3>
  <p class="mb-0 text-gray-600 dark:text-gray-300 text-justify">
    Spam messages pose significant security risks and annoyances in mobile communication. This project addresses the challenge of accurately detecting spam by implementing advanced Natural Language Processing (NLP) techniques. By utilizing the SMS Spam Collection dataset, the project develops hybrid deep learning models that combine Convolutional Neural Networks (CNN) for local feature extraction and Long Short-Term Memory (LSTM) for capturing sequential dependencies in text. The primary goal is to provide a robust classification system that maintains accuracy despite the imbalanced nature of spam data through techniques like class weighting and text augmentation.
  </p>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">System Architecture</h2>

<div class="space-y-4 mb-12">
  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      1</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Text Tokenizer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Converts raw SMS text into numerical sequences with a 10,000-word vocabulary and OOV handling.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      2</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Embedding Layer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Transforms high-dimensional word indices into dense 64-dimensional vectors for semantic representation.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      3</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">CNN Layer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Uses 1D convolution with 64 filters to extract local spatial patterns and features from text sequences.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      4</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">LSTM/BiLSTM Layer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Processes sequential data to capture long-term dependencies, with Bidirectional support for enhanced context understanding.</p>
    </div>
  </div>

   <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      5</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Dense Output Layer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Uses a Sigmoid activation function to provide a final probability score for binary spam classification.</p>
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
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Hybrid Model Design</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Combines CNN and LSTM layers to leverage both spatial and temporal text features.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Class Weighting</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Implements balanced class weights to mitigate the impact of imbalanced "ham" versus "spam" datasets.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Text Augmentation</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Uses NLTK WordNet for synonym replacement, increasing the diversity of the training data.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Automated Tuning</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Integrates Keras Tuner with Grid Search to systematically find the optimal model hyperparameters.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Early Stopping</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Employs monitoring to prevent overfitting by halting training when validation loss stops improving.</p>
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
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Data Preparation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">SMS data is downloaded, labeled, and converted into padded numerical sequences of 120 tokens.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      2</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Model Construction</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Hybrid architectures (CNN+LSTM or BiLSTM+CNN) are built with dropout layers for regularization.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      3</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Training Process</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Models are trained using binary cross-entropy loss and Adam optimizer with class weights enabled.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      4</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Evaluation & Tuning</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Performance is assessed via confusion matrices and tuned through automated Grid Search or manual iterations.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      5</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Inference Phase</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">New messages are tokenized and processed by the trained model to predict spam probability.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl relative overflow-hidden mb-12">
  <div class="relative z-10">
    <h3 class="text-2xl font-bold mb-2 text-white m-0 border-b border-white/20 pb-4">Project Outcome</h3>
    <div class="mt-4 flex items-start">
      <i class="fas fa-check-circle mt-1 mr-4 text-white/80"></i>
      <p class="m-0 font-medium leading-relaxed text-white/90 text-justify">
        The project successfully developed a good accuracy SMS classifier, with both CNN+LSTM and BiLSTM+CNN architectures achieving strong performance on test data. Through automated hyperparameter tuning and text augmentation, the system demonstrated good precision in detecting spam while maintaining low false-positive rates for legitimate messages. The final model is capable of real-time spam detection for unseen text inputs.
      </p>
    </div>
  </div>
  <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
  <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">Screenshots</h2>

<div class="grid grid-cols-1 gap-8">
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img src="/images/projects/sms-spam-detection/ensemble.png" class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" alt="Model Ensemble Architecture" />
  </div>
</div>
