const NOT_FOUND_IMAGE = {
  alt: 'X',
  src: '/not-found.png',
};
const PLEXUS_IMAGE = {
  alt: 'Plexus',
  src: '/plexus.jpg',
};
const BITBOX_IMAGE = {
  alt: 'Bitbox',
  src: '/bitbox.jpg',
};

export const EXPERIENCE = [
  {
    image: PLEXUS_IMAGE,
    subtitle: 'companies.subtitles.plexus',
    tags: [
      'Gatsby',
      'Next JS',
      'React JS',
      'Redux',
      'Styled Components',
      'Typescript',
    ],
    title: 'companies.titles.reactDeveloper',
    url: 'https://www.linkedin.com/company/plexus-tech/',
  },
  {
    image: BITBOX_IMAGE,
    subtitle: 'companies.subtitles.bitbox',
    tags: [
      'Javascript',
      'Odoo 13',
      'OpenERP',
      'PostgreSQL',
      'Python 2.7',
      'React JS',
      'React Native',
      'Redux',
    ],
    title: 'companies.titles.fullstackDeveloper',
    url: 'https://www.linkedin.com/company/bitbox-it/',
  },
  {
    image: NOT_FOUND_IMAGE,
    subtitle: 'companies.subtitles.loquatFullstack',
    tags: ['Java 18', 'PHP', 'Server Socket', 'Symfony'],
    title: 'companies.titles.fullstackDeveloper',
  },
  {
    image: NOT_FOUND_IMAGE,
    subtitle: 'companies.subtitles.loquatIntern',
    tags: ['Java 18', 'Server Socket'],
    title: 'companies.titles.intern',
  },
];
