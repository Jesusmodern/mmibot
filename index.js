const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "/";

Client.on("ready",() => {
    console.log("bot on");
});
/*
Client.on("guildMemberAdd", member => {
    console.log("A rejoins serv MMI classe");
    member.guild.channel.cache.find(channel => channel.id === "799211907407675444").send("Bienvenue " + member.displayName + " sur le serveur de la dernière promo du DUT MMI \n " +
    "Quelques règles à respecter : \n" +
    "1-Parlez dans les channels dédiés \n" +
    "2-Respectez les autres \n" +
    "3-En cas de besoin ne pas hésiter à demander \n" +
    "4-Merci de vous identifier sous le model suivant : \n" +
                         "Julien Cordier TDA TP2 \n" +
    "5-Vous aurez accès aux channels une fois vos rôles attribués"//, pour cela exécuter les commandes suivantes \nAttribution du TD (/TDA ... /TDC) \nAttribution du TP (/TP1 ... /TP6)//);
    //member.roles.add("identifiant du role").then(mbr => {console.log("role atttribué pour "+ member.diplayName)}).catch(()=> {console.log("role non attribué")});
});
*/
/*
Client.on("guildeMemberRemove", member => {
    console.log("rip nigga");
    member.guild.channel.cache.find(channel => channel.id === "799211907407675444").send(member.displayName + " Good luck man and may the force be with you");
});
*/
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

/*roles attribution TD
    if(message.content == prefix + "TDA"){
        let role = message.guild.roles.cache.find(r.name ===args.toString());
        message.member.addRole(role);
    }
    if(message.content == prefix + "TDB"){
        let role = message.guild.roles.find('name','TDB');
        message.member.addRole(role);
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
    }*/
//renvoie des edt
    if(message.content == prefix + "edt_td1"){
        message.channel.send("Emploi du temps des MMI 1", {files: ["./Images/edt0.png"]});
    }
    if(message.content == prefix + "edt_td2"){
        message.channel.send("Emploi du temps des MMI 2", {files: ["./Images/edt00.png"]});
    }
    if(message.content == prefix + "edt_td1a"){
        message.channel.send("Emploi du temps du TD1 A", {files: ["./Images/edt1.png"]});
    }
    if(message.content == prefix + "edt_td1b"){
        message.channel.send("Emploi du temps du TD1 B", {files: ["./Images/edt2.png"]});
    }
    if(message.content == prefix + "edt_td1c"){
        message.channel.send("Emploi du temps du TD1 C", {files: ["./Images/edt3.png"]});
    }
    if(message.content == prefix + "edt_td2a"){
        message.channel.send("Emploi du temps du TD2 A", {files: ["./Images/edt4.png"]});
    }
    if(message.content == prefix + "edt_td2b"){
        message.channel.send("Emploi du temps du TD2 B", {files: ["./Images/edt5.png"]});
    }
    if(message.content == prefix + "edt_td2c"){
        message.channel.send("Emploi du temps du TD2 C", {files: ["./Images/edt6.png"]});
    }
//help
    if(message.content == prefix + "help"){
        message.channel.send("Liste des commandes", {files: ["./Images/cmd.png"]});
    }
//exam
    if(message.content == prefix + "exam2"){
        message.channel.send("Planning des exam des 2eme annees", {files: ["./Images/exam.png"]});
    }
//espagnol
    if(message.content == prefix + "esp_TDA"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Ordre de passage TDA")
        .setDescription("Non défini")
        .setTimestamp()
    
    message.channel.send(embed);
    }
    if(message.content == prefix + "esp_TDB"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Ordre de passage TDB")
        .setDescription("Non défini")
        .setTimestamp()
    
    message.channel.send(embed);
    }
    /*if(message.content == prefix + "esp_TDC"){
        message.channel.send("***Mercredi 04 février*** \n8h30-10h : Expérimenté \n10h-11h30 : Débutant");
    }*/
//abscence
    if(message.content == prefix + "abs"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Exemple d'un mail d'abscence")
        .setDescription("***Destinataires*** : Franck Beharelle, Rémi Boutteau et le prof concerné \n***Sujet*** : -ABS-MMI1-2021-CODE_MATIÈRE-MATIÈRE-NOM \n***Contenu*** \n```Bonjour, Veuillez m'excuser pour mon abscence du *date_de_l'abscence*. Vous trouverez ci-joint un justificatif.``` \n***Justificatif en pièce jointe***")
        .setTimestamp()
    
    message.channel.send(embed);
    }
