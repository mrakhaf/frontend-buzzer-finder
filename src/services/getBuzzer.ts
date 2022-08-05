const base_url = 'http://127.0.0.1:5000/buzzerfinder';

export async function fetchBuzzer() {
  return fetch(`${base_url}`);
}
