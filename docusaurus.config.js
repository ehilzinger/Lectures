// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to the Archive',
  tagline: 'Home of Lecture Materials & Tutorials',
  favicon: 'img/favicon.ico',
  staticDirectories: ['public', 'static'],

  // Set the production url of your site here
  url: 'https://scientific-work-intro.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ehilzinger', // Usually your GitHub org/user name.
  projectName: 'Intro_to_Scientific_Work', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: "/",
          editUrl:
            'https://github.com/ehilzinger/Intro_to_Scientific_Work/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ehilzinger/Intro_to_Scientific_Work',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        hideOnScroll: true,
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Lectures',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'webprog/intro',
                label: 'Web Programming',
              },
              {
                type: 'doc',
                docId: 'distributedsystems/intro',
                label: 'Distributed Systems',
              },
              {
                type: 'doc',
                docId: 'softwareengineering/intro',
                label: 'Software Engineering',
              },
              {
                type: 'doc',
                docId: 'itmanagement/intro',
                label: 'IT Management',
              },
            ]
          },
          {
            type: 'doc',
            docId: 'scientific/intro',
            position: 'left',
            label: 'Scientific Basics',
          },
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ehilzinger/Intro_to_Scientific_Work',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://cv.enzohilzinger.de',
            label: 'My CV',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Scientific Basics',
                to: '/scientific/intro',
              },
              {
                label: 'Web Programmig',
                to: '/webprog/intro',
              },
              {
                label: 'Distributed Systems',
                to: '/distributedsystems/intro',
              },
            ],
          },
          
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ehilzinger/Intro_to_Scientific_Work',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/enzo-hilzinger/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enzo Hilzinger. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
