// Generated by Xata Codegen 0.26.9. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "User",
    columns: [
      {
        name: "walletAddress",
        type: "string",
        notNull: true,
        defaultValue: "",
      },
      {
        name: "createdAt",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "email", type: "email", unique: true },
    ],
    revLinks: [
      { column: "owner", table: "Project" },
      { column: "user", table: "ApiKey" },
      { column: "userId", table: "ProjectTeamMembers" },
    ],
  },
  {
    name: "Project",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: "" },
      {
        name: "assetController",
        type: "string",
        notNull: true,
        defaultValue: "",
      },
      { name: "tokenFactory", type: "string", notNull: true, defaultValue: "" },
      { name: "owner", type: "link", link: { table: "User" } },
      {
        name: "createdAt",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      {
        name: "assetType",
        type: "text",
        notNull: true,
        defaultValue: "real estate",
      },
      {
        name: "web3Environment",
        type: "text",
        notNull: true,
        defaultValue: "mainnet",
      },
      { name: "treasuryWallet", type: "text", notNull: true, defaultValue: "" },
      { name: "enabledPaymentMethods", type: "multiple" },
    ],
    revLinks: [
      { column: "project", table: "TokenizedProperty" },
      { column: "project", table: "ActivityLog" },
      { column: "project", table: "ApiKey" },
      { column: "projectId", table: "ProjectTeamMembers" },
    ],
  },
  {
    name: "TokenizedProperty",
    columns: [
      { name: "project", type: "link", link: { table: "Project" } },
      { name: "tokenAddress", type: "text", notNull: true, defaultValue: "" },
      { name: "name", type: "text", notNull: true, defaultValue: "" },
      { name: "description", type: "text", notNull: true, defaultValue: "" },
      { name: "location", type: "text", notNull: true, defaultValue: "" },
      { name: "size", type: "float", notNull: true, defaultValue: "0" },
      { name: "tokenTicker", type: "string", notNull: true, defaultValue: "" },
      { name: "tokenPrice", type: "float", notNull: true, defaultValue: "0" },
      { name: "photos", type: "multiple" },
    ],
    revLinks: [{ column: "property", table: "AssetDocument" }],
  },
  {
    name: "AssetDocument",
    columns: [
      { name: "ownerType", type: "string", notNull: true, defaultValue: "" },
      { name: "ownerId", type: "string", notNull: true, defaultValue: "" },
      { name: "fileURI", type: "text", notNull: true, defaultValue: "" },
      { name: "label", type: "string", notNull: true, defaultValue: "" },
      { name: "fileSize", type: "float", notNull: true, defaultValue: "0" },
      { name: "fileType", type: "string", notNull: true, defaultValue: "" },
      { name: "property", type: "link", link: { table: "TokenizedProperty" } },
    ],
  },
  {
    name: "ActivityLog",
    columns: [
      { name: "category", type: "string", notNull: true, defaultValue: "" },
      { name: "title", type: "string", notNull: true, defaultValue: "" },
      { name: "ctaLink", type: "text" },
      { name: "ctaText", type: "string" },
      { name: "project", type: "link", link: { table: "Project" } },
    ],
  },
  {
    name: "ApiKey",
    columns: [
      { name: "apiKey", type: "string", unique: true },
      { name: "user", type: "link", link: { table: "User" } },
      {
        name: "project",
        type: "link",
        link: { table: "Project" },
        unique: true,
      },
    ],
  },
  {
    name: "ProjectTeamMembers",
    columns: [
      { name: "projectId", type: "link", link: { table: "Project" } },
      { name: "userId", type: "link", link: { table: "User" } },
      { name: "isActive", type: "bool" },
      { name: "roleId", type: "int" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type User = InferredTypes["User"];
export type UserRecord = User & XataRecord;

export type Project = InferredTypes["Project"];
export type ProjectRecord = Project & XataRecord;

export type TokenizedProperty = InferredTypes["TokenizedProperty"];
export type TokenizedPropertyRecord = TokenizedProperty & XataRecord;

export type AssetDocument = InferredTypes["AssetDocument"];
export type AssetDocumentRecord = AssetDocument & XataRecord;

export type ActivityLog = InferredTypes["ActivityLog"];
export type ActivityLogRecord = ActivityLog & XataRecord;

export type ApiKey = InferredTypes["ApiKey"];
export type ApiKeyRecord = ApiKey & XataRecord;

export type ProjectTeamMembers = InferredTypes["ProjectTeamMembers"];
export type ProjectTeamMembersRecord = ProjectTeamMembers & XataRecord;

export type DatabaseSchema = {
  User: UserRecord;
  Project: ProjectRecord;
  TokenizedProperty: TokenizedPropertyRecord;
  AssetDocument: AssetDocumentRecord;
  ActivityLog: ActivityLogRecord;
  ApiKey: ApiKeyRecord;
  ProjectTeamMembers: ProjectTeamMembersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Blocverse-hack-es1pni.us-east-1.xata.sh/db/taas-platform",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
