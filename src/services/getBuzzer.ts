const base_url = 'https://backed-buzzer-finder.et.r.appspot.com/buzzerfinder';

export async function fetchBuzzer() {
  return fetch(`${base_url}`);
}
