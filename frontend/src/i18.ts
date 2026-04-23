import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: false,
    load: "languageOnly",
    supportedLngs: ["en", "ru", "ka"],
    fallbackLng: "en",
    detection: {
        order: [
            "querystring",
            "cookie",
            "localStorage",
            "navigator",
            "htmlTag",
            "path",
            "subdomain",
        ],
        caches: ["localStorage"],
        convertDetectedLanguage: (lng: string) => {
            if (lng === "uk" || lng === "ua") {
                return "ka";
            }

            return lng;
        },
    },
    resources: {
        en: {
            translation: {
                language_option_english: "English",
                language_option_georgian: "Georgian",
                language_option_russian: "Russian",
                HomePage: {
                    get_free_quote: "Get a Free Quote",
                    nav_home: "Home",
                    nav_contact_us: "Contact Us",
                    nav_about_us: "About Us",
                    landing_cta_title: "Your Dream Car, Delivered Worldwide",
                    landing_cta_subtitle:
                        "Access licensed dealer auctions from anywhere in the world. We handle the paperwork, shipping, and customs – start to finish.",
                    how_it_works_heading: "How It Works",
                    how_it_works_subheading: "Step by step.",
                    step_title: "Step ",
                    step1_description: "Find your car",
                    step2_description: "Place your bid",
                    step3_description: "We ship it",
                    step4_description: "You drive it",
                    why_choose_us_heading: "Why Choose Us",
                    trusted_shipping_title: "Trusted Shipping",
                    trusted_shipping_text:
                        "At OST Service, your vehicle’s safe and secure delivery is our highest priority. With care and various quality control measures, we ensure each step of the transportation process meets our high standards, giving you complete peace of mind.",
                    global_reach_title: "Global Reach",
                    global_reach_text:
                        "Our extensive global network allows OST Service to effortlessly connect you with major shipping ports and transportation routes across the world. Whether your vehicle needs to travel across cities or continents, we offer many solutions tailored to your shipping needs.",
                    auction_experience_title: "Auction Experience",
                    auction_experience_text:
                        "Leveraging extensive experience in the vehicle auction industry, OST Service expertly manages auction processes from start to finish. We handle bidding, paperwork, and logistics efficiently, ensuring your experience is always hassle-free.",
                    our_auction_partners: "Our Auction Partners",
                    auto_auctions_title: "Auto Auctions",
                    auto_auctions_text:
                        "OST Service manages vehicle auctions, handling everything from bidding and paperwork to final logistics. Our efficient processes ensure a smooth and stress-free auction experience for every client.",
                    shipping_title: "Shipping",
                    shipping_text:
                        "We specialize in secure, efficient vehicle transportation solutions tailored to your individual needs. OST Service guarantees timely delivery and care, whether your shipment is local or international.",
                    footer_copyright:
                        "© 2026 OST SERVICE CANADA LLC. All rights reserved.",
                },
                ContactPage: {
                    contact_heading: "Contact Us",
                    contact_description:
                        "Get in touch with OST Service to discuss your vehicle shipping and auction needs. Complete our simple contact form, and we'll promptly respond to start assisting you today.",
                    address_label: "Address",
                    georgia_heading: "Georgia",
                    georgia_address_value1: "21a Viktor Dolidze St",
                    georgia_address_value2: "T'bilisi, Georgia",
                    canada_heading: "Canada",
                    canada_address_value1: "1400-90 Burnhamthorpe Rd. ",
                    canada_address_value2:
                        "Mississauga, ON, L5B 3C3, Canada",
                    telephone_label: "Telephone",
                    georgia_telephone_value: "+995 595 41 14 41",
                    canada_telephone_value: "+1 (647) 857-3105",
                    email_label: "Email",
                    georgia_email_value: "g.jamrishvili@gmail.com",
                    canada_email_value: "bestiklena1@gmail.com",
                    form_first_name: "First name",
                    form_last_name: "Last name",
                    form_email: "Email",
                    form_phone: "Phone number",
                    form_message: "Message",
                    form_language_label: "Language",
                    form_button_send: "Send Message",
                    error_first_name_required: "First name is required",
                    error_last_name_required: "Last name is required",
                    error_invalid_email: "Invalid email address",
                    error_invalid_phone:
                        "Invalid phone number (must be digits, optionally starting with +, 7-15 digits total)",
                    error_message_required: "Message is required",
                    error_invalid_language: "Please select a valid language",
                    message_submitted: "Message successfully submitted",
                },
                AboutPage: {
                    about_heading: "About Us",
                    about_text:
                        "OST Service specializes in various vehicle auction and transportation solutions, dedicated to providing efficient auto services worldwide. Our driven team prioritizes efficiency and quality, ensuring every client is satisfied.",
                    mission_heading: "Our mission",
                    mission_text:
                        "Our mission is to deliver exceptional vehicle auction management and dependable shipping solutions with integrity and precision. Committed to excellence, we strive to simplify the process for our clients, building lasting relationships through transparency, efficiency, and outstanding service.",
                    innovation_text:
                        "We continually innovate our processes and leverage our global network to offer optimal solutions tailored to our clients' needs. Through dedication and professionalism, OST Service aims to become your trusted partner for all vehicle transportation and auction services.",
                },
            },
        },
        ru: {
            translation: {
                language_option_english: "Английский",
                language_option_georgian: "Грузинский",
                language_option_russian: "Русский",
                HomePage: {
                    get_free_quote: "Получить бесплатный расчёт",
                    nav_home: "Главная",
                    nav_contact_us: "Связаться с нами",
                    nav_about_us: "О нас",
                    landing_cta_title: "Автомобиль мечты - с доставкой по всему миру",
                    landing_cta_subtitle:
                        "Получите доступ к аукционам официальных дилеров из любой точки мира. Мы берём на себя все документы, доставку и таможенное оформление - от начала до конца.",
                    how_it_works_heading: "Как это работает",
                    how_it_works_subheading: "Шаг за шагом.",
                    step_title: "Шаг ",
                    step1_description: "Найдите свой автомобиль",
                    step2_description: "Сделайте ставку",
                    step3_description: "Мы доставим его",
                    step4_description: "Вы водите его",
                    why_choose_us_heading: "Почему выбирают нас",
                    trusted_shipping_title: "Надёжная доставка",
                    trusted_shipping_text:
                        "В OST Service безопасная доставка вашего автомобиля - наш главный приоритет. Благодаря тщательному контролю качества на каждом этапе мы обеспечиваем соответствие высоким стандартам и полное спокойствие клиента.",
                    global_reach_title: "Глобальное присутствие",
                    global_reach_text:
                        "Развитая международная сеть позволяет OST Service легко организовывать доставку через основные морские порты и транспортные маршруты мира. Независимо от того, нужно ли перевезти авто по городу или на другой континент - мы подберем подходящее решение.",
                    auction_experience_title: "Опыт участия в аукционах",
                    auction_experience_text:
                        "Имея большой опыт в автомобильных аукционах, OST Service полностью сопровождает клиента на всех этапах - от участия в торгах до оформления документов и логистики. Всё просто и без лишних хлопот.",
                    our_auction_partners: "Наши партнёры по аукционам",
                    auto_auctions_title: "Автоаукционы",
                    auto_auctions_text:
                        "OST Service организует участие в автоаукционах: от подачи ставок и оформления документов до логистики. Наши отлаженные процессы обеспечивают комфортное и бесстрессовое участие в аукционах для каждого клиента.",
                    shipping_title: "Доставка",
                    shipping_text:
                        "Мы специализируемся на безопасной и эффективной доставке автомобилей с учётом ваших индивидуальных потребностей. OST Service гарантирует своевременную и аккуратную доставку - как для местных, так и для международных перевозок.",
                    footer_copyright:
                        "© 2026 OST SERVICE CANADA LLC. Все права защищены.",
                },
                ContactPage: {
                    contact_heading: "Связаться с нами",
                    contact_description:
                        "Свяжитесь с OST Service, чтобы обсудить ваши потребности в доставке автомобилей и участии в аукционах. Заполните простую форму, и мы оперативно свяжемся с вами.",
                    address_label: "Адрес",
                    georgia_heading: "Грузия",
                    georgia_address_value1: "21а, улица Виктора Долидзе",
                    georgia_address_value2: "Тбилиси, Грузия",
                    canada_heading: "Канада",
                    canada_address_value1: "1400-90 Burnhamthorpe Rd. ",
                    canada_address_value2:
                        "Миссисога, Онтарио, L5B 3C3, Канада",
                    telephone_label: "Телефон",
                    georgia_telephone_value: "+995 595 41 14 41",
                    canada_telephone_value: "+1 (647) 857-3105",
                    email_label: "Электронная почта",
                    georgia_email_value: "g.jamrishvili@gmail.com",
                    canada_email_value: "bestiklena1@gmail.com",
                    form_first_name: "Имя",
                    form_last_name: "Фамилия",
                    form_email: "Электронная почта",
                    form_phone: "Номер телефона",
                    form_message: "Сообщение",
                    form_language_label: "Язык",
                    form_button_send: "Отправить сообщение",
                    error_first_name_required: "Имя обязательно для заполнения",
                    error_last_name_required:
                        "Фамилия обязательна для заполнения",
                    error_invalid_email:
                        "Неверный адрес электронной почты",
                    error_invalid_phone:
                        "Некорректный номер телефона (должен содержать только цифры, возможно с +, от 7 до 15 цифр)",
                    error_message_required:
                        "Сообщение обязательно для заполнения",
                    error_invalid_language:
                        "Пожалуйста, выберите корректный язык",
                    message_submitted: "Сообщение успешно отправлено",
                },
                AboutPage: {
                    about_heading: "О нас",
                    about_text:
                        "OST Service специализируется на различных решениях в сфере автоаукционов и транспортировки автомобилей, предоставляя эффективные автоуслуги по всему миру. Наша команда ставит в приоритет эффективность и качество, чтобы каждый клиент оставался доволен.",
                    mission_heading: "Наша миссия",
                    mission_text:
                        "Наша миссия - обеспечить безупречную организацию аукционов и надёжную доставку автомобилей с точностью, ответственностью и профессионализмом. Мы стремимся упростить процесс для клиентов и выстроить с ними долгосрочные отношения, основанные на доверии.",
                    innovation_text:
                        "Мы постоянно совершенствуем процессы и используем международные связи, чтобы предложить клиентам лучшие решения. OST Service стремится стать вашим надёжным партнёром в сфере автоаукционов и логистики.",
                },
            },
        },
        ka: {
            translation: {
                language_option_english: "ინგლისური",
                language_option_georgian: "ქართული",
                language_option_russian: "რუსული",
                HomePage: {
                    get_free_quote: "მიიღეთ უფასო შეთავაზება",
                    nav_home: "მთავარი",
                    nav_contact_us: "დაგვიკავშირდით",
                    nav_about_us: "ჩვენ შესახებ",
                    landing_cta_title:
                        "თქვენი საოცნებო ავტომობილი მსოფლიოს ნებისმიერ წერტილში",
                    landing_cta_subtitle:
                        "მიიღეთ წვდომა ლიცენზირებულ დილერთა აუქციონებზე მსოფლიოს ნებისმიერი წერტილიდან. ჩვენ ვზრუნავთ გადაზიდვასა და განბაჟებაზე - თავიდან ბოლომდე.",
                    how_it_works_heading: "როგორ მუშაობს",
                    how_it_works_subheading: "ეტაპობრივად.",
                    step_title: "ნაბიჯი ",
                    step1_description: "იპოვეთ თქვენი ავტომობილი",
                    step2_description: "განათავსეთ თქვენი შეთავაზება",
                    step3_description: "ჩვენ გადავაზიდავთ მას",
                    step4_description: "თქვენ მართავთ მას",
                    why_choose_us_heading: "რატომ ირჩევენ ჩვენ",
                    trusted_shipping_title: "სანდო გადაზიდვა",
                    trusted_shipping_text:
                        "OST Service-ში თქვენი ავტომობილის უსაფრთხო და დაცული მიწოდება ჩვენი უმაღლესი პრიორიტეტია. ზრუნვითა და ხარისხის კონტროლის სხვადასხვა ზომით, ჩვენ ვუზრუნველყოფთ, რომ ტრანსპორტირების პროცესის თითოეული ეტაპი აკმაყოფილებდეს ჩვენს მაღალ სტანდარტებს და გაძლევდეთ სრულ სიმშვიდეს.",
                    global_reach_title: "გლობალური მასშტაბი",
                    global_reach_text:
                        "ჩვენი ფართო გლობალური ქსელი OST Service-ს საშუალებას აძლევს, მარტივად დაგაკავშიროთ მსოფლიოს მთავარ პორტებსა და სატრანსპორტო მარშრუტებთან. მიუხედავად იმისა, თქვენს ავტომობილს ქალაქებს შორის სჭირდება გადაადგილება თუ კონტინენტებს შორის, ჩვენ გთავაზობთ მრავალ გადაწყვეტას, რომელიც თქვენს გადაზიდვის საჭიროებებზეა მორგებული.",
                    auction_experience_title: "აუქციონის გამოცდილება",
                    auction_experience_text:
                        "ავტომობილების აუქციონის სფეროში დიდი გამოცდილების გამოყენებით, OST Service პროფესიონალურად მართავს აუქციონის პროცესს თავიდან ბოლომდე. ჩვენ ეფექტიანად ვმართავთ ვაჭრობას, დოკუმენტაციასა და ლოგისტიკას, რათა თქვენი გამოცდილება ყოველთვის მარტივი და უსაფიქრებელი იყოს.",
                    our_auction_partners: "ჩვენი აუქციონის პარტნიორები",
                    auto_auctions_title: "ავტო აუქციონები",
                    auto_auctions_text:
                        "OST Service მართავს ავტომობილების აუქციონებს და უზრუნველყოფს ყველაფერს — ვაჭრობიდან და დოკუმენტაციიდან საბოლოო ლოგისტიკამდე. ჩვენი ეფექტიანი პროცესები თითოეულ კლიენტს სთავაზობს შეუფერხებელ და სტრესისგან თავისუფალ აუქციონის გამოცდილებას.",
                    shipping_title: "გადაზიდვა",
                    shipping_text:
                        "ჩვენ სპეციალიზებული ვართ უსაფრთხო და ეფექტიან ავტომობილის გადაზიდვის გადაწყვეტილებებში, რომლებიც თქვენს ინდივიდუალურ საჭიროებებზეა მორგებული. OST Service უზრუნველყოფს დროულ მიწოდებას და სათანადო ზრუნვას, იქნება თქვენი გადაზიდვა ადგილობრივი თუ საერთაშორისო.",
                    footer_copyright:
                        "© 2026 OST SERVICE CANADA LLC. ყველა უფლება დაცულია.",
                },
                ContactPage: {
                    contact_heading: "დაგვიკავშირდით",
                    contact_description:
                        "დაუკავშირდით OST Service-ს თქვენი ავტომობილის გადაზიდვისა და აუქციონის საჭიროებების განსახილველად. შეავსეთ ჩვენი მარტივი საკონტაქტო ფორმა და ჩვენ სწრაფად გიპასუხებთ, რათა დღესვე დაგიწყოთ დახმარება.",
                    address_label: "მისამართი",
                    georgia_heading: "საქართველო",
                    georgia_address_value1: "ვიქტორ დოლიძის ქუჩა, 21ა",
                    georgia_address_value2: "თბილისი, საქართველო",
                    canada_heading: "კანადა",
                    canada_address_value1: "1400-90 Burnhamthorpe Rd.",
                    canada_address_value2:
                        "მისისაგა, ონტარიო, L5B 3C3, კანადა",
                    telephone_label: "ტელეფონი",
                    georgia_telephone_value: "+995 595 41 14 41",
                    canada_telephone_value: "+1 (647) 857-3105",
                    email_label: "ელფოსტა",
                    georgia_email_value: "g.jamrishvili@gmail.com",
                    canada_email_value: "bestiklena1@gmail.com",
                    form_first_name: "სახელი",
                    form_last_name: "გვარი",
                    form_email: "ელფოსტა",
                    form_phone: "ტელეფონის ნომერი",
                    form_message: "შეტყობინება",
                    form_language_label: "ენა",
                    form_button_send: "შეტყობინების გაგზავნა",
                    error_first_name_required: "სახელი სავალდებულოა",
                    error_last_name_required: "გვარი სავალდებულოა",
                    error_invalid_email: "არასწორი ელფოსტის მისამართი",
                    error_invalid_phone:
                        "არასწორი ტელეფონის ნომერი (უნდა შეიცავდეს მხოლოდ ციფრებს, სურვილისამებრ შეიძლება იწყებოდეს + ნიშნით, საერთო ჯამში 7-15 ციფრი)",
                    error_message_required: "შეტყობინება სავალდებულოა",
                    error_invalid_language: "გთხოვთ, აირჩიოთ სწორი ენა",
                    message_submitted: "შეტყობინება წარმატებით გაიგზავნა",
                },
                AboutPage: {
                    about_heading: "ჩვენ შესახებ",
                    about_text:
                        "OST Service სპეციალიზდება ავტომობილების აუქციონისა და ტრანსპორტირების სხვადასხვა გადაწყვეტაში და მიზნად ისახავს ეფექტიანი ავტოსერვისების მიწოდებას მთელ მსოფლიოში. ჩვენი მოტივირებული გუნდი უპირატესობას ანიჭებს ეფექტიანობასა და ხარისხს, რათა თითოეული კლიენტი კმაყოფილი დარჩეს.",
                    mission_heading: "ჩვენი მისია",
                    mission_text:
                        "ჩვენი მისიაა გამორჩეული ავტომობილის აუქციონის მართვისა და საიმედო გადაზიდვის გადაწყვეტილებების მიწოდება კეთილსინდისიერებითა და სიზუსტით. სრულყოფილებისადმი ერთგულებით, ჩვენ ვცდილობთ გავამარტივოთ პროცესი ჩვენი კლიენტებისთვის და ავაშენოთ გრძელვადიანი ურთიერთობები გამჭვირვალობის, ეფექტიანობისა და გამორჩეული მომსახურების საფუძველზე.",
                    innovation_text:
                        "ჩვენ მუდმივად ვაუმჯობესებთ ჩვენს პროცესებს და ვიყენებთ ჩვენს გლობალურ ქსელს, რათა შევთავაზოთ ოპტიმალური გადაწყვეტილებები, რომლებიც ჩვენი კლიენტების საჭიროებებზეა მორგებული. ერთგულებითა და პროფესიონალიზმით, OST Service ისახავს მიზნად გახდეს თქვენი სანდო პარტნიორი ავტომობილების ტრანსპორტირებისა და აუქციონის ყველა სერვისში.",
                },
            },
        },
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
