export interface Kriteria {
  _id?: string;
  kode?: string;
  keterangan?: string;
}

export interface KriteriaAPI {
  results: Kriteria[];
  count: number;
}
