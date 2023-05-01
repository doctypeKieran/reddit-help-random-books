// An array of objects for each book.  Each object contains the relevant information, i.e. title, author
const books = [
  {
    id: 1,
    title: "Ultra-Processed People",
    author: "Chris van Tulleken",
    imgSrc: "./images/cover1.jpg",
    link: "https://www.amazon.co.uk/Ultra-Processed-People-Stuff-That-Isnt/dp/1529900050?ref_=Oct_d_omwf_d_266239_0&pd_rd_w=Hx1GD&content-id=amzn1.sym.5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_p=5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_r=ZFYT5E3RCTQ20YGSCF57&pd_rd_wg=CXVF6&pd_rd_r=cc18f603-9df8-4209-939a-e4781e3be4f3&pd_rd_i=1529900050",
  },
  {
    id: 2,
    title: "The Woman on the Bridge",
    author: "Sheila O'Flanagan",
    imgSrc: "./images/cover2.jpg",
    link: "https://www.amazon.co.uk/Woman-Bridge-Sheila-OFlanagan/dp/1035402777?ref_=Oct_d_omwf_d_266239_1&pd_rd_w=Hx1GD&content-id=amzn1.sym.5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_p=5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_r=ZFYT5E3RCTQ20YGSCF57&pd_rd_wg=CXVF6&pd_rd_r=cc18f603-9df8-4209-939a-e4781e3be4f3&pd_rd_i=1035402777",
  },
  {
    id: 3,
    title: "Making It So",
    author: "Patrick Stewart",
    imgSrc: "./images/cover3.jpg",
    link: "https://www.amazon.co.uk/Making-So-Memoir-Patrick-Stewart/dp/139851294X?ref_=Oct_d_omwf_d_266239_2&pd_rd_w=Hx1GD&content-id=amzn1.sym.5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_p=5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_r=ZFYT5E3RCTQ20YGSCF57&pd_rd_wg=CXVF6&pd_rd_r=cc18f603-9df8-4209-939a-e4781e3be4f3&pd_rd_i=139851294X",
  },
  {
    id: 4,
    title: "Only Love Can Hurt Like This",
    author: "Paige Toon",
    imgSrc: "./images/cover4.jpg",
    link: "https://www.amazon.co.uk/Only-Love-Hurt-Like-This/dp/1529157900?ref_=Oct_d_omwf_d_266239_3&pd_rd_w=Hx1GD&content-id=amzn1.sym.5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_p=5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_r=ZFYT5E3RCTQ20YGSCF57&pd_rd_wg=CXVF6&pd_rd_r=cc18f603-9df8-4209-939a-e4781e3be4f3&pd_rd_i=1529157900",
  },
  {
    id: 5,
    title: "Killing Thatcher",
    author: "Rory Carroll",
    imgSrc: "./images/cover5.jpg",
    link: "https://www.amazon.co.uk/Killing-Thatcher-Manhunt-Long-Crown/dp/0008476659?ref_=Oct_d_omwf_d_266239_4&pd_rd_w=Hx1GD&content-id=amzn1.sym.5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_p=5458a655-b549-4822-b8e4-401b8a0252b5&pf_rd_r=ZFYT5E3RCTQ20YGSCF57&pd_rd_wg=CXVF6&pd_rd_r=cc18f603-9df8-4209-939a-e4781e3be4f3&pd_rd_i=0008476659",
  },
];

// Assigning variables to each required HTML element:
const bookImg = document.getElementById("book-img");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookSummary = document.getElementById("book-summary");
const bookLink = document.getElementById("book-link");

const newBookButton = document.getElementById("random-btn");

// Creating a function which will do the following:
// 1. Generate a new random index from the array of book objects
// 2. Assign the values of each key to the appropriate HTML element

const getNewBook = () => {
  const randomIndex = Math.floor(Math.random() * books.length);

  const selectedBook = books[randomIndex];

  bookImg.setAttribute("src", selectedBook.imgSrc);
  bookLink.setAttribute("href", selectedBook.link);

  bookTitle.innerHTML = selectedBook.title;
  bookAuthor.innerHTML = selectedBook.author;
  bookLink.innerHTML = selectedBook.title;
};

newBookButton.addEventListener("click", getNewBook);
