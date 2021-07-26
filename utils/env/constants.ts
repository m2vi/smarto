import is_electron from "is-electron";
import is_docker from "is-docker";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";
export const isTesting = process.env.NODE_ENV === "test";
export const isElectron = is_electron();
// export const isDocker = is_docker();
export const isServer = typeof window === "undefined";

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
