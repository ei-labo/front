import {ReactChildren, ReactChild} from 'react';
import {getCurrentRole} from '../game/roles';
import {makeStyles} from '@material-ui/core/styles';

interface StyleProp {
  color: string;
}

const useStyles = makeStyles({
  text: {
    color: (props: StyleProp) => props.color,
  },
});

export interface Props {
  eb: number;
  children: ReactChild | ReactChildren;
}

export default function RoleTheme(props: Props) {
  const {eb, children} = props;
  const classes = useStyles({color: getCurrentRole(eb).color});
  return <span className={classes.text}>{children}</span>;
}
