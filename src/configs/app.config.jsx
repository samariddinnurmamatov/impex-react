const API_BASE_URL = process.env.REACT_APP_API;
const PORT = process.env.REACT_APP_API_PORT || 8000;

const hostname = window.location.hostname;
const parts = hostname.split(".");
let subdomain = "";

// If the domain has more than two parts (e.g., subdomain.domain.com)
if (parts.length > 2) {
  subdomain = parts[0];
}

const api =
  subdomain?.includes("test")
    ? process.env.REACT_APP_URL_TEST
    : process.env.REACT_APP_API;

const apiPrefix = `${api}:${PORT}`;

const appConfig = {
  apiPrefix,
  authenticatedEntryPath: "/main",
  unAuthenticatedEntryPath: "/sign-in",
  tourPath: "",
  enableMock: false,
};

export default appConfig;
