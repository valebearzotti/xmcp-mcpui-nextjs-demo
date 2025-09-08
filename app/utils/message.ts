// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function postMessageToParent(message: any) {
  console.log('Sending message:', message);
  if (typeof window !== 'undefined' && window.parent) {
    window.parent.postMessage(message, '*');
  }
}
