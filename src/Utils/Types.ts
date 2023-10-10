export type FetchResponseGET<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
  response: data | null;
  error: any;
  loading: boolean;
  fetcher: (arg: param, token?: string, isForm?: boolean) => any;
};
