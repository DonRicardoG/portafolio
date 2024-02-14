export async function getAllProjects() {
  const res = await fetch(`${process.env.API_URL}/projects?populate=image`);
  const data = await res.json();

  return data;
}
