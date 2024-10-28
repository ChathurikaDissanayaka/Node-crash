import url, { fileURLToPath } from "url";

const urlString = "https://www.google.com/search?q=hello+world";

//  URL Object
const urlObj = new URL(urlString);
console.log(urlObj);
// URL {
//     href: 'https://www.google.com/search?q=hello+world',
//     origin: 'https://www.google.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.google.com',
//     hostname: 'www.google.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=hello+world',
//     searchParams: URLSearchParams { 'q' => 'hello world' },
//     hash: ''
//   }

// console.log(urlObj.origin)

// format()
console.log(url.format(urlObj));

// import.meta.url - file url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get("q"));

params.append("limit", "5");
console.log(params);

params.delete("limit");
console.log(params);
