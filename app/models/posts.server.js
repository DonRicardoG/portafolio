export async function getAllPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=image`);
  console.log(process.env.API_URL);
  const data = await res.json();
  return data;
}
