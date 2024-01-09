export interface IState {
    segments: IValue[];
}

export interface IValue {
    width:string;
    length:string;
    bgColor: string;
    count: string;
    id:string;
}


export interface IStore {
    segments: IState
}
