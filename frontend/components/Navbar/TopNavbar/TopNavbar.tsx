import GetAFreeQuoteButton from "../../GetAFreeQuoteButton";
import { SocialNavigationItem } from "../Navbar";

import LanguageToggle from "../../LanguageToggle";

interface Props {
    social_navigation: SocialNavigationItem[];
}

export default function TopNavbar({ social_navigation }: Props) {
    return (
        <header className="bg-white">
            <nav
                aria-label="language"
                className="mx-auto flex max-w-7xl items-center justify-between lg:px-6"
            >
                <LanguageToggle />

                {social_navigation.map((item) => {
                    // choose size per icon
                    const sizeClass =
                        item.name === "LinkedIn" ? "h-6 w-6 mt-0.5" : "h-7 w-7";

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-primary hover:text-primary-hover ml-3"
                            target="_blank"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon
                                aria-hidden="true"
                                className={sizeClass}
                            />
                        </a>
                    );
                })}
                <div className="ml-3">
                    <GetAFreeQuoteButton />
                </div>
            </nav>
        </header>
    );
}
