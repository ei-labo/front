import roles from '../assets/data/roles.json';

export interface Role {
  name: string;
  shortName: string;
  color: string;
  eb: number;
  ebLog: number;
}

export function getCurrentRole(eb: number): Role {
  const index = Math.min(Math.floor(Math.log10(eb)), roles.length - 1);
  return roles[index];
}
