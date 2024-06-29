// List of array of cities
//Change first letter of city in uppercase and remaining in lowercase.

const cities = ['deHli', 'punE', 'banGaloRe', 'mUmBai', 'kolKaTa'];

for (let city of cities) {
    //console.log(city);
    const lowercase = city.toLowerCase();
    // console.log(lowercase);
    const firstLetter = lowercase.slice(0, 1);
    // console.log(firstLetter);
    const changeFirstLetter = lowercase.replace(firstLetter, firstLetter.toUpperCase());
    // console.log(changeFirstLetter);
    let listItem = document.createElement('li');
    listItem.textContent = changeFirstLetter;
    //console.log(listItem);
    list.appendChild(listItem);
}

