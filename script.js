const repositoryUrl = "https://github.com/YaKun9/codex-pets";

const pets = [
  {
    id: "genshin-impact-keqing",
    series: "genshin",
    name: { zh: "刻晴", en: "Keqing" },
    description: {
      zh: "《原神》刻晴的官方设定风 Q 版 Codex 宠物，干练优雅，带有鲜明的雷元素气质。",
      en: "A poised chibi Codex pet inspired by Keqing from Genshin Impact, with her unmistakable Electro style."
    },
    contributor: "YaKun9",
    color: "181, 142, 255"
  },
  {
    id: "naruto-six-paths",
    series: "naruto",
    name: { zh: "六道鸣人", en: "Six Paths Naruto" },
    description: {
      zh: "鸣人六道仙人形态的 Q 版动画宠物，金色查克拉外衣与六道纹样醒目，勇敢而温暖。",
      en: "A warmhearted chibi pet of Naruto in Six Paths Sage Mode, wrapped in a striking golden chakra cloak."
    },
    contributor: "GitXMING",
    color: "255, 184, 64"
  },
  {
    id: "honkai-star-rail-yaoguang-yaoyao",
    series: "starrail",
    name: { zh: "爻光·摇摇", en: "Yaoguang · Yaoyao" },
    description: {
      zh: "《崩坏：星穹铁道》爻光的联名摇一摇灵感 Q 版宠物，保留银白长发与青蓝孔雀羽饰。",
      en: "A chibi Codex pet inspired by Yaoguang's Yaoyao interaction, featuring silver hair and peacock ornaments."
    },
    contributor: "YaKun9",
    color: "84, 220, 211"
  },
  {
    id: "honkai-star-rail-acheron",
    series: "starrail",
    name: { zh: "黄泉", en: "Acheron" },
    description: {
      zh: "《崩坏：星穹铁道》黄泉的精美 Q 版宠物，冷艳沉静，携长刀并带有红白雷光拔刀演出。",
      en: "A polished chibi Acheron with a cool composure, long blade, and red-and-white lightning draw animation."
    },
    contributor: "YaKun9",
    color: "244, 86, 132"
  },
  {
    id: "wuthering-waves-iuno",
    series: "wuthering",
    name: { zh: "尤诺", en: "Iuno" },
    description: {
      zh: "《鸣潮》月相主题共鸣者尤诺的灵动优雅 Q 版宠物，保留深蓝渐变长发与月环意象。",
      en: "An elegant chibi Iuno from Wuthering Waves, preserving her deep-blue hair and signature moon-ring motif."
    },
    contributor: "yanhuuo",
    color: "91, 178, 255"
  },
  {
    id: "wuthering-waves-suisui",
    series: "wuthering",
    name: { zh: "穗穗", en: "Suisui" },
    description: {
      zh: "《鸣潮》穗穗的温婉灵动 Q 版宠物，保留金白长发、蓝金水袖、水扇与红色饰件。",
      en: "A gentle and lively chibi Suisui, featuring gold-white hair, flowing blue sleeves, and her water fan."
    },
    contributor: "mizunagare",
    color: "104, 211, 235"
  },
  {
    id: "wuthering-waves-aemeath",
    series: "wuthering",
    name: { zh: "爱弥斯", en: "Aemeath" },
    description: {
      zh: "《鸣潮》爱弥斯的星海歌姬风 Q 版宠物，保留粉色长马尾、金色眼眸与星空驾驶员礼服。",
      en: "A polished chibi Aemeath with a pink ponytail, golden eyes, and her white-blue starry pilot outfit."
    },
    contributor: "mizunagare",
    color: "255, 129, 197"
  }
];

