import http from 'src/ultils/http'
import { Category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>(URL)
  }
}

export default categoryApi