//mails des profs
    if(message.content == prefix + "mail"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Mails des profs")
        .setDescription("Anita **SALAS** \n*anita.salas@ac-normandie.fr*\n\nAurora **LECUYER** \n*aurora.lecuyer@univ-rouen.fr*\n\nChristophe **PIQUE** \n*christophe.pique@univ-rouen.fr*\n\nDavid **CAMPSERVEUX** \n*david.campserveux@univ-rouen.fr*\n\nFlorian **JOETZJER** \n*florian.joetzjer@univ-rouen.fr*\n\nFranck **BEHARELLE** \n*franck.beharelle@univ-rouen.fr*\n\nFrédéric **CARPENTIER** \n*frederic.carpentier1@univ-rouen.fr*\n\nGeoffrey **ZIGANTE** \n*geoffrey.zigante1@univ-rouen.fr*\n\nJean Loup **GARULO** \n*jeanloup.garulo@univ-rouen.fr*\n\nJean-Pierre **LAFITTE** \n*jean-pierre.lafitte@univ-rouen.fr*\n\nKaterine **ROMEO** \n*katerine.romeo@univ-rouen.fr*\n\nNoemie **MARIE** \n*noemie.marie2@univ-rouen.fr*\n\nRémi **BOUTTEAU** \n*remi.boutteau@univ-rouen.fr*\n\nSylvain **KERJEAN** \n*sylvain.kerjean@univ-rouen.fr*")
        .setTimestamp()
    
    message.channel.send(embed);
    }
//medecine preventive
    if(message.content == prefix + "mdc"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Médecine préventive")
        .setDescription("***Infirmiers*** : Mr Maison (*jean-paul.maison@univ-rouen.fr*) et Mme Lemerle (*christine.lemerle@univ-rouen.fr*) \n***Médecin*** : Mme Gargala (*catherine.gargala@univ-rouen.fr*) \n***Sophrologue*** : Mme Letourneur (*06 89 42 57 44* contact par SMS) \n***Psycologue*** : Mme Briere (*barbara.briere@univ-rouen.fr*) \n***Assistante Sociale*** : Mme Lemoine (*pauline.lemoine@univ-rouen.fr* / *06 70 74 99 43*)")
        .setTimestamp()
    
    message.channel.send(embed);
    }
//invite
    if(message.content == prefix + "invite_iut"){
        message.channel.send("https://discord.gg/cdEZJ4j8Ak", {files: ["./Images/affqrcode.png"]});
    }
//cahier d'appel
    if(message.content == prefix + "apl_td1a"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDA")
        .addFields(
            {
                name:'TP1',
                value:"Non défini",
                inline: true,
            },
            {
                name:'TP2',
                value:"Non défini",
                inline: true,
            },
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_td1b"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDB")
        .addFields(
            {
                name:'TP3',
                value:"Non défini",
                inline: true,
            },
            {
                name:'TP4',
                value:"Non défini",
                inline: true,
            },
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_td1c"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDC")
        .addFields(
            {
                name:'TP5',
                value:"Non défini",
                inline: true,
            },
            {
                name:'TP6',
                value:"Non défini",
                inline: true,
            },
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_td2a"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDA")
        .addFields(
            {
                name:'TP1',
                value:"Non défini",
                inline: true,
            },
            {
                name:'TP2',
                value:"Non défini",
                inline: true,
            },
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_td2b"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDB")
        .addFields(
            {
                name:'TP3',
                value:"Non défini",
                inline: true,
            },
            {
                name:'TP4',
                value:"Non défini",
                inline: true,
            },
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_td2c"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TDC")
        .addFields(
            {
                name:'TP5',
                value:"Non défini",
                inline: true,
            },
            
        )
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "bde"){
        const {MessageAttachment} = require("discord.js");
        const logoImg = new MessageAttachment('./Images/bde.jpg');
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Composition du BDE")
        .setDescription("***Président:*** Logan.V \n***Vice président:*** Mathis.R \n***Secrétaire:*** Laurie.D \n***Trésorier:*** Mélina.M \n***Pôle Partenariat:*** Charlotte.V, Noah.A\n***Pôle Event:*** Lise.B, Simon.L \n***Pôle Communication:*** Clément.S, Théo.DS \n***Pôle Audiovisuel:*** Mathilde.C, Julien.C \n***Membre actifs:*** Amandine.M,Louise.LM, Matthias.N\n\nN'hésitez pas à nous contacter via notre Instagrame **@bde_labete** ou sur Discord avec un **@BDE**")
        .attachFiles(logoImg)
        .setThumbnail('attachment://bde.jpg')
        .setTimestamp()

    message.channel.send(embed);
    }
    
//ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }
//stat
    /*if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " id = : " + message.author.id + " a poster un msg");
    }*/
});


Client.login(process.env.TOKKEN);
