export function isProdHost(): boolean {
  return (
    window.location.hostname.startsWith('www') ||
    window.location.hostname.startsWith('app')
  );
}
