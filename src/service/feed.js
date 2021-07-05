export async function fetchFeeds() {
  const response = await fetch('http://localhost:3333/feeds')

  return response.ok ? response.json() : []
}
