import { useLoaderData } from "@remix-run/react";
import { getAllPosts } from "../models/posts.server";
import avatar from "../../public/img/me.jpeg";
import { dateformat } from "../utils/dateFormat";
import { useEffect } from "react";

export function meta() {
  return [{ title: "RicardoGmz - WebDeveloper" }];
}

export async function loader() {
  const posts = await getAllPosts();

  return posts;
}

export default function Index() {
  const posts = useLoaderData().data;

  useEffect(() => {
    if (typeof document === "undefined") {
    } else {
      let eyes = document.querySelectorAll(".eye");
      let eyeRect = eyes[0].getBoundingClientRect();
      let container = document.querySelector(".eyes-container");

      let containerRect = container.getBoundingClientRect();

      document.addEventListener("mousemove", eyesFollow, false);

      function eyesFollow(e) {
        requestAnimationFrame(() => {
          let xPos = e.pageX;
          let yPos = e.pageY;

          let xDiff = eyeRect.x + eyeRect.width / 2 - xPos;
          let yDiff = eyeRect.y + eyeRect.height / 2 - yPos;

          let angle = (Math.atan2(yDiff, xDiff) * 180) / Math.PI;

          container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");

          let mouseXRelativeToContainer =
            xPos - containerRect.x - containerRect.width / 2;
          let mouseYRelativeToContainer =
            yPos - containerRect.y - containerRect.height / 2;

          let containerXAngle =
            60 * (mouseXRelativeToContainer / window.innerWidth);
          let containerYAngle =
            -1 * 60 * (mouseYRelativeToContainer / window.innerHeight);

          container.style.setProperty(
            "--xAngle",
            containerXAngle.toFixed(2) + "deg"
          );
          container.style.setProperty(
            "--yAngle",
            containerYAngle.toFixed(2) + "deg"
          );
        });
      }
    }
  }, []);
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
