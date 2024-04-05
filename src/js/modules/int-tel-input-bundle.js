function intTelInputBundle() {
    // intl-tel-input for forms
    const countriesNames = {
        ru: 'Россия',
        ua: 'Украина',
        kz: 'Казахстан',
        ab: 'Абхазия',
        az: 'Азербайджан',
        by: 'Беларусь',
        ge: 'Грузия',
        kg: 'Киргизстан',
        lt: 'Литва',
        lv: 'Латвия',
        tj: 'Таджикистан',
        uz: 'Узбекистан',
        tm: 'Туркменистан',
        fi: 'Финляндия',
        ee: 'Эстония',
        am: 'Армения',
        cn: 'Китай',
        searchPlaceholder: 'Поиск',
    };
    const countriesAbbreviation = [
        'ru',
        'ua',
        'kz',
        'ab',
        'az',
        'by',
        'ge',
        'kg',
        'lt',
        'lv',
        'tj',
        'uz',
        'tm',
        'fi',
        'ee',
        'os',
        'am',
        'cn',
    ];

    const inputFirst = document.querySelector('#phoneFirst');
    window.intlTelInput(inputFirst, {
        utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js',
        preferredCountries: ['ru'],
        defaultCountry: 'auto',
        i18n: countriesNames,
        onlyCountries: countriesAbbreviation,
    });

    const inputSecond = document.querySelector('#phoneSecond');
    window.intlTelInput(inputSecond, {
        utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js',
        preferredCountries: ['ru'],
        defaultCountry: 'auto',
        i18n: countriesNames,
        onlyCountries: countriesAbbreviation,
    });

    const inputModal = document.querySelector('#phoneModal');
    window.intlTelInput(inputModal, {
        utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js',
        preferredCountries: ['ru'],
        defaultCountry: 'auto',
        i18n: countriesNames,
        onlyCountries: countriesAbbreviation,
    });
}

export default intTelInputBundle;
