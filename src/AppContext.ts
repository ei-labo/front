import {createContext} from 'react';
import {defaultBackup, Game} from './game/Game';
import {plainToClass} from 'class-transformer';

export interface Profile {
  backup: Game;
  isPublic: boolean;
}

export const defaultProfile: Profile = {
  backup: defaultBackup,
  isPublic: false,
};

export interface ProfileManager {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
}

export class AppContextValue {
  public game: Game;
  public isPublic: boolean;

  constructor(profile: Profile) {
    this.game = plainToClass(Game, profile.backup);
    this.isPublic = profile.isPublic;
  }
}

export default createContext<AppContextValue>(
  new AppContextValue(defaultProfile)
);
