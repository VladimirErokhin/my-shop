import { getDesc } from "../components/descr.js"
import { getMainTitle } from "../components/mainTitle.js"

// Каталог
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Каталог')
    const desc = getDesc('Страница в разработке')


    page.append(mainTitle, desc)
    return page
} 