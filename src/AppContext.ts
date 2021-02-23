import {createContext} from 'react';

export interface Mission {
  ship: string;
  type: string;
  time: number;
  id: string;
  cap: number;
  status?: string;
}
export interface ArtifactEntry {
  qty: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ];
  crafts: [number, number, number, number];
}
export interface EpicResearch {
  hold_to_hatch: number;
  epic_hatchery: number;
  epic_internal_incubators: number;
  video_doubler_time: number;
  epic_clucking: number;
  epic_multiplier: number;
  cheaper_contractors: number;
  bust_unions: number;
  cheaper_research: number;
  epic_silo_quality: number;
  silo_capacity: number;
  int_hatch_sharing: number;
  int_hatch_calm: number;
  accounting_tricks: number;
  soul_eggs: number;
  prestige_bonus: number;
  drone_rewards: number;
  epic_egg_laying: number;
  transportation_lobbyist: number;
  warp_shift: number;
  prophecy_bonus: number;
  hold_to_research: number;
}
export interface Backup {
  id: string;
  name: string;
  pe: number;
  se: number;
  permit: boolean;
  hyperloop: boolean;
  trophies: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  gifts_collected: number;
  epic_research: EpicResearch;
  mission_archive: Mission[];
  mission_running: Mission[];
  artifacts: Map<string, ArtifactEntry>;
  _iat: number;
  _ver: number;
}
const defaultBackup: Backup = {
  id: 'D3F4UL7',
  name: '(anonymous user)',
  pe: 0,
  se: 0,
  permit: true,
  hyperloop: true,
  trophies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  gifts_collected: 0,
  epic_research: {
    hold_to_hatch: 15,
    epic_hatchery: 20,
    epic_internal_incubators: 20,
    video_doubler_time: 12,
    epic_clucking: 20,
    epic_multiplier: 100,
    cheaper_contractors: 10,
    bust_unions: 10,
    cheaper_research: 10,
    epic_silo_quality: 0,
    silo_capacity: 20,
    int_hatch_sharing: 10,
    int_hatch_calm: 20,
    accounting_tricks: 20,
    soul_eggs: 140,
    prestige_bonus: 20,
    drone_rewards: 20,
    epic_egg_laying: 20,
    transportation_lobbyist: 30,
    warp_shift: 0,
    prophecy_bonus: 5,
    hold_to_research: 8,
  },
  mission_archive: [],
  mission_running: [],
  artifacts: new Map(),
  _iat: 0,
  _ver: 0,
};
export interface Profile {
  backup: Backup;
  public: boolean;
}
export const defaultProfile: Profile = {
  backup: defaultBackup,
  public: false,
};
export interface ProfileManager {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
}
const AppContext = createContext<Profile>(defaultProfile);
export default AppContext;
