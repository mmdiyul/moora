import { Pengguna } from './pengguna';

export interface Bobot {
  _id?: string;
  w1?: number;
  w2?: number;
  w3?: number;
  w4?: number;
  w5?: number;
  w6?: number;
  userId?: Pengguna;
}

export interface BobotAPI {
  results: Bobot[];
  count: number;
}
