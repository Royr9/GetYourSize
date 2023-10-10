

export type GendersType = "men" | "women"

export type UserSizesType = "XS" |"S" | "M" | "L" | "XL" |"None" 
export type UserSizesArrayType = UserSizesType[];

export type CalculationStatusType = "inactive" | "pending" | "complete" 



export type InputsNameType = ["height","hip","chest?", "waist?"]

export type InputsType ={
    height: number,
    hip: number,
    chest?: number,
    waist?: number
}