
const data = {
  catalogue: [
    {
      id: "B001",
      title: "Web Design Basics",
      price: 299,
      available: true
    },
    {
      id: "B002",
      title: "JavaScript Starter",
      price: 399,
      available: true
    },
    {
      id: "B003",
      title: "Learning CSS Grid",
      price: 249,
      available: false
    }
  ]
};

function validateCatalogue(data) {
  return (
    data &&
    Array.isArray(data.catalogue) &&
    data.catalogue.every(book =>
      typeof book.id === "string" &&
      typeof book.title === "string" &&
      typeof book.price === "number" &&
      typeof book.available === "boolean"
    )
  );
}

console.log("Catalogue valid:", validateCatalogue(data));

const availableBooks = data.catalogue.filter(book => book.available);

console.log("Available books:");

availableBooks.forEach(book => {
  console.log(book.title);
});
