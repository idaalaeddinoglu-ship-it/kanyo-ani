// Anime kartlarını, tür filtrelerini, aramayı ve izleme listesini yönetir.
const animeList = [
  {title:'Fullmetal Alchemist: Brotherhood',short:'Fullmetal\nAlchemist',year:2009,genre:'Aksiyon',type:'Dizi',rating:'9.1',episodes:'64 bölüm',symbol:'⚙',colors:['#38596b','#172c48','#d6ad72'],description:'İki kardeş, kaybettiklerini geri kazanmak için zorlu bir yolculuğa çıkar.'},
  {title:'Death Note',short:'Death\nNote',year:2006,genre:'Gerilim',type:'Dizi',rating:'8.9',episodes:'37 bölüm',symbol:'☾',colors:['#392a55','#171525','#c59ce8'],description:'Gizemli bir defter, adalet ve güç üzerine tehlikeli bir oyunu başlatır.'},
  {title:'Naruto: Shippuden',short:'NARUTO',year:2007,genre:'Aksiyon',type:'Dizi',rating:'8.7',episodes:'500 bölüm',symbol:'忍',colors:['#dc8b4a','#963f50','#ffd177'],description:'Naruto, arkadaşlarını korumak ve hayalini gerçekleştirmek için büyür.'},
  {title:'One Piece',short:'ONE\nPIECE',year:1999,genre:'Macera',type:'Dizi',rating:'9.0',episodes:'1000+ bölüm',symbol:'☠',colors:['#4f91b8','#28617c','#f1be68'],description:'Luffy ve tayfası, dünyanın en büyük hazinesinin peşinde denizlere açılır.'},
  {title:'Cowboy Bebop',short:'COWBOY\nBEBOP',year:1998,genre:'Bilim kurgu',type:'Dizi',rating:'8.9',episodes:'26 bölüm',symbol:'✦',colors:['#505b9a','#292c52','#efa878'],description:'Uzayın derinliklerinde ödül avcıları ve geçmişleriyle yüzleşmeleri.'},
  {title:'Sailor Moon',short:'SAILOR\nMOON',year:1992,genre:'Fantastik',type:'Dizi',rating:'7.7',episodes:'46 bölüm',symbol:'☽',colors:['#d75f9b','#8754a7','#f9d98b'],description:'Usagi ve arkadaşları dünyayı koruyan cesur savaşçılara dönüşür.'},
  {title:'Attack on Titan',short:'ATTACK ON\nTITAN',year:2013,genre:'Aksiyon',type:'Dizi',rating:'9.1',episodes:'87 bölüm',symbol:'⚔',colors:['#59776b','#344d4b','#d4b58e'],description:'İnsanlığın hayatta kalma mücadelesi, devasa surların ardında sürer.'},
  {title:'Spirited Away',short:'SPIRITED\nAWAY',year:2001,genre:'Fantastik',type:'Film',rating:'8.6',episodes:'125 dakika',symbol:'✿',colors:['#5a9a9a','#35666f','#f5bd8b'],description:'Chihiro, ailesini kurtarmak için ruhlarla dolu büyülü bir dünyayı keşfeder.'},
  {title:'Hunter x Hunter',short:'HUNTER\n× HUNTER',year:2011,genre:'Macera',type:'Dizi',rating:'9.0',episodes:'148 bölüm',symbol:'✧',colors:['#73a88c','#44736f','#f2d18e'],description:'Gon, babasını bulmak için tehlikeli ve heyecanlı bir sınava katılır.'},
  {title:'Dragon Ball Z',short:'DRAGON\nBALL Z',year:1989,genre:'Aksiyon',type:'Dizi',rating:'8.8',episodes:'291 bölüm',symbol:'龍',colors:['#e77d42','#bd473c','#ffd76f'],description:'Goku ve dostları, dünyayı tehdit eden güçlü düşmanlarla karşılaşır.'},
  {title:'My Neighbor Totoro',short:'MY NEIGHBOR\nTOTORO',year:1988,genre:'Aile',type:'Film',rating:'8.1',episodes:'86 dakika',symbol:'☘',colors:['#78a98a','#4c7b68','#e9d18a'],description:'İki kardeş taşraya taşınır ve ormanın sevimli ruhlarıyla tanışır.'},
  {title:'Demon Slayer',short:'DEMON\nSLAYER',year:2019,genre:'Aksiyon',type:'Dizi',rating:'8.6',episodes:'55 bölüm',symbol:'刀',colors:['#b95e68','#653e5c','#9dcaac'],description:'Tanjiro, ailesinin intikamını almak ve kardeşini kurtarmak için savaşır.'},
  {title:'Your Name',short:'YOUR\nNAME',year:2016,genre:'Romantik',type:'Film',rating:'8.4',episodes:'106 dakika',symbol:'☄',colors:['#5c78b2','#4e6592','#f4bcaa'],description:'Birbirini hiç tanımayan iki genç, rüyalarında yer değiştirir.'},
  {title:'Neon Genesis Evangelion',short:'NEON\nGENESIS',year:1995,genre:'Bilim kurgu',type:'Dizi',rating:'8.5',episodes:'26 bölüm',symbol:'◈',colors:['#63758e','#414965','#d4af78'],description:'Genç pilotlar, insanlığın kaderini belirleyecek dev robotları kullanır.'},
  {title:'Fruits Basket',short:'FRUITS\nBASKET',year:2001,genre:'Romantik',type:'Dizi',rating:'8.0',episodes:'26 bölüm',symbol:'❀',colors:['#d47c9b','#a35e89','#f4d596'],description:'Tohru, gizemli Sohma ailesinin sıcak ve sıra dışı dünyasına girer.'},
  {title:'Haikyu!!',short:'HAIKYU!!',year:2014,genre:'Spor',type:'Dizi',rating:'8.7',episodes:'85 bölüm',symbol:'🏐',colors:['#e88753','#bd5d55','#f3cb78'],description:'Boyu kısa ama azmi büyük Hinata, voleybol sahasında yükselir.'},
  {title:'Princess Mononoke',short:'PRINCESS\nMONONOKE',year:1997,genre:'Fantastik',type:'Film',rating:'8.3',episodes:'134 dakika',symbol:'❋',colors:['#52795f','#385c58','#d5bb8e'],description:'Bir yolculuk, doğa ile insan arasındaki hassas dengeyi sorgular.'},
  {title:'JoJo’s Bizarre Adventure',short:'JOJO’S\nBIZARRE',year:2012,genre:'Aksiyon',type:'Dizi',rating:'8.5',episodes:'190 bölüm',symbol:'★',colors:['#9a5f9d','#5b4b88','#e9ad91'],description:'Joestar ailesinin kuşaklara yayılan olağanüstü maceraları.'},
  {title:'Kiki’s Delivery Service',short:'KIKI’S\nDELIVERY',year:1989,genre:'Aile',type:'Film',rating:'7.8',episodes:'103 dakika',symbol:'✦',colors:['#83a7be','#4b7293','#f0bb98'],description:'Genç cadı Kiki, yeni bir şehirde kendi yolunu bulmaya çalışır.'},
  {title:'Steins;Gate',short:'STEINS;GATE',year:2011,genre:'Bilim kurgu',type:'Dizi',rating:'9.0',episodes:'24 bölüm',symbol:'⌁',colors:['#54817e','#344e66','#c9a1b5'],description:'Bir grup arkadaşın zaman yolculuğu deneyi beklenmedik sonuçlar doğurur.'},
  {title:'Violet Evergarden',short:'VIOLET\nEVERGARDEN',year:2018,genre:'Dram',type:'Dizi',rating:'8.5',episodes:'13 bölüm',symbol:'❀',colors:['#7399aa','#536b8d','#e8c9a0'],description:'Violet, mektuplar yazarak duyguların anlamını öğrenmeye çalışır.'},
  {title:'Şifacının Günceleri (The Apothecary Diaries)',aliases:['The Apothecary Diaries','Kusuriya no Hitorigoto','Şifacının Günceleri'],short:'ŞİFACININ\nGÜNCELERİ',year:2023,genre:'Gizem',type:'Dizi',rating:'8.8',episodes:'48 bölüm',symbol:'✿',colors:['#78a880','#4e746d','#e5c48b'],description:'Zeki eczacı Maomao, imparatorluk sarayında yaşanan gizemleri çözer.'},
  {title:'Frieren: Beyond Journey’s End',short:'FRIEREN',year:2023,genre:'Fantastik',type:'Dizi',rating:'9.3',episodes:'28 bölüm',symbol:'❄',colors:['#8a9bc3','#657da3','#d6c3dc'],description:'Büyük maceranın ardından elf büyücü Frieren, zamanı ve dostluğu keşfeder.'},
  {title:'Pokémon',short:'POKÉMON',year:1997,genre:'Macera',type:'Dizi',rating:'7.5',episodes:'Çok sayıda bölüm',symbol:'⚡',colors:['#eebc54','#e27852','#fff0a4'],description:'Ash ve Pikachu, yeni dostlar edinerek Pokémon dünyasını gezer.'},
  {title:'Cardcaptor Sakura',short:'CARDCAPTOR\nSAKURA',year:1998,genre:'Fantastik',type:'Dizi',rating:'8.0',episodes:'70 bölüm',symbol:'✧',colors:['#dd8ab0','#9f72b2','#f5d3a0'],description:'Sakura, yanlışlıkla serbest bıraktığı büyülü kartları toplar.'},
  {title:'Yu Yu Hakusho',short:'YU YU\nHAKUSHO',year:1992,genre:'Aksiyon',type:'Dizi',rating:'8.5',episodes:'112 bölüm',symbol:'☯',colors:['#5f7fac','#435481','#d6977f'],description:'Yusuke, ruhlar dünyasının dedektifi olarak doğaüstü olayları araştırır.'},
  {title:'Mob Psycho 100',short:'MOB\nPSYCHO 100',year:2016,genre:'Komedi',type:'Dizi',rating:'8.6',episodes:'37 bölüm',symbol:'✴',colors:['#8d77bf','#5b6090','#e3a6a6'],description:'Güçlü psişik yeteneklere sahip Mob, duygularını dengelemeyi öğrenir.'},
  {title:'Tokyo Ghoul',short:'TOKYO\nGHOUL',year:2014,genre:'Gerilim',type:'Dizi',rating:'7.7',episodes:'48 bölüm',symbol:'◉',colors:['#634c69','#38334e','#b77c82'],description:'Kaneki, insanlarla hortlakların kesişen dünyasında kimliğini arar.'},
  {title:'Black Clover',short:'BLACK\nCLOVER',year:2017,genre:'Aksiyon',type:'Dizi',rating:'8.1',episodes:'170 bölüm',symbol:'♧',colors:['#668568','#456253','#d8c079'],description:'Büyüsüz doğan Asta, büyücü kral olma hayalinin peşinden koşar.'},
  {title:'Clannad',short:'CLANNAD',year:2007,genre:'Dram',type:'Dizi',rating:'8.2',episodes:'23 bölüm',symbol:'❀',colors:['#7092a8','#4b6e89','#eac1bb'],description:'Tomoya, okul ve aile çevresindeki insanlarla hayatını yeniden kurar.'},
  {title:'Berserk',short:'BERSERK',year:1997,genre:'Fantastik',type:'Dizi',rating:'8.7',episodes:'25 bölüm',symbol:'⚔',colors:['#493d54','#282739','#a27677'],description:'Guts, karanlık ve tehlikeli bir dünyada kendi kaderine karşı koyar.'},
  {title:'Samurai Champloo',short:'SAMURAI\nCHAMPLOO',year:2004,genre:'Macera',type:'Dizi',rating:'8.5',episodes:'26 bölüm',symbol:'刀',colors:['#b47951','#744b59','#e1bb83'],description:'Üç sıra dışı yol arkadaşı, samuraylarla dolu bir Japonya’yı aşar.'},
  {title:'Akira',short:'AKIRA',year:1988,genre:'Bilim kurgu',type:'Film',rating:'8.0',episodes:'124 dakika',symbol:'⚡',colors:['#b65055','#653e57','#e99c63'],description:'Neo-Tokyo’da kontrolden çıkan güçler şehrin geleceğini tehdit eder.'},
  {title:'Ouran High School Host Club',short:'OURAN\nHOST CLUB',year:2006,genre:'Komedi',type:'Dizi',rating:'8.2',episodes:'26 bölüm',symbol:'♡',colors:['#d884a9','#a1649a','#f2d3a0'],description:'Haruhi, okulun seçkin ev sahipleri kulübüne beklenmedik şekilde katılır.'},
  {title:'Blue Lock',short:'BLUE\nLOCK',year:2022,genre:'Spor',type:'Dizi',rating:'8.1',episodes:'24 bölüm',symbol:'⚽',colors:['#5d86c3','#48529a','#e99b70'],description:'Genç futbolcular, dünyanın en iyi forveti olmak için yarışır.'},
  {title:'Jujutsu Kaisen',short:'JUJUTSU\nKAISEN',year:2020,genre:'Aksiyon',type:'Dizi',rating:'8.6',episodes:'47 bölüm',symbol:'✺',colors:['#6a648e','#45445f','#d29a85'],description:'Yuji, lanetlerle dolu gizli bir dünyanın içine çekilir.'},
  {title:'A Silent Voice',short:'A SILENT\nVOICE',year:2016,genre:'Dram',type:'Film',rating:'8.2',episodes:'130 dakika',symbol:'❋',colors:['#7ba5ae','#597c94','#efc2a9'],description:'Shoya, geçmişte incittiği Shoko ile yeniden bağ kurmaya çalışır.'},
  {title:'Detective Conan',short:'DETECTIVE\nCONAN',year:1996,genre:'Gizem',type:'Dizi',rating:'8.2',episodes:'1000+ bölüm',symbol:'⌕',colors:['#526e9c','#344b73','#dc9b6b'],description:'Genç dedektif Conan, zekâsıyla karmaşık vakaları aydınlatır.'},
  {title:'Doraemon',short:'DORAEMON',year:1979,genre:'Aile',type:'Dizi',rating:'7.8',episodes:'Çok sayıda bölüm',symbol:'◉',colors:['#52a4cc','#387aa5','#f2cb76'],description:'Gelecekten gelen robot kedi Doraemon, Nobita’ya yardım eder.'}
];