const translations = {
  zh: {
    skipToCatalog: "跳到宠物图鉴",
    navPets: "宠物图鉴",
    navInstall: "安装指南",
    navContribute: "参与贡献",
    heroEyebrow: "由社区共同维护的 Codex 宠物收藏库",
    heroTitle: "让每一行代码，<br><span>都有伙伴相伴。</span>",
    heroDescription: "发现、安装和分享各具特色的动态宠物，为你的 Codex 工作空间增添个性、陪伴与一点小惊喜。",
    browsePets: "浏览宠物",
    howToInstall: "如何安装",
    statPets: "位伙伴",
    statWorlds: "个作品世界",
    statCreators: "位贡献者",
    catalogKicker: "PET CATALOG",
    catalogTitle: "选择你的编码伙伴",
    catalogDescription: "每一只宠物都由社区成员精心制作，并遵循 Codex Pets v2 资源规范。",
    searchLabel: "搜索宠物",
    searchPlaceholder: "搜索名称或 ID",
    emptyState: "没有找到匹配的宠物，换个关键词试试吧。",
    installKicker: "QUICK START",
    installTitle: "三步唤醒你的宠物",
    stepOneTitle: "获取仓库",
    stepOneDescription: "克隆项目，或者让能够访问本机文件的 AI 帮你完成安装。",
    stepTwoTitle: "复制宠物目录",
    stepTwoDescription: "将选中的完整宠物目录放进 CODEX_HOME 下的 pets 文件夹。",
    stepThreeTitle: "唤醒伙伴",
    stepThreeDescription: "刷新 Pets 设置并选中宠物，然后输入 /pet 与它见面。",
    manualInstallKicker: "MANUAL INSTALL",
    manualInstallTitle: "复制命令，立即开始",
    manualInstallDescription: "下面以刻晴为例。将 petId 替换成图鉴中的任意宠物 ID 即可。",
    copyCode: "复制",
    contributeKicker: "BUILD THE COLLECTION",
    contributeTitle: "让你的创意，成为下一位伙伴。",
    contributeDescription: "无论是游戏角色、原创形象还是品牌吉祥物，只要符合资源规范，都欢迎通过 Pull Request 加入图鉴。",
    readGuide: "查看贡献指南",
    viewRepository: "浏览 GitHub 仓库",
    footerText: "由社区创造，陪每一位开发者写下有温度的代码。",
    allSeries: "全部",
    copyPrompt: "复制 AI 安装提示词",
    viewFiles: "查看文件",
    contributedBy: "贡献者",
    copied: "已复制到剪贴板",
    promptCopied: "安装提示词已复制"
  },
  en: {
    skipToCatalog: "Skip to pet catalog",
    navPets: "Pets",
    navInstall: "Install",
    navContribute: "Contribute",
    heroEyebrow: "A community-powered collection of Codex pets",
    heroTitle: "Every line of code<br><span>deserves company.</span>",
    heroDescription: "Discover, install, and share animated companions that bring personality, warmth, and a little delight to your Codex workspace.",
    browsePets: "Browse pets",
    howToInstall: "How to install",
    statPets: "companions",
    statWorlds: "worlds",
    statCreators: "creators",
    catalogKicker: "PET CATALOG",
    catalogTitle: "Choose your coding companion",
    catalogDescription: "Every pet is carefully crafted by the community and follows the Codex Pets v2 asset format.",
    searchLabel: "Search pets",
    searchPlaceholder: "Search by name or ID",
    emptyState: "No matching pets found. Try another search.",
    installKicker: "QUICK START",
    installTitle: "Wake your pet in three steps",
    stepOneTitle: "Get the repository",
    stepOneDescription: "Clone the project, or ask an AI with local file access to install a pet for you.",
    stepTwoTitle: "Copy the pet folder",
    stepTwoDescription: "Place the complete pet folder inside the pets directory under CODEX_HOME.",
    stepThreeTitle: "Wake your companion",
    stepThreeDescription: "Refresh Pets, choose your companion, then enter /pet to say hello.",
    manualInstallKicker: "MANUAL INSTALL",
    manualInstallTitle: "Copy a command and get started",
    manualInstallDescription: "This example installs Keqing. Replace petId with any ID from the catalog.",
    copyCode: "Copy",
    contributeKicker: "BUILD THE COLLECTION",
    contributeTitle: "Turn your idea into the next companion.",
    contributeDescription: "Game characters, original creations, and brand mascots are all welcome when they follow the asset guidelines. Add yours with a Pull Request.",
    readGuide: "Read the contribution guide",
    viewRepository: "Explore the GitHub repository",
    footerText: "Created by the community, for developers who like a little company.",
    allSeries: "All",
    copyPrompt: "Copy AI install prompt",
    viewFiles: "View files",
    contributedBy: "By",
    copied: "Copied to clipboard",
    promptCopied: "Install prompt copied"
  }
};

