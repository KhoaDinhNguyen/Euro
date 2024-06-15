class Team {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
};

class Match {
    constructor(team1, team2, date, hour){
        this._team1 = team1;
        this._team2 = team2;
        this._date = date;
        this._hour = hour;
    }
    get team1(){
        return this._team1;
    }
    get team2(){
        return this._team2;
    }
    get date(){
        return this._date;
    }
    get hour(){
        return this._hour;
    }
};

class GroupStageMatch extends Match {
    constructor(team1, team2, date, hour){
        super(team1, team2, date, hour);
        if(date < 19 || (date === 19 && hour === 2)){
            this._stage = 1;
        }
        else if(date <= 23){
            this._stage = 2;
        }
        else{
            this._stage = 3;
        }
    }
    get stage(){
        return this._stage;
    }
}
const germany = new Team("Germany");
const scotland = new Team("Scotland");
const hungary = new Team("Hungary");
const switerland = new Team("Switerland");
const spain = new Team("Spain");
const croatia = new Team("Croatia");
const italia = new Team("Italia");
const albania = new Team("Albania");
const poland = new Team("Poland");
const england = new Team("England");
const netherland = new Team("Netherland");
const slovenia = new Team("Slovenia");
const denmark = new Team("Denmark");
const serbia = new Team("Serbia");
const romania = new Team("Romania");
const ukraina = new Team("Ukraina");
const belgium = new Team("Belgium");
const slovakia = new Team("Slovakia");
const austria = new Team("Austria");
const french = new Team("French");
const turkey = new Team("Turkey");
const gruzia = new Team("Gruzia");
const portugese = new Team("Portugese");
const czech = new Team("Czech");

const matchArrayGroupStage = new Array();
matchArrayGroupStage.push(new GroupStageMatch(germany, scotland, 15, 2));
matchArrayGroupStage.push(new GroupStageMatch(hungary, switerland, 15, 20));
matchArrayGroupStage.push(new GroupStageMatch(spain, croatia, 15, 23));
matchArrayGroupStage.push(new GroupStageMatch(italia, albania, 16, 2));
matchArrayGroupStage.push(new GroupStageMatch(poland, netherland, 16, 20));
matchArrayGroupStage.push(new GroupStageMatch(slovenia, denmark, 16, 23));
matchArrayGroupStage.push(new GroupStageMatch(serbia, england, 16, 2));
matchArrayGroupStage.push(new GroupStageMatch(romania, ukraina, 17, 20));
matchArrayGroupStage.push(new GroupStageMatch(belgium, slovakia, 17, 23));
matchArrayGroupStage.push(new GroupStageMatch(austria, french, 18, 2));
matchArrayGroupStage.push(new GroupStageMatch(turkey, gruzia, 18, 23));
matchArrayGroupStage.push(new GroupStageMatch(portugese, czech, 19, 2));

matchArrayGroupStage.push(new GroupStageMatch(croatia, albania, 19, 20));
matchArrayGroupStage.push(new GroupStageMatch(germany, hungary, 19, 23));
matchArrayGroupStage.push(new GroupStageMatch(scotland, switerland, 20, 2));
matchArrayGroupStage.push(new GroupStageMatch(slovenia, serbia, 20, 20));
matchArrayGroupStage.push(new GroupStageMatch(denmark, england, 20, 23));
matchArrayGroupStage.push(new GroupStageMatch(spain, italia, 21, 2));
matchArrayGroupStage.push(new GroupStageMatch(slovakia, ukraina, 21, 20));
matchArrayGroupStage.push(new GroupStageMatch(poland, austria, 21, 23));
matchArrayGroupStage.push(new GroupStageMatch(netherland, french, 22, 2));
matchArrayGroupStage.push(new GroupStageMatch(gruzia, czech, 22, 20));
matchArrayGroupStage.push(new GroupStageMatch(turkey, portugese, 22, 23));
matchArrayGroupStage.push(new GroupStageMatch(belgium, romania, 23, 2));

matchArrayGroupStage.push(new GroupStageMatch(switerland, germany, 24, 2));
matchArrayGroupStage.push(new GroupStageMatch(scotland, hungary, 24, 2));
matchArrayGroupStage.push(new GroupStageMatch(albania, spain, 25, 2));
matchArrayGroupStage.push(new GroupStageMatch(croatia, italia, 25, 2));
matchArrayGroupStage.push(new GroupStageMatch(french, poland, 25, 23));
matchArrayGroupStage.push(new GroupStageMatch(netherland, austria, 25, 23));
matchArrayGroupStage.push(new GroupStageMatch(denmark, serbia, 26, 2));
matchArrayGroupStage.push(new GroupStageMatch(england, slovenia, 26, 2));
matchArrayGroupStage.push(new GroupStageMatch(slovakia, romania, 26, 23));
matchArrayGroupStage.push(new GroupStageMatch(ukraina, belgium, 26, 23));
matchArrayGroupStage.push(new GroupStageMatch(gruzia, portugese, 27, 2));
matchArrayGroupStage.push(new GroupStageMatch(czech, turkey, 27, 2));


const resources = {
    Team,
    Match,
    GroupStageMatch,
    matchArrayGroupStage,
};

export {Team, Match, GroupStageMatch, matchArrayGroupStage};
