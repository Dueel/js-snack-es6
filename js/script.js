function es1(){

    let bikes = [

        {
            'name': 'first',
            'weight': 700
        },
        {
            'name': 'second',
            'weight': 400
        },
        {
            'name': 'third',
            'weight': 800
        }
    ];

    let lightest = {
        
        'name': '',
        'weight': Number.MAX_SAFE_INTEGER
    };

    for (let i = 0; i < bikes.length; i++){

        if (bikes[i]['weight'] < lightest['weight']){

            lightest['name'] = bikes[i]['name'];
            lightest['weight'] = bikes[i]['weight'];
        }
    }

    console.log(lightest);
}

function es2(){

    let teams = [];

    for (let i = 0; i < 5; i++){

        let obj = {

            'name': 'teams' + (i + 1),
            'points': 0,
            'fouls': 0
        }
        
        teams.push(obj)
    }

    console.log(teams);
    return teams
}

function getRandom(min, max){

    let rnd = Math.floor(Math.random() * (max - min + 1) + min);

    return rnd
}

function es3(){

    let teams = es2();

    for (let i = 0; i < teams.length; i++){

        teams[i]['points'] = getRandom(1, 10);
        teams[i]['fouls'] = getRandom(1, 10)
    }

    console.log(teams);
    return teams
}



function init(){

    // es1();
    // es2();
    es3();

}

$(document).ready(init)