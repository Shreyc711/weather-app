fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyAmlRtE1Ggrzz-iSUAWGIcmØmmi7GXbKtI&libraries=places")
.then(res => res.json()) // parse response as JSON
.then(data => {

  console.log(data)
  
 
})
.catch(err => {
    console.log(`error ${err}`)
});