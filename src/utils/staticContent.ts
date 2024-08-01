/**
 * Static content of Header
 */
export const HeaderContent = {
  main: {
    logo: {
      src: '/assets/icons/fiverr-black.svg',
      alt: 'fiverr-logo-header',
    },
    search: {
      'long-placeholder': 'What service are you looking for today?',
      'short-placeholder': 'Find services',
    },
    nav: [
      {
        key: 1,
        label: 'Fiverr Pro',
        href: '/',
        children: [
          {
            key: 1,
            image: '/assets/images/header-nav (1).svg',
            label: "I'm looking to hire",
            caption:
              'My team needs vetted freelance talent and a premium business solution.',
          },
          {
            key: 2,
            image: '/assets/images/header-nav (2).svg',
            label: 'I want to offer Pro services',
            caption:
              "I'd like to work on business projects as a Pro freelancer or agency.",
          }
        ],
      },
      {
        key: '2',
        label: 'Explore',
        href: '/',
        children: [
          {
            key: 1,
            image: '',
            label: 'Discover',
            caption: 'Inspiring projects made on Fiverr',
          },
          {
            key: 2,
            image: '',
            label: 'Community',
            caption: "Connect with Fiverr's team and community",
          },
          {
            key: 3,
            image: '',
            label: 'Guides',
            caption: 'In-depth guides covering business topics',
          },
          {
            key: 4,
            image: '',
            label: 'Podcast',
            caption: 'Inside tips from top business minds',
          },
          {
            key: 5,
            image: '',
            label: 'Learn',
            caption: 'Professional online courses, led by experts',
          },
          {
            key: 6,
            image: '',
            label: 'Blog',
            caption: 'News, information and community stories',
          },
          {
            key: 7,
            image: '',
            label: 'Logo Maker',
            caption: 'Create your logo instantly',
          }
        ],
      },
      {
        key: 3,
        label: 'English',
        href: '/',
        icon: 'GlobalLine',
      },
      {
        key: 4,
        label: 'Become a Seller',
        href: '/',
        icon: '',
      }
    ],
  },
  categoriesMenu: [
    { key: 1, label: 'Graphics & Design', href: '' },
    { key: 2, label: 'Programming & Tech', href: '' },
    { key: 3, label: 'Digital Marketing', href: '' },
    { key: 4, label: 'Video & Animation', href: '' },
    { key: 5, label: 'Writing & Translation', href: '' },
    { key: 6, label: 'Music & Audio', href: '' },
    { key: 7, label: 'Business', href: '' },
    { key: 8, label: 'Consulting', href: '' },
    { key: 9, label: 'AI Services', href: '' },
    { key: 10, label: 'Personal Growth', href: '' }
  ],
  sideNav: [
    { key: 1, label: 'Sign in', href: '' },
    {
      key: 2,
      label: 'Browse categories',
      href: '',
      children: [
        { key: 1, label: 'Graphics & Design' },
        { key: 2, label: 'Programming & Tech' },
        { key: 3, label: 'Digital Marketing' },
        { key: 4, label: 'Video & Animation' },
        { key: 5, label: 'Writing & Translation' },
        { key: 6, label: 'Music & Audio' },
        { key: 7, label: 'Business' },
        { key: 8, label: 'Consulting' },
        { key: 9, label: 'AI Services' },
        { key: 10, label: 'Personal Growth' }
      ],
    },
    {
      key: 3,
      label: 'Explore',
      href: '',
      children: [
        { key: 1, label: 'Discover' },
        { key: 2, label: 'Guides' },
        { key: 3, label: 'Learn' },
        { key: 4, label: 'Logo Maker' },
        { key: 5, label: 'Community' },
        { key: 6, label: 'Podcast' },
        { key: 7, label: 'Blog' }
      ],
    },
    {
      key: 4,
      label: 'Fiverr Pro',
      children: [
        { key: 1, label: "I'm looking to hire" },
        { key: 2, label: 'I want to offer Pro services' }
      ],
    }
  ],
};

/**
 * Static content of Footer
 */
