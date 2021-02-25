import {classToPlain, Exclude} from 'class-transformer';
import {getCurrentRole, Role} from './roles';

export class Game {
  /* eslint-disable */
  // @ts-ignore injected thru class-transformer
  public _iat: number;
  // @ts-ignore injected thru class-transformer
  public _ver: number;
  // @ts-ignore injected thru class-transformer
  public artifacts: ArtifactInventory;
  // @ts-ignore injected thru class-transformer
  public contract: Contract[];
  // @ts-ignore injected thru class-transformer
  public contract_archive: ContractArchive[];
  // @ts-ignore injected thru class-transformer
  public epic_research: EpicResearch;
  // @ts-ignore injected thru class-transformer
  public farm: Record<string, Farm>;
  // @ts-ignore injected thru class-transformer
  public gifts_collected: number;
  // @ts-ignore injected thru class-transformer
  public hyperloop: boolean;
  // @ts-ignore injected thru class-transformer
  public id: string;
  // @ts-ignore injected thru class-transformer
  public mission_archive: Mission[];
  // @ts-ignore injected thru class-transformer
  public mission_running: Mission[];
  // @ts-ignore injected thru class-transformer
  public name: string;
  // @ts-ignore injected thru class-transformer
  public pe: number;
  // @ts-ignore injected thru class-transformer
  public pro: boolean;
  // @ts-ignore injected thru class-transformer
  public se: number;
  // @ts-ignore injected thru class-transformer
  public trophies: number[];
  /* eslint-enable */
  @Exclude()
  private defaultFarm = 'home';

  public getProphecyEggs(): number {
    return this.pe;
  }

  public getSoulEggs(): number {
    return this.se;
  }

  public getEarningBonus(): number {
    const seBase = 0.1 + 0.01 * this.epic_research.soul_eggs;
    const peBase = 1.05 + 0.01 * this.epic_research.prophecy_bonus;
    return 1.0 + this.se * seBase * Math.pow(peBase, this.pe);
  }

  public getRole(): Role {
    return getCurrentRole(this.getEarningBonus());
  }

  public serialize(): object {
    return classToPlain(this);
  }
}

