export type CheckInType = {
  account: string;
  accountDisplay: string;
  dateTime: string;
  diagnosId: number;
  code: number;
};

export type OptionType = {
  value: number;
  label: string;
};

export type DiagnosType = {
  id: number;
  diagnosName: string;
};

export type Treatment = {
  [key: string]: string | undefined;
};
