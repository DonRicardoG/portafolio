import { useLoaderData } from "@remix-run/react";
import { getAllPosts } from "../models/posts.server";
import avatar from "../../public/img/me.jpeg";
import { dateformat } from "../utils/dateFormat";

export function meta() {
  return [{ title: "RicardoGmz - WebDeveloper" }];
}

export async function loader() {
  const posts = await getAllPosts();

  return posts;
}

export default function Index() {
  const posts = useLoaderData().data;

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id} className="feed-container">
          <div className="feed-heading">
            <div className="feed-title">
              <img className="avatar-feed" src={avatar} alt="avatar logo" />
              <div className="avatar-title">
                <div className="name-status">
                  <p>Ricardo Gomez</p>
                  <span className="feed-status">
                    {post.attributes.status[0]}
                  </span>
                </div>
                <span className="date-feed">
                  {dateformat(post.attributes.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="feed-post-content">
            <h1>{post.attributes.Title}</h1>
            <img
              src={post.attributes.image.data.attributes.url}
              alt={`Image of post: ${post.attributes.Title}`}
            />
            <p>{post.attributes.content}</p>
          </div>
        </article>
      ))}
    </main>
  );
}
