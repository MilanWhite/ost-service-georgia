import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const LanguageToggle = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguage = (i18n.resolvedLanguage ?? i18n.language ?? "en")
        .split(/[-_]/)[0];

    return (
        <div className=" grid grid-cols-1">
            <select
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                id="language"
                onChange={(e) => {
                    i18n.changeLanguage(e.target.value);
                }}
                value={selectedLanguage}
            >
                <option value="en">{t("language_option_english")}</option>
                <option value="ru">{t("language_option_russian")}</option>
                <option value="ka">{t("language_option_georgian")}</option>
            </select>
            <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
        </div>
    );
};

export default LanguageToggle;
