export type ComponentStyle = "orange" | "blue";
export type ComponentSize = "small" | "medium" | "big";
export type TypeData = {
    data: IHeader;
};

export interface IButton {
    onClick: () => void;
    style?: ComponentStyle;
    classNames?: string;
    children: string | JSX.Element;
}

export interface ICartItem {
    position: IDish;
    amount: number;
    handleDelete: Function;
}

export interface ICounter {
    initialValue: number;
    step: number;
    limit: number;
    func: Function;
    style?: ComponentStyle;
    classNamesBox?: string;
    classNamesText?: string;
    classNames?: string;
    size?: ComponentSize;
}

export interface IInput {
    name: string;
    style?: ComponentStyle;
    classNames?: string;
    classNamesBox?: string;
    onChange: (val: React.ChangeEvent) => void;
    children?: React.ReactNode;
    type?: string;
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

export interface IBinContext {
    items: Map<IDish, { val: number }>;
    addPosition: (id: IDish) => void;
    removePosition: (id: IDish) => void;
    countPositions: () => number;
}

export interface IPosition {
    name: string;
    link: string;
    ingridients: string;
    cost: number;
    id: IDish;
    weight: number;
}

export interface IDish {
    pictureUrl: string;
    name: string;
    description: string;
    weigh: number | string;
    price: number;
}

export interface ITime {
    openTime: string | undefined;
    closeTime: string | undefined;
}

export interface IInfo {
    rating: number | undefined;
    contactPhone: string | undefined;
    kitchenType: string | undefined;
    email: string | undefined;
}

export interface IHeader {
    name?: string;
    address?: string;
    logoUrl?: string;
    contactPhone?: string;
    kitchenType?: string;
    email?: string;
    openTime?: string;
    closeTime?: string;
    coordinates?: string;
    dishes?: [];
    serviceRadius?: number;
}
