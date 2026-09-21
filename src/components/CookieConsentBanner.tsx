import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieConsentBanner.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://stage-console.intro-you.com/api/";
const COOKIE_CONSENT_URL = `${API_BASE_URL.replace(/\/+$/, "")}/cookie-consent`;

const getBrowserCookie = (name: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
};

const getConsentUuid = () => {
  const existingUuid = getBrowserCookie("cookie_consent_uuid");
  if (existingUuid) return existingUuid;

  const uuid = crypto.randomUUID();
  document.cookie = `cookie_consent_uuid=${encodeURIComponent(uuid)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  return uuid;
};

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const localConsent = localStorage.getItem("cookie_consent");
    if (localConsent === "allowed" || localConsent === "rejected") return;

    const controller = new AbortController();
    const checkServerConsent = async () => {
      try {
        const response = await fetch(COOKIE_CONSENT_URL, {
          method: "GET",
          headers: { Accept: "application/json" },
          credentials: "include",
          signal: controller.signal,
        });
        const data = response.ok ? await response.json() : null;

        if (data?.consent_given) {
          if (data.consent === "allowed" || data.consent === "rejected") {
            localStorage.setItem("cookie_consent", data.consent);
          }
          return;
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.warn("Could not check cookie consent status:", err);
        }
      }

      if (!controller.signal.aborted) setIsVisible(true);
    };

    checkServerConsent();
    return () => controller.abort();
  }, []);

  const handleConsent = async (consentType: "allowed" | "rejected") => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("consent", consentType);
      formData.append("consent_uuid", getConsentUuid());

      const response = await fetch(COOKIE_CONSENT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        credentials: "include",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Cookie consent request failed with status ${response.status}`);
      }

      localStorage.setItem("cookie_consent", consentType);
      setIsVisible(false);
    } catch (err) {
      console.error("Failed to save cookie consent preference:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Cookie Preferences" role="region" aria-live="polite" className="cookie-consent">
      <div className="cookie-consent__inner">
        <div className="cookie-consent__content">
          <div className="cookie-consent__heading">
            <span className="cookie-consent__icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <h2>We value your privacy</h2>
          </div>

          <p className="cookie-consent__copy">
            We use cookies to make IntroYou work smoothly and to improve your experience. You can allow all cookies or continue with essential cookies only.
          </p>

          <div className="cookie-consent__links">
            <button
              type="button"
              onClick={() => setShowDetails((visible) => !visible)}
              className="cookie-consent__text-button"
              aria-expanded={showDetails}
            >
              {showDetails ? "Hide details" : "Cookie details"}
              <span aria-hidden="true">›</span>
            </button>
            <Link to="/policy" className="cookie-consent__policy-link">Privacy Policy</Link>
          </div>

          {showDetails && (
            <div className="cookie-consent__details">
              <p><strong>Essential:</strong> Keeps the website secure and working correctly.</p>
              <p><strong>Analytics:</strong> Helps us understand how visitors use IntroYou.</p>
              <p><strong>Marketing:</strong> Helps us deliver more relevant communications.</p>
            </div>
          )}
        </div>

        <div className="cookie-consent__actions">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleConsent("allowed")}
            className="cookie-consent__button cookie-consent__button--allow"
          >
            {isSubmitting ? "Saving preference…" : "Accept all"}
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleConsent("rejected")}
            className="cookie-consent__button cookie-consent__button--reject"
          >
            Reject all
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsentBanner;
