import { observable, computed, action } from 'mobx'
import config from '../config'
import axios from 'axios'

class Store {
  @observable
  user = null

  @action
  updatePreferences = async preferences => {
    const { API_URL } = config
    try {
      const res = await axios.post(
        `${API_URL}/user/preferences/update`,
        preferences,
      )
      this.user.preferences = res.data
    } catch (error) {
      window.location.href = '/login'
    }
  }

  @action
  fetchUser = async () => {
    const token = localStorage.getItem('access_token')
    if (token) {
      const { API_URL } = config
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      try {
        const res = await axios.get(`${API_URL}/user`)
        this.user = res.data
      } catch (error) {
        window.location.href = '/login'
      }
    } else {
      window.location.href = '/login'
    }
  }

  @action
  register = async (username, password) => {
    const { API_URL } = config
    try {
      const res = await axios.post(`${API_URL}/user/register`, {
        username,
        password,
      })
      window.location.href = '/login'
    } catch (error) {
      return alert(error.response.data)
    }
  }

  @action
  login = async (username, password) => {
    const { API_URL } = config

    try {
      const res = await axios.post(`${API_URL}/user/login`, {
        username,
        password,
      })
      const token = res.data.token
      localStorage.setItem('access_token', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      window.location.href = '/'
    } catch (error) {
      return alert(error.response.data)
    }
  }

  @action
  logout = async () => {
    localStorage.removeItem('access_token')
    window.reload()
  }
}

export default new Store()
