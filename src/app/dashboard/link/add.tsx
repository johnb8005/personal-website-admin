import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

export default ({
  label = 'add a new message',
  onSubmit
}: {
  label?: string;
  onSubmit: (t: string) => Promise<void>;
}) => {
  const classes = useStyles();
  const [text, setText] = React.useState<string>('');
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    if (text === '') {
      return;
    }
    e.preventDefault();
    onSubmit(text).then(_x => {
      setLoading(false);
      setText('');
    });

    setLoading(true);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
      <InputBase
        value={text}
        disabled={isLoading}
        onChange={v => setText(v.target.value)}
        className={classes.input}
        placeholder={isLoading ? 'loading' : label}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        disabled={isLoading}
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};
