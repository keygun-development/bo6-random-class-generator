export type Item<T extends string = string> = {
    name: T;
    image: string;
    description?: string;
};

export type Attachment<T extends string = string> = Item<T> & {
    pros?: string[];
    cons?: string[];
};
