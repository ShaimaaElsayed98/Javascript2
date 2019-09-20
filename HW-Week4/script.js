//Q1
const FavBooks=[
                "tom_soyer",
                    "madness",
                        "entangled",
                            "vampire_and_succubus",
                                "the_diaries_of_a_wimpy_kid",
                                    "the_red_bride",
                                        "it",
                                            "vampire_academy",
                                                "csi_miami",
                                                    "richard_castel"
]
console.log(FavBooks.length);
//Q2
function listfunction(){
for (let i = 0; i < FavBooks.length; i++){
        const FavBooks=FavBooks[i];
        var ul = document.getElementById("Books");
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(FavBooks));
        ul.appendChild(li);    
    }
}
listfunction();

//Q3
const InfoForEachBook={
    tom_soyer:{
        title:"Tom Soyer",
        Language:"English"
    },
    madness:{
        title:"Madness",
        Language:"Spanish"

    },
    entangled:{
        title:"Title",
        Language:"English"
    },
    vampire_and_succubus:{
        title:"Vampire and Succubus",
        Language:"Greek"
    },
    the_diaries_of_a_wimpy_kid:{
        title:"The diaries of a wimpy kid",
        Language:"English"
    },
    the_red_bride:{
        title:"The red bride",
        Language:"Spanish"
    },
    it:{
        title:"It",
        Language:"English"
    },
    vampire_academy:{
        title:"Vampire Academy",
        Language:"English"
    },
    csi_miami:{
        title:"CSI:Miami",
        Language:"English"
    },
    richard_castel:{
        title:"Richard Castel",
        Language:"English"
    }
};

//Q4