const genres = ['Tümü', ...new Set(animeList.map(anime => anime.genre))];
const grid = document.querySelector('#animeGrid');
const searchInput = document.querySelector('#searchInput');
const filterRow = document.querySelector('#filterRow');
const sortSelect = document.querySelector('#sortSelect');
const resultCount = document.querySelector('#resultCount');
const emptyState = document.querySelector('#emptyState');
let selectedGenre = 'Tümü';
let searchTerm = '';
let savedTitles = JSON.parse(localStorage.getItem('anime-atlas-saved') || '[]');

function makeFilters() {
  filterRow.innerHTML = genres.map(genre => `<button class="filter-chip ${genre === selectedGenre ? 'selected' : ''}" type="button" data-genre="${genre}" aria-pressed="${genre === selectedGenre}">${genre}</button>`).join('');
}

function renderAnime() {
  let matches = animeList.filter(anime => {
    const searchable = `${anime.title} ${(anime.aliases || []).join(' ')} ${anime.genre} ${anime.year} ${anime.type} ${anime.description}`.toLocaleLowerCase('tr');
    return (selectedGenre === 'Tümü' || anime.genre === selectedGenre) && searchable.includes(searchTerm.toLocaleLowerCase('tr'));
  });
  if (sortSelect.value === 'az') matches.sort((a,b) => a.title.localeCompare(b.title, 'tr'));
  if (sortSelect.value === 'year') matches.sort((a,b) => b.year - a.year);
  grid.innerHTML = matches.map(anime => {
    const safeTitle = anime.title.replaceAll('&','&amp;').replaceAll('"','&quot;');
    const saved = savedTitles.includes(anime.title);
    return `<article class="anime-card" tabindex="0" role="button" aria-label="${safeTitle} ayrıntılarını aç">
      <div class="poster" style="--poster-a:${anime.colors[0]};--poster-b:${anime.colors[1]};--poster-c:${anime.colors[2]}">
        <span class="poster-year">${anime.year}</span><span class="poster-symbol" aria-hidden="true">${anime.symbol}</span><span class="poster-title">${anime.short.replaceAll('\n','<br>')}</span>
      </div>
      <div class="card-content"><div class="card-meta"><span class="card-genre">${anime.genre}</span><span class="rating">★ ${anime.rating}</span></div>
        <h3 title="${safeTitle}">${safeTitle}</h3><p>${anime.description}</p>
        <div class="card-footer"><span class="type-badge">${anime.type} · ${anime.episodes}</span><button class="save-button ${saved ? 'saved' : ''}" type="button" data-title="${safeTitle}" aria-label="${saved ? 'Listemden çıkar' : 'İzleme listeme ekle'}: ${safeTitle}" aria-pressed="${saved}">${saved ? '♥' : '♡'}</button></div>
      </div></article>`;
  }).join('');
  resultCount.innerHTML = `<strong>${matches.length}</strong> anime gösteriliyor`;
  emptyState.hidden = matches.length !== 0;
  grid.hidden = matches.length === 0;
}

