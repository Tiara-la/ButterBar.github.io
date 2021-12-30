class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <form class="d-flex">
                    <input placeholder="Search Drink" id="searchElement" class="search me-2" name="search" type="search" aria-label="Search">
                    <button id="searchButtonElement" class="btn" type="submit">Search</button>
                </form>
            </div>
        </nav>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
