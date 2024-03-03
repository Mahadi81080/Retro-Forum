let count = 0;
const loadPost = async (searchField) => {
  document.getElementById('loading-spinner').style.display='block'
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchField}`
  );
  const data = await res.json();
  const posts = data.posts;
  displayPost(posts);
};
const displayPost = (posts) => {
  //   console.log(posts);
  const postContainer = document.getElementById("card-div");
  postContainer.textContent = "";
  //   postContainer.textContent = "";
  posts.forEach((post) => {
    document.getElementById('loading-spinner').style.display = 'none';
    // console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `bg-gray-100 flex flex-col lg:flex-row gap-5 p-10 rounded-2xl mb-5`;
    postCard.innerHTML = `
    <div class="h-20 w-20">
    <div class="avatar online placeholder">
      <div class="bg-neutral text-neutral-content rounded-2xl w-16">
        <img
          src="${post.image}"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="inter font-medium text-sm flex gap-6">
      <p># <span>${post.category}</span></p>
      <p>Author :<span>${post.author.name}</span></p>
    </div>
    <h1 class="mulish font-bold text-xl">
      ${post.title}
    </h1>
    <p class="inter text-base">
    ${post.description}
    </p>
    <div
      class="flex justify-between gap-16 items-center border-t-2 border-dashed border-gray-200 pt-3"
    >
      <div class="flex flex-col lg:flex-row justify-between items-center gap-16">
        <div class="flex justify-between items-center gap-2">
          <i class="fa-light fa-message-lines"></i>
          <p>${post.comment_count}</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <i class="fa-light fa-eye"></i>
          <p>${post.view_count}</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <i class="fa-regular fa-clock"></i>
          <p>${post.posted_time}</p>
        </div>
      </div>
      <div onclick="handlePostCount('${post.title}', '${post.view_count}')">
      <i
      class="fa-regular fa-envelope-open bg-[#10b981] p-2 rounded-full text-white"
       ></i>
      </div>
    </div>
  </div>
    `;
    postContainer.appendChild(postCard);
  });
};
const handlePostCount = (title, view_count) => {
  const postCounter = document.getElementById("post-count");
  count = count + 1;
  postCounter.innerText = count;
  const itemsMarkContainer = document.getElementById("items-mark");
  const itemCard = document.createElement("div");
  itemCard.classList = `flex gap-6 bg-white rounded-2xl p-4 my-4`;
  itemCard.innerHTML = `
  <h1 class="mulish font-bold text-xl">
  ${title}
  </h1>
  <div class="flex justify-between items-center gap-2">
  <i class="fa-light fa-eye"></i>
  <p>${view_count}</p>
  </div>
  `;
  itemsMarkContainer.appendChild(itemCard);
};

const handleSearch = () => {
  const searchField = document.getElementById("search-field").value;
  if (searchField) {
    loadPost(searchField);
  } else {
    alert("Please enter avalid catID");
  }
};
loadPost("music");

const latestPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  const posts2 = data;
  displayLatestPost(posts2);
};
const displayLatestPost = (posts2) => {
  // console.log(posts2);
  const latestPostContainer = document.getElementById("latest-post-container");
  posts2.forEach((post) => {
    console.log(post);
    const latestPostCard = document.createElement("div");
    latestPostCard.classList = `card bg-base-100 shadow-xl border-2 border-gray-300`;
    latestPostCard.innerHTML = `
      <figure class="px-10 pt-10">
              <img
                src="${post.cover_image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body space-y-2">
              <div class="flex justify-center items-center gap-4">
                <i class="fa-light fa-calendar-minus"></i>
                <p>${
                  !post.author?.posted_date
                    ? "No Publish Date"
                    : post.author.posted_date
                }</p>
              </div>
              <h2 class="card-title">
              ${post.title.slice(0, 32)}
              </h2>
              <p class="text-sm">
              ${post.description.slice(0, 100)}
              </p>
              <div class="flex items-center gap-3">
                <img
                  class="h-11 w-12 rounded-full"
                  src="${post.profile_image}"
                  alt=""
                />
                <div class="mulish">
                <h2 class="text-base font-semibold">${post.author.name}</h2>
                  <p class="text-xs">${!post.author?.designation
                    ? "Unknown"
                    : post.author.designation}</p>
                </div>
              </div>
            </div>
      `;
    latestPostContainer.appendChild(latestPostCard);
  });
};
latestPost();
