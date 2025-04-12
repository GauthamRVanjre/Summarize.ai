import { BarChart, Clock, Zap } from "lucide-react";
export const navItems = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export const FeaturesItems = [
  {
    icon: Zap,
    title: "AI-Powered Summarization",
    description:
      "Our advanced AI algorithms extract key information from your PDFs quickly and accurately.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "Get concise summaries in seconds, allowing you to digest information from long documents efficiently.",
  },
  {
    icon: BarChart,
    title: "Customizable Output",
    description:
      "Adjust summary length and focus to suit your specific needs and preferences.",
  },
];

export const PricingItems = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["50 pages/month", "Standard summaries", "Email support"],
  },
  {
    name: "Pro",
    price: "$24.99",
    features: [
      "Unlimited pages",
      "Advanced summaries",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom integration",
      "Dedicated account manager",
      "On-premise deployment",
      "24/7 phone support",
    ],
  },
];

export const TestimonialItems = [
  {
    name: "Dr. Emily Chen",
    role: "Research Scientist",
    quote:
      "SummarizeAI has revolutionized my literature review process. I can quickly grasp the key points of numerous papers, saving me hours of reading time.",
  },
  {
    name: "Mark Johnson",
    role: "Business Analyst",
    quote:
      "This tool has become indispensable for my market research. I can digest lengthy reports in minutes, allowing me to make faster, data-driven decisions.",
  },
  {
    name: "Sarah Lee",
    role: "Law Student",
    quote:
      "SummarizeAI helps me tackle dense legal documents with ease. It's like having a personal assistant that highlights the most crucial information for my case studies.",
  },
];
