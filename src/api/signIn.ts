import axios from "axios";

const instance = axios.create({
  baseURL: "https://landing-pageserver.herokuapp.com",
})

interface ISignIn {
  name: string,
  company: string,
  email: string,
  contact: string
}

export default {
  saveData: (data: ISignIn) => new Promise((resolve, reject) => {
    instance.post(
      '/users', data
    ).then(response => {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        reject(new Error('CouldNotConnect'))
      }
    }).catch(err => {
      reject(err)
    })
  }),
}