import axios from "axios";

class GoogleMapAPi {
  constructor() {}

  async getPlaces(text) {
    let proxy = "https://cors-mj.herokuapp.com/";
    let config = {
      method: "get",
      url:
        proxy +
        "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
        encodeURI(text) +
        "&key=AIzaSyA1NLgxATIGTlJI8DM1YHs51fiE_7XjOKg",

      headers: {},
    };
    return axios(config)
      .then(function (response) {
        return Promise.resolve(response.data);
      })
      .catch(function (error) {
        return Promise.reject(error);
      });
  }
}
export default new GoogleMapAPi();
