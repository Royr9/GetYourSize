
import { UserSizesType, ActionTypeArgs, GendersType, InputsType, UserSizesArrayType } from "../types/AppTypes";

import { menSizeData } from "../database/menSizes";
import { womenSizeData } from "../database/womenSizes";


export async function SizeAction({request, params}:ActionTypeArgs) {

    const {id: userGender } = params! as {id: GendersType};

    const data = await request.formData();

    let inputsData: InputsType;

    let userSize: UserSizesArrayType = [];
    
    
    
    if (userGender === "men") {
         inputsData = {
            height: parseInt(data.get("Height") as string),    
            hip: parseInt(data.get("Hip") as string)    
        };    
    } else {
         inputsData = {
            height: parseInt(data.get("Height") as string),   
            hip: parseInt(data.get("Hip") as string),    
            chest: parseInt(data.get("Chest") as string),
            waist: parseInt(data.get("Waist") as string)
        }; 
    }



function findUserSize({height, hip, chest, waist}: InputsType) {
    if (userGender === "men") {
          menSizeData.forEach(entry =>{
        const { heightRange, hipRange, size } = entry;
        if (height >= heightRange.min && height <= heightRange.max 
            && hip >= hipRange.min && hip <= hipRange.max
            ) {
                userSize.push(size as UserSizesType)
        }
    });
    } else if (userGender === "women") {
        womenSizeData.forEach(entry =>{
            const {heightRange, hipRange, chestRange , waistRange ,size } = entry;


            let matchingEntriesCount = 0; 
            if (height >= heightRange.min && height <= heightRange.max) {
                matchingEntriesCount++
            }if (hip >= hipRange.min && hip <= hipRange.max) {
                matchingEntriesCount++
            }if (waist! >= waistRange.min && waist! <= waistRange.max) {
                matchingEntriesCount++
            }if (chest! >= chestRange.min && chest! <= chestRange.max) {
                matchingEntriesCount++
            }

            if (matchingEntriesCount >= 3) {
                userSize.push(size as UserSizesType);
            }else  if (matchingEntriesCount === 2) {
                userSize.push(size as UserSizesType);
            }
           
        });
        }
        if (userSize.length === 0) {
            userSize = ["None"]
        }
        return userSize
    } 
    return findUserSize(inputsData);
}

    //send post request


    //redirect users
    

    
  

