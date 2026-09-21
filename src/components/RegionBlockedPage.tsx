import React from "react";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import logoImage from "figma:asset/1317259af126a2231a0e530aedf3b68e2e27ad9e.png";

export default function RegionBlockedPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const [params] = useSearchParams();
  const c = params.get("c")?.toUpperCase() || "";
  const heading = "Service Unavailable in This Region";

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16 md:max-w-sm mx-auto">
      <header className="flex justify-center pt-8 px-6 bg-white">
        <div className="flex items-center gap-2">
          <img src={logoImage} alt="IntroYou Logo" className="h-10 sm:h-12" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center pt-6">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center px-4">
            <h1 className="text-3xl sm:text-4xl font-serif text-[#820080] mb-4">{heading}</h1>

            <p className="text-base text-gray-700 mb-4 px-2 leading-relaxed">
              <span className="font-bold">IntroYou</span> is not available in your region.
            </p>

            <p className="text-base text-gray-700 mb-4 px-2 leading-relaxed">
              {c ? `Our service cannot be joined or used by 
users in the UAE. ` : "Access from your location is blocked."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

