/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./src/greensock.js ***!
  \**************************/
eval("$(document).ready(function () {\n\tif (Modernizr) {\n\t\tconsole.log(\"Modernizr is active\");\n\t}\n\n\tvar tl = gsap.timeline();\n\n\tvar tween = gsap.to($(\".gs-me\"), { duration: 5, opacity: 0.5, yoyo: true });\n\ttl.add(tween);\n\n});\n\n\n\n\n//# sourceURL=webpack://html/./src/greensock.js?");
/******/ })()
;