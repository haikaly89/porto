---
title: "SecValidator API: Automated HTTP Security Header Compliance Analyzer"
date: 2025-02-20
summary: "A RESTful API built with FastAPI that scans URLs to validate critical HTTP security headers, providing compliance reports and remediation guidance."
tags:
- FastAPI
- Python
- Security Analysis
- HTTP Headers
- REST API
cover: "/images/projects/secvalidator-api/log.png"
---

<div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 bg-white dark:bg-[#1c1e26] shadow-sm">
  <h3 class="text-xl font-bold mb-4 mt-0 text-gray-900 dark:text-white">Project Overview</h3>
  <p class="mb-0 text-gray-600 dark:text-gray-300 text-justify">
    Web applications are often vulnerable to attacks like Clickjacking and XSS due to missing or misconfigured HTTP security headers. SecValidator API is a specialized security tool designed to address this by automating the analysis and validation of headers on any web application. The API performs comprehensive scans of target URLs to evaluate the presence of critical headers—such as CSP, X-Frame-Options, and HSTS—against OWASP guidelines. It provides developers with detailed compliance reports and actionable remediation recommendations to strengthen their application's defensive posture.
  </p>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">System Architecture</h2>

<div class="space-y-4 mb-12">
  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      1</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">FastAPI Backend</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">High-performance Python framework that manages RESTful API requests, providing automatic endpoint validation and documentation.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      2</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Header Parser Module</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">A custom component responsible for securely fetching and extracting HTTP response headers from provided target URLs.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      3</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Security Rules Engine</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">A configurable engine that evaluates extracted headers against current industry best practices and security compliance standards.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      4</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Report Generator</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Compiles evaluation data into structured JSON reports containing security findings, compliance scores, and remediation steps.</p>
    </div>
  </div>

   <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      5</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Docker Containerization</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Ensures consistent deployment across various environments through a fully containerized, scalable operational setup.</p>
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
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Comprehensive Header Analysis</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Validates critical headers including Content-Security-Policy (CSP), X-Frame-Options, HSTS, and Referrer-Policy.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Security Score Calculation</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Computes an overall security grade based on header presence, configuration quality, and standard compliance.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Remediation Guidance</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Offers specific, actionable advice and configuration examples for every missing or misconfigured security header detected.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Batch URL Scanning</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Allows users to submit multiple URLs in a single API request for efficient bulk security audits.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Auto-Generated Documentation</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Features built-in OpenAPI/Swagger specifications, enabling easy integration for developers and third-party security tools.</p>
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
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Request Submission</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The client sends one or more target URLs to the dedicated SecValidator API endpoint.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      2</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Header Extraction</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The API initiates a secure request to the target URL to fetch its HTTP response headers.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      3</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Compliance Evaluation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The Rules Engine analyzes each header to check for secure configurations and identifies any missing elements.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      4</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Report Generation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">Findings are compiled into a comprehensive JSON response including security scores and suggested configuration fixes.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      5</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Result Delivery</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The API returns the final structured security assessment report directly to the requesting client.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl relative overflow-hidden mb-12">
  <div class="relative z-10">
    <h3 class="text-2xl font-bold mb-2 text-white m-0 border-b border-white/20 pb-4">Project Outcome</h3>
    <div class="mt-4 flex items-start">
      <i class="fas fa-check-circle mt-1 mr-4 text-white/80"></i>
      <p class="m-0 font-medium leading-relaxed text-white/90 text-justify">
        SecValidator API successfully automates the complex task of auditing web security headers, transforming manual checks into a scalable automated process. It provides developers with immediate, clear insights into their site's security posture and provides the exact steps needed to remediate vulnerabilities. This results in faster security compliance cycles and more resilient web applications.
      </p>
    </div>
  </div>
  <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
  <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">Screenshots</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img src="/images/projects/secvalidator-api/config.png" class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" alt="Configuration" />
  </div>
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img 
      src="/images/projects/secvalidator-api/log.png" 
      class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" 
      alt="Log Output" 
    />
  </div>
</div>
