// Reference to the select element
const nationalitySelect = document.getElementById("nationality");

// Fetch the list of countries from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Sort the list of countries alphabetically by common name
    const sortedCountries = data.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    // Iterate through the sorted list and populate the select element
    sortedCountries.forEach((country) => {
      const option = document.createElement("option");
      // option.value = country.cca2; // You can use country codes as values
      option.value = country.name.common; // You can use country codes as values
      option.textContent = country.name.common;
      nationalitySelect.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });
