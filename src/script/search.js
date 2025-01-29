const model = {
  searchWord: "",
  searchMode: "partial",
  links: [],
  searchedLinks: [],
  quantities: {},
  setSearchMode(boolean) {
    this.searchMode = boolean ? "strict" : "partial";
  },
  setSearchWord(word) {
    this.searchWord = word.toLowerCase();
  },
  async getLinks() {
    let array = [];
    const promises = [
      "algorithms",
      "backend",
      "browser",
      "css",
      "js",
      "tool",
      "vue",
    ].map(async (e) => {
      const response = await fetch(`./../db/${e}.json`);
      const data = await response.json();
      array = [...array, ...data];
    });
    await Promise.all(promises);
    this.links = array;
  },
  getSearchedLinks() {
    switch (this.searchMode) {
      case "strict":
        this.searchedLinks = this.links
          .filter((e) =>
            e.title
              .toLowerCase()
              .split(" ")
              .find((word) => word === this.searchWord)
          )
          .map((e) => ({ ...e }));
        break;
      case "partial":
        this.searchedLinks = this.links
          .filter((e) => e.title.toLowerCase().includes(this.searchWord))
          .map((e) => ({ ...e }));
        break;
    }
  },
  excludeSearchWord() {
    this.searchedLinks = this.searchedLinks.map((e) => {
      const words = e.title.split(" ").map((e) => e.toLowerCase());
      if (words.length === 1) return e;
      const index = words.indexOf(
        words.find((word) => word.includes(this.searchWord))
      );
      const searchedWord = words.splice(index, 1);
      words.push(`(${searchedWord})`);
      e.title = words.join(" ");
      return e;
    });
  },
  getWordsQuantity() {
    const titles = {};
    this.searchedLinks.forEach((link) => {
      const words = link.title.toLowerCase().split(" ");
      if (words.length > 1) words.pop();
      if (!titles[words[0]]) titles[words[0]] = 0;
      titles[words[0]] += 1;
    });
    this.quantities = titles;
  },
  sortedTitle() {
    this.searchedLinks = this.searchedLinks
      .map((e) => {
        e.title = e.title.split(" ");
        e.title.sort(
          (a, b) =>
            this.quantities[a.toLowerCase()] < this.quantities[b.toLowerCase()]
        );
        e.title = e.title.join(" ");
        return e;
      })
      .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());
  },
  grouppedLinks() {
    const groups = {};
    const singleLinks = [];
    this.searchedLinks.forEach((link) => {
      const theme = link.title.split(" ")[0].toLowerCase();
      if (this.quantities[theme] === 1) {
        singleLinks.push(link);
      } else {
        if (!groups[theme]) groups[theme] = [];
        groups[theme].push(link);
      }
    });
    singleLinks.length && (groups["...etc"] = singleLinks);
    this.searchedLinks = groups;
  },
};

const controller = {
  setSearchMode(value) {
    model.setSearchMode(value);
  },
  async getLinks(word) {
    !model.links.length && (await model.getLinks());
    model.setSearchWord(word);
    model.getSearchedLinks();
    model.excludeSearchWord();
    model.getWordsQuantity();
    model.sortedTitle();
    model.grouppedLinks();
    return model.searchedLinks;
  },
};

export { controller };
