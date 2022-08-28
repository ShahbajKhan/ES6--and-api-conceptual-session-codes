const person = {
    found:2,
    message:"Found 2 persons",
    result:[
      {
          name: {
              common: "John",
              fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
              street: "13/A St Joseph",
              house: 10,
            },
      },
      {
          name: {
              common: "Humayoun",
              fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
              street: "13/A St Lucia",
              house: 11,
            },
      },
    ]
  };

  // [{.......},{........}]


  const {found, message, result}= person;
  console.log(result)
// without destructuring
  // person.result.forEach(singlePerson={})

  // destructure
document.getElementById("results-found").innerText = `Found ${found} persons  ${message}`
  result.forEach((singlePerson, index)=>{
    console.log(singlePerson);
    const cardContainer =document.getElementById("card-container");
    const personCard = document.createElement("div");
    personCard.classList.add("col");
    personCard.innerHTML =`
    <div class="card shadow-lg">
        
        <div class="card-body">
          <h5 class="card-title">Common Name: ${singlePerson.name.common}</h5>
          <p class="card-text">age: ${singlePerson.age}</p>
          <p class="card-text">Street: ${singlePerson.address.street}, House No.: ${singlePerson.address.house}</p>
        </div>
    </div>
    `
    cardContainer.appendChild(personCard);
  })

