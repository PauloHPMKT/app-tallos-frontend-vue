export default {
  GET_USERS(state: any, payload:any) {
    console.log(state, payload)
    state.users = payload
  },

  LOGIN(state: any, payload: any) {
    state.userName = payload.name
    state.userEmail = payload.email
    state.userId =  payload.sub
    state.userAvatar = payload.avatar 
  }
}