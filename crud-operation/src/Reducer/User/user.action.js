export const AddUser = "AddUser";
export const EditUser = "EditUser";
export const DeleteUser = "DeleteUser";

export const AddCardDetails = (data) => {
  return {
    type: AddUser,
    payload: data,
  };
};

export const EditUserDetails = (data) => {
  return {
    type: EditUser,
    payload: data,    
  };
};

export const DeleteUserDetails = (data) => {
  return {
    type: DeleteUser,
    payload: data,
  };
};
