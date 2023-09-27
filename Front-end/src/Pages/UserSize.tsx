import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { manInputs, womanInputs } from '../database/inputs';
import { useActionData } from 'react-router-dom';
import { GendersType, UserSizesArrayType } from '../types/AppTypes';
import { ownerDetails } from '../database/ownerData';
import UserForm from '../Components/UserForm';
//css
import "../css/UserSize.css";



//icons:
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';




////////////////////////////////
export default function UserSize() {
  const { id } = useParams();
  const userGender = id;
  const genderInputs = userGender === "men" ? manInputs : womanInputs;
  const userSizes: UserSizesArrayType = useActionData() as UserSizesArrayType;
  const [calculationStatus, setCalculationStatus] = useState<"unStarted" | "pending" | "complete">("unStarted");

  useEffect(() => {
    if (userSizes) {
      setCalculationStatus("pending");
      setTimeout(() => {
        setCalculationStatus("complete");
      }, 2500);
    } else {
      setCalculationStatus("unStarted");
    }
  }, [userSizes]);


// rendering the app
  /////////////
  const renderContent = () => {
    if (calculationStatus === "unStarted") {
      return (
        <div>
          <UserForm
          gender={userGender as GendersType}
          inputs={genderInputs}
          id={id as GendersType}
          resultReceived={userSizes ? true : false}
        />
        </div>
        
      );
    } else if (calculationStatus === "pending") {
      return <div className=''>
       <span className='circular-loader-container '>
        {<LoopRoundedIcon sx={{ fontSize: 100 }} className='animate rotate animate--infinite animate--slow' />}</span>
       <h1>Loading...</h1>
      </div> ;
    } else {
      if (userSizes && userSizes.includes("None")) {
        return (
          <div>
            <h1>No Result</h1>
            <p>It seems like your measurements do not match our sizing, please review your inputs again or contact our support for better guidance</p>
            <button className='contact-support-btn'><a target='_blank' rel="noreferrer" href={ownerDetails.whatsAppLink}>Contact Support</a></button>
          </div>
        );
      } else if (userSizes && userSizes.length > 1) {
        return (
          <div>
            <h2>{"It seems like you have 2 matching sizes"}</h2>
            <div className='user-size-div animate slideInLeft animate--slow'>
            <h1 >{userSizes[0]}</h1>
            </div>
            <div className='user-size-div animate slideInRight animate--slow '>
            <h1 >{userSizes[1]}</h1>
            </div>
           
          </div>
        );
      } else if (userSizes && userSizes.includes("None") === false) {
        return <div>
          <h2>{"Your size is"}</h2>
          <div className='user-size-div animate slideInLeft animate--slow'>
            <h1 >{userSizes}</h1>
          </div>
          </div>;
      }
    }
  };

  return (
    <div className='UserSize'>
      {renderContent()}
      {calculationStatus === "complete" && <button onClick={()=> { window.location.reload()}}
      className='calc-again-btn animate appear 
      animate--delay2s animate--slower animate--fillBackwards'>
        Calculate again</button>}
    </div>
  );
}
