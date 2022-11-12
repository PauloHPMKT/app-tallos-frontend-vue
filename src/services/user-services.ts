import { ApiService } from './http'

export default {
  listUsers: () => {
    return ApiService.get('/teste')
  }
}
