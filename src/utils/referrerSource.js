export function getReferrerSource() {
  if (typeof navigator === "undefined" || typeof document === "undefined") {
    return "unknown";
  }

  const ua = navigator.userAgent || "";
  const ref = document.referrer || "";

  // In-app browser UA markers are the most reliable signal.
  if (/Instagram/i.test(ua)) return "instagram";
  if (/FBAN|FBAV|FB_IAB|FBIOS/i.test(ua)) return "facebook";
  if (/\bLine\//i.test(ua)) return "line";
  if (/Snapchat/i.test(ua)) return "snapchat";
  if (/TikTok/i.test(ua)) return "tiktok";
  if (/Twitter/i.test(ua)) return "twitter";
  if (/LinkedInApp/i.test(ua)) return "linkedin";
  if (/Pinterest/i.test(ua)) return "pinterest";
  if (/WhatsApp/i.test(ua)) return "whatsapp";

  // Fall back to the referrer domain when the browser does not identify itself.
  if (/l\.instagram\.com|instagram\.com/i.test(ref)) return "instagram";
  if (/l\.facebook\.com|facebook\.com|fb\.com|messenger\.com/i.test(ref)) return "facebook";
  if (/t\.co|twitter\.com|x\.com/i.test(ref)) return "twitter";
  if (/linkedin\.com/i.test(ref)) return "linkedin";
  if (/pinterest\.com/i.test(ref)) return "pinterest";
  if (/google\./i.test(ref)) return "google";
  if (!ref) return "direct";

  try {
    return new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}
