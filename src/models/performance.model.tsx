export interface Performance {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: {
        value: number;
        kind: number;
    }[];
}