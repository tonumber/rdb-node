const axios = require('axios')

class DB {
  constructor(url) {
    console.log("Initialized.")
    this.url = url
  }
  getcurrenturl(key) {
  return(this.url)
  }
  async get(key) {
    var req = await axios.get(this.url+"/get/"+key)
    return req.data
  }
  async set(key,value) {
    var req = await axios.get(this.url+"/set/"+key+"/"+value)
    return req.data
  }
  async delete(key) {
        var req = await axios.get(this.url+"/delete/"+key)
    return req.data
  }
  async delall() {
    var req = await axios.get(this.url+"/delall")
    return req.data
  }
  async list() {
    var req = await axios.get(this.url+"/list")
    return req.data
  }
}

module.exports = DB;