const seriesLabels = {
  genshin: { zh: "原神", en: "Genshin Impact" },
  naruto: { zh: "火影忍者", en: "Naruto" },
  starrail: { zh: "崩坏：星穹铁道", en: "Honkai: Star Rail" },
  wuthering: { zh: "鸣潮", en: "Wuthering Waves" }
};

const installCommands = {
  windows: `$petId = "genshin-impact-keqing"
git clone https://github.com/YaKun9/codex-pets.git
$codexHome = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME ".codex" }
$petsDir = Join-Path $codexHome "pets"
New-Item -ItemType Directory -Force -Path $petsDir | Out-Null
Copy-Item -Recurse -LiteralPath (Join-Path $PWD "codex-pets\\$petId") -Destination $petsDir`,
  unix: `PET_ID="genshin-impact-keqing"
git clone https://github.com/YaKun9/codex-pets.git
CODEX_HOME="\${CODEX_HOME:-$HOME/.codex}"
mkdir -p "$CODEX_HOME/pets"
cp -R "./codex-pets/$PET_ID" "$CODEX_HOME/pets/"`
};

const state = {
  language: localStorage.getItem("codex-pets-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"),
  series: "all",
  query: "",
  platform: "windows"
};

const petGrid = document.querySelector("#petGrid");
const filters = document.querySelector("#seriesFilters");
const searchInput = document.querySelector("#petSearch");
const emptyState = document.querySelector("#emptyState");
const languageToggle = document.querySelector("#languageToggle");
const languageLabel = document.querySelector("#languageLabel");
const installCode = document.querySelector("#installCode");
const codeLabel = document.querySelector("#codeLabel");
const toast = document.querySelector("#toast");

let toastTimer;

function getText(key) {
  return translations[state.language][key];
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1800);
}

function createInstallPrompt(pet) {
  if (state.language === "zh") {
    return `请帮我安装 Codex 宠物 \`${pet.id}\`：\n\n- 从 ${repositoryUrl} 获取该宠物目录。\n- 确定当前用户的 CODEX_HOME；如果未设置，则使用 ~/.codex。\n- 将整个宠物目录复制到 <CODEX_HOME>/pets/，最终目录名必须与 pet.json 的 id 一致。\n- 确认 pet.json 和 spritesheetPath 指向的精灵图都存在，不要修改宠物资源内容。\n- 完成后告诉我实际安装路径，并说明如何在桌面端或 Codex CLI 中选择它。`;
  }

  return `Install the Codex pet \`${pet.id}\` for me:\n\n- Get the pet directory from ${repositoryUrl}.\n- Determine the current user's CODEX_HOME; if it is not set, use ~/.codex.\n- Copy the entire pet directory into <CODEX_HOME>/pets/. The final directory name must match the id in pet.json.\n- Confirm that pet.json and the spritesheet referenced by spritesheetPath both exist. Do not modify the pet assets.\n- When finished, report the installed path and explain how to select the pet in the desktop app or Codex CLI.`;
}

function renderFilters() {
  const options = ["all", ...Object.keys(seriesLabels)];
  filters.innerHTML = options.map((key) => {
    const label = key === "all" ? getText("allSeries") : seriesLabels[key][state.language];
    const active = state.series === key;
    return `<button class="filter-chip${active ? " active" : ""}" type="button" data-series="${key}" aria-pressed="${active}">${label}</button>`;
  }).join("");

  filters.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.series = button.dataset.series;
      renderFilters();
      renderPets();
    });
  });
}

