Assignment "Scripting"
Overview
Your task is to enhance the HTML and CSS from Assignment 1 by incorporating JavaScript and jQuery to transform static content into dynamic interactions within your product table.

Objectives
Sortable Tables: Make the product and any other tables from Assignment 1 sortable on all columns by clicking the headers. Columns that do not require sorting can be exempted. For meaningful sorting, alphabetical sorting on columns like amount and date will suffice. You may use jQuery or any other sorting scripts found online. Remember to cite any external sources used.
Reset Button: Integrate a reset button that uses AJAX to send an HTTP GET request to reset the database to its original state containing just the four example products. The reset should be reflected in the database associated with your API key from Assignment 1. Use the endpoint https://wt.ops.labs.vu.nl/api22/????????/reset (replace the question marks with your 8-character API). Ensure that the HTML table in the browser is updated without reloading the page.
Dynamic Table Content: Remove all existing <tr> rows containing products in your HTML table to start with an empty table. Dynamically create and insert table content using JavaScript to fetch data from your web server. Send an AJAX GET request to https://wt.ops.labs.vu.nl/api22/???????? and populate the table with JSON data upon successful data retrieval. Consider event triggers for refreshing the table such as page load or completion of tasks.
Single Page Form Submit: Revamp the form submission process from Assignment 1 to prevent page reloads or navigation. Handle form submissions using AJAX to post JSON data directly and update the HTML table dynamically. Discuss the implementation approach with your lab partner before starting.
Development Guidelines
Maintain a strict separation of concerns: keep all JavaScript code in a separate .js file and avoid using HTML event-related attributes like onload and onclick.
Use jQuery for AJAX calls and DOM manipulations as per the instructions in Chapter 8 of the zyBook, avoiding direct usage of XMLHttpRequest or fetch API.
Ensure your page behaves as a Single Page Application (SPA), meaning user interactions do not cause page reloads, open pop-ups, new windows, or tabs.
Requirements
Use jQuery for sortable tables and other functionalities as specified.
Cite any external code or libraries used.
Your submission should demonstrate your ability to use jQuery as discussed in your course materials.
