import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {  ChevronDown, ChevronUp } from "lucide-react";
// import heroBackground from "../assets/banner-video.mov";
import heroBackground from "../assets/banner-video-mp4.mp4";
import posterImg from "../assets/poster-img.png";
import bbcLogo from "figma:asset/1210440e0f5e84f8df640df0d164921393ab8ca5.png";
import heartButtonIcon from "figma:asset/3b78bb2c9df6774abaf1349c5427ba87c276ded9.png";
import circleShape from "figma:asset/aad7ff2e480d658db8abe3b73463af325f0a21df.png";
import arrowShape from "figma:asset/fce5844d210ee2d3265bd497d9b2c5555c866698.png";
import heartDifferentIcon from "figma:asset/b5c905144a82df1d07d3c81634872a6e0759c964.png";
import accessibilityIcon from "figma:asset/bc6e9ad348132897f4f27a875b5d5e0690eeb05e.png";
import checkmarkIcon from "figma:asset/bbfa7dab0f3da1d7dc12afef0fcc570a0c0938ad.png";
import crownIcon from "figma:asset/ee5659954383da0b2c7868fe55fbafef4aab0e8c.png";
import foundersPhoto from "../assets/4f12ee2c221edd065a303114b625d92e4910a7b8.png";
import storyBehindBackground from "figma:asset/bfd7a40e72d57066b21cd625646ed2f44048a20a.png";
import backImage from "../assets/back-img.png";
import backmobileImage from "../assets/mobile-image.png";
import signatureImage from "figma:asset/13eeee068b52e50b597138d02c16d2f4dec876c9.png";
import heartNewIcon from "figma:asset/9a01c0ec700bff6c443470f8ae3258406f8e9cb9.png";
import howWorksHeartIcon from "figma:asset/061a76defe5a622732879b36b3de1f4032a6ad5b.png";
import howWorksMessageIcon from "figma:asset/9b3a6b4c7f03aa957ec22f59df76c4d020d92a37.png";
import itvLogo from "figma:asset/42ee49936b73610672e2b436b1ba768efc10af46.png";
import yahooLogo from "figma:asset/479c0fe2738f5e7d0b30db9870c578ff1475e1e1.png";
import helloLogo from "figma:asset/06fa05f9678fd2ac3dabb2e027ef576a5189deb3.png";
import okLogo from "figma:asset/9de38ac436bf7565f58efb43962b8412693dbee6.png";
import eveningStandardLogo from "figma:asset/ec81fdd89f366266d987dd261b9be975f13b8b25.png";
import metroLogo from "figma:asset/aef650f951484abfb3ef17f88802e8cc52c4149f.png";
import newHeartIcon from "figma:asset/6a1b654a7eeca9a8d7baeba8bd31a76f96a7d0b2.png";
import coupleImage from "figma:asset/3de54880b8a6b5ee1f5705a511ff2be04da832a8.png";
import yahooLogoExtra from "figma:asset/290973993221e5de301713490e3618ef76960344.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

interface HomePageProps { }

export function HomePage({ }: HomePageProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userGender, setUserGender] = useState("Woman");
  const [lookingFor, setLookingFor] = useState("Man");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const location = useLocation();
  const [refCode,setRefCode] = useState<string | null>(null);
  const referrerSource = sessionStorage.getItem("referrer_source") || "direct";
  // const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [videoReady, setVideoReady] = useState(false);
//  const videoRef = useRef<HTMLVideoElement>(null);
const [started, setStarted] = useState(false);

const videoRef = useRef<HTMLVideoElement | null>(null);
const [videoStarted, setVideoStarted] = useState(false);

const getProfileUrl = () => {
  const params = new URLSearchParams({ source: referrerSource });

  if (refCode) {
    params.set("ref", refCode);
  }

  return `https://members.intro-you.com/profile?${params.toString()}`;
};

