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

export type ListItem = {
    name: string;
    label: string;
    request: string;
};

export type CarType = {
    id: string;
    license_plate: string;
    image_url: string;
    damage_severity: string;
    car_entry_date: string;
    car_leave_date: string;
    done: boolean;
};
