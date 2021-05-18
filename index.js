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
                         "Julien Cordier TDA TP2 \n" +
    "5-Vous aurez accès aux channels une fois vos rôles attribués"/*, pour cela exécuter les commandes suivantes \nAttribution du TD (/TDA ... /TDC) \nAttribution du TP (/TP1 ... /TP6)*/);
    //member.roles.add("identifiant du role").then(mbr => {console.log("role atttribué pour "+ member.diplayName)}).catch(()=> {console.log("role non attribué")});
});

Client.on("guildeMemberRemove", member => {
    console.log("rip nigga");
    member.guild.channel.cache.find(channel => channel.id === "799211907407675444").send(member.displayName + " Good luck man and may the force be with you");
});

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
//exam
    if(message.content == prefix + "exam"){
        message.channel.send("Planning des exam", {files: ["./Images/exam.png"]});
    }
//espagnol
    if(message.content == prefix + "esp_TDA"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Ordre de passage TDA")
        .setDescription("***Mercredi 10 février*** \n8h30-10h : Débutant \n10h-11h30 : Expérimenté\n\n***Jeudi 18 février*** \n13h-14h30 : Expérimenté \n14h30-16h : Débutant\n\n***Jeudi 11 Mars*** \n8h30-10h : Débutant \n10h-11h30 : Expérimenté\n\n***Jeudi 01 avril*** \n8h30-10h : Expérimenté \n10h-11h30 : Débutant\n\n")
        .setTimestamp()
    
    message.channel.send(embed);
    }
    if(message.content == prefix + "esp_TDB"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Ordre de passage TDB")
        .setDescription("***Jeudi 11 février*** \n8h30-10h : Débutant \n10h-11h30 : Expérimenté\n\n***Jeudi 18 février*** \n8h30-10h : Expérimenté \n10h-11h30 : Débutant\n\n***Mercredi 17 Mars*** \n13h-14h30 : Débutant \n14h30-16h : Expérimenté\n\n***Jeudi 25 mars*** \n8h30-10h : Expérimenté \n10h-11h30 : Débutant\n\n")
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
        .setDescription("***Destinataires*** : Florian Joetzer, Rémi Boutteau et le prof concerné \n***Sujet*** : -ABS-MMI1-2021-CODE_MATIÈRE-MATIÈRE-NOM \n***Contenu*** \n```Bonjour, Veuillez m'excuser pour mon abscence du *date_de_l'abscence*. Vous trouverez ci-joint un justificatif.``` \n***Justificatif en pièce jointe***")
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
    if(message.content == prefix + "invite"){
        message.channel.send("https://discord.gg/tCv4pvkPvR");
    }
//cahier d'appel
    if(message.content == prefix + "apl_tp1"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP1")
        .setDescription("Semaine 5 : ABDALLAH Anis \nSemaine 6 : ABRAHAM Noah \nSemaine 7 : AMGOUD Lucas \nSemaine 10 : BENOIST Nicolas \nSemaine 11 : BILLAUX Sarah \nSemaine 12 : BLIN Erwan \nSemaine 13 : BONDU Lise \nSemaine 14 : BOUGET Alexandre \nSemaine 17 : BREMAUD Mathieu \nSemaine 18 : CAILLOT Antoine \nemaine 19 :  CAVAREC Léo \n***Semaine 20 : CHANTREUX Raphaël*** \nSemaine 21 : CHARLET Tom \nSemaine 22 : ABDALLAH Anis \nSemaine 23 : ABRAHAM Noah \nSemaine 24 : AMGOUD Lucas \nSemaine 26 : BENOIST Nicolas \nSemaine 27 : BILLAUX Sarah ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_tp2"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP2")
        .setDescription("Semaine 5 :  CHARRADA Sofiane \nSemaine 6 : CHARRON Antoine \nSemaine 7 : CHEVALIER Mathilde \nSemaine 10 : CORDIER Julien \nSemaine 11 : COURTES Emma \nSemaine 12 : DAMIENS Alexandre \nSemaine 13 : DAVID Killian \nSemaine 14 : DEBUT Loïc \nSemaine 17 : DEGUFFROY Théo \nSemaine 18 : DESCHAMPS Chloé \nSemaine 19 : DOS SANTOS Théo \n***Semaine 20 : DOUCET Anaïs*** \nSemaine 21 : DUBUC Laurie \nSemaine 22 : CHARRADA Sofiane \nSemaine 23 :  CHARRON Antoine \nSemaine 24 : CHEVALIER Mathilde \nSemaine 26 : CORDIER Julien \nSemaine 27 :  COURTES Emma ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_tp3"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP3")
        .setDescription("Semaine 5 : DUPREZ Virgile \nSemaine 6 : FAUCON Matthias \nSemaine 7 : FLAMME Lisa \nSemaine 10 : FLEURET Alex \nSemaine 11 : GABORIT Clarence \nSemaine 12 : GAILLARD Léo \nSemaine 13 : GERARD Romain \nSemaine 14 : GIBEAUX Hugo  \nSemaine 17 : GODARD Jean \nSemaine 18 : GRATIGNY Samson \nSemaine 19 : GREBOVAL Virgil \n***Semaine 20 : GRIMAL Florine*** \nSemaine 21 : GUEGAN Erwann \nSemaine 22 : DUPREZ Virgile \nSemaine 23 : FAUCON Matthias \nSemaine 24 : FLAMME Lisa \nSemaine 26 : FLEURET Alex \nSemaine 27 : GABORIT Clarence ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_tp4"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP4")
        .setDescription("Semaine 5 : GUEOUAL Camil \nSemaine 6 : HERNANDEZ Alexis \nSemaine 7 : HERSANT Nolwenn \nSemaine 10 : JUHE Florian \nSemaine 11 : JULIEN Etienne \nSemaine 12 : KALA Axel \nSemaine 13 : LAHAYE Antoine \nSemaine 14 : LE MAP Louise  \nSemaine 17 : LEFEBVRE Angèle \nSemaine 18 : LEGER Luke \nSemaine 19 : LEJEUNE Alexis \n***Semaine 20 : LEMONNIER Eythann*** \nSemaine 21 : MILITE Valentin \nSemaine 22 : GUEOUAL Camil \nSemaine 23 : HERNANDEZ Alexis \nSemaine 24 : HERSANT Nolwenn \nSemaine 26 : JUHE Florian \nSemaine 27 : JULIEN Etienne ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_tp5"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP5")
        .setDescription("Semaine 5 : LEMPEREUR Baptiste \nSemaine 6 : LIEURY Bérengère \nSemaine 7 : LIGER Pierre \nSemaine 10 : LORDET Simon \nSemaine 11 : PETIT Mattéo \nSemaine 12 : MABIRE Raphaël \nSemaine 13 : MALLET Paul \nSemaine 14 : MARTIN Clara \nSemaine 17 : MESSIER Jade \nSemaine 18 : MICHEL Amandine \nSemaine 19 :MOUCHEL GROSDOS Baptiste \n***Semaine 20 : MOULIN Mélina*** \nSemaine 21 : LEMPEREUR Baptiste \nSemaine 22 : LIEURY Bérengère \nSemaine 23 : LIGER Pierre \nSemaine 24 : LORDET Simon \nSemaine 26 : PETIT Mattéo \nSemaine 27 : MABIRE Raphaël ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "apl_tp6"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Cahier d'appel du TP6")
        .setDescription("Semaine 5 : ARTAUD Raphaëlle \nSemaine 6 : NOURRY Matthias \nSemaine 7 : PANNIER Sacha \nSemaine 10 : LYSCENZUK Léa \nSemaine 11 : ROBERT Tom \nSemaine 12 : RONGEAT Mathis \nSemaine 13 : ROUSSELLE Ylan \nSemaine 14 : SAUSSAYE Clément \nSemaine 17 : SUZUKI Ange \nSemaine 18 : VAILLANT Paul \nSemaine 19 : VAUCLIN Theo \n***Semaine 20 : VERGAUWE Logan*** \nSemaine 21 : VIGOR Cassandra \nSemaine 22 : ARTAUD Raphaëlle \nSemaine 23 : NOURRY Matthias \nSemaine 24 : PANNIER Sacha \nSemaine 26 : LYSCENZUK Léa \nSemaine 27 : ROBERT Tom ")
        .setTimestamp()

    message.channel.send(embed);
    }
    if(message.content == prefix + "bde"){
        var embed = new Discord.MessageEmbed()
        .setColor("#602F98")
        .setTitle("Composition du BDE")
        .setDescription("*Président:* Logan.V \n*Vice président:* Mathis.R \n*Secrétaire:* Laurie.D \n*Trésorier:* Mélina.M \n*Pôle Partenariat:* Charlotte.V, Noah.A\n*Pôle Event:* Lise.B, Simon.L \n*Pôle Communication:* Clément.S, Théo.DS \n*Pôle Audiovisuel:* Mathilde.C, Julien.C \n*Membre actifs:* Amandine.M,Louise.LM, Matthias.N\n\nN'hésitez pas à nous contacter via notre Instagrame **@bde_labete** ou sur Discord avec un **@BDE**")
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
