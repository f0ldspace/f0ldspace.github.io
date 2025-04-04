import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://f0ldspace.github.io", // replace this with your deployed domain
  author: "f0ldspace",
  profile: "https://github.com/f0ldspace",
  desc: "a mostly worthless blog",
  title: "f0ldspace",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/f0ldspace",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/f0ldspace",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@foldspace-me",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:theapache64@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
/*
export const GISCUS: GiscusProps = {
  repo: "theapache64/theapache64.github.io",
  repoId: "R_kgDOMiH9Cw",
  category: "General",
  categoryId: "DIC_kwDOMiH9C84Chi9Y",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
  };
  */
