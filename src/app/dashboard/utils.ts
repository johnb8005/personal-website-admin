enum Names {
  Calendly,
  Github,
  Twitter,
  Linkedin
}

const array: [Names, { host: string; icon: string }][] = [
  [
    Names.Calendly,
    { host: 'https://calendly.com', icon: 'solid fa-calendar-week' }
  ],
  [Names.Github, { host: 'https://github.com', icon: 'brands fa-linkedin-in' }],
  [Names.Twitter, { host: 'https://twitter.com', icon: 'brands fa-twitter' }],
  [
    Names.Linkedin,
    { host: 'https://www.linkedin.com', icon: 'brands fa-github' }
  ]
];

const iconDefault = 'solid fa-link';
const nameDefault = 'Link';

export const iconFromLink = (l: string): string => {
  let r = '';
  array.forEach(x => {
    if (l.includes(x[1].host)) {
      r = x[1].icon;
    }
  });

  if (r === '') {
    return iconDefault;
  } else {
    return r;
  }
};

export const nameFromLink = (l: string): string => {
  let r = '';
  array.forEach(x => {
    if (l.includes(x[1].host)) {
      r = String(Names[x[0]]);
    }
  });

  if (r === '') {
    return nameDefault;
  } else {
    return r;
  }
};
