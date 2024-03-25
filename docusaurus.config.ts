import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dodam Design System',
  tagline: '도담도담 디자인 시스템',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dds.b1nd.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Team-B1ND', // Usually your GitHub org/user name.
  projectName: 'dds', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DDS',
      logo: {
        alt: 'DDS Logo',
        src: 'img/DDSIcon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://b1nd.com/',
          label: '바인드팀',
          position: 'right',
        },
        {
          href: 'https://dodam.b1nd.com/',
          label: '도담도담',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '도담도담 오픈소스',
          items: [
            {
              label: 'Android',
              href: 'https://github.com/Team-B1ND/dodamdodam-android',
            },
            {
              label: 'iOS',
              href: 'https://github.com/Team-B1ND/dodamdodam-ios',
            },
            {
              label: 'Web',
              href: 'https://github.com/Team-B1ND/dodamdodam-web',
            },
            {
              label: 'Server',
              href: 'https://github.com/Team-B1ND/dodamdodam-server',
            },
          ],
        },
        {
          title: 'DDS 오픈소스',
          items: [
            {
              label: 'DDS Android',
              href: 'https://github.com/Team-B1ND/dds-android',
            },
            {
              label: 'DDS iOS',
              href: 'https://github.com/Team-B1ND/dds-ios',
            },
            {
              label: 'DDS Web',
              href: 'https://github.com/Team-B1ND/dds-web',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Team B1ND. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
