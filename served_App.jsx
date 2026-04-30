import { createHotContext as __vite__createHotContext } from "/tejas-portfolio-dist/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/tejas-portfolio-dist/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=ed49c6f3"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/tejas-portfolio-dist/node_modules/.vite/deps/react.js?v=ed49c6f3"; const useState = __vite__cjsImport1_react["useState"];
import IntroAnimation from "/tejas-portfolio-dist/src/components/IntroAnimation.jsx";
import Navbar from "/tejas-portfolio-dist/src/components/Navbar.jsx";
import CustomCursor from "/tejas-portfolio-dist/src/components/CustomCursor.jsx";
import Home from "/tejas-portfolio-dist/src/sections/Home.jsx";
import About from "/tejas-portfolio-dist/src/sections/About.jsx";
import Skills from "/tejas-portfolio-dist/src/sections/Skills.jsx";
import Projects from "/tejas-portfolio-dist/src/sections/Projects.jsx";
import Articles from "/tejas-portfolio-dist/src/sections/Articles.jsx";
import Education from "/tejas-portfolio-dist/src/sections/Education.jsx";
import Experience from "/tejas-portfolio-dist/src/sections/Experience.jsx";
import Certification from "/tejas-portfolio-dist/src/sections/Certification.jsx";
import Contact from "/tejas-portfolio-dist/src/sections/Contact.jsx";
import Footer from "/tejas-portfolio-dist/src/sections/Footer.jsx";
import BackToTop from "/tejas-portfolio-dist/src/components/BackToTop.jsx";
export default function App() {
  _s();
  const [introDone, setIntroDone] = useState(false);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative animated-gradient text-white tech-grid-bg", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/40 pointer-events-none" }, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CustomCursor, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BackToTop, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    !introDone && /* @__PURE__ */ jsxDEV(IntroAnimation, { onFinish: () => setIntroDone(true) }, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 28,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ jsxDEV(Home, { introDone }, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Skills, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Experience, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Education, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Projects, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Articles, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Certification, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
_s(App, "AfbkRZeUbK9GOBB/oqG4KZAhLpM=");
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/tejas-portfolio-dist/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/tejasssuthrave/Downloads/tejas-s-suthrave-portfolio/src/App.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJNOztBQXJCTixTQUFTQSxnQkFBZ0I7QUFDekIsT0FBT0Msb0JBQW9CO0FBQzNCLE9BQU9DLFlBQVk7QUFDbkIsT0FBT0Msa0JBQWtCO0FBQ3pCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLGVBQWU7QUFFdEIsd0JBQXdCQyxNQUFNO0FBQUFDLEtBQUE7QUFDNUIsUUFBTSxDQUFDQyxXQUFXQyxZQUFZLElBQUlsQixTQUFTLEtBQUs7QUFFaEQsU0FDRSx1QkFBQyxTQUFJLFdBQVUsc0RBQ2I7QUFBQSwyQkFBQyxTQUFJLFdBQVUsc0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrRTtBQUFBLElBQ2xFLHVCQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYTtBQUFBLElBQ2IsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUNQLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVO0FBQUEsSUFHVCxDQUFDaUIsYUFBYSx1QkFBQyxrQkFBZSxVQUFVLE1BQU1DLGFBQWEsSUFBSSxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW1EO0FBQUEsSUFHbEUsdUJBQUMsUUFBSyxhQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkI7QUFBQSxJQUUzQix1QkFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTTtBQUFBLElBQ04sdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUNQLHVCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVztBQUFBLElBQ1gsdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVU7QUFBQSxJQUNWLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFTO0FBQUEsSUFDVCx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUztBQUFBLElBQ1QsdUJBQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFjO0FBQUEsSUFDZCx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUTtBQUFBLElBQ1IsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXBCVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUJBO0FBRUo7QUFBQ0YsR0EzQnVCRCxLQUFHO0FBQUEsS0FBSEE7QUFBRyxJQUFBSTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkludHJvQW5pbWF0aW9uIiwiTmF2YmFyIiwiQ3VzdG9tQ3Vyc29yIiwiSG9tZSIsIkFib3V0IiwiU2tpbGxzIiwiUHJvamVjdHMiLCJBcnRpY2xlcyIsIkVkdWNhdGlvbiIsIkV4cGVyaWVuY2UiLCJDZXJ0aWZpY2F0aW9uIiwiQ29udGFjdCIsIkZvb3RlciIsIkJhY2tUb1RvcCIsIkFwcCIsIl9zIiwiaW50cm9Eb25lIiwic2V0SW50cm9Eb25lIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW50cm9BbmltYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9JbnRyb0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBDdXN0b21DdXJzb3IgZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21DdXJzb3JcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vc2VjdGlvbnMvSG9tZVwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vc2VjdGlvbnMvQWJvdXRcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi9zZWN0aW9ucy9Ta2lsbHNcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3NlY3Rpb25zL1Byb2plY3RzXCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi9zZWN0aW9ucy9BcnRpY2xlc1wiO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gXCIuL3NlY3Rpb25zL0VkdWNhdGlvblwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi9zZWN0aW9ucy9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCBDZXJ0aWZpY2F0aW9uIGZyb20gXCIuL3NlY3Rpb25zL0NlcnRpZmljYXRpb25cIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vc2VjdGlvbnMvQ29udGFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL3NlY3Rpb25zL0Zvb3RlclwiO1xyXG5pbXBvcnQgQmFja1RvVG9wIGZyb20gXCIuL2NvbXBvbmVudHMvQmFja1RvVG9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW2ludHJvRG9uZSwgc2V0SW50cm9Eb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYW5pbWF0ZWQtZ3JhZGllbnQgdGV4dC13aGl0ZSB0ZWNoLWdyaWQtYmdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzQwIHBvaW50ZXItZXZlbnRzLW5vbmVcIj48L2Rpdj5cclxuICAgICAgPEN1c3RvbUN1cnNvciAvPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxCYWNrVG9Ub3AgLz5cclxuXHJcbiAgICAgIHsvKiBJbnRybyBhbHdheXMgb24gdG9wIHVudGlsIGl0IGZpbmlzaGVzICovfVxyXG4gICAgICB7IWludHJvRG9uZSAmJiA8SW50cm9BbmltYXRpb24gb25GaW5pc2g9eygpID0+IHNldEludHJvRG9uZSh0cnVlKX0gLz59XHJcblxyXG4gICAgICB7LyogSG9tZXBhZ2UgYWx3YXlzIHByZXNlbnQgKG1hc2tlZCByZXZlYWwpICovfVxyXG4gICAgICA8SG9tZSBpbnRyb0RvbmU9e2ludHJvRG9uZX0gLz5cclxuXHJcbiAgICAgIDxBYm91dCAvPlxyXG4gICAgICA8U2tpbGxzIC8+XHJcbiAgICAgIDxFeHBlcmllbmNlIC8+XHJcbiAgICAgIDxFZHVjYXRpb24gLz5cclxuICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgIDxBcnRpY2xlcyAvPlxyXG4gICAgICA8Q2VydGlmaWNhdGlvbiAvPlxyXG4gICAgICA8Q29udGFjdCAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvdGVqYXNzc3V0aHJhdmUvRG93bmxvYWRzL3RlamFzLXMtc3V0aHJhdmUtcG9ydGZvbGlvL3NyYy9BcHAuanN4In0=
