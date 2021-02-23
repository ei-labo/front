import {ReactChildren, ReactChild} from 'react';
import {useTheme} from '@material-ui/styles';
import {Backup} from '../AppContext';

export interface Props {
  backup: Backup;
  children: ReactChild | ReactChildren;
}

export default function RoleTheme(props: Props) {
  const {backup} = props;
  const theme = useTheme();
}
