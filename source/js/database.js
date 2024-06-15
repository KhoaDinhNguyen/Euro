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

const matchArray = new Array();
matchArray.push(new Match(germany, scotland, '15-06', '02:00'));
matchArray.push(new Match(hungary, switerland, '15-06', '20:00'));
matchArray.push(new Match(spain, croatia, '15-06', '23:00'));
matchArray.push(new Match(italia, albania, '16-06', '02:00'));
matchArray.push(new Match(poland, netherland, '16-06', '20:00'));
matchArray.push(new Match(slovenia, denmark, '16-06', '23:00'));
matchArray.push(new Match(serbia, england, '16-06', '02:00'));
matchArray.push(new Match(romania, ukraina, '17-06', '20:00'));
matchArray.push(new Match(belgium, slovakia, '17-06', '23:00'));
matchArray.push(new Match(austria, french, '18-06', '02:00'));
matchArray.push(new Match(turkey, gruzia, '18-06', '23:00'));
matchArray.push(new Match(portugese, czech, '19-06', '02:00'));

matchArray.push(new Match(croatia, albania, '19-06', '20:00'));
matchArray.push(new Match(germany, hungary, '19-06', '23:00'));
matchArray.push(new Match(scotland, switerland, '20-06', '02:00'));
matchArray.push(new Match(slovenia, serbia, '20-06', '20:00'));
matchArray.push(new Match(denmark, england, '20-06', '23:00'));
matchArray.push(new Match(spain, italia, '21-06', '02:00'));
matchArray.push(new Match(slovakia, ukraina, '21-06', '20:00'));
matchArray.push(new Match(poland, austria, '21-06', '23:00'));
matchArray.push(new Match(netherland, french, '22-06', '02:00'));
matchArray.push(new Match(gruzia, czech, '22-06', '20:00'));
matchArray.push(new Match(turkey, portugese, '22-06', '23:00'));
matchArray.push(new Match(belgium, romania, '23-06', '02:00'));

matchArray.push(new Match(switerland, germany, '24-06', '02:00'));
matchArray.push(new Match(scotland, hungary, '24-06', '02:00'));
matchArray.push(new Match(albania, spain, '25-06', '02:00'));
matchArray.push(new Match(croatia, italia, '25-06', '02:00'));
matchArray.push(new Match(french, poland, '25-06', '23:00'));
matchArray.push(new Match(netherland, austria, '25-06', '23:00'));
matchArray.push(new Match(denmark, serbia, '26-06', '02:00'));
matchArray.push(new Match(england, slovenia, '26-06', '02:00'));
matchArray.push(new Match(germany, scotland, '26-06', '02:00'));
matchArray.push(new Match(slovakia, romania, '26-06', '23:00'));
matchArray.push(new Match(ukraina, belgium, '26-06', '23:00'));
matchArray.push(new Match(gruzia, portugese, '27-06', '02:00'));
matchArray.push(new Match(czech, turkey, '277-06', '02:00'));

