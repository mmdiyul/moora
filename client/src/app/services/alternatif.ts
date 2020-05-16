export interface Alternatif {
  _id?: string;
  nama?: string;
  c1?: number;
  c2?: number;
  c3?: number;
  c4?: number;
  c5?: number;
  c6?: number;
}

export interface AlternatifAPI {
  results: Alternatif[];
  count: number;
}