useEffect(() => {
  const startVideo = () => {
    if (started) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    video.play().then(() => {
      setStarted(true);
      video.classList.add("show-video");
    });
  };

  document.addEventListener("touchstart", startVideo, { once: true });
  document.addEventListener("click", startVideo, { once: true });

  return () => {
    document.removeEventListener("touchstart", startVideo);
    document.removeEventListener("click", startVideo);
  };
}, [started]);

  const faqs = [
    {
      question: "What makes IntroYou different from dating apps?",
      answer:
        "Dating apps throw you into a sea of options, IntroYou is a premium introduction service where every match is thoughtfully handpicked by our team. No algorithms, no small talk for the sake of it. Just real compatibility and intentional intros that save your time and energy.",
    },
    {
      question: "How do I know the people on here are real?",
      answer:
        "All profiles are manually verified by our team to ensure authenticity and quality.",
    },
    {
      question: "Will I see profiles before you introduce me?",
      answer:
        "You'll receive curated introductions with full profiles for your review before connecting.",
    },
    {
      question: "Will my profile be visible to everyone?",
      answer:
        "No. Your profile is 100% private. It is never public and is only shared with matches we have personally selected for you.",
    },
    {
      question: "How do I actually get matched and speak to someone?",
      answer:
        "Our team hand-picks your matches. When we find a connection, we share their profile with you on our platform, where you can decide to accept the introduction or pass.",
    },
    {
      question: "Is this just for serious relationships?",
      answer:
        "We cater to various relationship goals. Whether you are looking for a serious commitment or simply want to date with intention and see where things go, we match you based on exactly what you are looking for.",
    },
  ];

//   useEffect(() => {
//   const video = document.querySelector("video");
//   if (video) {
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {
//         video.muted = true;
//         video.play();
//       });
//     }
//   }
// }, []);

// useEffect(() => {
//   const video = document.querySelector("video");
//   if (!video) return;

//   video.muted = true;     // 👈 set first
//   video.playsInline = true;

//   const playVideo = () => {
//     video.play().catch(() => {});
//   };

//   video.addEventListener("loadeddata", playVideo);
//   playVideo();

//   return () => {
//     video.removeEventListener("loadeddata", playVideo);
//   };
// }, []);

// useEffect(() => {
//   const video = videoRef.current;
//   if (!video) return;

//   video.muted = true;
//   video.playsInline = true;

//   const playVideo = () => video.play().catch(() => {});
//   video.addEventListener("loadeddata", playVideo);
//   playVideo();

//   return () => video.removeEventListener("loadeddata", playVideo);
// }, []);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  const onPlaying = () => {
    video.classList.add("video-ready");
  };

  video.addEventListener("playing", onPlaying);

  const playAttempt = video.play();
  if (playAttempt !== undefined) {
    playAttempt.catch(() => {
      // Safari fallback — user interaction later
    });
  }

  return () => {
    video.removeEventListener("playing", onPlaying);
  };
}, []);

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const ref = params.get("ref");

  if (ref) {
    setRefCode(ref);

    // Unique key per referral code (prevents recounting in same browser)
    const storageKey = `referral_click_${ref}`;
    const alreadyCounted = localStorage.getItem(storageKey);

    if (!alreadyCounted) {

      const countReferralClick = async () => {
        try {
          const response = await fetch(
            "https://console.intro-you.com/api/count-refferal-clicks",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({ ref }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          // ✅ Save to localStorage so it won’t count again in this browser
          if (data.status === true) {
            localStorage.setItem(storageKey, "counted");
          }
        } catch (error) {
          console.error("Error counting referral click:", error);
        }
      };

      countReferralClick();
    } else {
      console.log(`Referral '${ref}' already counted in this browser`);
    }
  }
}, [location]);

  // Add this useEffect after your useState
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  // useEffect(() => {
  //   if (location.state?.scrollTo) {
  //     const scrollToElement = () => {
  //       const element = document.getElementById(location.state.scrollTo);
  //       if (element) {
  //         const yOffset = -80;
  //         const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //         window.scrollTo({ top: y, behavior: "smooth" });
  //       } else {
  //         requestAnimationFrame(scrollToElement);
  //       }
  //     };
  //     scrollToElement();
  //   }
  // }, [location.state]);

  useEffect(() => {
  if (location.state?.scrollTo) {
    const targetId = location.state.scrollTo;

    const scrollToElement = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
      requestAnimationFrame(scrollToElement);
    };

    // Start scrolling
    scrollToElement();

    // Remove state so back button doesn't scroll again
    window.history.replaceState({}, document.title);
  }
}, [location]);
useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref");
    if (ref) {
      console.log("Referral code:", ref);
      setRefCode(ref);
    }
  }, [location]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSpecificElement = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderApp refCode={refCode} />

