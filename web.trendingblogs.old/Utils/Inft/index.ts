export type SubHeaderProps = {
    classData?: string;
    title?: string;
    categories?: {
        [key: string]: string | undefined;
    }[];
};


export interface LayoutProps {
    children?: JSX.Element[] | JSX.Element;
}

export type CssProps = {
    [key: string]: string | undefined
};