//wap to fetch all links including "youtube"
let links = document.links;
Array.from(links).forEach(element => {
    if (element.href.includes("youtube")){
        console.log(element.href);
    }
});