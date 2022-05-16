
function generateNew() {
  let quotes= [
  {author: "Depp", quote: "gfd"},
  {author: "A", quote: "rgre"},
  {author: "B", quote: "gfd"},
  {author: "C", quote: ""},
  {author: "D", quote: ""},
  {author: "", quote: "rwqr"},
  {author: "", quote: ""},
  {author: "G", quote: "fwfr"},
  {author: "F", quote: "regre"},
  {author: "T", quote: ""},
  {author: "K", quote: ""},
  {author: "J", quote: ""}
];
  let quoteRandom = quotes[Math.round(Math.random() * (13))];
  document.getElementById("author").innerText = quoteRandom.author;
  document.getElementById("gen-def").innerText = quoteRandom.quote;
  return;
}
