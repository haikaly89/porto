---
title: "SecValidator API: Password Strength Analysis and Security Policy Validation"
date: 2025-02-20
summary: "A RESTful API service providing multi-layered password analysis, including entropy calculation, pattern detection, and restricted wordlist checks to enhance authentication security."
tags:
- Python
- FastAPI
- MySQL
- Security Analysis
- REST API
cover: "/images/projects/secvalidator-password-strength/check.png"
---

<div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-12 bg-white dark:bg-[#1c1e26] shadow-sm">
  <h3 class="text-xl font-bold mb-4 mt-0 text-gray-900 dark:text-white">Project Overview</h3>
  <p class="mb-0 text-gray-600 dark:text-gray-300 text-justify">
    Authentication systems are frequently targeted by brute-force and dictionary attacks due to weak user credentials. This project provides a security-focused API designed to analyze and validate password strength through multi-layered assessments. The system evaluates passwords against complexity requirements, identifies sequential patterns, and checks for restricted words stored in a database. By providing detailed feedback and safety scores, the API helps developers implement robust password policies that prevent the use of easily guessable or compromised credentials.
  </p>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">System Architecture</h2>

<div class="space-y-4 mb-12">
  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      1</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">FastAPI Backend</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">A high-performance Python framework providing asynchronous RESTful endpoints for real-time password analysis and security validation.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      2</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Pattern Analyzer</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">A detection engine that scans passwords for common weak patterns, repeated characters, and predictable numeric sequences.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      3</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">MySQL Database</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Stores a wordlist of restricted terms (e.g., common location names or simple words) used for dictionary checks.</p>
    </div>
  </div>

  <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      4</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">Policy Engine</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">A rules-based component that enforces specific security requirements like minimum length, special characters, and uppercase letters.</p>
    </div>
  </div>

   <div class="flex items-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm hover:shadow-md transition-shadow">
    <div class="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-sm mt-0">
      5</div>
    <div>
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-lg">API Gateway</h4>
      <p class="text-gray-600 dark:text-gray-400 m-0 text-sm mt-1">Manages secure paths for scanning and downloading, ensuring controlled access to the security services.</p>
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
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Multi-Criteria Strength Check</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Evaluates passwords for length, character variety, and the presence of both uppercase letters and special symbols.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Restricted Wordlist Integration</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Prevents the use of vulnerable terms by checking passwords against a customizable MySQL-stored dictionary.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Sequential Pattern Detection</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Identifies and warns users about predictable sequences, such as sequential numbers or repeated characters.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Real-Time Safety Scoring</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Generates an immediate "is_safe" boolean status and detailed feedback strings for every analyzed password.</p>
      </div>
    </div>
  </div>

  <div class="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-[#1c1e26] shadow-sm">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-5 mt-0.5">
        <i class="fas fa-check text-xs"></i></div>
      <div>
        <h4 class="font-bold text-gray-900 dark:text-white text-md m-0">Comprehensive Access Logs</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 m-0">Records every check request, including IP address, origin, and response status, for security auditing purposes.</p>
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
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Password Submission</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The client securely submits a password to the API endpoint (e.g., :8000/checkpass/check_password) for evaluation.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      2</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Complexity Validation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The policy engine verifies if the password meets basic requirements, such as length and character diversity.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      3</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Dictionary Lookup</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The system queries the MySQL database to check if the password contains restricted words like "jogjakarta".</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      4</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Pattern Scanning</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The analyzer detects weak sequences, such as "123" or repeated characters that lower entropy.</p>
    </div>
  </div>

  <div class="relative">
    <div class="absolute -left-[53px] top-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-[#1c1e26] z-10">
      5</div>
    <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-10">
      <h4 class="font-bold text-gray-900 dark:text-white m-0 text-md">Result Generation</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">The API returns a JSON response containing the safety status and specific issues to remediate.</p>
    </div>
  </div>
</div>

<div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl relative overflow-hidden mb-12">
  <div class="relative z-10">
    <h3 class="text-2xl font-bold mb-2 text-white m-0 border-b border-white/20 pb-4">Project Outcome</h3>
    <div class="mt-4 flex items-start">
      <i class="fas fa-check-circle mt-1 mr-4 text-white/80"></i>
      <p class="m-0 font-medium leading-relaxed text-white/90 text-justify">
        The SecValidator API successfully automates password validation by providing robust checks against common security vulnerabilities. It accurately identifies weak passwords, such as "jogjakarta123," by citing specific issues like sequential numbers and restricted word use. This tool empowers developers to enforce secure authentication standards, significantly reducing the risk of unauthorized access through credential-based attacks.
      </p>
    </div>
  </div>
  <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
  <div class="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-black/10 rounded-full blur-xl"></div>
</div>

<h2 class="text-2xl font-bold mb-8 mt-12 text-gray-900 dark:text-white">Screenshots</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img src="/images/projects/secvalidator-password-strength/check.png" class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" alt="Analysis Result" />
  </div>
  <div class="h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 group">
    <img 
      src="/images/projects/secvalidator-password-strength/counter.png" 
      class="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300" 
      alt="Access Counter" 
    />
  </div>
</div>
