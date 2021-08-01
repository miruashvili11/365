import { EDIT_MODAL_OPEN, MODAL_OPEN } from "../contetnt/actionTypes";

export const modalOpenAction = (value) => {
  return {
    type: MODAL_OPEN,
    payload: value,
  };
};
 export const  editModalOpenAction = (value) =>{
   return{
     type : EDIT_MODAL_OPEN,
     payload: value,
   }
 }
