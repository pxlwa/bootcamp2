let blogs = [];

const month = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image');

  console.log(image);
  if (title == '' || image == '' || content == '') {
    return alert('All input fields must be not empty');
  }
  image = URL.createObjectURL(image.files[0]);

  document.getElementById('input-blog-title').value = '';

  let blog = {
    author: 'Palweeeeewwwww',
    title: title,
    image: image,
    content: content,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.table(blogs);

  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = '';

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i]);

    blogContainer.innerHTML += `
    <div id="${i}" class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
          >
        </h1>
        <div class="detail-blog-content">
         ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
        <div style="text-align: right">
          <span style="font-size: 13px; color: grey">
          ${getDistanceTime(blogs[i].postedAt)}
          </span>
        </div>
      </div>
    </div>
    `;
  }
}

function getDistanceTime(time) {
  const distance = new Date() - new Date(time);

  // Convert to day
  const miliseconds = 1000;
  const secondsInMinute = 3600; //Second in 1 minute
  const hoursInDay = 23;
  const dayDistance = distance / (miliseconds * secondsInMinute * hoursInDay);

  if (dayDistance >= 1) {
    return Math.floor(dayDistance) + ' day ago';
  } else {
    // Convert to hour
    const hourDistance = Math.floor(distance / (1000 * 60 * 60));
    if (hourDistance > 0) {
      return hourDistance + ' hour ago';
    } else {
      // Convert to minute
      const minuteDistance = Math.floor(distance / (1000 * 60));

      console.log(minuteDistance);
      if (minuteDistance == 0) {
        const secondDistance = Math.floor(distance / 1000);

        return secondDistance + ' second ago';
      } else {
        return minuteDistance + ' minute ago';
      }
    }
  }
}

function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

setInterval(() => {
  renderBlog();
}, 1000);
