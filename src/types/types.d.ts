export interface ISSLConfig {
  rejectUnauthorized: boolean;
  ca: string;
  key: string;
  cert: string;
}

export type DatabaseConfig = {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string | (() => string);
  ssl?: boolean | ISSLConfig;
  binary?: boolean;
  client_encoding?: string;
  application_name?: string;
  fallback_application_name?: string;
  idleTimeoutMillis?: number;
  max?: number;
  query_timeout?: number;
  keepAlive?: boolean;
  allowExitOnIdle?: boolean;
};

export type Object = {
  [key: string]: string;
};

export type Authentication = {
  name: string;
  password: string;
};

export type User = {
  readonly user_id: number;
  name: string;
  password: string;
};
