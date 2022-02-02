export const withBackend = false;

export const appTitle = 'Personal Data';

export const gitsha: string = process.env.REACT_APP_GIT_SHA || 'unset_sha';
export const gitversion: string = process.env.REACT_APP_VERSION || 'unset_version';
export const gitshaLink: string =
  'https://github.com/johnb8005/personal-website-admin/commit/' + gitsha;
