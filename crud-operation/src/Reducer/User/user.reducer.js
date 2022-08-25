import { AddUser, DeleteUser, EditUser } from "./user.action";

export const initialState = {
  user_list: [
    {
      id: 1,
      FullName: "chermaraja",
      PhoneNumber: "9486741699",
      UserName: "chermaraja@gmal.com",
      CompanyName: "Google",
      State: "tamil",
      Zip: "77777",
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AddUser: {
      return {
        ...state,
        user_list: [...state.user_list, payload.payload],
      };
    }
    case DeleteUser: {
      const list = state.user_list.filter(
        (item) => item.age !== payload.payload
      );
      return {
        ...state,
        user_list: list,
      };
    }
    case EditUser: {
      const id = payload.payload.id;
      const list = state.user_list.map((list) => {
        if (list.id === id) {
          list = payload.payload;
        }
        return list;
      });
      return {
        ...state,
        user_list: list,
      };
    }
    default:
      return state;
  }
};

export default reducer;
