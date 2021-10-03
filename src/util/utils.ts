import { SCORE_PREFIX } from '@util/strings';

export function commaFormat(num: number): string {
  return num.toLocaleString();
}

export function scoreFormat(score: number): string {
  return score.toLocaleString() + SCORE_PREFIX;
}