function renderPets() {
  const query = state.query.trim().toLowerCase();
  const visiblePets = pets.filter((pet) => {
    const matchesSeries = state.series === "all" || pet.series === state.series;
    const haystack = `${pet.id} ${pet.name.zh} ${pet.name.en} ${seriesLabels[pet.series].zh} ${seriesLabels[pet.series].en}`.toLowerCase();
    return matchesSeries && (!query || haystack.includes(query));
  });

  petGrid.innerHTML = visiblePets.map((pet) => `
    <article class="pet-card" style="--pet-rgb: ${pet.color}">
      <div class="pet-visual">
        <span class="series-pill">${seriesLabels[pet.series][state.language]}</span>
        <span class="version-pill">v2</span>
        <img src="./${pet.id}/preview.webp" alt="${pet.name[state.language]}" loading="lazy" width="192" height="208">
      </div>
      <div class="pet-content">
        <div class="pet-title-row">
          <div>
            <h3>${pet.name[state.language]}</h3>
            <span class="pet-id">${pet.id}</span>
          </div>
        </div>
        <p class="pet-description">${pet.description[state.language]}</p>
        <div class="pet-meta">
          <span>${getText("contributedBy")}</span>
          <a class="creator" href="https://github.com/${pet.contributor}" target="_blank" rel="noreferrer">
            <span class="creator-avatar">${pet.contributor.slice(0, 1).toUpperCase()}</span>
            <span>${pet.contributor}</span>
          </a>
        </div>
        <div class="pet-actions">
          <button type="button" data-copy-prompt="${pet.id}">${getText("copyPrompt")}</button>
          <a href="${repositoryUrl}/tree/main/${pet.id}" target="_blank" rel="noreferrer" title="${getText("viewFiles")}" aria-label="${getText("viewFiles")}">↗</a>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visiblePets.length !== 0;

  petGrid.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      const pet = pets.find((item) => item.id === button.dataset.copyPrompt);
      await navigator.clipboard.writeText(createInstallPrompt(pet));
      showToast(getText("promptCopied"));
    });
  });
}

function renderTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = state.language === "zh" ? "codex-pets · 给代码找个伙伴" : "codex-pets · Every line deserves company";
  document.querySelector('meta[name="description"]').content = state.language === "zh"
    ? "发现、安装和分享 Codex 动态宠物，让每一次编码都有个性伙伴相伴。"
    : "Discover, install, and share animated Codex pets that bring personality to every coding session.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = getText(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = getText(element.dataset.i18nPlaceholder);
  });

  languageLabel.textContent = state.language === "zh" ? "EN" : "中文";
  languageToggle.setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切换到中文");
  document.querySelector("#contributeGuide").href = state.language === "zh"
    ? `${repositoryUrl}#通过-pull-request-添加宠物`
    : `${repositoryUrl}/blob/main/README_EN.md#add-a-pet-via-pull-request`;

  renderFilters();
  renderPets();
}

function renderInstallCode() {
  installCode.textContent = installCommands[state.platform];
  codeLabel.textContent = state.platform === "windows" ? "PowerShell" : "Terminal";
}

languageToggle.addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  localStorage.setItem("codex-pets-language", state.language);
  renderTranslations();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPets();
});

document.querySelectorAll(".platform-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.platform = button.dataset.platform;
    document.querySelectorAll(".platform-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-pressed", String(active));
    });
    renderInstallCode();
  });
});

document.querySelector("#copyInstallCode").addEventListener("click", async () => {
  await navigator.clipboard.writeText(installCommands[state.platform]);
  showToast(getText("copied"));
});

document.querySelector("#petCount").textContent = String(pets.length);
document.querySelector("#worldCount").textContent = String(new Set(pets.map((pet) => pet.series)).size);
document.querySelector("#creatorCount").textContent = String(new Set(pets.map((pet) => pet.contributor)).size);

renderInstallCode();
renderTranslations();
