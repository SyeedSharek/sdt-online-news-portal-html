document.addEventListener("DOMContentLoaded", () => {
  fetch("./assets/data/news.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // For debugging
      const { articles, categories } = data;

      // Helper function to get category name by ID
      const getCategoryName = (categoryId) => {
        const category = categories.find((c) => c.id === categoryId);
        return category ? category.name : "Uncategorized";
      };

      // Helper function to format date
      const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
      };

      // 1. Populate Latest News Ticker
      const latestNewsTicker = document.getElementById("latest-news-ticker");
      if (latestNewsTicker) {
        const tickerArticles = articles.slice(0, 6); // Get first 6 articles for the ticker
        let tickerHTML = "";
        tickerArticles.forEach((article) => {
          tickerHTML += `
                        <div class="item min-w-[200px] px-2">
                            <div class="flex items-center gap-2 text-white">
                                <span class="inline-block h-2 w-2 rounded-full bg-white"></span>
                                <h3 class="text-lg whitespace-nowrap white-clr font-noto">${article.headline}</h3>
                            </div>
                        </div>
                    `;
        });
        // Duplicate for seamless scroll
        latestNewsTicker.innerHTML = tickerHTML + tickerHTML;
      }

      // 2. Populate "সর্বশেষ খবর" (Latest News) Section
      const latestNewsLeftSidebar = document.getElementById(
        "latest-news-left-sidebar"
      );
      const latestNewsMain = document.getElementById("latest-news-main");
      const latestNewsRightSidebar = document.getElementById(
        "latest-news-right-sidebar"
      );

      if (latestNewsLeftSidebar && latestNewsMain && latestNewsRightSidebar) {
        // Main Article (first one)
        const mainArticle = articles[0];
        if (mainArticle) {
          latestNewsMain.innerHTML = `
                        <div class="mb-7">
                            <img src="${mainArticle.multimedia.featuredImage.url}" alt="${mainArticle.multimedia.featuredImage.alt}"
                                class="w-full max-h-[412px] rounded-md mb-6" />
                            <a href="#" class="hover-effect-underline text-[24px] md:text-[28px] font-noto">
                                ${mainArticle.headline}
                            </a>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="h-4 w-4 bg-red-600 rounded-full animate-pulse"></span>
                            <span class="text-red-600 mb-0 text-base">Live Update</span>
                        </div>
                        <div>
                            <p class="text-title-clr text-base leading-relaxed font-noto">${mainArticle.summary}</p>
                        </div>
                    `;
        }

        // Left Sidebar (next 3 articles)
        const leftSidebarArticles = articles.slice(1, 4);
        let leftSidebarHTML = "";
        leftSidebarArticles.forEach((article) => {
          leftSidebarHTML += `
                        <div class="flex flex-col border-b pb-5 mb-5">
                            <span class="text-[13px] mb-1 font-noto">${getCategoryName(
                              article.category
                            )}</span>
                            <a href="#" class="text-lg hover-effect-underline transition-all pb-3 font-noto">
                                ${article.headline}
                            </a>
                            <span class="text-xs text-gray-400 flex items-center gap-1 font-noto">${formatDate(
                              article.publishedAt
                            )}</span>
                        </div>
                    `;
        });
        leftSidebarHTML += `
                    <div>
                        <img src="./img/main/banner-01.png" alt="" class="w-full max-h-[242px] rounded-md">
                    </div>
                `;
        latestNewsLeftSidebar.innerHTML = leftSidebarHTML;

        // Right Sidebar (next 3 articles)
        const rightSidebarArticles = articles.slice(4, 7);
        let rightSidebarHTML = "";
        rightSidebarArticles.forEach((article) => {
          rightSidebarHTML += `
                        <div class="flex gap-4 items-center overflow-hidden group pb-5 border-bottom">
                            <div class="w-[201px] min-w-[201px] max-w-[201px] overflow-hidden rounded-md">
                                <img src="${
                                  article.multimedia.featuredImage.url
                                }" alt="${article.multimedia.featuredImage.alt}"
                                    class="rounded-md max-h-[166px] w-full transition-transform duration-300 group-hover:scale-105">
                            </div>
                            <div>
                                <div class="mb-3">
                                    <a href="#" class="hover-effect-underline text-lg font-noto">${
                                      article.headline
                                    }</a>
                                </div>
                                <div class="flex items-center gap-3">
                                    <h6 class="text-base font-noto">${
                                      article.author.name
                                    }</h6>
                                    <h6 class="text-base font-noto">${formatDate(
                                      article.publishedAt
                                    )}</h6>
                                </div>
                            </div>
                        </div>
                    `;
        });
        rightSidebarHTML += `
                    <div class="mt-4">
                        <img src="./img/main/bd-ad-NWC 1.jpg" alt="" class="max-h-[135px] w-full rounded-md">
                    </div>
                `;
        latestNewsRightSidebar.innerHTML = rightSidebarHTML;
      }

      // 3. Populate "রাজনীতি" (Politics) Section
      const politicsSection = document.getElementById("politics-section");
      if (politicsSection) {
        const politicsArticles = articles
          .filter((a) => a.category === "politics")
          .slice(0, 4);
        let politicsHTML = "";
        politicsArticles.forEach((article) => {
          politicsHTML += `
                        <div class="col-span-3">
                            <div class="flex flex-col h-full group overflow-hidden border-bottom pb-5">
                                <div class="overflow-hidden mb-4 rounded-md">
                                    <img src="${
                                      article.multimedia.featuredImage.url
                                    }" alt="${
            article.multimedia.featuredImage.alt
          }"
                                        class="max-h-[227px] w-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                </div>
                                <div class="mb-3">
                                    <a href="#" class="text-xl hover-effect-underline">${
                                      article.headline
                                    }</a>
                                </div>
                                <div class="flex gap-5">
                                    <span>${getCategoryName(
                                      article.category
                                    )}</span>
                                    <span>${formatDate(
                                      article.publishedAt
                                    )}</span>
                                </div>
                            </div>
                        </div>
                    `;
        });
        politicsSection.innerHTML = politicsHTML;
      }

      // 4. Populate "বানিজ্য" (Business) Section
      const businessSection = document.getElementById("business-section");
      if (businessSection) {
        const businessArticles = articles.filter(
          (a) => a.category === "business"
        );
        const mainBusinessArticle = businessArticles[0];
        const otherBusinessArticles = businessArticles.slice(1, 3);

        let businessHTML = "";
        if (mainBusinessArticle) {
          businessHTML += `
                    <div class="col-span-6">
                        <div class="relative group overflow-hidden rounded-md">
                            <img src="${mainBusinessArticle.multimedia.featuredImage.url}" alt="${mainBusinessArticle.multimedia.featuredImage.alt}"
                                class="max-h-[657px] w-full rounded-md object-cover transition-transform duration-500 group-hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <a class="absolute left-6 bottom-7 white-clr text-[42px] hover-effect-underline p-4 z-10">
                                ${mainBusinessArticle.headline}
                            </a>
                        </div>
                    </div>
                    `;
        }

        let rightSideBusinessHTML = '<div class="col-span-6">';
        otherBusinessArticles.forEach((article) => {
          rightSideBusinessHTML += `
                        <div class="flex gap-4 border-bottom pb-5 mb-5 items-center">
                            <div class="flex-shrink-0 w-[201px] h-[125px] overflow-hidden rounded-md">
                                <img src="${
                                  article.multimedia.featuredImage.url
                                }" alt="${
            article.multimedia.featuredImage.alt
          }" class="w-full h-full object-cover rounded-md">
                            </div>
                            <div>
                                <a href="#" class="text-xl hover-effect-underline">${
                                  article.headline
                                }</a>
                                <div class="flex gap-5 mt-2">
                                    <span>${article.author.name}</span>
                                    <span>${formatDate(
                                      article.publishedAt
                                    )}</span>
                                </div>
                            </div>
                        </div>
                    `;
        });
        rightSideBusinessHTML += `
                        <div class="flex gap-1">
                            <div class="bg-[#F3F4F6] rounded-xl p-6 shadow-md max-w-md h-fit">
                                <h2 class="text-2xl font-bold mb-3">দ্রুত জরিপ</h2>
                                <p class="text-sm text-gray-800 mb-4">
                                    কত তাড়াতাড়ি কোয়ান্টাম কম্পিউটার বাণিজ্যিকভাবে কার্যকর হবে বলে আপনি মনে করেন?
                                </p>
                                <form class="space-y-2">
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="vote" class="accent-black" />
                                        <span class="text-lg text-gray-800">৫ বছরের মধ্যে</span>
                                    </label>
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="vote" class="accent-black" />
                                        <span class="text-lg text-gray-800">৫ থেকে ১০ বছর</span>
                                    </label>
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="vote" class="accent-black" />
                                        <span class="text-lg text-gray-800">১০ থেকে ২০ বছর</span>
                                    </label>
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="vote" class="accent-black" />
                                        <span class="text-lg text-gray-800">২০ বছরেরও বেশি সময় ধরে</span>
                                    </label>
                                    <button type="submit"
                                        class="w-full bg-gray-900 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-800 transition duration-200">
                                        ভোট দিন
                                    </button>
                                </form>
                                <p class="text-xs text-gray-500 mt-4">ফলাফল আগামী সপ্তাহে প্রকাশিত হবে</p>
                            </div>
                            <div>
                                <img src="./img/main/b-add-01.png" alt="" class="w-full object-cover max-h-[370px]">
                            </div>
                        </div>
                    </div>
                `;
        businessHTML += rightSideBusinessHTML;
        businessSection.innerHTML = businessHTML;
      }

      // 5. Populate "বিজ্ঞান" (Science/Technology) Section
      const scienceSection = document.getElementById("science-section");
      if (scienceSection) {
        const techArticles = articles.filter(
          (a) => a.category === "technology"
        );
        const mainTechArticle = techArticles[0];
        const otherTechArticles = techArticles.slice(1, 5);

        let scienceHTML = "";

        if (mainTechArticle) {
          scienceHTML += `
                    <div class="col-span-6">
                        <div class="relative overflow-hidden rounded-md">
                            <img src="${mainTechArticle.multimedia.featuredImage.url}" alt="${mainTechArticle.multimedia.featuredImage.alt}"
                                class="h-[680px] w-full rounded-md object-cover transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-500">
                            </div>
                            <a class="absolute left-6 bottom-7 white-clr text-[22px] hover-effect-underline p-4 z-10">${mainTechArticle.headline}
                            </a>
                        </div>
                    </div>
                    `;
        }

        let rightSideScienceHTML =
          '<div class="col-span-6"><div class="grid grid-cols-12 gap-6">';
        otherTechArticles.forEach((article) => {
          rightSideScienceHTML += `
                        <div class="col-span-6">
                            <div class="flex flex-col h-full group overflow-hidden border-bottom pb-5">
                                <div class="overflow-hidden mb-4 rounded-md">
                                    <img src="${
                                      article.multimedia.featuredImage.url
                                    }" alt="${
            article.multimedia.featuredImage.alt
          }"
                                        class="max-h-[196px] w-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                </div>
                                <div class="mb-3">
                                    <a href="#" class="text-xl hover-effect-underline">${
                                      article.headline
                                    }</a>
                                </div>
                                <div class="flex gap-14">
                                    <span>${formatDate(
                                      article.publishedAt
                                    )}</span>
                                </div>
                            </div>
                        </div>
                    `;
        });
        rightSideScienceHTML += "</div></div>";
        scienceHTML += rightSideScienceHTML;
        scienceSection.innerHTML = scienceHTML;
      }

      // 6. Populate "ভিডিও" Section
      const videoSection = document.getElementById("video-section");
      if (videoSection) {
        const videoArticles = articles
          .filter(
            (a) =>
              a.multimedia &&
              a.multimedia.videos &&
              a.multimedia.videos.length > 0
          )
          .slice(0, 5);
        let videoHTML = "";
        videoArticles.forEach((article) => {
          videoHTML += `
                        <div class="swiper-slide col-span-3 mb-5">
                            <div class="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
                                <img src="${article.multimedia.videos[0].thumbnail}" alt="${article.headline}" class="w-full h-[484px] object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20">
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <button>
                                        <img src="img/vedio/Play.png" alt="">
                                    </button>
                                </div>
                                <div class="absolute bottom-0 left-0 p-4">
                                    <a href="#" class="text-2xl white-clr hover-effect-underline">
                                        ${article.multimedia.videos[0].title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
        });
        videoSection.innerHTML = videoHTML;

        // Re-initialize swiper
        const videoSlider = new Swiper(".videoSlider", {
          slidesPerView: 4,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          },
        });
      }
    })
    .catch((error) => console.error("Error fetching news data:", error));
});
