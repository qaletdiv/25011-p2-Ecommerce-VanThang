import api from "./axiosClient"

export const createOrderApi = (userId: string, address: string, phone: string ) =>
  api.post(`/orders/${userId}`, { address, phone })
export const fetchOrderApi = (userId: string) => api.get(`/orders/${userId}`)