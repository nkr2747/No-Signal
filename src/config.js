const configured = process.env.REACT_APP_API_URL;

const origin =
  configured !== undefined && configured !== ""
    ? configured.replace(/\/+$/, "")
    : process.env.NODE_ENV === "production"
    ? ""
    : `${window.location.protocol}//${window.location.hostname}:4000`;

export const ASSET_URL = origin;
export const API_URL = `${origin}/api`;
