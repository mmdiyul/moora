import { Peran } from './peran';

export interface Pengguna {
  _id?: string;
  nama?: string;
  email?: string;
  roleId?: Peran;
}

export interface PenggunaAPI {
  results: Pengguna[];
  count: number;
}
