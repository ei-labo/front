import {createContext} from 'react';
import {defaultBackup, Game} from './game/Game';
import {plainToClass} from 'class-transformer';

export interface Profile {
  backup: Game;
}

export const defaultProfile: Profile = {
  backup: defaultBackup,
};

export interface ProfileManager {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
}

export class AppContextValue {
  public game: Game;

  constructor(profile: Profile) {
    this.game = plainToClass(Game, profile.backup);
  }
}

export default createContext<AppContextValue>(
  new AppContextValue(defaultProfile)
);
