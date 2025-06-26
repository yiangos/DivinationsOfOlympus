(function(){
    const glyphs =[
        {"name":"A", "score":1, "sign":0x10000},
        {"name":"E", "score":2, "sign":0x10001},
        {"name":"I", "score":1, "sign":0x10002},
        {"name":"O", "score":1, "sign":0x10003},
        {"name":"U", "score":1, "sign":0x10004},
        {"name":"DA", "score":1, "sign":0x10005},
        {"name":"DE", "score":2, "sign":0x10006},
        {"name":"DI", "score":3, "sign":0x10007},
        {"name":"DO", "score":1, "sign":0x10008},
        {"name":"DU", "score":2, "sign":0x10009},
        {"name":"JA", "score":2, "sign":0x1000A},
        {"name":"JE", "score":3, "sign":0x1000B},
        {"name":"JO", "score":1, "sign":0x1000D},
        {"name":"KA", "score":3, "sign":0x1000F},
        {"name":"KE", "score":1, "sign":0x10010},
        {"name":"KI", "score":2, "sign":0x10011},
        {"name":"KO", "score":3, "sign":0x10012},
        {"name":"KU", "score":1, "sign":0x10013},
        {"name":"MA", "score":2, "sign":0x10014},
        {"name":"ME", "score":3, "sign":0x10015},
        {"name":"MI", "score":1, "sign":0x10016},
        {"name":"MO", "score":2, "sign":0x10017},
        {"name":"MU", "score":3, "sign":0x10018},
        {"name":"NA", "score":1, "sign":0x10019},
        {"name":"NE", "score":2, "sign":0x1001A},
        {"name":"NI", "score":3, "sign":0x1001B},
        {"name":"NO", "score":1, "sign":0x1001C},
        {"name":"NU", "score":2, "sign":0x1001D},
        {"name":"PA", "score":2, "sign":0x1001E},
        {"name":"PE", "score":3, "sign":0x1001F},
        {"name":"PO", "score":3, "sign":0x10021},
        {"name":"PU", "score":2, "sign":0x10022},
        {"name":"QA", "score":3, "sign":0x10023},
        {"name":"QE", "score":1, "sign":0x10024},
        {"name":"QI", "score":2, "sign":0x10025},
        {"name":"QO", "score":3, "sign":0x10026},
        {"name":"RA", "score":1, "sign":0x10028},
        {"name":"RE", "score":3, "sign":0x10029},
        {"name":"RI", "score":1, "sign":0x1002A},
        {"name":"RO", "score":2, "sign":0x1002B},
        {"name":"RU", "score":3, "sign":0x1002C},
        {"name":"SA", "score":3, "sign":0x1002D},
        {"name":"SE", "score":1, "sign":0x1002E},
        {"name":"SI", "score":2, "sign":0x1002F},
        {"name":"SO", "score":3, "sign":0x10030},
        {"name":"SU", "score":1, "sign":0x10031},
        {"name":"TA", "score":2, "sign":0x10032},
        {"name":"TE", "score":3, "sign":0x10033},
        {"name":"TI", "score":1, "sign":0x10034},
        {"name":"TO", "score":2, "sign":0x10035},
        {"name":"TU", "score":3, "sign":0x10036},
        {"name":"WA", "score":2, "sign":0x10037},
        {"name":"WE", "score":3, "sign":0x10038},
        {"name":"WI", "score":1, "sign":0x10039},
        {"name":"WO", "score":2, "sign":0x1003A},
        {"name":"ZA", "score":3, "sign":0x1003C},
        {"name":"ZO", "score":2, "sign":0x1003F},
        {"name":"A₂", "score":3, "sign":0x10040},
        {"name":"A₃", "score":2, "sign":0x10041},
        {"name":"AU", "score":3, "sign":0x10042},
        {"name":"DWE", "score":3, "sign":0x10043},
        {"name":"DWO", "score":1, "sign":0x10044},
        {"name":"NWA", "score":3, "sign":0x10045},
        {"name":"PTE", "score":1, "sign":0x10047},
        {"name":"PU₂", "score":2, "sign":0x10046},
        {"name":"RAI", "score":2, "sign":0x10049},
        {"name":"RO₂", "score":2, "sign":0x1004A},
        {"name":"TWE", "score":1, "sign":0x1004C},
        {"name":"RA₂", "score":1, "sign":0x10048},
        {"name":"TA₂", "score":1, "sign":0x1004B},
        {"name":"MAN", "score":5, "sign":0x10080},
        {"name":"WOMAN", "score":5, "sign":0x10081},
        {"name":"RAM", "score":5, "sign":0x10087},
        {"name":"EWE", "score":5, "sign":0x10086},
        {"name":"HE-GOAT", "score":5, "sign":0x10089},
        {"name":"SHE-GOAT", "score":5, "sign":0x10088},
        {"name":"SOW", "score":5, "sign":0x1008A},
        {"name":"BOAR", "score":5, "sign":0x1008B},
        {"name":"COW", "score":5, "sign":0x1008C},
        {"name":"BULL", "score":5, "sign":0x1008D},
        {"name":"WHEAT", "score":5, "sign":0x1008E},
        {"name":"BARLEY", "score":5, "sign":0x1008F},
        {"name":"SAFFLOWER", "score":5, "sign":0x10094},
        {"name":"OLIVES", "score":5, "sign":0x10090},
        {"name":"OLIVE OIL", "score":5, "sign":0x10095},
        {"name":"HONEY", "score":5, "sign":0x10099},
        {"name":"WINE", "score":5, "sign":0x10096},
        {"name":"GOLD", "score":5, "sign":0x1009B},
        {"name":"SPICE", "score":5, "sign":0x10091},
        {"name":"CYPERUS", "score":5, "sign":0x10092},
        {"name":"UNGUENT", "score":5, "sign":0x10098},
        {"name":"AMPHORA", "score":5, "sign":0x100E8},
        {"name":"DAGGER", "score":5, "sign":0x100C9},
        {"name":"MONTH", "score":5, "sign":0x100B5},
        {"name":"BRONZE", "score":5, "sign":0x1009A},
        {"name":"WOOL", "score":5, "sign":0x1009D},
        {"name":"GARMENT", "score":5, "sign":0x100AA},
        {"name":"ARMOR", "score":5, "sign":0x100AB},
        {"name":"CLOTH", "score":5, "sign":0x100A7},
        {"name":"HELMET", "score":5, "sign":0x100C3}
    ];
    const words = [
        {
            "name": "Ivory",
            "glyphs": ["E","RE","PA"],
            "action": "5 +"
        },
        {
            "name": "Lead",
            "glyphs": ["MO","RI","WO", "DO"],
            "action": "5 +"
        },
        {
            "name": "Laburnum Wood",
            "glyphs": ["KU","TE","SO"],
            "action": "5 +"
        },
        {
            "name": "King",
            "glyphs": ["WA","NA","KA"],
            "action": "10 +"
        },
        {
            "name": "Queen",
            "glyphs": ["WA","NA","SA"],
            "action": "10 +"
        },
        {
            "name": "Priest",
            "glyphs": ["I","JE","RE","U"],
            "action": "10 +"
        },
        {
            "name": "Priestess",
            "glyphs": ["I","JE","RE","JA"],
            "action": "10 +"
        },
        {
            "name": "Leader of the people",
            "glyphs": ["RA","WA","KE","TA"],
            "action": "10 +"
        },
        {
            "name": "The God Ares",
            "glyphs": ["A","RE"],
            "action": "15 +"
        },
        {
            "name": "The Goddess Athena",
            "glyphs": ["A","TA","NA"],
            "action": "15 +"
        },
        {
            "name": "The Goddess Artemis",
            "glyphs": ["A","TE","MI"],
            "action": "15 +"
        },
        {
            "name": "The God Dionsus",
            "glyphs": ["DI","WO","NU","SO"],
            "action": "15 +"
        },
        {
            "name": "The God Hermes",
            "glyphs": ["E","MA","A2"],
            "action": "15 +"
        },
        {
            "name": "The Goddess Hera",
            "glyphs": ["E","RA"],
            "action": "15 +"
        },
        {
            "name": "The God Hephaestus",
            "glyphs": ["A","PA","I","TO"],
            "action": "15 +"
        },
        {
            "name": "The God Poseidon",
            "glyphs": ["PO","SE","DA","O"],
            "action": "15 +"
        },
        {
            "name": "Copper",
            "glyphs": ["KA","KO"],
            "action": "[c1] 2 * +"
        },
        {
            "name": "Silver",
            "glyphs": ["A","KU","RO"],
            "action": "[c2] 2 * +"
        },
        {
            "name": "Gold",
            "glyphs": ["KU","RU","SO"],
            "action": "[c3] 2 * +"
        },
        {
            "name": "Wooden Horse",
            "glyphs": ["DO","WE","JO","I","QO"],
            "action": "2 *"
        },
        {
            "name": "Mistress of the labyrinth",
            "glyphs": ["DA","PU2","RI","TO","JO","PO","TI","NI","JA"],
            "action": "3 *"
        },
        {
            "name": "Honey to all the Gods!",
            "glyphs": ["PA","SI","TE","O","I","ME","RI"],
            "action": "4 *"
        }
    ];
    let players=[];
    let selectedPlayer=null;
    document.addEventListener("DOMContentLoaded", () => {
        let app = document.getElementById("app");
        buildGamePage(app);
    });
    const buildGamePage = (app) => {
        clearPage(app);
        createPlayerInput(app);
        createStartButton(app);
        InitializePlayerList(app);
    };
    const buildPlayerPage=(app)=>{
        clearPage(app);
        createPlayerSelectionList(app);
        createBaseScoreDisplay(app);
        createFinalScoreDisplay(app);
        createGlyphInput(app);
        createGlyphList(app);
        createPlayerGlyphTable(app);
        createWordList(app);
        updateScoreDisplay();
        buildGlyphTable();
        updateWordDisplay();
    };
    const clearPage = (app)=>{
        app.innerHTML="";
    };
    const createPlayerInput=(app)=>{
        let playerInput=app.appendChild(document.createElement("input"));
        playerInput.setAttribute("id", "playerInput");
        playerInput.setAttribute("placeholder", "Enter player name");

        let playerNameButton = app.appendChild(document.createElement("button"));
        playerNameButton.textContent="+";
        playerNameButton.addEventListener("click", addPlayer);
    };
    const createStartButton=(app)=>{
        let startButtonDiv=app.appendChild(document.createElement("div"));
        let startButton=document.createElement("button");
        startButton.textContent="Start Game";
        startButtonDiv.appendChild(startButton);
        startButton.addEventListener("click", startGame);
    };
    const InitializePlayerList=(app)=>{
        let playerList=document.createElement("ul");
        app.appendChild(playerList);
        playerList.setAttribute("id", "playerList");
        players=[];
    };
    const createBaseScoreDisplay=(app)=>{
        let baseScoreDiv=app.appendChild(document.createElement("div"));
        baseScoreDiv.textContent="Base Score: ";
        let baseScore=baseScoreDiv.appendChild(document.createElement("span"));
        baseScore.setAttribute("id", "baseScore");
    };
    const createFinalScoreDisplay=(app)=>{
        let finalScoreDiv=app.appendChild(document.createElement("div"));
        finalScoreDiv.textContent="Final Score: ";
        let finalScore=finalScoreDiv.appendChild(document.createElement("span"));
        finalScore.setAttribute("id", "finalScore");
    };
    const createGlyphInput=(app)=>{
        let glyphInput=app.appendChild(document.createElement("input"));
        glyphInput.setAttribute("list", "glyphs");
        glyphInput.setAttribute("name", "glyph");
        glyphInput.setAttribute("id", "glyphInput");
        glyphInput.addEventListener("input", glyphInputChange);
    };
    const createGlyphList=(app)=>{
        let glyphsList=app.appendChild(document.createElement("datalist"));
        glyphsList.setAttribute("id", "glyphs");
        glyphs.forEach(g=>{if (!players.some(p=>p.glyphs.some(pg=>pg.name==g.name))) addGlyphOption(g, glyphsList);});
    };
    const createPlayerGlyphTable=(app)=>{
        let glyphTable=app.appendChild(document.createElement("table"));
        glyphTable.setAttribute("id", "glyphTable");
    };  
    const createWordList=(app)=>{
        words.forEach(w=>{app.appendChild(createWordItem(w))});
    };
    const createPlayerSelectionList=(app)=>{
        let playerList=document.createElement("select");
        app.appendChild(playerList);
        playerList.setAttribute("id", "playerList");
        players.forEach(p=>{
            let player=document.createElement("option");
            player.value=p.name;
            player.textContent=p.name;
            playerList.appendChild(player);
        });
        playerList.value=selectedPlayer.name;
        playerList.addEventListener("change", playerListChange);
    };
    const startGame=(e)=>{
        if (players.length==0) return;
        selectedPlayer=players[0];
        buildPlayerPage(app);
    };
    const addPlayer=(e)=>{
        let playerName=document.getElementById("playerInput").value;
        if (playerName.trim()!="") {
            players.push({name:playerName, glyphs:[], words:[]});
            document.getElementById("playerInput").value="";
            createPlayerList();
        }
    };
    const playerListChange=(e)=>{
        selectedPlayer=players.find(p=>p.name==e.target.value);
        buildPlayerPage(app);
    };
    const glyphInputChange=(e) => {
        const input = e.target;
        const selected = glyphs.find(g => g.name === input.value);
        if (!selected) return;
        selectedPlayer.glyphs.push(selected);
        updateScoreDisplay();
        buildGlyphTable();
        updateWordDisplay();
        input.value='';
        removeGlyphOption(selected);
        players[players.findIndex(p=>p.name==selectedPlayer.name)]=selectedPlayer;
    };
    const buildGlyphTable=()=>{
        const glyphTable = document.getElementById("glyphTable");
        glyphTable.innerHTML="";
        let currentRow=null;
        let cellCount = 0;
        selectedPlayer.glyphs.forEach(g=>{
            if (glyphTable.rows.length>0)
                currentRow = glyphTable.rows[glyphTable.rows.length - 1];
            else 
                currentRow = glyphTable.insertRow();
            cellCount=currentRow.cells.length;
            if (cellCount % 5 === 0 && cellCount>0)
                currentRow = glyphTable.insertRow();    
            buildGlyphCell(g, glyphTable);
            cellCount++;
        });
    };
    const calculateBaseScore=()=>{ 
        return selectedPlayer.glyphs.map(g=> {return g.score}).reduce((a, c) => {return a + c}, 0) 
    };
    const updateScoreDisplay=()=>{
        document.getElementById("baseScore").innerHTML=calculateBaseScore();
        document.getElementById("finalScore").innerHTML=calculateFinalScore();
    };
    const createPlayerList=()=>{
        document.getElementById("playerList").innerHTML="";
        players.forEach(p=>{
            let player=document.createElement("li");
            player.textContent=p.name;
            document.getElementById("playerList").appendChild(player);
        });
    };
    const allPossibleCombos = ()=>{
        const arr = words.filter(w => w.glyphs.every(wg => selectedPlayer.glyphs.some(g=>g.name==wg)));
        const total = Math.pow(2, arr.length);
        let res = [];
        for (let i = 0; i < total; i++)
        {
            let comb = [];
            for (let j = 0; j < arr.length; j++){
                if ((i & Math.pow(2,j))){ 
                    comb.push(arr[j]);
                }
            }
            if (comb.length) {
                res.push(comb);
            }
        }
        return res.filter(comboList =>
        {
            for(const word of comboList)
            {
                if (comboList.some(t => t.name != word.name && t.glyphs.some(tg => word.glyphs.some(wg=>wg==tg)))) return false;
            }
            return true;
        });
    };
    const calculateFinalScore=()=>{
        var score = calculateBaseScore();
        selectedPlayer.words=[];
        const allpossible = allPossibleCombos();
        allpossible.forEach(combo=>
        {
            var tempScore = finalScoreCandidate(combo);
            if (tempScore > score)
            {
                score = tempScore;
                selectedPlayer.words = combo;
            }
        });
        return score;
    };
    const updateWordDisplay=()=>{
        document.querySelectorAll(".word").forEach(g=>g.className="word");
        document.querySelectorAll(".glyph").forEach(g=>g.className="glyph unset");
        selectedPlayer.glyphs.forEach(g => { document.querySelectorAll("[data-glyph='"+g.name+"']").forEach(el=>el.className="glyph set"); });
        selectedPlayer.words.forEach(w => {document.getElementById(w.glyphs.join("")).className="word selected"});
        players.filter(p=>p.name!=selectedPlayer.name).forEach(p=>{
            p.glyphs.forEach(g=>{
                document.querySelectorAll("[data-glyph='"+g.name+"']").forEach(el=>{
                    el.closest(".word").className="word lost";
                });
            });
        });
    }
    const createWordItem = (w)=>{
        let wordTable = document.createElement("table")
        wordTable.className="word";
        wordTable.setAttribute("id",w.glyphs.join(""));
        let name =wordTable.insertRow().insertCell();
        name.setAttribute("colspan",10);
        name.textContent=w.name;
        let row=wordTable.insertRow();
        w.glyphs.forEach(g=>{
            let cell = row.insertCell()
            cell.setAttribute("data-glyph", g)
            cell.className="glyph unset";
            cell.textContent=g;
        });
        for(let i=0;i<10-w.glyphs.length;++i) {
            cell=row.insertCell();
            cell.className="empty";
        }
        return wordTable;
    };
    const removeGlyphOption=(g)=>{
        const options = document.querySelectorAll("#glyphs option");
        for(i=0;i<options.length;++i)
        {
            if (options[i].value==g.name){
                options[i].remove();
                return;
            }
        }
    };
    const replaceCounter=(rpnToken) =>{
        const match = rpnToken.match(/\[c(\d+)\]/gi);
        if (!match) return rpnToken;
        return selectedPlayer.glyphs.filter(t => t.score == parseInt(rpnToken.match(/\d/), 10)).map(i=>i.score).reduce((a, c) => {return a + c}, 0);
    };
    const replaceCounters=(scoreString)=>{
        return scoreString.split(/(\s+)/).filter(i=>i.trim()!="").map(replaceCounter).join(" ");
    };
    const rpn = (input) => {
        const stack = [];
        const handleToken = (token) => {
          if (!isNaN(parseFloat(token))) {
            stack.push(token);
            return;
          }
          const right = parseFloat(stack.pop());
          const left = parseFloat(stack.pop());
          switch (token) {
            case '+': // Addition
              stack.push(left + right);
              return;
            case '-': // Subtraction
              stack.push(left - right);
              return;
            case '*': // Multiplication
              stack.push(left * right);
              return;
            case '/': // Division
              stack.push(left / right);
              return;
            case '^': // Exponentiation
              stack.push(left ** right);
              return;
            default:
              throw new Error(`Invalid token: ${token}`);
          }
        };
        tokens=input.split(/(\s+)/).filter(i=>i.trim()!="")
        for (let i of tokens) {
          handleToken(i);
        }
        return stack.pop();
    };
    const finalScoreCandidate=(wordCombo)=>{
        return rpn(replaceCounters(calculateBaseScore()+" "+wordCombo.map(w => w.action).join(" ")));
    };
    const addGlyphOption = (glyph, datalist)=>{
        const option = document.createElement("option");
        option.value = glyph.name;
        datalist.appendChild(option);
    };
    const buildGlyphCell=(glyph, table)=>{
        const cell = table.rows[table.rows.length - 1].insertCell();
        const cellTable = document.createElement("table")
        cellTable.className="glyphs";
        cell.appendChild(cellTable);
        let r = cellTable.insertRow();
        let c = r.insertCell();
        c.className="name"
        c.textContent=glyph.name;
        r = cellTable.insertRow();
        c = r.insertCell();
        c.className="glyph"
        c.textContent=String.fromCodePoint(glyph.sign);
        r = cellTable.insertRow();
        c = r.insertCell();
        c.className="score"
        c.textContent=glyph.score;
    };
})();