export type Lang = 'en' | 'ar';
export type Currency = 'EGP' | 'USD' | 'SAR';

export interface Tour {
  id: string;
  imageUrl: string;
  title: Record<Lang, string>;
  smallDescription: Record<Lang, string>;
  detailedDescription: Record<Lang, string>;
  price: number; // in EGP
  date: string;
}
