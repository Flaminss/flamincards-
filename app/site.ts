export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RML Pay",
  description:
    "Get Entertained. Get Paid. A site to something something something",
  navItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Our Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Our Blog",
      href: "/blog",
    },
    {
      label: "Sponsor Us",
      href: "https://patreon.com/jrgarciadev",
    },
  ],
  links: {
    tiktok: "https://nextui.org",
    instagram: "https://github.com/nextui-org/nextui",
    telegram: "https://twitter.com/getnextui",
    whatsapp: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
