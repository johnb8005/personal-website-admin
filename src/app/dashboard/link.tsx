import React from 'react';

import { Data } from './type';
import { IconButton } from '@material-ui/core';
import { Link as LinkIcon } from '@material-ui/icons';

const Link = ({ data }: { data: Data }) => {
  const datastring = btoa(JSON.stringify(data));
  const host = 'https://johnb8005.github.io/personal-website';
  const link = host + '?data=' + datastring;

  return (
    <IconButton
      target={'_blank'}
      href={link}
      color="primary"
      aria-label="add to shopping cart"
    >
      <LinkIcon /> Link to your personal identity business card
    </IconButton>
  );
};

export default Link;
