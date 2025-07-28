const url = "https://jsonplaceholder.typicode.com/posts";
const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector('#posts-container');

//Get all posts
async function getAllPosts(){
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);

    loadingElement.classList.add('hide');
    data.map((posts) =>{
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";
        link.setAttribute("href", `/posts.html?id=$(post.id)`);
    })
}
getAllPosts();