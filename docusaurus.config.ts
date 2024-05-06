import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '青蛙音樂',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://cdn.discordapp.com/avatars/1216003625503948830/459b06ec3f6579187eb20aa8f63ef978.png?size=2048',

  // Set the production url of your site here
  url: 'https://bot.mwdmc.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // ...
    // [ 
    //   require.resolve('docusaurus-lunr-search'), {
    //     languages: ['zh'] // language codes
    //   }
    // ]
    [
      "@orama/plugin-docusaurus-v3",
      {
        cloud: {
          indexId: "v122guqjeja5sbgilpw0vlxk",
          oramaCloudAPIKey: "HrHlsN2RBUXCAJ9m2bx3StYqddT1ZMYL", // Env variable suggested
          deploy: true, // Enables deploy while building/starting
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '青蛙音樂',
      logo: {
        alt: '青蛙音樂',
        src: 'https://cdn.discordapp.com/avatars/1216003625503948830/459b06ec3f6579187eb20aa8f63ef978.png?size=2048',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文檔',
        },
        {to: '/blog', label: '部落格', position: 'left'},
        {to: '/uptime', label: '狀態', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 多元世界團隊 • 使用 ❤️ 製作`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
