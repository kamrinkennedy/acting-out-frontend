import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="topnav">
      <Link className="topnav-link" to="/">
        Home
      </Link>
      <Link className="topnav-link" to="/actors">
        Actors
      </Link>
    </div>
  );
}
