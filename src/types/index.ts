export type Attachment<T extends string = string> = {
    name: T;
    image: string;
    description?: string;
    pros?: string[];
    cons?: string[];
};

export type Melee<T extends string = string> = {
    name: T,
    description: string,
    image: string,
}