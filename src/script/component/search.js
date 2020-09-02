class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  get value() {
    return this.querySelector("#keyword").value;
  }

  render() {
    this.innerHTML = `
      <section class="mt-4  px-4">
        <input type="text" id="keyword" class="bg-blue-800 w-11/12 rounded h-10 px-12 rounded" placeholder="cari by kode negara" />   
        <button class="bg-green-800 px-6 py-2 rounded text-white font-bold mt-6" id="btn-search">Search</button>
      <section/>
    `;
    this.querySelector("#btn-search").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-component", Search);
