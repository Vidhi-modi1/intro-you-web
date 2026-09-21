import { useState } from "react";
import FooterApp from "./FooterApp";
import HeaderApp from "./HeaderApp";

const SafeDating = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <div className="min-h-screen bg-white">
        {/* Header */}
        <HeaderApp />

        {/* Main Content */}

        <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800 post-content">
            <h1 className="text-4xl font-bold mb-4 text-[#820080] text-center">Safe Dating Policy</h1>
            {/* <p className="text-sm text-gray-500 mb-8">Effective Date: 14 October 2025</p> */}

            {/* Introduction */}
            <section className="mb-6">
                <p className="mt-2">At IntroYou, your safety and wellbeing come first.
                </p>
                <p className="mt-2">
                    We know that putting yourself out there can feel vulnerable — especially when it comes to
                    something as personal as dating. That’s why we’ve built IntroYou as a carefully curated platform,
                    not just a swipe app. Every profile is manually verified by our team. Every introduction is reviewed
                    with human eyes. And we’re always here to support you.
                </p>
                <p className="mt-2">
                    Still, no platform — however careful — can eliminate all risks. That’s why we also empower you
                    with guidance on how to stay safe, protect your privacy, and trust your instincts as you build
                    genuine connections.
                </p>
                <p className="mt-2">
                    Here are the principles we stand by:
                </p>
            </section>

            {/* Section 1 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">1. Manual Verification, Always</h2>
                <p>
                    Every single user is reviewed by our internal team before being approved. We check for profile
                    authenticity, consistency, and effort. While no system is perfect, we take pride in rejecting
                    suspicious or low-effort profiles.
                </p>
            </section>

            {/* Section 2 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">2. Curated Introductions Only</h2>
                <p>
                    You won’t be spammed by strangers or random matches. You’ll only ever be introduced to someone
                    based on compatibility and mutual readiness. This creates a more respectful, intentional experience.
                </p>
            </section>

            {/* Section 3 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">3. Your Privacy Is Respected</h2>
                <p>
                    Your data, messages, and personal details are never shared with other users unless you’ve chosen to
                    connect. We encourage all users to take their time before revealing any personal contact details.
                </p>
            </section>

            {/* Section 4 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">4. Take Your Time to Get to Know Someone</h2>
                <p>
                    Don’t rush to meet in person. Use the platform chat to build rapport. If something doesn’t feel right
                    — pause. You’re in control at every step.
                </p>
            </section>

            {/* Section 5 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">5. First Meeting? Choose a Public Space</h2>
                <p>
                    If and when you decide to meet someone in real life, always meet in a public setting. Tell a trusted
                    friend or family member where you're going, and consider sharing your live location. Avoid being
                    picked up from your home.
                </p>
            </section>

            {/* Section 6 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">6. Stay on the Platform When Possible</h2>
                <p>
                    We encourage you to keep conversations on IntroYou until a solid level of trust is built. This allows
                    us to offer better support and moderation if any issues arise.
                </p>
            </section>

            {/* Section 7 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">7. Report Anything Suspicious</h2>
                <p>
                    If someone makes you feel uncomfortable, behaves inappropriately, or violates our terms — please
                    report it. Our team will take it seriously. We investigate all reports discreetly and may remove users
                    if needed.
                </p>
            </section>

            {/* Section 8 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">8. We Don’t Tolerate Abuse</h2>
                <p>
                    Any form of harassment, coercion, scams, or disrespectful behaviour is a breach of our Terms and
                    will result in removal from the platform. Period.
                </p>
            </section>

            {/* Section 9 */}
            <section className="mb-6">
                <h2 className="font-semibold text-xl text-[#820080] mb-2">9. We're Here to Support You</h2>
                <p>
                    Our team monitors the platform, responds to safety reports, and is available to help. If something
                    feels off, you can always contact us confidentially at:
                    <a href="mailto:support@intro-you.com" className="text-[#820080] underline">
                        support@intro-you.com
                    </a>
                    .
                </p>
            </section>

            {/* Reminder Section */}
            <section>
                <h2 className="font-semibold text-xl text-[#820080] mb-2">Remember</h2>
                <p>
                    You're never obligated to reply. You're never pressured to meet. Your safety, boundaries, and
                    experience matter. Real connection takes time, respect, and trust — and that's the kind of space
                    we're here to create. While we take all reasonable steps to moderate and curate the platform, users
                    are ultimately responsible for their own safety and decisions when interacting with others
                </p>
            </section>
        </main>


        {/* Footer */}
        <FooterApp />
    </div>
}

export default SafeDating;