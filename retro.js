const loadPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  displayPost(posts);
};
const displayPost = (posts) => {
  //   console.log(posts);
  const postContainer = document.getElementById("card-div");
  //   postContainer.textContent = "";
  posts.forEach((post) => {
    console.log(post);
    const postCard = document.createElement("div");
    postCard.classList = `bg-gray-100 flex gap-5 p-10 rounded-2xl mb-5`;
    postCard.innerHTML = `
    <div class="h-20 w-20">
    <div class="avatar online placeholder">
      <div class="bg-neutral text-neutral-content rounded-2xl w-16">
        <img
          src="B9A6-Retro-Forum-main/images/joinforum.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="inter font-medium text-sm flex gap-6">
      <p># Music</p>
      <p>Author : Awlad Hossain</p>
    </div>
    <h1 class="mulish font-bold text-xl">
      10 Kids Unaware of Their Halloween Costume
    </h1>
    <p class="inter text-base">
      It’s one thing to subject yourself to ha Halloween costume
      mishap because, <br />
      hey that’s your prerogative
    </p>
    <div
      class="flex justify-between gap-16 items-center border-t-2 border-dashed border-gray-200 pt-3"
    >
      <div class="flex justify-center gap-16">
        <div class="flex justify-center items-center gap-2">
          <i class="fa-light fa-message-lines"></i>
          <p>560</p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <i class="fa-light fa-eye"></i>
          <p>1,568</p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <i class="fa-regular fa-clock"></i>
          <p>5 min</p>
        </div>
      </div>
      <i
        class="fa-regular fa-envelope-open bg-[#10b981] p-2 rounded-full text-white"
      ></i>
    </div>
  </div>
    `;
    postContainer.appendChild(postCard);
  });
};
loadPost();
