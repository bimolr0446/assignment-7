export interface ProductType {
  id: number;
  nameBn: string;
  categoryIcon: string;
  categoryNameBn: string;
  today: number;
  unit: string;
  image: string;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;

  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };

  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];

  category: {
    id: number;
    nameBn: string;
    slug: string;
    icon: string;
  };
}
export interface NavType {
  id: string;
  icon: string;
  nameBn: string;
}