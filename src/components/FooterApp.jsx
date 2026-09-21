import { Link, useLocation, useNavigate } from "react-router-dom"
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";
import footerHeartIcon from "figma:asset/825ba557c87de8f2b4335468874e5eb17f98f401.png";
import instagramIcon from "figma:asset/f7eaad85d15b011eed12057556a4b1ed5ee82bab.png";
import tiktokIcon from "figma:asset/e2588539a1e2311495c764cb38440d49056e7b2f.png";
import { Link as ScrollLink } from "react-scroll";

const FooterApp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home page and pass target id
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer
      className="bg-white footer"
      style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container py-12 px-6 footer-main">
        <div className="flex flex-col lg:flex-row justify-center footer-inner-main">
          {/* Left Content - Logo and Description */}
          <div className="w-full lg:w-2/12 footer-top">
            <img src={logoImage} alt="IntroYou" className="h-8 mb-4 cursor-pointer" onClick={() => navigate("/")} />
            <p className="text-black mb-6 mt-2">
              No Searching. No Swiping.  
              <br />
              Get Real, Compatible Introductions.

            </p>
          </div>

          {/* Menu Sections with Borders */}
          <div
            className="w-full lg:w-5/12 footer-menu"
            style={{
              borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
              borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              paddingLeft: "74px",
              paddingRight: "74px",
            }}
          >
            <h4 className="font-medium mb-4 text-[#820080] playfair-display mb-[38px] text-[22px] mobile-heading hidden">
              Menu
            </h4>
            <div className="grid grid-cols-2 gap-8">
              {/* Left Menu Column */}
              <div>
                <h4 className="font-medium mb-4 text-[#820080] playfair-display mb-[38px] text-[22px] desktop-heading hidden">
                  Menu
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="mb-5">
                    {/* <a
                                  href="#"
                                  className="hover:text-black transition-colors"
                                >
                                  Home Page
                                </a> */}
                    <Link
                      to="/"
                      className="hover:text-black transition-colors text-0E0E0E"

                    >
                      Home Page
                    </Link>
                  </li>
                  <li className="mb-5">
                    <span
                      onClick={() => handleScrollTo("howItWorks")}
                      className="hover:text-black transition-colors cursor-pointer text-0E0E0E"
                    >
                      How It Works
                    </span>
                  </li>
                  <li className="mb-5">
                    {/* <a
                                  href="#"
                                  className="hover:text-black transition-colors"
                                >
                                  Why IntroYou
                                </a> */}
                    <span
                      onClick={() => handleScrollTo("whyIntroYou")}
                      className="hover:text-black transition-colors cursor-pointer text-0E0E0E"
                    >
                      Why IntroYou
                    </span>
                  </li>

                  <li className="mb-5">

                    <Link
                      to="/safedatingpolicy"
                      className="hover:text-black transition-colors text-0E0E0E"
                    >
                      Safe Dating Policy
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Right Menu Column */}
              <div>
                <h4 className="font-medium mb-4 text-transparent playfair-display mb-[38px] text-[22px] desktop-heading hidden">
                  Menu
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="mb-5">
                    {/* <a
                                  href="#"
                                  className="hover:text-black transition-colors"
                                >
                                  FAQs
                                </a> */}

                    <span
                      onClick={() => handleScrollTo("faq")}
                      className="hover:text-black transition-colors cursor-pointer text-0E0E0E"
                    >
                      FAQs
                    </span>

                  </li>
                  <li className="mb-5">
                    {/* <a
                                  href="#"
                                  className="hover:text-black transition-colors"
                                >
                                  Contact Us
                                </a> */}
                    <Link
                      to="/contact"
                      className="hover:text-black transition-colors text-0E0E0E"

                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-5">

                    <Link
                      to="/terms"
                      className="hover:text-black transition-colors text-0E0E0E"

                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-5">

                    <Link
                      to="/policy"
                      className="hover:text-black transition-colors text-0E0E0E"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          {/* Right Content - Know Someone Section and Social Media */}
          <div className="w-full max-w-[407px] md:ml-[80px] footer-bottom">
            {/* Know Someone Section */}
            <div
              className="p-6 mb-6 inline-block w-full f-block-main"
              style={{
                background: "#F7F7F7",
                borderRadius: "167.763px",
              }}
            >
              <div className="flex items-start justify-center gap-3">
                <div className="text-center">
                  <h4 className="font-medium text-black letter-04">
                    Know someone tired of dating apps?
                  </h4>
                  <p className="text-gray-600 text-sm mb-2 letter-04">
                    Help them meet someone real
                  </p>
                  {/* <p className="text-[#820080] text-sm font-medium flex justify-center gap-1 footer-share letter-04">
                    Share <span className="font-bold">IntroYou</span> with a
                    friend{" "}
                    <img
                      src={footerHeartIcon}
                      alt="Heart"
                      className="w-4 h-4 flex-shrink-0 h-icon"
                    />
                  </p> */}
<a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // prevent page reload
    if (navigator.share) {
      navigator
        .share({
          title: "IntroYou",
          text: "Check out IntroYou — a real connection beyond dating apps!",
          url: "https://intro-you.com", // ✅ replace with your live site URL
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  }}
  className="text-[#820080] text-sm font-medium flex justify-center gap-1 footer-share letter-04 cursor-pointer hover:opacity-80 transition-opacity"
>
  Share <span className="font-bold">IntroYou</span> with a friend{" "}
  <img
    src={footerHeartIcon}
    alt="Heart"
    className="w-4 h-4 flex-shrink-0 h-icon"
  />
</a>

                </div>
              </div>
            </div>

            {/* Social Media Icons - Separate and Centered */}
            <div className="flex items-center justify-center gap-4 footer-social">
              <a
                href="https://www.instagram.com/letsintroyou/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-5"
                />
                <span className="text-sm text-gray-600">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@letsintroyou?_r=1&_t=ZN-91vvRHIe6Ss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img src={tiktokIcon} alt="TikTok" className="h-5" />
                <span className="text-sm text-gray-600">Tik Tok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full Width */}
      <div
        className="mt-12 py-[12px] px-2 text-center footer-copy"
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          backgroundColor: "#F7F7F7",
        }}
      >
        <div className="text-center gap-2">
         <p className="text-sm font-medium">
  &copy; {new Date().getFullYear()} IntroYou. All rights reserved.
</p>
          <p className="text-sm block bottom-line-copy pt-1">Triple AMT Group Ltd, a company registered in England and Wales, with its
registered office at 20-22 Wenlock Road, London, England, N1 7GU, acts on
behalf of Intro International Group L.L.C FZ.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterApp