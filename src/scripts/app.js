!(function() {
    // fetch("https://qq-music-api.now.sh")
    fetch("../json/rec.json")
        .then(res => res.json())
        .then(render);
    fetch("../json/rank.json")
        .then(res => res.json())
        .then(json => json.data.topList)
        .then(renderRankLists);

  function render(json) {
    renderSlider(json.data.slider)
    renderRadios(json.data.radioList)
    renderHotlists(json.data.songList)
    lazyload(document.querySelectorAll('.lazyload'))
  }
  function renderSlider(slides) {
    slides = slides.map(slide => {
      return { link: slide.linkUrl, image: slide.picUrl };
    });
    new Slider({
      el: document.querySelector("#slider"),
      slides
    });
  }
  function renderRadios(radios) {
    document.querySelector(".radios .list").innerHTML =  radios.map(radio => `<div class="list-item">
        <div class="list-radio">
            <img class="lazyload" data-src="${radio.picUrl}" alt="">
            <span class="icon icon_play"></span>
            </div>
            <div class="list-info">
            <h3>${radio.Ftitle}</h3>
            </div>
        </div>`).join('')

  }
  function renderHotlists(hotlists) {
    document.querySelector('.hotlists .list').innerHTML =  hotlists.map(hotlist => `<div class="list-item">
    <div class="list-radio">
        <img class="lazyload" data-src="${hotlist.picUrl}" alt="">
        <span class="icon icon_play"></span>
        </div>
        <div class="list-info">
        <h3>${hotlist.songListDesc}</h2>
        <p>${hotlist.songListAuthor}</p>
        </div>
    </div>`).join('')

  }
  function renderRankLists(ranklist){
    document.querySelector('#rank-view .rank-list').innerHTML =  ranklist.map(
        rank => `<li class="list-item">
                    <div class="topic-img">
                        <a href="javascript:;" class="topic-media">
                            <img class="lazyload" data-src="${rank.picUrl}">
                            <span class="listen-count"><i class="icon icon-listen"></i>1970.0万</span>
                        </a>
                    </div>
                    <div class="topic-info">
                        <div class="topic-cont">
                            <h3 class="topic-tit">${rank.topTitle}</h3>
                            ${songlist(rank.songList)}
                        </div>
                    </div>
                </li>`
    ).join('')

    lazyload(document.querySelectorAll('#rank-view .rank-list .lazyload'))
    function songlist(songs){
    return songs.map((song,i) =>
    `<p>${i+1}<span class="text-name">${song.songname}</span>- ${song.singername}</p>`).join('')
    }

  }
})();
