export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  delay: number;
  imageUrl: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
  color: string;
  delay: number;
  imageUrl: string;
}



export interface LeadRow {
  name: string;
  phone: string;
  website: string;
  email: string;
  rating: number;
  reviews: number;
  address: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is SCRAPY?",
    answer: "SCRAPY is a powerful business data extraction tool built for marketers, sales teams, freelancers, and agencies who are tired of manually collecting leads from Google Maps."
  },
  {
    question: "Does SCRAPY require any coding skills?",
    answer: "Not at all. SCRAPY is designed for non-technical users. If you can type a Google search, you can use SCRAPY."
  },
  {
    question: "What data does SCRAPY extract from Google Maps?",
    answer: "Business name, address, phone number, website URL, email (where available), Google rating, number of reviews, and business category."
  },
  {
    question: "Can I export data to Excel?",
    answer: "Yes. You can download a CSV file which opens directly in Microsoft Excel, Google Sheets, or any spreadsheet app."
  },
  {
    question: "How many results can SCRAPY extract in one search?",
    answer: "SCRAPY can extract all available Google Maps listings for your search — typically hundreds to thousands of records depending on the keyword and location."
  },
  {
    question: "Is SCRAPY safe to use?",
    answer: "Yes. SCRAPY reads publicly available data from Google Maps, the same data any user can see in their browser."
  },
  {
    question: "Does it work for any country or city?",
    answer: "Yes. If a business is listed on Google Maps anywhere in the world, SCRAPY can extract it."
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: "sales",
    title: "Sales & Lead Gen Teams",
    description: "Stop buying expensive lead lists. Generate your own targeted B2B leads in any city, any niche — on demand.",
    iconName: "Target",
    color: "var(--accent-orange)",
    delay: 0.0,
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "marketing",
    title: "Digital Marketing Agencies",
    description: "Find local businesses that need your services. Build outreach lists in minutes, not days.",
    iconName: "Megaphone",
    color: "var(--accent-orange)",
    delay: 0.1,
    imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "freelancers",
    title: "Freelancers",
    description: "Land more clients by targeting businesses in your niche locally or globally — no cold outreach tools needed.",
    iconName: "User",
    color: "var(--accent-orange)",
    delay: 0.2,
    imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "startups",
    title: "Startups & SMBs",
    description: "Research competitors, find partners, and discover market opportunities using real Google Maps data.",
    iconName: "Building2",
    color: "var(--accent-orange)",
    delay: 0.3,
    imageUrl: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "analysts",
    title: "Data Analysts & Researchers",
    description: "Collect structured, real-world business data for analysis, reports, market mapping, or academic research.",
    iconName: "TrendingUp",
    color: "var(--accent-orange)",
    delay: 0.4,
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "realestate",
    title: "Real Estate & Local Businesses",
    description: "Find vendors, suppliers, and neighborhood businesses fast without hours of manual searching.",
    iconName: "Home",
    color: "var(--accent-orange)",
    delay: 0.5,
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Smart Keyword Search",
    description: "Search by business type + city (e.g. \"dentists in New York\") and SCRAPY finds every matching listing on Google Maps automatically.",
    iconName: "Search",
    color: "var(--accent-green)",
    delay: 0.0,
    imageUrl: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Full Business Data Extraction",
    description: "Get business name, address, phone number, website, email, Google rating, number of reviews, and business category — all in one row.",
    iconName: "Database",
    color: "var(--accent-green)",
    delay: 0.1,
    imageUrl: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Google Sheets Export",
    description: "Push extracted data directly into a new or existing Google Sheet with one click. Organized, clean, and ready to use.",
    iconName: "FileSpreadsheet",
    color: "var(--accent-green)",
    delay: 0.2,
    imageUrl: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "CSV Download",
    description: "Prefer working offline or in Excel? Download your data as a CSV file instantly — no formatting needed.",
    iconName: "Download",
    color: "var(--accent-green)",
    delay: 0.3,
    imageUrl: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Location-Based Targeting",
    description: "Target any city, state, country, or neighborhood. SCRAPY works globally — if it's on Google Maps, SCRAPY can find it.",
    iconName: "MapPin",
    color: "var(--accent-green)",
    delay: 0.4,
    imageUrl: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Bulk Extraction",
    description: "Don't stop at 10 results. SCRAPY scrolls and extracts all available listings for your search — giving you the most complete lead list possible.",
    iconName: "CopyPlus",
    color: "var(--accent-green)",
    delay: 0.5,
    imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];



