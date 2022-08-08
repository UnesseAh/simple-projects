const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const breedsObject = data.message; // Turn the message into an object
    const breedsArray = Object.keys(breedsObject); // Turn the object into an arary
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option"); // <option></option>
      option.value = breedsArray[i]; // <option value='breed'></option>
      option.innerText = breedsArray[i]; // <option value='breed'>breed</option>
      select.appendChild(option); // adds current <option> tag to the select box list of options
    }
  });

select.addEventListener("change", (event) => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  console.log(url);
});
