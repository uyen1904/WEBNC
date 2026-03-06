import { IBitcoinTime } from './BitcoinTime';
import { IBitcoinBPI } from './BitcoinBPI';

export interface IBitcoinPrice {
  time: IBitcoinTime;
  disclaimer: string;
  chartName: string;
  bpi: IBitcoinBPI;
}