filterRow.addEventListener('click', event => {
  const button = event.target.closest('[data-genre]');
  if (!button) return;
  selectedGenre = button.dataset.genre;
  makeFilters();
  renderAnime();
});
searchInput.addEventListener('input', () => { searchTerm = searchInput.value.trim(); renderAnime(); });
sortSelect.addEventListener('change', renderAnime);
document.querySelector('#clearFilters').addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  selectedGenre = 'Tümü';
  sortSelect.value = 'popular';
  makeFilters();
  renderAnime();
});
grid.addEventListener('click', event => {
  const button = event.target.closest('.save-button');
  if (button) {
    event.stopPropagation();
    const title = button.dataset.title.replaceAll('&quot;','"').replaceAll('&amp;','&');
    toggleSaved(title);
    renderAnime();
    return;
  }
  const card = event.target.closest('.anime-card');
  if (card) openAnime(animeList.find(anime => anime.title === card.querySelector('h3').textContent));
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('anime-card')) {
    event.preventDefault();
    openAnime(animeList.find(anime => anime.title === event.target.querySelector('h3').textContent));
  }
});
function toggleSaved(title) {
  savedTitles = savedTitles.includes(title) ? savedTitles.filter(item => item !== title) : [...savedTitles, title];
  localStorage.setItem('anime-atlas-saved', JSON.stringify(savedTitles));
}
function openAnime(anime) {
  if (!anime) return;
  const animeName = anime.aliases?.[0] || anime.title;
  const query = `${animeName} anime official`;
  window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer');
}
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

makeFilters();
renderAnime();
