
const string1 ="Hi, my name is";
const string2 = "and I am learning to program in";
function introduction(name="Aki"){
    return(`${string1} ${name}.`);
}
introduction();


function introductionWithLanguage(name="Aki", language="Ember.js"){
    return(`${string1} ${name} ${string2} ${language}.`)
}
introductionWithLanguage();

function introductionWithLanguageOptional(name="Gracie", language="JavaScript"){
    return`${string1} ${name} ${string2} ${language}.`
}


introductionWithLanguageOptional();

