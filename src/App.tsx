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

    useEffect(() => {
      let done = false;
      const finish = () => {
        if (!done) {
          done = true;
          setLoading(false);
        }
      };
      const fontsReady = (document as any).fonts?.ready ?? Promise.resolve();
      const windowLoaded = new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", () => resolve(), { once: true });
        }
      });
      Promise.race([fontsReady, windowLoaded]).then(finish).catch(finish);
      const timeout = setTimeout(finish, 3000);
      return () => {
        done = true;
        clearTimeout(timeout);
      };
    }, []);

    return (
      <HelmetProvider>
        {/* GLOBAL META TAGS — applied on ALL pages */}
        {/* <Helmet>
          <title>IntroYou: Get Real Introductions | Dating Made Simple</title>

          <meta
            name="description"
            content="No swiping, no games. We provide private, hand-picked introductions focused on true compatibility. Experience the intentional way to date."
          />

          <link rel="icon" type="image/png" href="/images/favicon-96x96.png" />
          <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://intro-you.com/" />
          <meta property="og:title" content="IntroYou: Get Real Introductions | Dating Made Simple" />
          <meta
            property="og:description"
            content="No swiping, no games. We provide private, hand-picked introductions focused on true compatibility."
          />
          <meta property="og:image" content="/images/logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="IntroYou: Get Real Introductions | Dating Made Simple" />
          <meta property="twitter:description" content="No swiping, no games." />
          <meta property="twitter:image" content="/images/logo.png" />
        </Helmet> */}

        {loading && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            aria-busy="true"
            aria-live="polite"
          >
            <div className="text-[#820080] text-lg">Loading...</div>
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
        </Router>
      </HelmetProvider>
    );
  }
