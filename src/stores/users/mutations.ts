export default {
  GET_USERS(state:any, payload:any) {
    state.user =  payload
    console.log(state)
  }
}