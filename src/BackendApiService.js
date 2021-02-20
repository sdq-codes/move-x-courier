import axios from 'axios'
import constant from './constants.js'
const APIURL = constant.PROD // change when in production to api_url.PROD
export class APIService {
  getSessionID () {
    const url = `${APIURL}/auth`
    const jsonData = JSON.stringify({
    params: {
        login: constant.LOGIN,
        password: constant.PASSWORD,
        db: constant.DB,
      },
    })
    var config = {
      method: 'post',
      url: url,
      headers: {
        'Content-type': 'application/json',
      },
      data: jsonData,
    }
    var response = axios(config)
    // will test this when I am doing the login on the template
    return response
  }

  registerUser (registerationDetails, sessionID) {
    const url = `${APIURL}/api/delivery.request.customer/?session_id=${sessionID}`
    const dataMan = {
      params: {
        data: registerationDetails,
      },
    }
    const response = axios.post(url, dataMan)
    return response
  }

  loginUser (email, password, sessionID) {
    const url = `${APIURL}/api/delivery.request.customer`
    const response = axios.get(url, {
      params: {
        session_id: sessionID,
        query: '{id,name,is_courier}',
        filter: `[["customer_email", "=", "${email}"], ["customer_password", "=", "${password}"]]`,
      },
    })
    return response
  }

  createDeliveryRequest (deliveryDetails, sessionID) {
    const url = `${APIURL}/api/delivery.request`
    var config = {
      method: 'post',
      url: url,
      params: { session_id: sessionID },
      headers: {
        'Content-type': 'application/json',
      },
      data: JSON.stringify(deliveryDetails),
    }
    var response = axios(config)
    return response
  }

  fetchDeliveryRequests (userId, sessionID) {
    //  fetch the user deliveries using the user ID
    // const filter = "[['customer', '=', 1]]"
    const url = `${APIURL}/api/delivery.request`
    const response = axios.get(url, {
      params: {
        session_id: sessionID,
        filter: `[["customer", "=", ${userId}]]`,
      },
    })
    return response
  }

  updateDeliveryRequest (deliveryDetails) {
    // update the delivery request
  }
}
