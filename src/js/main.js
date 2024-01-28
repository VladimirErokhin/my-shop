// импорть компонентов
import Navigo from 'navigo'
import {getHeader} from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getMainTitle } from './components/mainTitle.js'
import { getDesc } from './components/descr.js'

const app = document.getElementById('app')

const header = getHeader()
const pageContainer = getPageContainer()

export const router = new Navigo('/');

router.on('/', async () => {
    pageContainer.innerHTML = ''
    const ModuleMain = await import('./pages/mainPage.js')
    const mainPage =  ModuleMain.getMainPage()
    pageContainer.append(mainPage)
});

router.on('/catalogue', async () => {
    pageContainer.innerHTML = ''
    const ModuleCatalogue = await import('./pages/catalogue.js')
    const catalogPage = ModuleCatalogue.getCatalogPage()
    pageContainer.append(catalogPage)
});

router.on('/basket', async () => {
    pageContainer.innerHTML = ''
    const ModuleBasket = await import('./pages/basket.js')
    const basketPage = ModuleBasket.getBasketPage()
    pageContainer.append(basketPage)
});

router.resolve();

app.append(header, pageContainer)