//api.unsplash.com
let searchform = document.querySelector(".search-form");
let searchinput = document.querySelector(".search-input"); //search-box
let searchresult = document.querySelector(".search-result");
let showbtn = document.querySelector(".showbtn");

let accessKey = 'ZyyL6py89tlyb92Xxb0wGpFvE6_kjSTy7IvWh2nds1M';
let keyword = "";
let page = 1;

async function search() {
    keyword = searchinput.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    let response = await fetch(url);
    let data = await response.json();

    if (page === 1) {
        searchresult.innerHTML = "";
    }

    let results = data.results;

    results.map((result) => {
        let image = document.createElement("img");
        image.src = result.urls.small;

        let imagelink = document.createElement('a'); // Fix variable name
        imagelink.href = result.links.html;
        imagelink.target = '_blank';
        imagelink.appendChild(image);

       searchresult.appendChild(imagelink);
    })

   // showbtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    search();
    showbtn.style.display = "block"; // Ensure that showbtn is visible after search
});

showbtn.addEventListener("click", () => {
    page++;
    search();
});

// Ensure that showbtn is initially hidden
//showbtn.style.display = "none";

