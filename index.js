fetch('https://randomuser.me/api/?nat=es')
      .then(response => response.json())
      .then(json => {
        
        const obj = JSON.stringify(json.results)
        const objJSON = JSON.parse(obj)
        //console.log(objJSON[0])
        //Imagen
        const imgEl = document.getElementById('img')
        imgEl.innerHTML=`<img src=\"${objJSON[0].picture.large}\" alt=\"img\">`
        //Nombre
        const name = objJSON[0].name.first.concat(' ', objJSON[0].name.last)
        document.getElementById('nombre').innerHTML = name
        //email
        const email = objJSON[0].email
        document.getElementById('email').innerHTML = email
        //Usuario
        const user = objJSON[0].login.username
        document.getElementById('user').innerHTML = user
        //Nacimiento
        const date = objJSON[0].dob.date
        const newDate = date.split('T')
        document.getElementById('date').innerHTML = newDate[0]
        //Edad
        const age = objJSON[0].dob.age
        document.getElementById('age').innerHTML = age
        //Celular
        const cell = objJSON[0].cell
        document.getElementById('cell').innerHTML = cell
        //Calle
        const street = objJSON[0].location.street.name.concat(' ', objJSON[0].location.street.number)
        document.getElementById('street').innerHTML = street
        //CP
        const postcode = objJSON[0].location.postcode
        document.getElementById('postcode').innerHTML = postcode
        //Ciudad
        const city = objJSON[0].location.city
        document.getElementById('city').innerHTML = city
        //Estado
        const state = objJSON[0].location.state
        document.getElementById('state').innerHTML = state
        //Pais
        const country = objJSON[0].location.country
        document.getElementById('country').innerHTML = country
});