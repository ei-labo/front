import React, {useContext} from 'react';
import AppContext from '../AppContext';
import RoleTheme from '../components/RoleTheme';

export default function Dashboard() {
  const {game} = useContext(AppContext);
  return (
    <>
      You are{' '}
      <RoleTheme eb={game.getEarningBonus()}>{game.getRole().name}</RoleTheme>!
    </>
  );
}
