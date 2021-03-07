//import {makeStyles} from '@material-ui/core/styles';
//import logo from '../assets/media/logo.png';
import about from '../md/about.md';
import Markdown from '../components/Markdown';
//import Spacer from '../components/Spacer';

/*const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%',
    width: '600px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));*/

export default function Home() {
  //const classes = useStyles();
  return (
    <>
      {/*<img src={logo} className={classes.image} title="logo" alt="logo" />
      <Spacer size={50} />*/}
      <Markdown>{about}</Markdown>
    </>
  );
}
