// lucide.createIcons();const avatar=document.querySelector(".avatar");const modal=document.getElementById("image-modal");const modalImg=document.getElementById("modal-img");const closeBtn=document.getElementById("closeModal");avatar.addEventListener("click",()=>{modal.classList.add("active");modalImg.src=avatar.src});closeBtn.addEventListener("click",()=>{modal.classList.remove("active")});modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("active")}});document.addEventListener("keydown",e=>{if(e.key==="Escape"){modal.classList.remove("active")}});const profileImg=document.querySelector(".avatar");const favicon=document.getElementById("favicon");profileImg.addEventListener("load",()=>{favicon.href=profileImg.src+"?v="+Date.now()});


lucide.createIcons();

const avatar = document.querySelector(".avatar");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("closeModal");
const favicon = document.getElementById("favicon");

// abrir modal
avatar.addEventListener("click", () => {
  modal.classList.add("active");
  modalImg.src = avatar.src;
});

// fechar pelo botão
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// fechar clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});

// atualizar favicon com cache-buster
avatar.addEventListener("load", () => {
  favicon.href = avatar.src + "?v=" + Date.now();
});

  const video = document.getElementById('bg-video');

  document.body.classList.add('loading');

  function showSite() {
    video.classList.add('ready');
    document.body.classList.remove('loading');
  }

  video.addEventListener('loadeddata', showSite);

  setTimeout(showSite, 2000);
  
  //

const userId = "890401096617566268";

const activityEl = document.getElementById("activity-text");
let lastText = "";

const ICON_GAME = `
<svg class="icon-game" viewBox="0 0 122.88 79.92" fill="currentColor">
  <g>
    <path d="M23.35,72.21c4.04-4.11,8.82-8.28,12.37-13.68h51.43c3.56,5.39,8.34,9.57,12.37,13.68c30.95,31.52,28.87-42.32,7-64.5h-1.68C102.09,3.11,96.72,0,90.55,0c-6.17,0-11.53,3.11-14.28,7.71H46.61C43.86,3.11,38.49,0,32.32,0c-6.17,0-11.53,3.11-14.29,7.71h-1.68C-5.52,29.89-7.6,103.72,23.35,72.21zM29.85,12.84h11.11v8.85l8.85,0V32.8h-8.85v8.85H29.85V32.8H21V21.69h8.85L29.85,12.84zM83.16,36.9c2.69,0,4.87,2.18,4.87,4.87c0,2.69-2.18,4.88-4.87,4.88s-4.87-2.18-4.87-4.88C78.29,39.08,80.47,36.9,83.16,36.9zM85.82,15.21c3.9,0,7.06,3.16,7.06,7.05c0,3.9-3.16,7.05-7.06,7.05c-3.9,0-7.05-3.16-7.05-7.05C78.77,18.37,81.92,15.21,85.82,15.21zM104.04,26.11c2.69,0,4.87,2.18,4.87,4.87c0,2.69-2.18,4.87-4.87,4.87c-2.69,0-4.88-2.18-4.88-4.87C99.16,28.29,101.35,26.11,104.04,26.11z"/>
  </g>
</svg>
`;

const ICON_MUSIC = `
<svg class="icon-music" viewBox="0 0 104.23 122.88" fill="currentColor">
  <g>
    <path d="M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04z"/>
  </g>
</svg>
`;

function formatActivity(data) {
  const activities = data.activities || [];

  const game = activities.find(a => a.type === 0 && a.name !== "Spotify");
  const spotify = data.spotify;
  const custom = activities.find(a => a.type === 4);

  let text = "";

  if (game) {
    text = `<span>${ICON_GAME} Jogando ${game.name}</span>`; 

    if (spotify) {
      text += " +1";
    }

    if (custom?.emoji) {
      text += ` • ${custom.emoji.name || ""}`;
    }

    if (custom?.state && custom.emoji) {
      text += ` ${custom.state}`;
    }
  }

  else if (spotify) {
    text = `<span>${ICON_MUSIC} ${spotify.song} - ${spotify.artist}</span>`; 

    if (custom?.emoji) {
      text += ` • ${custom.emoji.name || ""}`;
    }

    if (custom?.state && custom.emoji) {
      text += ` ${custom.state}`;
    }
  }

  else if (custom) {
    if (custom.emoji && custom.state) {
      text = `${custom.emoji.name || ""} ${custom.state}`;
    } else if (custom.emoji) {
      text = custom.emoji.name;
    } else {
      text = custom.state;
    }
  }

  return text || ""; 
}

async function fetchDiscord() {
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    const json = await res.json();

    if (!json.success) return;

    const newText = formatActivity(json.data);

    if (newText === lastText) return;

    lastText = newText;

    activityEl.parentElement.classList.add("fade");

    setTimeout(() => {
      activityEl.innerHTML = newText;
      activityEl.parentElement.classList.remove("fade");
    }, 200);

  } catch (err) {
    console.error("Erro Discord:", err);
  }
}

fetchDiscord();
setInterval(fetchDiscord, 15000);

