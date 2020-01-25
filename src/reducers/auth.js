import { LOGIN, FETCH_USERS, FETCH_USERS_DETAILS, FETCH_STAFF_DETAILS, CLEAR, FETCH_STAFFS } from '../constants';

const initialState = {
  user: {},
  userDetails: {},
  staffDetails: {},
  users: [],
  staffs: []
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      let user = Object.assign({}, action.payload);
      return {
        ...state,
        user
      }
    case FETCH_USERS:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
      case FETCH_STAFFS:
        return {
          ...state,
          staffs: [...state.staffs, action.payload]
        }
    case FETCH_USERS_DETAILS:
      let userDetails = Object.assign({}, action.payload);
      return {
        ...state,
        userDetails: userDetails
      }
      case FETCH_STAFF_DETAILS:
      let staffDetails = Object.assign({}, action.payload);
      return {
        ...state,
        staffDetails: staffDetails
      }
    case CLEAR:
      let empty = {};
      return {
        ...state,
        user: empty,
        staffs: [],
        users: [],
        userDetails: empty,
        staffDetails: empty
      }
    default:
      return state;
  }
}