import userServices from "@/services/user-services"

export default {
  async getUsers(context: any) {
    await userServices.listUsers().then(res => {
      console.log(res.data)
      context.commit('GET_USERS', res.data)
    })
  }
}