{/* Hero/Banner Section */}
<section
  className="text-white py-20 px-6 relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
  style={{
    backgroundImage: `url('/poster-img.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  onTouchStart={() => {
    // 👈 iOS FIRST TOUCH 
    if (videoStarted) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    video.play().then(() => {
      setVideoStarted(true);
    });
  }}
>
  {/* VIDEO — hidden until user touches */}
  <video
    ref={videoRef}
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
      videoStarted ? "opacity-100" : "opacity-0"
    }`}
    src={heroBackground}
    muted
    loop
    playsInline
    preload="metadata"
  />

  <div className="absolute inset-0 bg-black/50 transition-opacity duration-700"></div>

  <div className="max-w-4xl mx-auto text-center relative z-10 banner-main">
    {/* 🔥 YOUR CONTENT — unchanged */}
    <h1 className="text-5xl md:text-[64px] mb-2 playfair-display leading-tight banner-heading font-semibold">
      Dating, Done Properly.
    </h1>

    <p className="text-xl md:text-[32px] mb-12 text-gray-200 max-w-2xl mx-auto leading-10 font-normal letter-04">
      No Searching. No Swiping. <br />
      Get Real, Handpicked Introductions.
    </p>

    {/* buttons unchanged */}
    <div className="flex flex-col items-center justify-center gap-6 mb-16 banner-btn">

            <a href={getProfileUrl()}
            
              className="px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 text-lg btn-main letter-04 font-semibold"
              style={{ backgroundColor: "#820080" }}
            >
              Let’s Find Your Match
            </a>

            <a
              //href=""
              onClick={() => scrollToSpecificElement("howItWorks")}
              className="text-white hover:text-switch-background transition-colors duration-200 text-lg underline underline-offset-4 cursor-pointer btn-link-top letter-04"
            >
              How It Works?
            </a>
          </div>
  </div>
  
</section>

      {/* Marquee Section */}
      <section className="py-8 bg-black ctm-marquee-wrapper">
        <div
          className="w-full mx-auto overflow-hidden"
          style={{ maxWidth: "1070px" }}
        >
          <div className="sub-title text-center pb-[16px]">
            <span className="text-white text-[14px] leading-[30px] font-semibold">
               Founders Press
            </span>
          </div>

          {/* Desktop Marquee - Hidden on Mobile */}
          <div className="relative overflow-hidden hidden md:block">
            <div
              className="flex items-center animate-marquee"
              style={{ gap: "27px" }}
            >
              <img
                src={bbcLogo}
                alt="BBC"
                className="h-10 object-contain flex-shrink-0"
                width="98"
                height="28"
              />
              <img
                src={itvLogo}
                alt="ITV"
                className="h-10 object-contain flex-shrink-0"
                width="74"
                height="37"
              />
              <img
                src={yahooLogo}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
                width="70"
                height="37"
              />
              <img
                src={okLogo}
                alt="OK!"
                className="h-10 object-contain flex-shrink-0"
                width="100"
                height="34"
              />
              <img
                src={helloLogo}
                alt="HELLO!"
                className="h-10 object-contain flex-shrink-0"
                width="99"
                height="33"
              />
              <img
                src={eveningStandardLogo}
                alt="Evening Standard"
                className="h-10 object-contain flex-shrink-0"
                width="70"
                height="34"
              />
              <img
                src={metroLogo}
                alt="Metro"
                className="h-10 object-contain flex-shrink-0"
              />

              {/* Duplicate for seamless loop */}
              <img
                src={bbcLogo}
                alt="BBC"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={itvLogo}
                alt="ITV"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={yahooLogo}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={yahooLogoExtra}
                alt="Yahoo"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={okLogo}
                alt="OK!"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={helloLogo}
                alt="HELLO!"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={eveningStandardLogo}
                alt="Evening Standard"
                className="h-10 object-contain flex-shrink-0"
              />
              <img
                src={metroLogo}
                alt="Metro"
                className="h-10 object-contain flex-shrink-0"
              />
            </div>
          </div>

          {/* Mobile Slider - Visible only on Mobile */}
          <div className="md:hidden px-4 mobile-slider">
            <Swiper
              modules={[FreeMode, Autoplay, Pagination]}
              spaceBetween={30}
              // slidesPerView={3}
              slidesPerView="auto"
              freeMode={true}
              loop={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              className="w-full press-logos-swiper pb-10"
            >
              <SwiperSlide>
                <img
                  src={bbcLogo}
                  alt="BBC"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={itvLogo}
                  alt="ITV"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={yahooLogo}
                  alt="Yahoo"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={okLogo}
                  alt="OK!"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={helloLogo}
                  alt="HELLO!"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={eveningStandardLogo}
                  alt="Evening Standard"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={metroLogo}
                  alt="Metro"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={yahooLogoExtra}
                  alt="Yahoo"
                  className="h-10 object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Introduce You Section */}
      <section className="py-20 px-6 bg-grey intro-wrp" id="contactUs">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-5/12 intro-left">
              <h2 className="text-[48px] mb-[35px] playfair-display leading-tight font-semibold letter-53 text-0E0E0E">
                Done with apps?
                <br />
                Try something{" "}
                <span className="relative inline-block">
                  <span>real.</span>
                  <div className="absolute flex items-center justify-center w-[110px] h-[80px] -left-[10px] -top-[6px] real-circle">
                    <img
                      src={circleShape}
                      alt=""
                      className="w-full h-full object-contain"
                      style={{ transform: "translateY(-2px)" }}
                    />
                  </div>
                  <img
                    src={arrowShape}
                    alt=""
                    className="absolute -left-[80px] top-[38px] w-[60px] h-[55px] object-contain arrow-icon"
                  />
                </span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed letter-06 text-0E0E0E">
                IntroYou makes dating simple again. No
                swiping, no public profiles, no wasted time.
                Instead, you’ll receive private introductions
                curated around compatibility and intention,
                giving you the best chance of meeting
                someone real.
              </p>
            </div>
            <div className="w-full lg:w-7/12 intro-right">
              <div
                className="bg-white p-6 lg:p-8 rounded-2xl intro-form"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EAEAEA",
                  boxShadow: "0px 32px 26px -15px rgba(41, 31, 6, 0.12)",
                  borderRadius: "16px",
                }}
              >
                <h3 className="text-lg lg:text-[26px] playfair-display font-semibold text-0E0E0E">
                  Who would you like us to introduce you to?
                </h3>
                <p className="text-707070 mb-4 lg:mb-4 text-[18px] letter-04">
                  Select your preference to begin your journey.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* I'm a dropdown */}
                    <div>
                      <label className="block text-sm text-0E0E0E mb-2 font-semibold letter-04">
                        I'm a
                      </label>
                      <div className="relative">
                        <select
                          value={userGender}
                          onChange={(e) => setUserGender(e.target.value)}
                          className="w-full text-707070 py-2 px-4 border border-gray-300 rounded-lg text-sm bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent italic"
                        >
                          <option value="Woman">Woman</option>
                          <option value="Man">Man</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Looking for a dropdown */}
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 font-semibold letter-04">
                        I’d like to be introduced to
                      </label>
                      <div className="relative">
                        <select
                          value={lookingFor}
                          onChange={(e) => setLookingFor(e.target.value)}
                          className="w-full text-707070 py-2 px-4 border border-gray-300 rounded-lg text-sm bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent italic"
                        >
                          <option value="Woman">Woman</option>
                          <option value="Man">Man</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <a
                    //href="https://introyou-beta.vercel.app/login"
                  href={getProfileUrl()}
                    //onClick={() => navigate('/pricing')}
                    className="w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-300 mt-6 flex items-center justify-center gap-2 btn-main"
                    style={{ backgroundColor: "#820080" }}
                  >
                    <span className="letter-04">Let Us Introduce You</span>
                    <img
                      src={heartButtonIcon}
                      alt="heart"
                      className="w-4 h-4 h-icon"
                    />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IntroYou is Different Section */}
      <section className="py-20 px-6 bg-white intro-different-wrp" id="whyIntroYou">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-[48px] playfair-display font-semibold letter-53 text-0E0E0E">
              Why <span style={{ color: "#820080" }}>IntroYou</span> is
              Different
            </h2>
            <p className="text-lg text-0E0E0E max-w-2xl mx-auto letter-06">
            Quality over volume. No swiping, no games. Get curated introductions focused on compatibility with your values.
            </p>
          </div>

          <div className=" mx-auto">
            <div className="flex flex-wrap justify-center -mx-[6px]">

              {/* Box 1 - Curated Introductions */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-wrp dif-inner-main">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="icon-box rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={accessibilityIcon}
                        alt="Curated Introductions"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                    Curated Introductions. No Swiping.
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed letter-04">
                    Endless swiping is a waste of time. Here, every profile is hand-selected for real compatibility based on what you’re looking for. You only see people who actually matter.
                  </p>
                </div>
              </div>

              {/* Box 2 - Discreet by Design */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="icon-box rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={heartDifferentIcon}
                        alt="Discreet by Design"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                    Discreet by Design
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                    Your profile isn’t public and can’t be searched. Introductions are private and intentional, shared
                    only when there’s genuine alignment with your preferences.
                  </p>
                </div>
              </div>

              {/* Box 3 - Designed for Real Connections */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="icon-box rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={heartNewIcon}
                        alt="Designed for Real Connections"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                    Designed for Real Connections
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                    We can't promise love at first sight, but every feature is built to give you the best chance of finding it. Meaningful introductions, genuine people, and a process designed to help something real begin.
                  </p>
                </div>
              </div>

              {/* Box 4 - Quality Over Quantity */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="icon-box rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={checkmarkIcon}
                        alt="Quality Over Quantity"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                    Quality Over Quantity
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                    No bot. No spam. No time-wasters. Every person is vetted by us, so 
you only meet like-minded singles who match your standards.
                  </p>
                </div>
              </div>

              {/* Box 5 - A Premium Community */}
              <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
                <div
                  className="p-6 text-center h-full dif-block"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #EEEEEE",
                    boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="icon-box rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFEBFF" }}
                    >
                      <img
                        src={crownIcon}
                        alt="A Premium Community"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                    A Premium Community
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                    Most apps are crowded with people looking for flings. IntroYou is different. It's a trusted space of singles who want real connections. If you're here, you're already ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 btn-wrp">
            <a href={getProfileUrl()}

              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 btn-link btn-main"
              style={{ backgroundColor: "#820080" }}
            >
              <span className="letter-04">Find your match</span>
              <img src={heartButtonIcon} alt="heart" className="w-5 h-5 h-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* The Story Behind IntroYou Section */}
      <section
        className="py-20 px-20 text-white relative overflow-hidden story-wrp"
        style={{
          background: `linear-gradient(180deg, #812F95 0%, #802F94 36.3%, #4A1B56 65.43%, #290F2F 104.64%), url(${storyBehindBackground})`,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "normal, overlay",
          clipPath: "polygon(0 88%, 0 0, 100% 0, 100% 88%, 50% 100%)",
        }}
        id="meetFounders"
      >
        {/* Full Section Overlay Image */}
        <div
          className="absolute inset-0 bg-overlay-img"
          style={{
            backgroundImage: `url(${backImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            mixBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-overlay-img bg-overlay-mobile"
          style={{
            backgroundImage: `url(${backmobileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            mixBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            zIndex: 3,
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(129, 47, 149, 0.7) 0%, rgba(128, 47, 148, 0.7) 36.3%, rgba(74, 27, 86, 0.8) 65.43%, rgba(41, 15, 47, 0.9) 104.64%)",
            zIndex: 2,
          }}
        ></div>

        <div className="mx-auto relative z-10" style={{ zIndex: 3 }}>
          <h2 className="lg:text-[48px] mb-8 playfair-display text-center font-medium letter-53">
            The Story Behind <span className="font-semibold">IntroYou</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 story-row">
            {/* Left Content - Circular Image */}
            <div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end  px-6 lg:px-12 story-inner"
            // style={{
            //   backgroundImage: `url(${storyBehindBackground})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
            >
              <div className="relative mt-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden story-image">
                  <img
                    src={foundersPhoto}
                    alt="Akshay & Harpreet - Founders of IntroYou"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-12 story-content">
              <div className="space-y-6 text-base lg:text-lg leading-relaxed">
                {/* Signature */}
                <div className="mt-12 signature signature-mobile">
                  <img
                    src={signatureImage}
                    alt="Akshay & Harpreet Signature"
                    className="h-12 lg:h-20 mb-2 object-contain"
                    width="330"
                    height="53"
                  />
                  <div className="text-sm lg:text-base opacity-90 letter-116">Founders</div>
                </div>
                <p>
                  Our journey began in the most unexpected way. Two strangers
                  competing on a{" "}
                  <span className="font-medium">BBC Business TV Show</span>{" "}
                  turned into an emotional connection and eventually marriage.
                </p>

                <p>
                  We were lucky enough to connect naturally in person. But we
                  know it isn't that easy anymore. Dating app loneliness is
                  real, and they've lost the genuine spark of real connection.
                </p>

                <p>
                  That's why we created{" "}
                  <span className="font-medium">IntroYou</span>. Real
                  introductions that are thoughtful, intentional and
                  pressure-free. A modern alternative to endless swiping and old
                  fashioned matchmaking.
                </p>

                <p className="font-medium">
                  We believe everyone deserves the chance to meet someone
                  meaningful. And we can't wait to IntroYou.
                </p>

              </div>

              {/* Signature */}
              <div className="mt-12 signature">
                <img
                  src={signatureImage}
                  alt="Akshay & Harpreet Signature"
                  className="h-12 lg:h-20 object-contain"
                  width="330"
                  height="53"
                />
                <div className="text-sm lg:text-base opacity-90">Founders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IntroYou Works Section */}
      <section className="py-20 px-6 bg-white intro-different-wrp" id="howItWorks">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[48px] mb-4 playfair-display font-semibold letter-53 text-0E0E0E">
              How <span style={{ color: "#820080" }}>IntroYou</span> Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-0E0E0E">
            Personalised, compatible introductions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-[12px]">
            {/* Box 1 - Tell us about yourself */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-wrp dif-inner-main">
              <div
                className="p-6 text-center h-full dif-block"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEEEEE",
                  boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={howWorksHeartIcon}
                      alt="Tell us about yourself"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  Tell us about yourself
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                  Take a few minutes to share who you are, your values & what
                  you're looking for. We ask the right questions to understand
                  your goals and what really matters to you.
                </p>
              </div>
            </div>

            {/* Box 2 - We curate your introductions */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
              <div
                className="p-6 text-center  h-full dif-block"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEEEEE",
                  boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={newHeartIcon}
                      alt="We curate your introductions"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  We curate your introductions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                Our team personally reviews every profile and selects introductions with care. Each match is intentional, reflecting your mindset, lifestyle & goals, so you’re only shown people who genuinely fit.
                </p>
              </div>
            </div>

            {/* Box 3 - Receive your introductions */}
            <div className="md:w-4/12 w-full px-[12px] mb-[24px] dif-inner-main">
              <div
                className="p-6 text-center h-full dif-block"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EEEEEE",
                  boxShadow: "0px 28px 36px -16px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="icon-box rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFEBFF" }}
                  >
                    <img
                      src={howWorksMessageIcon}
                      alt="Receive your introductions"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="text-lg mb-2 font-bold letter-04 text-0E0E0E">
                  Receive your introductions
                </h3>
                <p className="text-gray-600 text-base leading-relaxed letter-04 text-0E0E0E">
                When there’s a strong match, we send you their profile. If you’re both interested, you’re introduced and can connect directly. No endless swiping, just meaningful introductions that actually lead somewhere.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 btn-wrp">
             <a href={getProfileUrl()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 btn-link btn-main"
              style={{ backgroundColor: "#820080" }}
            >
              <span className="letter-04" style={{ backgroundColor: "transparent" }}>Find your match</span>
              <img src={heartButtonIcon} alt="heart" className="w-5 h-5 h-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-wrapper" style={{ backgroundColor: "#F2F0F5" }} id="faq">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 faq-row justify-center">
            {/* Left Content - Image */}
            <div className="w-full lg:w-1/2 flex justify-center faq-left">
              <div className="relative bg-image">
                <div
                  className="lg:h-[480px] rounded-3xl overflow-hidden relative bg-image-main"
                  style={{
                    backgroundImage: `url(${coupleImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-image-main-overlay"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(23, 29, 41, 0.256) 0%, rgba(23, 29, 41, 0.64) 100%)",
                      borderRadius: "24px",
                    }}
                  ></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-8 text-white bottom-tell-us-block">
                    <h3 className="text-3xl lg:text-4xl mb-2 playfair-display font-semibold letter-04">
                      Tired of dating apps?
                    </h3>
                    <p className="text-[18px] mb-6 opacity-90 letter-06">
                      That’s because they are built to keep you scrolling & single. We’re not. Let us <span className="font-bold">IntroYou</span>.
                    </p>
                    <a href={getProfileUrl()}
                      className="px-6 block text-center py-3 text-white font-medium rounded-lg transition-all duration-300 mx-auto w-full btn-main letter-04"
                      style={{ backgroundColor: "#820080" }}
                    >
                      Tell us who you are looking for
                    </a>
                    <p className="text-sm mt-2 opacity-75 text-center grey-text letter-06">
                      It takes only 3 minutes!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - FAQ */}
            <div className="w-full lg:w-1/2 faq-right">
              <h2 className="text-3xl lg:text-4xl mb-8 playfair-display font-semibold text-0E0E0E">
                Frequently Asked Questions
              </h2>

              <div
                className="space-y-4 "
                style={{ background: "#FFFFFF", borderRadius: "8px" }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden mb-0 ${openFaq === index ? "faq-active" : ""}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center transition-all duration-300 ease-in-out"
                      style={{
                        borderWidth: "1px 1px 0px 1px",
                        borderStyle: "solid",
                        borderColor: "#F7F7F7",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <span className="font-normal text-left pr-4 letter-06 text-0E0E0E">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp
                          className="w-5 h-5 transition-transform duration-300 flex-shrink-0"
                          style={{ color: "#C747C5" }}
                        />
                      ) : (
                        <ChevronDown
                          className="w-5 h-5 transition-transform duration-300 flex-shrink-0"
                          style={{ color: "#C747C5" }}
                        />
                      )}
                    </button>

                    {openFaq === index && (
                      <div
                        className="p-4 pt-2 text-sm leading-relaxed transition-all duration-300 ease-in-out faq-detail"
                        style={{
                          background: "#F7F7F7",
                          color: "#4B4B4B",
                          borderWidth: "0px 1px 1px 1px",
                          borderStyle: "solid",
                          borderColor: "#F7F7F7",
                        }}
                      >
                        <p className="letter-06 text-494545">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterApp />
    </div>
  );
}
