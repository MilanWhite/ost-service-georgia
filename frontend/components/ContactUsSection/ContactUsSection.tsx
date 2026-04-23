import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

import ContactUsForm from "./ContactUsForm";
import GoogleMap from "./GoogleMap";
import { useTranslation } from "react-i18next";

const toTelephoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const ContactUsSection = () => {
    const { t } = useTranslation();
    const contactSections = [
        {
            headingKey: "ContactPage.georgia_heading",
            addressValue1Key: "ContactPage.georgia_address_value1",
            addressValue2Key: "ContactPage.georgia_address_value2",
            telephoneValueKey: "ContactPage.georgia_telephone_value",
            emailValueKey: "ContactPage.georgia_email_value",
        },
        {
            headingKey: "ContactPage.canada_heading",
            addressValue1Key: "ContactPage.canada_address_value1",
            addressValue2Key: "ContactPage.canada_address_value2",
            telephoneValueKey: "ContactPage.canada_telephone_value",
            emailValueKey: "ContactPage.canada_email_value",
        },
    ];

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 py-12 lg:static lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path
                                            d="M130 200V.5M.5 .5H200"
                                            fill="none"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="white"
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                />
                                <svg
                                    x="100%"
                                    y={-1}
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-470.5 0h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            {t("ContactPage.contact_heading")}
                        </h2>
                        <p className="mt-4 max-w-2xl lg:text-lg text-gray-600">
                            {t("ContactPage.contact_description")}
                        </p>
                        <div className="mt-10 space-y-8 text-base/7 text-gray-600 sm:hidden">
                            {contactSections.map((contactSection) => {
                                const telephone = t(
                                    contactSection.telephoneValueKey,
                                );
                                const email = t(contactSection.emailValueKey);

                                return (
                                    <div key={contactSection.headingKey}>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {t(contactSection.headingKey)}
                                        </h3>
                                        <dl className="mt-4 space-y-4">
                                            <div className="flex gap-x-4">
                                                <dt className="flex-none">
                                                    <span className="sr-only">
                                                        {t(
                                                            "ContactPage.address_label",
                                                        )}
                                                    </span>
                                                    <BuildingOffice2Icon
                                                        aria-hidden="true"
                                                        className="h-7 w-6 text-primary"
                                                    />
                                                </dt>
                                                <dd>
                                                    {t(
                                                        contactSection.addressValue1Key,
                                                    )}
                                                    <br />
                                                    {t(
                                                        contactSection.addressValue2Key,
                                                    )}
                                                </dd>
                                            </div>
                                            <div className="flex gap-x-4">
                                                <dt className="flex-none">
                                                    <span className="sr-only">
                                                        {t(
                                                            "ContactPage.telephone_label",
                                                        )}
                                                    </span>
                                                    <PhoneIcon
                                                        aria-hidden="true"
                                                        className="h-7 w-6 text-primary"
                                                    />
                                                </dt>
                                                <dd>
                                                    <a
                                                        href={toTelephoneHref(
                                                            telephone,
                                                        )}
                                                        className="hover:text-gray-900"
                                                    >
                                                        {telephone}
                                                    </a>
                                                </dd>
                                            </div>
                                            <div className="flex gap-x-4">
                                                <dt className="flex-none">
                                                    <span className="sr-only">
                                                        {t(
                                                            "ContactPage.email_label",
                                                        )}
                                                    </span>
                                                    <EnvelopeIcon
                                                        aria-hidden="true"
                                                        className="h-7 w-6 text-primary"
                                                    />
                                                </dt>
                                                <dd>
                                                    <a
                                                        href={`mailto:${email}`}
                                                        className="hover:text-gray-900"
                                                    >
                                                        {email}
                                                    </a>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-10 hidden text-base/7 text-gray-600 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
                            {contactSections.map((contactSection) => (
                                <div key={`${contactSection.headingKey}-heading`}>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {t(contactSection.headingKey)}
                                    </h3>
                                </div>
                            ))}
                            {contactSections.map((contactSection) => (
                                <div
                                    key={`${contactSection.headingKey}-address`}
                                    className="flex gap-x-4"
                                >
                                    <div className="flex-none">
                                        <span className="sr-only">
                                            {t("ContactPage.address_label")}
                                        </span>
                                        <BuildingOffice2Icon
                                            aria-hidden="true"
                                            className="h-7 w-6 text-primary"
                                        />
                                    </div>
                                    <div>
                                        {t(contactSection.addressValue1Key)}
                                        <br />
                                        {t(contactSection.addressValue2Key)}
                                    </div>
                                </div>
                            ))}
                            {contactSections.map((contactSection) => {
                                const telephone = t(
                                    contactSection.telephoneValueKey,
                                );

                                return (
                                    <div
                                        key={`${contactSection.headingKey}-telephone`}
                                        className="flex gap-x-4"
                                    >
                                        <div className="flex-none">
                                            <span className="sr-only">
                                                {t("ContactPage.telephone_label")}
                                            </span>
                                            <PhoneIcon
                                                aria-hidden="true"
                                                className="h-7 w-6 text-primary"
                                            />
                                        </div>
                                        <div>
                                            <a
                                                href={toTelephoneHref(
                                                    telephone,
                                                )}
                                                className="hover:text-gray-900"
                                            >
                                                {telephone}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                            {contactSections.map((contactSection) => {
                                const email = t(contactSection.emailValueKey);

                                return (
                                    <div
                                        key={`${contactSection.headingKey}-email`}
                                        className="flex gap-x-4"
                                    >
                                        <div className="flex-none">
                                            <span className="sr-only">
                                                {t("ContactPage.email_label")}
                                            </span>
                                            <EnvelopeIcon
                                                aria-hidden="true"
                                                className="h-7 w-6 text-primary"
                                            />
                                        </div>
                                        <div>
                                            <a
                                                href={`mailto:${email}`}
                                                className="hover:text-gray-900"
                                            >
                                                {email}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <GoogleMap />
                </div>
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactUsSection;
