// async , await
// promise -> (fulfilled, rejected, pending)


async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json();
    // console.log("data: ", data);
    return data;
}

const data = await getData();
console.log(data);



// console.log("i dont need this data now")
