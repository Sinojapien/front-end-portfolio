import RG28Banner from "@/../public/rg28-banner.jpg";
import MarketVtuberScreenshot from "@/../public/market-vtuber-screenshot.png";

export const items = [
  {
    id: "market",
    src: "https://market.flyingmilktea.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.43185c10.png&w=256&q=75",
    alt: "Flying Milk Tea Logo",
    href: "https://market.flyingmilktea.com",
    title: "Flying Milk Tea - Market",
    duration: "Jun 2022 - Jul 2023",
    objective: "General UI & UX improvements and maintenance",
    skills: [
      "React.js",
      "Next.js",
      "Material-UI",
      "Storybook",
      "REST APIs",
      "GraphQL",
      "EsLint",
      "Git",
    ],
  },
  {
    id: "virtualfes2023",
    src: "https://virtualfes2023.flyingmilktea.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-m.305cde57.png&w=1920&q=75",
    alt: "Virtual Fes 2023 Banner",
    href: "https://virtualfes2023.flyingmilktea.com",
    title: "Virtual-Fes-2023 Hong Kong",
    duration: "Jun 2023 - Jul 2023",
    objective:
      "An event homepage for the virtual-live concert Virtual Fes 2023",
    description:
      "🔧 implementing event activity page\n🔧 supervising 2-3 interns in implementing localization & ticket QRCode page",
    skills: ["Intersection Observer API", "QRCode", "CSS"],
  },
  {
    id: "rg28",
    src: RG28Banner,
    alt: "Rainbow-Gala 28 Banner",
    href: "https://www.rainbow-gala.com/28/main.html",
    title: "Rainbow Gala 28",
    duration: "Nov 2023 - Dec 2022",
    objective:
      "An ticket admission page that works both online and offline for an ACG Event",
    description:
      "🔧 implemented the UI and API integration of QR-Code tickets and scanner\n🔧 provided on-site technical support for event Rainbow Gala 28",
    skills: ["QRCode Reader", "IndexedDB", "Responsive Design"],
  },
  {
    id: "market-vtuber",
    src: MarketVtuberScreenshot,
    alt: "Flying Milk Tea Vtuber Section Screenshot",
    href: "https://vtuber.flyingmilktea.com",
    title: "Flying Milk Tea - Market (Vtuber Section)",
    duration: "Oct 2022 - Nov 2022",
    objective: "E-commerce section and activity feeds for Vtuber",
    description:
      "🔧 implement website layouts from designers\n🔧 convert markdown contents to activity blogs",
    skills: ["Markdown", "CSS", "Grid Layout"],
  },
];
