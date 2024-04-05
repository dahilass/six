import mixitup from 'mixitup';

function mixItUpBundle() {
    // MIXER

    const mixer = mixitup('.portfolio__list');

    const portfolioList = document.querySelector('.portfolio__list');
    const portfolioTagList = document.querySelector('.portfolio__tag-list');

    // Disable inactive buttons in tag-list

    // preparing initial data

    let arrOfList = [];
    const objOfList = {};

    for (let item of portfolioList.children) {
        arrOfList.push(item.className);
    }
    arrOfList = arrOfList.join(' ').split(' ');

    removeDoubling(arrOfList, objOfList);

    let arrOfTags = [];
    const objOfTags = {};
    for (let item of portfolioTagList.children) {
        arrOfTags.push(item.getAttribute('data-filter'));
    }

    arrOfTags = arrOfTags
        .map((el) => el.replaceAll(/(\.)?(all)?/gi, ''))
        .filter((el) => el);

    removeDoubling(arrOfTags, objOfTags);

    for (let key in objOfList) {
        delete objOfTags[key];
    }

    // give DISABLED attribut for btns

    for (let item of portfolioTagList.children) {
        for (let key in objOfTags) {
            if (item.getAttribute('data-filter') === `.${key}`) {
                item.disabled = true;
            }
        }
    }

    // Delete doubling items from array and convert result as obj

    function removeDoubling(arr, obj) {
        for (let item of arr) {
            obj[item] = 1;
        }
    }
}

export default mixItUpBundle;
