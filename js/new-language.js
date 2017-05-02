function makeName(lang, key) {
    return key;
}

function makeBasicLanguage() {
    return {
        phonemes: {
            C: "ptkmnls",
            V: "aeiou",
            S: "s",
            F: "mn",
            L: "rl"
        },
        structure: "CVC",
        exponent: 2,
        restricts: [],
        cortho: {},
        vortho: {},
        noortho: true,
        nomorph: true,
        nowordpool: true,
        minsyll: 1,
        maxsyll: 1,
        morphemes: {},
        words: {},
        names: [],
        joiner: ' ',
        maxchar: 12,
        minchar: 5
    };
}

// build markov chain to generate names