import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Utils } from '@nexys/material-components';
import { appTitle } from 'config/index';
import * as Config from '../../config'

const useStyles = Utils.makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2)
  }
}));



const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright ©{' '}
        <Link color="inherit" href="">
          {appTitle}
        </Link>
        {` ${new Date().getFullYear()}`}
        <br />
        <small>
          <a href={Config.gitshaLink}>{Config.gitversion}</a>
        </small>
      </Typography>
    </footer>
  );
};

export default Footer;
