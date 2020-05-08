export function getHostName(link) {
  return new URL(link).hostname;
}
