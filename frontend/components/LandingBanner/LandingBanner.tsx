import React from "react";
import LandingBannerImage from "../../src/assets/images/LandingBannerImage2.webp";
import { useTranslation } from "react-i18next";

import LandingCTA from "./LandingCTA";

const LandingBanner: React.FC = () => {
    const { i18n } = useTranslation();
    const selectedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en")
        .split(/[-_]/)[0];
    const mobileCtaHeightClass =
        selectedLanguage === "ka" ? "h-[78vh]" : "h-[65vh]";

    return (
        <div
            className="relative lg:h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${LandingBannerImage})` }}
        >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-primary-dark/75 lg:via-primary/30 to-primary/50 lg:to-transparent" />

            <div
                className={`relative ${mobileCtaHeightClass} lg:h-[70vh] z-10 text-white`}
            >
                <LandingCTA />
            </div>
        </div>
    );
};

export default LandingBanner;
