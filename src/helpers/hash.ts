export function hash(aString: string): string {
  let hash: number = 0;
  let i:number, chr:number;
  const len: number = aString.length;
  for (i = 0; i < len; i++) {
    chr   = aString.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}