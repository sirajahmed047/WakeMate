import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 px-6 container mx-auto text-text-muted">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 max-w-4xl">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p className="leading-relaxed">
                        Welcome to WakeMate ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience while using our AI-powered alarm application and website. This Privacy Policy explains how we collect, use, and safeguard your information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Our Commitment to Privacy</h2>
                    <p className="leading-relaxed">
                        At WakeMate, we believe your data belongs to you. <strong className="text-white">We unequivocally state that we do not sell, trade, or rent your personal data to third parties for advertising purposes.</strong> Our business model is based on providing a premium service, not on monetizing your private information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect</h2>
                    <p className="leading-relaxed mb-4">
                        To provide our unique AI wake-up service, we collect limited information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Information:</strong> Phone number and basic profile details to facilitate the wake-up calls.</li>
                        <li><strong>Usage Data:</strong> Alarm schedules, wake-up success rates, and preferences to improve the service.</li>
                        <li><strong>Voice Interaction Data:</strong> During the wake-up call, your voice is processed in real-time to generate intelligent responses. </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Information</h2>
                    <p className="leading-relaxed">
                        We use the collected information solely for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Initiating the AI wake-up call at your scheduled time.</li>
                        <li>Personalizing the conversation to ensure you are fully awake.</li>
                        <li>Improving the accuracy and responsiveness of our AI.</li>
                        <li>Providing customer support and responding to inquiries.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                    <p className="leading-relaxed">
                        We implement industry-standard security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely using enterprise-grade cloud infrastructure (Firestore).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
                    <p className="leading-relaxed">
                        We use trusted third-party providers for specific infrastructure needs (e.g., text-to-speech processing, telephony services). These partners are strictly bound by confidentiality agreements and are prohibited from using your data for any other purpose.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at support@wakemate.club.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
