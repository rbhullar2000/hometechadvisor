/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/articles/route";
exports.ids = ["app/api/articles/route"];
exports.modules = {

/***/ "(rsc)/./app/api/articles/route.ts":
/*!***********************************!*\
  !*** ./app/api/articles/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"(rsc)/./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function GET() {\n    const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'content', 'articles');\n    const filenames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory).filter((f)=>f.endsWith('.md'));\n    const articles = filenames.map((filename)=>{\n        const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, filename), 'utf8');\n        const { data } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent);\n        return {\n            slug: filename.replace('.md', ''),\n            title: data.title,\n            date: data.date,\n            description: data.excerpt || '',\n            coverImage: data.coverImage || ''\n        };\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(articles);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FydGljbGVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFDUztBQUNVO0FBRXBDLGVBQWVJO0lBQ3BCLE1BQU1DLGlCQUFpQkosZ0RBQVMsQ0FBQ00sUUFBUUMsR0FBRyxJQUFJLFdBQVc7SUFDM0QsTUFBTUMsWUFBWVQscURBQWMsQ0FBQ0ssZ0JBQWdCTSxNQUFNLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLFFBQVEsQ0FBQztJQUV4RSxNQUFNQyxXQUFXTCxVQUFVTSxHQUFHLENBQUMsQ0FBQ0M7UUFDOUIsTUFBTUMsY0FBY2pCLHNEQUFlLENBQUNDLGdEQUFTLENBQUNJLGdCQUFnQlcsV0FBVztRQUN6RSxNQUFNLEVBQUVHLElBQUksRUFBRSxHQUFHakIsa0RBQU1BLENBQUNlO1FBQ3hCLE9BQU87WUFDTEcsTUFBTUosU0FBU0ssT0FBTyxDQUFDLE9BQU87WUFDOUJDLE9BQU9ILEtBQUtHLEtBQUs7WUFDakJDLE1BQU1KLEtBQUtJLElBQUk7WUFDZkMsYUFBYUwsS0FBS00sT0FBTyxJQUFJO1lBQzdCQyxZQUFZUCxLQUFLTyxVQUFVLElBQUk7UUFDakM7SUFDRjtJQUVBLE9BQU92QixxREFBWUEsQ0FBQ3dCLElBQUksQ0FBQ2I7QUFDM0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JiaHVsbGFyL0RvY3VtZW50cy9Ib21lVGVjaEFkdmlzb3IvV2Vic2l0ZS9ob21ldGVjaGFkdmlzb3IvYXBwL2FwaS9hcnRpY2xlcy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2NvbnRlbnQnLCAnYXJ0aWNsZXMnKTtcbiAgY29uc3QgZmlsZW5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpLmZpbHRlcihmID0+IGYuZW5kc1dpdGgoJy5tZCcpKTtcblxuICBjb25zdCBhcnRpY2xlcyA9IGZpbGVuYW1lcy5tYXAoKGZpbGVuYW1lKSA9PiB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKHBvc3RzRGlyZWN0b3J5LCBmaWxlbmFtZSksICd1dGY4Jyk7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKCcubWQnLCAnJyksXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmV4Y2VycHQgfHwgJycsXG4gICAgICBjb3ZlckltYWdlOiBkYXRhLmNvdmVySW1hZ2UgfHwgJycsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFydGljbGVzKTtcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVuYW1lcyIsInJlYWRkaXJTeW5jIiwiZmlsdGVyIiwiZiIsImVuZHNXaXRoIiwiYXJ0aWNsZXMiLCJtYXAiLCJmaWxlbmFtZSIsImZpbGVDb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInNsdWciLCJyZXBsYWNlIiwidGl0bGUiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImpzb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/articles/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_robbhullar_Documents_HomeTechAdvisor_Website_hometechadvisor_app_api_articles_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/articles/route.ts */ \"(rsc)/./app/api/articles/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/articles/route\",\n        pathname: \"/api/articles\",\n        filename: \"route\",\n        bundlePath: \"app/api/articles/route\"\n    },\n    resolvedPagePath: \"/Users/robbhullar/Documents/HomeTechAdvisor/Website/hometechadvisor/app/api/articles/route.ts\",\n    nextConfigOutput,\n    userland: _Users_robbhullar_Documents_HomeTechAdvisor_Website_hometechadvisor_app_api_articles_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhcnRpY2xlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXJ0aWNsZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhcnRpY2xlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJvYmJodWxsYXIlMkZEb2N1bWVudHMlMkZIb21lVGVjaEFkdmlzb3IlMkZXZWJzaXRlJTJGaG9tZXRlY2hhZHZpc29yJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnJvYmJodWxsYXIlMkZEb2N1bWVudHMlMkZIb21lVGVjaEFkdmlzb3IlMkZXZWJzaXRlJTJGaG9tZXRlY2hhZHZpc29yJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM2QztBQUMxSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JvYmJodWxsYXIvRG9jdW1lbnRzL0hvbWVUZWNoQWR2aXNvci9XZWJzaXRlL2hvbWV0ZWNoYWR2aXNvci9hcHAvYXBpL2FydGljbGVzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hcnRpY2xlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FydGljbGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcnRpY2xlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yb2JiaHVsbGFyL0RvY3VtZW50cy9Ib21lVGVjaEFkdmlzb3IvV2Vic2l0ZS9ob21ldGVjaGFkdmlzb3IvYXBwL2FwaS9hcnRpY2xlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/esprima","vendor-chunks/gray-matter","vendor-chunks/kind-of","vendor-chunks/section-matter","vendor-chunks/extend-shallow","vendor-chunks/is-extendable","vendor-chunks/strip-bom-string"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Farticles%2Froute&page=%2Fapi%2Farticles%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Farticles%2Froute.ts&appDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frobbhullar%2FDocuments%2FHomeTechAdvisor%2FWebsite%2Fhometechadvisor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();