export interface CommonResearch {
  atomic_purification: number;
  autonomous_vehicles: number;
  better_incubators: number;
  bigger_eggs: number;
  chrystal_shells: number;
  comfy_nests: number;
  compact_incubators: number;
  coordinated_clucking: number;
  dark_containment: number;
  driver_training: number;
  egg_loading_bots: number;
  eggsistor: number;
  enlightened_chickens: number;
  even_bigger_eggs: number;
  excitable_chickens: number;
  excoskeletons: number;
  genetic_purification: number;
  grav_plating: number;
  graviton_coating: number;
  hab_capacity1: number;
  hatchery_expansion: number;
  hatchery_rebuild1: number;
  hen_house_ac: number;
  hover_upgrades: number;
  hyper_portalling: number;
  improved_genetics: number;
  internal_hatchery1: number;
  internal_hatchery2: number;
  internal_hatchery3: number;
  internal_hatchery4: number;
  internal_hatchery5: number;
  leafsprings: number;
  lightweight_boxes: number;
  matter_reconfig: number;
  micro_coupling: number;
  microlux: number;
  motivational_clucking: number;
  multi_layering: number;
  neural_linking: number;
  neural_net_refine: number;
  nutritional_sup: number;
  padded_packaging: number;
  quantum_storage: number;
  relativity_optimization: number;
  rooster_booster: number;
  shell_fortification: number;
  super_alloy: number;
  superfeed: number;
  telepathic_will: number;
  time_compress: number;
  timeline_diversion: number;
  timeline_splicing: number;
  traffic_management: number;
  usde_prime: number;
  vehicle_reliablity: number;
  wormhole_dampening: number;
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

export interface Vehicle {
  length: number;
  type: number;
}

export interface Farm {
  chickens: number;
  common_research: CommonResearch;
  egg: string;
  habs: number[];
  silos: number;
  vehicles: Vehicle[];
}

export interface Mission {
  cap: number;
  id: string;
  ship: string;
  status?: string;
  time: number;
  type: string;
}

export interface ArtifactInventoryEntry {
  qty: [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
  ];
  crafts: [number, number, number, number];
}

export interface ArtifactInventory {
  alien_wood: ArtifactInventoryEntry;
  ancient_tungsten: ArtifactInventoryEntry;
  aurelian_brooch: ArtifactInventoryEntry;
  beak_of_midas: ArtifactInventoryEntry;
  book_of_basan: ArtifactInventoryEntry;
  carved_rainstick: ArtifactInventoryEntry;
  celestial_bronze: ArtifactInventoryEntry;
  centaurian_steel: ArtifactInventoryEntry;
  clarity_stone: ArtifactInventoryEntry;
  clarity_stone_fragment: ArtifactInventoryEntry;
  demeters_necklace: ArtifactInventoryEntry;
  dilithium_monocle: ArtifactInventoryEntry;
  dilithium_stone: ArtifactInventoryEntry;
  dilithium_stone_fragment: ArtifactInventoryEntry;
  drone_parts: ArtifactInventoryEntry;
  eridani_feather: ArtifactInventoryEntry;
  extraterrestrial_aluminum: ArtifactInventoryEntry;
  gold_meteorite: ArtifactInventoryEntry;
  interstellar_compass: ArtifactInventoryEntry;
  lalande_hide: ArtifactInventoryEntry;
  life_stone: ArtifactInventoryEntry;
  life_stone_fragment: ArtifactInventoryEntry;
  light_of_eggendil: ArtifactInventoryEntry;
  lunar_stone: ArtifactInventoryEntry;
  lunar_stone_fragment: ArtifactInventoryEntry;
  lunar_totem: ArtifactInventoryEntry;
  mercurys_lens: ArtifactInventoryEntry;
  neodymium_medallion: ArtifactInventoryEntry;
  ornate_gusset: ArtifactInventoryEntry;
  phoenix_feather: ArtifactInventoryEntry;
  prophecy_stone: ArtifactInventoryEntry;
  prophecy_stone_fragment: ArtifactInventoryEntry;
  puzzle_cube: ArtifactInventoryEntry;
  quantum_metronome: ArtifactInventoryEntry;
  quantum_stone: ArtifactInventoryEntry;
  quantum_stone_fragment: ArtifactInventoryEntry;
  shell_stone: ArtifactInventoryEntry;
  shell_stone_fragment: ArtifactInventoryEntry;
  ship_in_a_bottle: ArtifactInventoryEntry;
  solar_titanium: ArtifactInventoryEntry;
  soul_stone: ArtifactInventoryEntry;
  soul_stone_fragment: ArtifactInventoryEntry;
  space_rocks: ArtifactInventoryEntry;
  tachyon_deflector: ArtifactInventoryEntry;
  tachyon_stone: ArtifactInventoryEntry;
  tachyon_stone_fragment: ArtifactInventoryEntry;
  tau_ceti_geode: ArtifactInventoryEntry;
  terra_stone: ArtifactInventoryEntry;
  terra_stone_fragment: ArtifactInventoryEntry;
  the_chalice: ArtifactInventoryEntry;
  titanium_actuator: ArtifactInventoryEntry;
  tungsten_ankh: ArtifactInventoryEntry;
  vial_martian_dust: ArtifactInventoryEntry;
}

export interface ContractArchive {
  coop: string;
  id: string;
  league: 'unknown' | 'std' | 'elite';
  progress: number;
  time_start: number;
  time_end: number;
}

export interface CoopMember {
  name: string;
  active: boolean;
  cheated: boolean;
  owner: boolean;
  amount: number;
  rate: number;
  tokens: number;
  eb: number;
}

export interface Contract {
  coop: string;
  id: string;
  league: 'unknown' | 'std' | 'elite';
  progress: number;
  public: boolean;
  time_end: number;
  members: CoopMember[];
}

export const defaultBackup = require('./defaultBackup.json');
