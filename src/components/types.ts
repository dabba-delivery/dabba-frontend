export type ComponentStyle = "orange" | "blue";
export type ComponentSize = "small" | "medium" | "big";

export interface ICounter {
    initialValue: number;
    step: number;
    limit: number;
    func: Function;
    style: ComponentStyle;
    classNamesBox: string;
    classNamesText: string;
    classNames: string;
    size: ComponentSize;
}
