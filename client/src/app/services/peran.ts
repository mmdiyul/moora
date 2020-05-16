export interface Peran {
  _id?: string;
  nama?: string;
  prioritas?: number;
}

export interface PeranAPI {
  results: Peran[];
  count: number;
}
