// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { HelmetProvider } from "react-helmet-async";

// import { HomePage } from "./components/HomePage";
// import { PricingPage } from "./components/PricingPage";
// import TermsPage from "./components/TermsPage";
// import PolicyPage from "./components/PolicyPage";
// import SafeDating from "./components/SafeDating";
// import Contact from "./components/Contact";

// // Global ScrollToTop component
// function ScrollToTop() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       // Scroll smoothly to section if URL contains hash
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Scroll smoothly to top on normal route change
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [pathname, hash]);

//   return null;
// }

// export default function App() {
//   return (
//      <HelmetProvider>

//         <Router basename="/">
//           {/* Global scroll-to-top handler */}
//           <ScrollToTop />

//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/pricing" element={<PricingPage />} />
//             <Route path="/terms" element={<TermsPage />} />
//             <Route path="/policy" element={<PolicyPage />} />
//             <Route path="/safedatingpolicy" element={<SafeDating />} />
//             <Route path="/contact" element={<Contact />} />

//           </Routes>
//         </Router>
//      </HelmetProvider>
//   );
// }

  import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import { Helmet, HelmetProvider } from "react-helmet-async";
  import { getReferrerSource } from "./utils/referrerSource";

  import { HomePage } from "./components/HomePage";
  import TermsPage from "./components/TermsPage";
  import PolicyPage from "./components/PolicyPage";
  import SafeDating from "./components/SafeDating";
  import Contact from "./components/Contact";
  import RegionBlockedPage from "./components/RegionBlockedPage";
  import CookieConsentBanner from "./components/CookieConsentBanner";

  // Scroll handler
  function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [pathname, hash]);

    return null;
  }

  function RegionGate() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      let cancelled = false;

      const checkCountry = async () => {
        try {
          const res = await fetch("https://api.country.is", { cache: "no-store" });
          const data = await res.json();
          const country = (data?.country || "").toUpperCase();
          if (!cancelled && country === "AE" && location.pathname !== "/blocked") {
            navigate(`/blocked?c=${country}`, { replace: true });
          }
        } catch (e) {
          // silent fail — do not block on errors
        }
      };

      checkCountry();
      return () => {
        cancelled = true;
      };
    }, [location.pathname, navigate]);

    return null;
  }

  export default function App() {
    const referrerSourceKey = "referrer_source";
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem(referrerSourceKey)
    ) {
      const val = getReferrerSource();
      console.log("Captured referrer source:", val); // TEMP
      sessionStorage.setItem(referrerSourceKey, val);
    }

    const [loading, setLoading] = useState(true);
    const [loaderFading, setLoaderFading] = useState(false);

    useEffect(() => {
      // Responsive initial splash: smooth fade out after 300ms, unmount after 500ms
      const fadeTimer = setTimeout(() => {
        setLoaderFading(true);
      }, 300);

      const unmountTimer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }, []);

    return (
      <HelmetProvider>
        {loading && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#ffffff",
              zIndex: 999999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              opacity: loaderFading ? 0 : 1,
              transition: "opacity 0.2s ease-out",
              pointerEvents: loaderFading ? "none" : "auto",
            }}
            aria-busy="true"
            aria-live="polite"
          >
            {/* Elegant Brand Spinner */}
            <div style={{ position: "relative", width: "44px", height: "44px" }}>
              <svg
                style={{
                  animation: "iyLoaderSpin 0.8s linear infinite",
                  width: "44px",
                  height: "44px",
                }}
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#F4E6F3"
                  strokeWidth="4"
                />
                <path
                  d="M24 4C12.9543 4 4 12.9543 4 24"
                  stroke="#820080"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                color: "#820080",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.3px",
              }}
            >
              Loading...
            </span>
            <style>{`
              @keyframes iyLoaderSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
        <Router basename="/">
          <ScrollToTop />
          <RegionGate />

          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/pricing" element={<PricingPage />} /> */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/safedatingpolicy" element={<SafeDating />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blocked" element={<RegionBlockedPage />} />
          </Routes>
          {/* Cookiebot CMP is now loaded via index.html */}
          {/* <CookieConsentBanner /> */}
        </Router>
      </HelmetProvider>
    );
  }
