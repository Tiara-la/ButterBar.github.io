class DrinkItem extends HTMLElement {
    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.classList.add('col');
        this.innerHTML = `
        <div  class="card-group">
            <div class="card">
                <img class="img-item" src="${this._drink.strDrinkThumb}">
            </div>
            <div class="card">
                <div class="card-body">
                <h2 class="title">${this._drink.strDrink}</h2>
                <p class="category">${this._drink.strCategory}</p>
                </div>
                <div class="card-footer">
                <p class="intruction">${this._drink.strInstructions}</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("drink-item", DrinkItem);





    //     <div class="col-md-4 my-5">
    //     <div class="card">
    //         <img src="${this._movie.Poster}" class="card-img-top">
    //         <div class="card-body">
    //             <h5 class="card-title">${this._movie.Title}</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year}</h6>
    //             <a href="#" class="btn modal-detail-button" data-toggle="modal" data-target="#movieDetail" data-imdbid="${this._movie.imdbID}">Show Details</a>
    //         </div>
    //     </div>
    // </div>