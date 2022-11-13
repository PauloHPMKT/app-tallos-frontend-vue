import { ApiService } from './http'

export default {
  createUser: (data: object) => {
    return ApiService.post('/api/register', data)
  },
  listUsers: () => {
    return ApiService.get('/api/listusers')
  },
  login: (data: object) => {
    return ApiService.post('/login', data)
  }
}
