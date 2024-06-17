import {Team, Match, GroupStageMatch, matchArrayGroupStage} from "./database.js";

const sectionMain = document.getElementById("matches");

function createDOMFromMatch(match){
    const tr = document.createElement('tr');
    const td = new Array(5);
    
    for(let i = 0; i < 5 ; ++i){
        td[i] = document.createElement('td');
    }

    td[0].innerHTML = `<p>${match.team1.name}<p>`;
    td[1].innerHTML = `<p>${match.team1Score}<p>`;
    td[2].innerHTML = `<p>${match.team2Score}<p>`;
    td[3].innerHTML = `<p>${match.team2.name}<p>`;

    if(match.hour === 2){
        td[4].innerHTML = `<p>0${match.hour}:00<p>`
    }
    else{
        td[4].innerHTML = `<p>${match.hour}:00<p>`
    }

    for(let i = 0; i < 5 ; ++i){
        tr.appendChild(td[i]);
    }

    return tr;
}

function createDOMFromMatchGroup(matches){
    const div = document.createElement('div');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr')
    const th = document.createElement('th');

    th.innerHTML = `<p>${matches[0].date}-06-2024<p>`
    th.setAttribute("colspan","5");

    tr.appendChild(th);
    thead.appendChild(tr);

    for(const match of matches){
        tbody.appendChild(createDOMFromMatch(match));
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    div.appendChild(table);
    sectionMain.appendChild(div);
}

function createDOMFormMatchArray(matchArray){
    if(matchArray.length === 0){
        return true;
    }

    let matchesGroup = [], date = matchArray[0].date;

    for(let i = 0 ; i < matchArray.length; ++i){
        if(date !== matchArray[i].date){
            createDOMFromMatchGroup(matchesGroup);
            date = matchArray[i].date;
            matchesGroup = [matchArray[i]];
        }
        else{
            matchesGroup.push(matchArray[i]);
        }
    }

    if(matchesGroup.length === 0){
        return true;
    }
    createDOMFromMatchGroup(matchesGroup);

}

/*---------------------------------INTERACTION----------------------*/

//FILTER
const filter = document.getElementById("submitFilter");

function getFilter(){
    sectionMain.innerHTML = '';
    const value = document.getElementById("filterDate").value;

    if(value === ''){
        createDOMFormMatchArray(matchArrayGroupStage);
        return true;
    }

    const matchArray = matchArrayGroupStage.filter(item => {
        return item.date >= value;
    });

    createDOMFormMatchArray(matchArray);
    return true;
}

filter.addEventListener("click", getFilter);

//SEARCH
const search = document.getElementById("submitSearch");

function getSearch(){
    sectionMain.innerHTML = '';
    const value = document.getElementById("searchValue").value;

    if(value === "All"){
        createDOMFormMatchArray(matchArrayGroupStage);
        return true;
    }

    const matchArray = matchArrayGroupStage.filter(item => {
        return item.team1.name === value || item.team2.name === value;
    });

    createDOMFormMatchArray(matchArray);

    return true;
}

search.addEventListener("click", getSearch);

/*----------------------------------UPDATE FUNCTION -------------------*/
function updateResult(team1, team2, val1, val2){
    for(const match of matchArrayGroupStage){
        if(match.team1.name === team1 && match.team2.name === team2){
            match.team1Score = val1;
            match.team2Score = val2;
            return;
        }
    }
}

updateResult("Germany", "Scotland", 5, 1);
updateResult("Hungary", "Switerland", 1, 3);
updateResult("Spain", "Croatia", 3, 0);
updateResult("Germany", "Scotland", 5, 1);

createDOMFormMatchArray(matchArrayGroupStage);
