export function formatNumber(num: number): string {
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1).replace(/\.0$/, '')}M`
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1).replace(/\.0$/, '')}k`
  } else {
    return num.toString()
  }
}
