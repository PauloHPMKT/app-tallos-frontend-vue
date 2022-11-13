import userServices from "@/services/user-services"
import jwtDecode from "jwt-decode"

export default {
  async getUsers(context: any) {
    console.log(context)
    await userServices.listUsers().then(res => {
      context.commit('GET_USERS', res.data)
    })
  },

  async login(context: any, data: object) {
    console.log(data)
    await userServices.login(data).then(res => {
      console.log(res.data);
      const validToken = res.data.access_token
      
      if (validToken) {
        localStorage.setItem('token', validToken)

        const decode = jwtDecode(validToken)
        
        context.commit('LOGIN', decode)

        //location.replace('/app/admin')
      }
    })
  }
}