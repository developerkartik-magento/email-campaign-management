export const campaigns = [
  {
    id: 1,
    name: "Security Awareness Campaign",
    status: "Scheduled",
    audience: "All Employees",
    scheduledDate: "Aug 15, 2026",

    subject: "Stay Safe: Security Awareness Week",

    sender: "security@company.com",

    description:
      "Security awareness campaign focused on protecting employees from phishing and social engineering attacks.",

    content: {
      heading: "Stay Safe at Work",
      message:
        "Cybersecurity starts with you. Learn how to identify suspicious emails, protect your credentials, and report security incidents.",
      buttonText: "Start Security Training",
      buttonLink: "#",
    },

    sent: 5200,
    opened: 3820,
    clicked: 920,
  },

  {
    id: 2,
    name: "Phishing Awareness",
    status: "Completed",
    audience: "Engineering",
    scheduledDate: "Aug 10, 2026",

    subject: "Can You Spot a Phishing Email?",

    sender: "security@company.com",

    description:
      "Training campaign designed to improve employee awareness of phishing attacks.",

    content: {
      heading: "Think Before You Click",
      message:
        "Phishing emails can look legitimate. Learn how to identify suspicious links, attachments and requests.",
      buttonText: "Learn More",
      buttonLink: "#",
    },

    sent: 1800,
    opened: 1450,
    clicked: 430,
  },

  {
    id: 3,
    name: "Data Privacy Training",
    status: "Completed",
    audience: "All Employees",
    scheduledDate: "Aug 8, 2026",

    subject: "Important: Data Privacy Training",

    sender: "training@company.com",

    description:
      "Mandatory data privacy training for all employees.",

    content: {
      heading: "Protect Company Data",
      message:
        "Understand your responsibilities when handling confidential and personal information.",
      buttonText: "Complete Training",
      buttonLink: "#",
    },

    sent: 5200,
    opened: 4010,
    clicked: 1250,
  },

  {
    id: 4,
    name: "Password Security Campaign",
    status: "Draft",
    audience: "IT Department",
    scheduledDate: "-",

    subject: "Create Stronger Passwords",

    sender: "security@company.com",

    description:
      "Campaign focused on improving password security practices.",

    content: {
      heading: "Protect Your Account",
      message:
        "Use strong and unique passwords to protect your business accounts.",
      buttonText: "Learn More",
      buttonLink: "#",
    },

    sent: 0,
    opened: 0,
    clicked: 0,
  },

  {
    id: 5,
    name: "Remote Work Security",
    status: "Scheduled",
    audience: "Remote Employees",
    scheduledDate: "Aug 18, 2026",

    subject: "Stay Secure While Working Remotely",

    sender: "security@company.com",

    description:
      "Security awareness campaign for employees working remotely.",

    content: {
      heading: "Work Securely Anywhere",
      message:
        "Follow these security best practices when working from home or from public locations.",
      buttonText: "View Guidelines",
      buttonLink: "#",
    },

    sent: 2400,
    opened: 1680,
    clicked: 510,
  },
];