
import { UserSizesType, InputsType, UserSizesArrayType } from "../types/AppTypes";
import { ActionFunctionArgs,  } from "react-router-dom"
import { menSizeData } from "../database/menSizes";
import { womenSizeData } from "../database/womenSizes";




export async function SizeAction({request, params}:ActionFunctionArgs) {

 

    const data = await request.formData();

    const userGender = data.get("gender");
 

    let inputsData: InputsType;

    let userSize: UserSizesArrayType = [];
    
    
    
    if (userGender === "men") {
         inputsData = {
            height: parseInt(data.get("Height") as string),    
            hips: parseInt(data.get("Hips") as string)    
        };    
    } else {
         inputsData = {
            height: parseInt(data.get("Height") as string),   
            hips: parseInt(data.get("Hips") as string),    
            chest: parseInt(data.get("Bust") as string),
            waist: parseInt(data.get("Waist") as string)
        }; 
    }



function findUserSize({height, hips, chest, waist}: InputsType) {
    if (userGender === "men") {
          menSizeData.forEach(entry =>{
        const { heightRange, hipRange, size } = entry;
        if (height >= heightRange.min && height <= heightRange.max 
            && hips >= hipRange.min && hips <= hipRange.max
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
            }if (hips >= hipRange.min && hips <= hipRange.max) {
                matchingEntriesCount++
            }if (waist! >= waistRange.min && waist! <= waistRange.max) {
                matchingEntriesCount++
            }if (chest! >= chestRange.min && chest! <= chestRange.max) {
                matchingEntriesCount++
            }

            if (matchingEntriesCount >= 2) {
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
    

    
  

