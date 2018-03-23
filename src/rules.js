import fetch from "node-fetch"
import config from './config/config'

export default async (body) => {
  console.log(body);
  const score = await fetch(config.rules.url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  return score;
}
