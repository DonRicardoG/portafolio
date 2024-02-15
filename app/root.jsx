import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import styles from "./style/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import StaticInfo from "./components/staticInfo";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,400&display=swap",
    },
  ];
};

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

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <Header />
        <StaticInfo />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className="error">
          <p>{error.statusText}</p>
          <Link to="/">Return Home</Link>
        </div>
      </Document>
    );
  }
}
