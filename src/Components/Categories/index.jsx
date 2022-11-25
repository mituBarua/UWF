import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const labels = [
  { name: "About", link: "/about", slug: "about" },
  { name: "Projects", link: "/projects", slug: "project" },
  { name: "Appeals", link: "/appeals", slug: "appeal" },
  { name: "Campaign", link: "/campaign", slug: "campaign" },
  { name: "News", link: "/news", slug: "news" },
];

const Categories = () => {
  const location = useLocation();

  const selectedItem = labels.filter(
    ({ slug }) => location.pathname.includes(slug) > 0
  );

  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        {labels.map(({ name, link }) => (
          <li>
            <a
              style={
                selectedItem[0]?.name == name
                  ? { color: "#a11117de",fontWeight:'bold' }
                  : null
              }
              href={link}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
