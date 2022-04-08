// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];


document.getElementById('country').addEventListener('input', e => {
    // 1. create a list of countries filtered by input
    // 2. create an array of option tags from that array
    // 3. clear the old stale of options
    // 4. Populate select tag from the array in step 2
    const search = e.target.value;
    const result = countryList.filter(x => x.includes(search));
    const suggestionsNode = document.getElementById('suggestions');
    suggestionsNode.innerHTML = "";
    if(result.length == 0 || search.length == 0) {
        return;
    } else {
        result.forEach(x => {
            const option = document.createElement('option');
            option.classList.add('suggestion')
            option.innerHTML = x;
            suggestionsNode.appendChild(option);
        });
    }
    console.log(search);
})