// make a smart page crowler in js to fetch all the links of the page includes google
let str = 'google';

let links = document.links;

Array.from(links).forEach(element => {
    href = element.href;
    if(href.includes(str)){
        console.log(href);
    }
});