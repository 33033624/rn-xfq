const initialState = {
  a : null,
  b : null,
}


export function test(state = initialState, action){
  switch(action.type) {
    case "TEST1" :
      return {
        a : action.a,
        b : action.b,
        c : action.c
      };
    case 'GET_USERS_LOANS' :
      if(action.data && action.data.length > 0) {
        return { ...state, loansOrder: action.data[0]}
      }
  }
  return state
}
