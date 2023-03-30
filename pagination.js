const data = Array.from({ length: 50 }, (_, i) => i + 1);
const itemsPerPage = 10;

function displayPage(pageNumber, data) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  // Display page data on the webpage
}

function generatePaginationLinks(totalPages) {
  const paginationContainer = document.querySelector(".pagination ul");

  for (let i = 1; i <= totalPages; i++) {
    const paginationLink = document.createElement("a");
    paginationLink.href = "#";
    paginationLink.textContent = i;

    paginationLink.addEventListener("click", function () {
      displayPage(i, data);

      const currentActiveLink = document.querySelector(".pagination a.active");
      if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
      }

      paginationLink.classList.add("active");
    });

    const paginationItem = document.createElement("li");
    paginationItem.appendChild(paginationLink);

    paginationContainer.appendChild(paginationItem);
  }
}

const totalPages = Math.ceil(data.length / itemsPerPage);
generatePaginationLinks(totalPages);
