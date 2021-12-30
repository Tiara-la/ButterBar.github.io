import $ from 'jquery'
import 'regenerator-runtime'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../component/drink-item.js'
import '../component/drink-list.js'
import '../component/search-bar.js';
import '../../styles/style.css'
import DataSource from '../data/data-source.js'


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const listDrinkElement = document.querySelector('drink-list')

    const takeDrink = async () => {
        try {
            const result = await DataSource.listDrink()
            listDrinkElement.drinks = result
        } catch (error) {
            alert(error)
        }
    }
    takeDrink();

    const onButtonSearchClicked = async (keyword) => {
        try {
            const result = await DataSource.searchDrink(keyword);
            renderResult(result)
            $('.keyword').text(keyword)
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        listDrinkElement.drinks = results
    };

    const fallbackResult = message => {
        listDrinkElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    $(document).on('submit', 'search-bar form', function (e) {
        e.preventDefault()
        const keyword = $('input[id="searchElement"]').val()
        listDrinkElement.drinks = []
        onButtonSearchClicked(keyword)
    })
};

export default main;