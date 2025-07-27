export const MenuNames = {
  DASHBOARD: 'dashboard',
  ADMIN: 'admin',
  EXAMPLE: 'example',
  FORM: 'form',
  TABLE: 'table',
  ECHARTS: 'echarts',
  FILE_MANAGER: 'file manager',
  MARKDOWN_VIEWER: 'markdown viewer',
  OFFICIAL_WEBSITE: 'official website',
  DOCUMENT: 'document',
  BUG_FEEDBACK: 'bug feedback',
  SOURCE_CODE: 'source code',
  FORUM: 'forum',
} as const;

export type MenuNames = typeof MenuNames[keyof typeof MenuNames];
