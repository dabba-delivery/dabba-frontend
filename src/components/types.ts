type ComponentStyle = "orange" | "blue";
type ComponentSize = "small" | "medium" | "big";

export interface IButton {
    onClick?: () => void;
    style?: ComponentStyle;
    classNames?: string;
    children?: string | JSX.Element;
}

export interface ICartItem {
    position: TypePosition;
    amount: number;
    handleDelete: (position: object) => void;
}

type TypePosition = {
    name: string;
    weigh: number | string;
    price: number | string;
};
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

export interface IInput {
    name: string;
    style: ComponentStyle;
    classNames: string;
    classNamesBox: string;
    onChange: (val: React.ChangeEvent) => void;
    children: React.ReactNode;
    type: string;
    inputName: string;
}

export interface IStatus {
    classNames: string | number;
    trueMessage: string | number;
    falseMessage: string | number;
    current: boolean;
}

export interface IToggle {
    onClick: Function;
    classNames: string;
    style: ComponentStyle;
}
