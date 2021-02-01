const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "/";
Client.on("ready",() => {
    console.log("bot on");
});

Client.on("guildMemberAdd", member => {
    console.log("A rejoins serv MMI classe");
    member.guild.channel.cache.find(channel => channel.id === "799211907407675444").send("Bienvenue " + member.displayName + " sur le serveur de la dernière promo du DUT MMI \n " +
    "Quelques règles à respecter : \n" +
    "1-Parlez dans les channels dédiés \n" +
    "2-Respectez les autres \n" +
    "3-En cas de besoin ne pas hésiter à demander \n" +
    "4-Merci de vous identifier sous le model suivant : \n" +
                         "Julien Cordier \n" +
    "5-Vous aurez accès aux channels une fois vos rôles attribués, pour cela exécuter les commandes suivantes \nAttribution du TD (/TDA ... /TDC) \nAttribution du TP (/TP1 ... /TP6)");
    //member.roles.add("identifiant du role").then(mbr => {console.log("role atttribué pour "+ member.diplayName)}).catch(()=> {console.log("role non attribué")});
});

Client.on("guildeMemberRemove", member => {
    console.log("rip nigga");
    member.guild.channel.cache.find(channel => channel.id === "799211907407675444").send(member.displayName + " Good luck man and may the force be with you");
});

Client.on("message", (message, member) => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

//roles attribution TD
    if(message.content == prefix + "TDA"){
        member.roles.add("799246213962006528").then(mbr => {console.log("role TDA attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TDB"){
        member.roles.add("799246374545391616").then(mbr => {console.log("role TDB attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TDC"){
        member.roles.add("799246554845151232").then(mbr => {console.log("role TDC attribués")}).catch(()=>{console.log("role non attribué")});
    }
//role attribution TP
    if(message.content == prefix + "TP1"){
        member.roles.add("799247486711365673").then(mbr => {console.log("role TP1 attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TP2"){
        member.roles.add("799247955517112350").then(mbr => {console.log("role TP2 attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TP3"){
        member.roles.add("799248166343540736").then(mbr => {console.log("role TP3 attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TP4"){
        member.roles.add("799248193665630208").then(mbr => {console.log("role TP4 attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TP5"){
        member.roles.add("799248529021337641").then(mbr => {console.log("role TP5 attribués")}).catch(()=>{console.log("role non attribué")});
    }
    if(message.content == prefix + "TP6"){
        member.roles.add("799248530346606642").then(mbr => {console.log("role TP6 attribués")}).catch(()=>{console.log("role non attribué")});
    }
//renvoie des edt
    if(message.content == prefix + "edt"){
        message.channel.send("Emploi du temps des MMI 1", {files: ["./Images/edt0.png"]});
    }
    if(message.content == prefix + "edt_tp1"){
        message.channel.send("Emploi du temps du TP1", {files: ["./Images/edt1.png"]});
    }
    if(message.content == prefix + "edt_tp2"){
        message.channel.send("Emploi du temps du TP2", {files: ["./Images/edt2.png"]});
    }
    if(message.content == prefix + "edt_tp3"){
        message.channel.send("Emploi du temps du TP3", {files: ["./Images/edt3.png"]});
    }
    if(message.content == prefix + "edt_tp4"){
        message.channel.send("Emploi du temps du TP4", {files: ["./Images/edt4.png"]});
    }
    if(message.content == prefix + "edt_tp5"){
        message.channel.send("Emploi du temps du TP5", {files: ["./Images/edt5.png"]});
    }
    if(message.content == prefix + "edt_tp6"){
        message.channel.send("Emploi du temps du TP6", {files: ["./Images/edt6.png"]});
    }
//help
    if(message.content == prefix + "help"){
        message.channel.send("Liste des commandes", {files: ["./Images/cmd.png"]});
    }

    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }

    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " id = : " + message.author.id + " a poster un msg");
    }
});


Client.login(process.env.TOKKEN);
