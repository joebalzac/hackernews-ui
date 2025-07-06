export interface News {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface Comments {
  by: string;
  id: number;
  kids?: number[];
  parents: number;
  text: string;
  time: number;
  type: string;
}