export const MOCK_CRAWL_LEADS: Record<string, LeadRow[]> = {
  "dentists_miami": [
    { name: "Miami Dental Group", phone: "+1 305-555-0192", website: "miamidentalgroup.com", email: "info@miamidentalgroup.com", rating: 4.8, reviews: 245, address: "1200 Brickell Ave, Miami, FL 33131", category: "Dentist" },
    { name: "Brickell Family Dentistry", phone: "+1 305-555-0214", website: "brickelldentist.com", email: "contact@brickelldentist.com", rating: 4.7, reviews: 189, address: "848 Brickell Ave #102, Miami, FL 33131", category: "Cosmetic Dentist" },
    { name: "Miami Beach Dental Care", phone: "+1 305-555-0311", website: "miamibeachdentist.com", email: "hello@miamibeachdentist.com", rating: 4.9, reviews: 312, address: "400 Arthur Godfrey Rd, Miami Beach, FL 33140", category: "Dentist" },
    { name: "Downtown Miami Dental", phone: "+1 305-555-0455", website: "downtownmiamidental.com", email: "support@downtownmiamidental.com", rating: 4.5, reviews: 94, address: "200 S Biscayne Blvd, Miami, FL 33131", category: "Dental Clinic" },
    { name: "Coral Gables Dentistry", phone: "+1 305-555-0567", website: "coralgablesdentistry.com", email: "office@coralgablesdentistry.com", rating: 4.9, reviews: 423, address: "355 Alhambra Circle, Coral Gables, FL 33134", category: "Dentist" }
  ],
  "plumbers_chicago": [
    { name: "Chicago Blue Plumbing", phone: "+1 312-555-0144", website: "chicagoblueplumbing.com", email: "service@chicagoblueplumbing.com", rating: 4.9, reviews: 512, address: "1500 N Halsted St, Chicago, IL 60622", category: "Plumbing Service" },
    { name: "Windy City Emergency Plumbers", phone: "+1 312-555-0299", website: "windycityplumbing.com", email: "dispatch@windycityplumbing.com", rating: 4.6, reviews: 341, address: "233 S Wacker Dr, Chicago, IL 60606", category: "Plumber" },
    { name: "Lincoln Park Plumbing & Sewer", phone: "+1 773-555-0322", website: "lincolnparkplumbing.net", email: "office@lincolnparkplumbing.net", rating: 4.8, reviews: 198, address: "2200 N Clark St, Chicago, IL 60614", category: "Plumber" },
    { name: "Loop Drain Cleaners", phone: "+1 312-555-0481", website: "loopdraincleaners.com", email: "info@loopdraincleaners.com", rating: 4.4, reviews: 88, address: "10 N Dearborn St, Chicago, IL 60602", category: "Drainage Service" },
    { name: "Midwest Water Heaters", phone: "+1 773-555-0590", website: "midwestwaterheaters.com", email: "support@midwestwaterheaters.com", rating: 4.7, reviews: 156, address: "4400 W Belmont Ave, Chicago, IL 60641", category: "Water Heater Repair" }
  ],
  "restaurants_dubai": [
    { name: "The Arabian Courtyard", phone: "+971 4-555-0101", website: "arabiancourtyard.com", email: "reserve@arabiancourtyard.com", rating: 4.7, reviews: 1420, address: "Al Fahidi St, Bur Dubai, Dubai", category: "Middle Eastern Restaurant" },
    { name: "Marina Grill & Seafood", phone: "+971 4-555-0212", website: "marinagrilldubai.com", email: "info@marinagrilldubai.com", rating: 4.8, reviews: 840, address: "Marina Promenade, Dubai Marina, Dubai", category: "Seafood Restaurant" },
    { name: "Downtown Bistro", phone: "+971 4-555-0333", website: "downtownbistrodubai.ae", email: "hello@downtownbistrodubai.ae", rating: 4.5, reviews: 612, address: "Sheikh Mohammed bin Rashid Blvd, Downtown Dubai", category: "French Bistro" },
    { name: "Desert Rose Lounge", phone: "+971 4-555-0484", website: "desertrosedubai.com", email: "lounge@desertrosedubai.com", rating: 4.6, reviews: 1105, address: "Jumeirah Beach Road, Jumeirah 2, Dubai", category: "Restaurant & Lounge" },
    { name: "Burj Al-Arab Skyview Dining", phone: "+971 4-555-0550", website: "jumeirah.com/burj-al-arab", email: "baarestaurants@jumeirah.com", rating: 4.9, reviews: 3105, address: "Burj Al Arab, Jumeirah Beach Rd, Dubai", category: "Fine Dining Restaurant" }
  ]
};
