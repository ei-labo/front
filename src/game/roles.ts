import roles from '../assets/data/roles.json';
import clamp from 'lodash/clamp';

export interface Role {
  name: string;
  shortName: string;
  color: string;
  eb: number;
  ebLog: number;
}

export function getCurrentRole(eb: number): Role {
  const index = clamp(Math.floor(Math.log10(eb)), 0, roles.length - 1);
  return roles[index];
}
