import axios from 'axios'
import { loadAbort } from '../utils/load-abort-axios.utility'
import { axiosPrivateInstance, axiosPublicInstance } from '../utilities/axios-instances'

const users_url = `${import.meta.env.VITE_BACKEND_URL}api/users/`

export const getPlantations = () => {
  const controller = loadAbort()
  return {call: axiosPrivateInstance.get(users_url, {signal: controller.signal}), controller}
}

export const getIdPlantation = (id:number) => {
  const controller = loadAbort()
  return {call: axiosPrivateInstance.get(`${users_url}${id}`, {signal: controller.signal}), controller}
}

export const addUser = (data:{}) => {
  const controller = loadAbort()
  return {call: axiosPublicInstance.post(`${users_url}`, data, {signal: controller.signal}), controller}
}

export const getByIdUser = (id:number) => {
  const controller = loadAbort()
  return {call: axiosPrivateInstance.get(`${users_url}${id}`, {signal: controller.signal}), controller}
}

export const deletePlantation = (id:number) => {
  const controller = loadAbort()
  return {call: axiosPrivateInstance.delete(`${users_url}${id}`, {signal: controller.signal}), controller}
}

export const updateGroundOrThscm = (id:number, data:{}) => {
  const controller = loadAbort()
  return {call: axiosPrivateInstance.put(`${users_url}${id}/`, data, {signal: controller.signal}), controller}
}