export const FooterContent = {
  categories: [
    {
      key: 1,
      label: 'Categories',
      children: [
        { key: 1, label: 'Graphics & Design' },
        { key: 2, label: 'Digital Marketing' },
        { key: 3, label: 'Writing & Translation' },
        { key: 4, label: 'Video & Animation' },
        { key: 5, label: 'Music & Audio' },
        { key: 6, label: 'Fiverr Logo Maker' },
        { key: 7, label: 'Programming & Tech' },
        { key: 8, label: 'Data' },
        { key: 9, label: 'Business' },
        { key: 10, label: 'Personal Growth & Hobbies' },
        { key: 11, label: 'Photography' },
        { key: 12, label: 'End-to-End Projects' },
        { key: 13, label: 'Sitemap' }
      ],
    },
    {
      key: 2,
      label: 'About',
      children: [
        { key: 1, label: 'Careers' },
        { key: 2, label: 'Press & News' },
        { key: 3, label: 'Partnerships' },
        { key: 4, label: 'Privacy Policy' },
        { key: 5, label: 'Terms of Service' },
        { key: 6, label: 'Intellectual Property Claims' },
        { key: 7, label: 'Investor Relations' }
      ],
    },
    {
      key: 3,
      label: 'Support and Education',
      children: [
        { key: 1, label: 'Help & Support' },
        { key: 2, label: 'Trust & Safety' },
        { key: 3, label: 'Selling on Fiverr' },
        { key: 4, label: 'Buying on Fiverr' },
        { key: 5, label: 'Fiverr Guides' },
        { key: 6, label: 'Learn' },
        { key: 7, label: 'Online Courses' }
      ],
    },
    {
      key: 4,
      label: 'Community',
      children: [
        { key: 1, label: 'Customer Success Stories' },
        { key: 2, label: 'Community Hub' },
        { key: 3, label: 'Forum' },
        { key: 4, label: 'Events' },
        { key: 5, label: 'Blog' },
        { key: 6, label: 'Creators' },
        { key: 7, label: 'Affiliates' },
        { key: 8, label: 'Podcast' },
        { key: 9, label: 'Invite a Friend' },
        { key: 10, label: 'Become a Seller' },
        { key: 11, label: 'Community Standards' }
      ],
    },
    {
      key: 5,
      label: 'Business Solutions',
      children: [
        { key: 1, label: 'Business Solutions' },
        { key: 2, label: 'About Business Solutions' },
        { key: 3, label: 'Fiverr Pro' },
        { key: 4, label: 'Fiverr Certified' },
        { key: 5, label: 'Become an Agency' },
        { key: 6, label: 'Fiverr Enterprise' },
        { key: 7, label: 'ClearVoice' },
        { key: 8, label: 'Content Marketing' },
        { key: 9, label: 'Working Not Working' },
        { key: 10, label: 'Contact Sales' }
      ],
    }
  ],
  bottom: {
    brand: {
      logo: {
        src: '/assets/icons/fiverr-gray.svg',
        alt: 'fiverr-logo-footer',
      },
      copyright: 'Fiverr International Ltd.',
    },
    socials: [
      { key: 1, icon: 'Tiktok' },
      { key: 2, icon: 'Instagram' },
      { key: 3, icon: 'Linkedin' },
      { key: 4, icon: 'Facebook' },
      { key: 5, icon: 'Pinterest' },
      { key: 6, icon: 'Twitter' }
    ],
    others: [
      { key: 1, label: 'English', icon: 'GlobalLine' },
      { key: 2, label: 'USD', icon: 'Money' },
      { key: 3, label: '', icon: 'Accessibility' }
    ],
  },
};

/**
 * Static content of Not Found Page
 */
export const NotFoundContent = {
  brand: {
    image: '/assets/icons/fiverr-white.svg',
    alt: '',
  },
  main: {
    title: "Well, this isn't what you were looking for",
    subtitle: "But at least it's pretty",
    content: 'Keep exploring',
    populars: [
      { id: 1, label: 'Website Design' },
      { id: 2, label: 'WordPress' },
      { id: 3, label: 'Logo Design' },
      { id: 4, label: 'Voiceover' }
    ],
  },
  footer: {
    image: '/assets/images/404page-footer.svg',
    alt: '',
  },
};
