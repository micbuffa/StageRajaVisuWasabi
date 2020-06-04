
function showmemberofband(){


  d3.selectAll("svg").remove();
  var width = 674;
  var height = 600;

  //Create SVG element
  var svg = d3.select("#ca")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
    var name = document.getElementById("autoComplete").value;


color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));
    
d3.json("https://wasabi.i3s.unice.fr/api/v1/artist_all/name/"+name, function(error, mydata) {


 if (error) throw error;


 /*mydata={"_id":"56d8563d53a7ddfc01f987b4","name":"La Fouine","urlWikipedia":"http://en.wikipedia.org/wiki/fr:La_Fouine","urlOfficialWebsite":"http://www.lafouine78.com/","urlFacebook":"","urlMySpace":"https://myspace.com/lafouineofficial","urlTwitter":"","locationInfo":["France"],"urlWikia":"La_Fouine","genres":[],"labels":[],"members":[{"name":"Team BS","instruments":[],"begin":"","end":"","ended":false,"gender":null,"urlDiscogs":"https://www.discogs.com/artist/3807191","urlWikidata":"https://www.wikidata.org/wiki/Q18058499","id_member_discogs":"3807191","realName":"","abstract":"","nameVariations":[],"urls":[],"urlEquipBoard":"http://equipboard.com/pros/team-bs","equipments":[]}],"rdf":"<?xml version='1.0' encoding='utf-8' ?> <rdf:RDF  xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'  xmlns:rdfs='http://www.w3.org/2000/01/rdf-schema#'  xmlns:dcterms='http://purl.org/dc/terms/'  xmlns:dbpedia-owl='http://dbpedia.org/ontology/' >   <rdf:Description rdf:about='http://fr.dbpedia.org/resource/La_Fouine'>     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Naissance_à_Trappes' />     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Naissance_en_décembre_1981' />     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Nom_de_scène' />     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Rappeur_français' />     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Musicien_des_Yvelines' />     <dcterms:subject rdf:resource='http://fr.dbpedia.org/resource/Catégorie:Membre_du_jury_de_Popstars' />     <dbpedia-owl:activeYearsStartYear rdf:datatype='http://www.w3.org/2001/XMLSchema#gYear'>2001+02:00</dbpedia-owl:activeYearsStartYear>     <dbpedia-owl:birthDate rdf:datatype='http://www.w3.org/2001/XMLSchema#date'>1981-12-25+02:00</dbpedia-owl:birthDate>     <dbpedia-owl:genre rdf:resource='http://fr.dbpedia.org/resource/Rap_français' />     <dbpedia-owl:recordLabel rdf:resource='http://fr.dbpedia.org/resource/Jive_Records' />     <dbpedia-owl:recordLabel rdf:resource='http://fr.dbpedia.org/resource/Sony_Music_Entertainment' />     <dbpedia-owl:abstract xml:lang='fr'>Laouni Mouhid, dit La Fouine, né le 25 décembre 1981 à Trappes (Yvelines), est un rappeur français d&#39;origine marocaine. Il quitte l&#39;école à 14 ans pour se consacrer à la musique. Plus tard, La Fouine a créé Banlieue Sale Music, son propre label. La Fouine a été élu le meilleur artiste français au MTV Europe Music Awards en 2011 et meilleur artiste masculin au Trace Urban Music Awards en 2013.  En avril 2014, La Fouine a créé un autre label, Dynastie Music avec comme première signature Sindy. Après Drôle de parcours en 2013, il sort Team BS en 2014 et devient disque d&#39;or[réf. nécessaire].</dbpedia-owl:abstract>   </rdf:Description> </rdf:RDF>","urlAmazon":"http://www.amazon.com/asdf/e/B001LHXZ5S?tag=wikia-20","urlITunes":"https://itunes.apple.com/us/artist/id18280982","urlAllmusic":"http://www.allmusic.com/artist/mn0000719702","urlDiscogs":"http://www.discogs.com/artist/255574","urlMusicBrainz":"http://musicbrainz.org/artist/998f1ece-a2b0-47d2-93df-17553430ab73","urlYouTube":"","urlSpotify":"https://play.spotify.com/artist/6QS84S3i4gwdEKqWoTtDLd","urlPureVolume":"","urlRateYourMusic":"","urlSoundCloud":"","lifeSpan":{"ended":false,"begin":"1981","end":""},"location":{"country":"France","city":""},"gender":"Male","endArea":{"name":""},"id_artist_deezer":"12778","urlDeezer":"http://www.deezer.com/artist/12778","picture":{"standard":"http://api.deezer.com/artist/12778/image","small":"http://e-cdn-images.deezer.com/images/artist/08e90907980c2236f620a338a52e7e00/56x56-000000-80-0-0.jpg","medium":"http://e-cdn-images.deezer.com/images/artist/08e90907980c2236f620a338a52e7e00/250x250-000000-80-0-0.jpg","big":"http://e-cdn-images.deezer.com/images/artist/08e90907980c2236f620a338a52e7e00/500x500-000000-80-0-0.jpg","xl":"http://e-cdn-images.deezer.com/images/artist/08e90907980c2236f620a338a52e7e00/1000x1000-000000-80-0-0.jpg"},"deezerFans":1539424,"urlWikidata":"https://www.wikidata.org/wiki/Q284995","id_artist_discogs":"255574","abstract":"French rapper, of Moroccan origins, born December 25, 1981 in Trappes, Yvelines. \rHe has also his own label [l191100] and his own clothing line called Street Swagg.","nameVariations":[],"urls":["http://www.lafouine78.com","http://www.facebook.com/lafouine78officiel","http://instagram.com/lafouine78","http://www.myspace.com/lafouineofficial","http://twitter.com/lafouine78","http://www.vevo.com/artist/la-fouine","http://www.youtube.com/user/LaFouineVEVO"],"subject":[],"associatedMusicalArtist":[],"dbp_genre":[],"recordLabel":[],"dbp_abstract":[],"name_accent_fold":"La Fouine","nameVariations_fold":[],"albums":[{"_id":"5714debe25ac0d8aee366f9e","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"Other Songs","publicationDate":"","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/115edd4dd5137ae686f1478aef91b29d/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee4802ee","position":0,"title":"À La Youv"},{"_id":"5714ded825ac0d8aee4802ef","position":1,"title":"Autopsie"},{"_id":"5714ded825ac0d8aee4802f0","position":2,"title":"Banlieue Sale Mafia (Interlude)"},{"_id":"5714ded825ac0d8aee4802f1","position":3,"title":"Ben Laden"},{"_id":"5714ded825ac0d8aee4802f2","position":4,"title":"Bienvenue Dans Le 78"},{"_id":"5714ded825ac0d8aee4802f3","position":5,"title":"Bois D'Arcy (San Francisco)"},{"_id":"5714ded825ac0d8aee4802f4","position":6,"title":"Capitale Du Crime 3"},{"_id":"5714ded825ac0d8aee4802f5","position":7,"title":"C'est Bien De"},{"_id":"5714ded825ac0d8aee4802f6","position":8,"title":"C'est Ça"},{"_id":"5714ded825ac0d8aee4802f7","position":9,"title":"C'est Ca Le Thème"},{"_id":"5714ded825ac0d8aee4802f8","position":10,"title":"Des Pères, Des Hommes Et Des Frères"},{"_id":"5714ded825ac0d8aee4802f9","position":11,"title":"D'où L'on Vient"},{"_id":"5714ded825ac0d8aee4802fa","position":12,"title":"D'Où L'on Vient"},{"_id":"5714ded825ac0d8aee4802fb","position":13,"title":"Drogba"},{"_id":"5714ded825ac0d8aee4802fc","position":14,"title":"Encore Une Nuit"},{"_id":"5714ded825ac0d8aee4802fd","position":15,"title":"Groupie Love (Manque D'Argent, Pt. 2)"},{"_id":"5714ded825ac0d8aee4802fe","position":16,"title":"Hamdoulah Moi Ca Va"},{"_id":"5714ded825ac0d8aee4802ff","position":17,"title":"Jalousie"},{"_id":"5714ded825ac0d8aee480300","position":18,"title":"J'Arrive En Balle"},{"_id":"5714ded825ac0d8aee480301","position":19,"title":"Je Sais Ou Ca Ramene"},{"_id":"5714ded825ac0d8aee480302","position":20,"title":"L' Unité"},{"_id":"5714ded825ac0d8aee480303","position":21,"title":"La Memoire Dans La Peau"},{"_id":"5714ded825ac0d8aee480304","position":22,"title":"Le Manque DArgent"},{"_id":"5714ded825ac0d8aee480305","position":23,"title":"Le Mauvais Oeil"},{"_id":"5714ded825ac0d8aee480306","position":24,"title":"Life"},{"_id":"5714ded825ac0d8aee480307","position":25,"title":"Ma Tabatière Chronique D'Un Dealer"},{"_id":"5714ded825ac0d8aee480308","position":26,"title":"Meilleur Ennemi"},{"_id":"5714ded825ac0d8aee480309","position":27,"title":"Mes Reperes"},{"_id":"5714ded825ac0d8aee48030a","position":28,"title":"M'evader"},{"_id":"5714ded825ac0d8aee48030b","position":29,"title":"My Life"},{"_id":"5714ded825ac0d8aee48030c","position":30,"title":"Nouveau Boss"},{"_id":"5714ded825ac0d8aee48030d","position":31,"title":"On Me Disait"},{"_id":"5714ded825ac0d8aee48030e","position":32,"title":"On Se Refait"},{"_id":"5714ded825ac0d8aee48030f","position":33,"title":"Outro/Quand La Musique Est Bonne"},{"_id":"5714ded825ac0d8aee480310","position":34,"title":"Pendez-Les 2012"},{"_id":"5714ded825ac0d8aee480311","position":35,"title":"Quel Est Mon Rôle: Outro"},{"_id":"5714ded825ac0d8aee480312","position":36,"title":"Rap Francais"},{"_id":"5714ded825ac0d8aee480313","position":37,"title":"Rappelle-Toi"},{"_id":"5714ded825ac0d8aee480314","position":38,"title":"Rollin' Like A Boss"},{"_id":"5714ded825ac0d8aee480315","position":39,"title":"T'es Mort Dans Le Film"},{"_id":"5714ded825ac0d8aee480316","position":40,"title":"Ton Silence"},{"_id":"5714ded825ac0d8aee480317","position":41,"title":"Tous Les Memes"},{"_id":"5714ded825ac0d8aee480318","position":42,"title":"Tu Vas Prendre Cher"},{"_id":"5714ded825ac0d8aee480319","position":43,"title":"Vécu"},{"_id":"5714ded825ac0d8aee48031a","position":44,"title":"VNTM.com"}]},{"_id":"5714debe25ac0d8aee366f98","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"Bourré Au Son","publicationDate":"2005","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/1f094cd2b972f0cf3d3d911b0a261fab/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee48027a","position":0,"title":"Peu À L'Arrivée"},{"_id":"5714ded825ac0d8aee48027b","position":1,"title":"Bourré Au Son"},{"_id":"5714ded825ac0d8aee48027c","position":2,"title":"Quelque Chose De Spécial"},{"_id":"5714ded825ac0d8aee48027d","position":3,"title":"Basta"},{"_id":"5714ded825ac0d8aee48027e","position":4,"title":"Peace On Earth"},{"_id":"5714ded825ac0d8aee48027f","position":5,"title":"Autobiographie"},{"_id":"5714ded825ac0d8aee480280","position":6,"title":"J'Roule"},{"_id":"5714ded825ac0d8aee480281","position":7,"title":"J'Rap Pour Le Fric"},{"_id":"5714ded825ac0d8aee480282","position":8,"title":"Fouiny Flow"},{"_id":"5714ded825ac0d8aee480283","position":9,"title":"C'Est Ça"},{"_id":"5714ded825ac0d8aee480284","position":10,"title":"Marche Ou Crève"},{"_id":"5714ded825ac0d8aee480285","position":11,"title":"Symphonie"},{"_id":"5714ded825ac0d8aee480286","position":12,"title":"L'Unité"},{"_id":"5714ded825ac0d8aee480287","position":13,"title":"Die"},{"_id":"5714ded825ac0d8aee480288","position":14,"title":"Groupie Love"},{"_id":"5714ded825ac0d8aee480289","position":15,"title":"Quelque Chose De Sauvage"}]},{"_id":"5714debe25ac0d8aee366f99","name":"La Fouine",
 "id_artist":"56d8563d53a7ddfc01f987b4","title":"Aller Retour","publicationDate":"2007",
 "cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/15f5e265dd46c7fa3d22c48bb2a47d02/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee48028a","position":0,"title":"Intro"},{"_id":"5714ded825ac0d8aee48028b","position":1,"title":"Qui Peut Me Stopper ?"},{"_id":"5714ded825ac0d8aee48028c","position":2,"title":"Reste En Chien"},{"_id":"5714ded825ac0d8aee48028d","position":3,"title":"Drôle De Parcours"},{"_id":"5714ded825ac0d8aee48028e","position":4,"title":"Tombé Pour Elle"},{"_id":"5714ded825ac0d8aee48028f","position":5,"title":"La Danse Du Ghetto"},{"_id":"5714ded825ac0d8aee480290","position":6,"title":"C'Est Pas La Peine"},{"_id":"5714ded825ac0d8aee480291","position":7,"title":"Ma Tabatière (Chronique D'un Dealer)"},{"_id":"5714ded825ac0d8aee480292","position":8,"title":"Contrôle Abusif"},{"_id":"5714ded825ac0d8aee480293","position":9,"title":"Laissez-Moi Dénoncer"},{"_id":"5714ded825ac0d8aee480294","position":10,"title":"Banlieue Sale"},{"_id":"5714ded825ac0d8aee480295","position":11,"title":"On S'En Bat Les C******s"},{"_id":"5714ded825ac0d8aee480296","position":12,"title":"Le Cœur Du Problème"},{"_id":"5714ded825ac0d8aee480297","position":13,"title":"Je Regarde Là-Haut"},{"_id":"5714ded825ac0d8aee480298","position":14,"title":"Ma Life"},{"_id":"5714ded825ac0d8aee480299","position":15,"title":"Partout Pareil"},{"_id":"5714ded825ac0d8aee48029a","position":16,"title":"Quel Est Mon Rôle (Outro)"}]},{"_id":"5714debe25ac0d8aee366f9a","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"Mes Repères","publicationDate":"2009","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/0d14d0ab4d0c45032a98f19acbd5c822/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee48029b","position":0,"title":"Du Ferme"},{"_id":"5714ded825ac0d8aee48029c","position":1,"title":"Immortelles"},{"_id":"5714ded825ac0d8aee48029d","position":2,"title":"Tous Les Mêmes"},{"_id":"5714ded825ac0d8aee48029e","position":3,"title":"Rap Français"},{"_id":"5714ded825ac0d8aee48029f","position":4,"title":"Ça Fait Mal"},{"_id":"5714ded825ac0d8aee4802a0","position":5,"title":"On Fait L'Taf"},{"_id":"5714ded825ac0d8aee4802a1","position":6,"title":"Interlude En Studio"},{"_id":"5714ded825ac0d8aee4802a2","position":7,"title":"De L'Or"},{"_id":"5714ded825ac0d8aee4802a3","position":8,"title":"Repartir À Zéro"},{"_id":"5714ded825ac0d8aee4802a4","position":9,"title":"Interlude Salam"},{"_id":"5714ded825ac0d8aee4802a5","position":10,"title":"Afrika"},{"_id":"5714ded825ac0d8aee4802a6","position":11,"title":"Hamdoula Moi Ça Va"},{"_id":"5714ded825ac0d8aee4802a7","position":12,"title":"Rap Inconscient"},{"_id":"5714ded825ac0d8aee4802a8","position":13,"title":"Chips"},{"_id":"5714ded825ac0d8aee4802a9","position":14,"title":"Mes Repères"},{"_id":"5714ded825ac0d8aee4802aa","position":15,"title":"Je Sais Où Ça Ramène"},{"_id":"5714ded825ac0d8aee4802ab","position":16,"title":"La Mémoire Dans La Peau"},{"_id":"5714ded825ac0d8aee4802ac","position":17,"title":"Feu Rouge"},{"_id":"5714ded825ac0d8aee4802ad","position":18,"title":"Ça Fait Mal"}]},{"_id":"5714debe25ac0d8aee366f9b","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"Capitale Du Crime, Volume 2","publicationDate":"2010","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/2a24021308f9720b2f3406f187601d7b/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee4802ae","position":0,"title":"Banlieue Sale Music"},{"_id":"5714ded825ac0d8aee4802af","position":1,"title":"Krav Maga"},{"_id":"5714ded825ac0d8aee4802b0","position":2,"title":"Nés Pour Briller"},{"_id":"5714ded825ac0d8aee4802b1","position":3,"title":"Pleure Pas"},{"_id":"5714ded825ac0d8aee4802b2","position":4,"title":"Voitures Allemandes"},{"_id":"5714ded825ac0d8aee4802b3","position":5,"title":"Le Mauvais Œil"},{"_id":"5714ded825ac0d8aee4802b4","position":6,"title":"Les Balances Sont Respectées"},{"_id":"5714ded825ac0d8aee4802b5","position":7,"title":"Bois D'Arcy"},{"_id":"5714ded825ac0d8aee4802b6","position":8,"title":"Bang Bang"},{"_id":"5714ded825ac0d8aee4802b7","position":9,"title":"Iblis"},{"_id":"5714ded825ac0d8aee4802b8","position":10,"title":"Vodka Redbull"},{"_id":"5714ded825ac0d8aee4802b9","position":11,"title":"Parloir Sauvage"},{"_id":"5714ded825ac0d8aee4802ba","position":12,"title":"Wesh Wesh City"},{"_id":"5714ded825ac0d8aee4802bb","position":13,"title":"Cité HLM"},{"_id":"5714ded825ac0d8aee4802bc","position":14,"title":"Youporn"},{"_id":"5714ded825ac0d8aee4802bd","position":15,"title":"Dans La Capitale Du Crime"},{"_id":"5714ded825ac0d8aee4802be","position":16,"title":"Procureur De Versailles"},{"_id":"5714ded825ac0d8aee4802bf","position":17,"title":"Au Bout Des Mes Idées"},{"_id":"5714ded825ac0d8aee4802c0","position":18,"title":"Bad Boys"},{"_id":"5714ded825ac0d8aee4802c1","position":19,"title":"Quand La Musique Est Bonne"},{"_id":"5714ded825ac0d8aee4802c2","position":20,"title":"Krav Maga"}]},{"_id":"5714debe25ac0d8aee366f9c","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"La Fouine Vs Laouni","publicationDate":"2011","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/1a3a60c08081d0eb05c0fd942aa41da1/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee4802c3","position":0,"title":"Veni Vidi Vici"},{"_id":"5714ded825ac0d8aee4802c4","position":1,"title":"Fouiny Gamos"},{"_id":"5714ded825ac0d8aee4802c5","position":2,"title":"Nhar Sheitan Click"},{"_id":"5714ded825ac0d8aee4802c6","position":3,"title":"Stan Smith"},{"_id":"5714ded825ac0d8aee4802c7","position":4,"title":"Mathusalem"},{"_id":"5714ded825ac0d8aee4802c8","position":5,"title":"Laisse-Les Parler"},{"_id":"5714ded825ac0d8aee4802c9","position":6,"title":"Caillera For Life"},{"_id":"5714ded825ac0d8aee4802ca","position":7,"title":"Bafana Bafana"},{"_id":"5714ded825ac0d8aee4802cb","position":8,"title":"Interlude : One Shot"},{"_id":"5714ded825ac0d8aee4802cc","position":9,"title":"Passe Leur Le Salam"},{"_id":"5714ded825ac0d8aee4802cd","position":10,"title":"Gucci Sale Music"},{"_id":"5714ded825ac0d8aee4802ce","position":11,"title":"Fouiny Juice"},{"_id":"5714ded825ac0d8aee4802cf","position":12,"title":"Bafana Bafana Remix"},{"_id":"5714ded825ac0d8aee4802d0","position":13,"title":"Débuter En Bas"},{"_id":"5714ded825ac0d8aee4802d1","position":14,"title":"Là-Bas"},{"_id":"5714ded825ac0d8aee4802d2","position":15,"title":"M'Évader"},{"_id":"5714ded825ac0d8aee4802d3","position":16,"title":"D'Où L'On Vient"},{"_id":"5714ded825ac0d8aee4802d4","position":17,"title":"Elle Venait Du Ciel"},{"_id":"5714ded825ac0d8aee4802d5","position":18,"title":"Les Soleils De Minuit"},{"_id":"5714ded825ac0d8aee4802d6","position":19,"title":"Papa"},{"_id":"5714ded825ac0d8aee4802d7","position":20,"title":"Du Bout Des Doigts"},{"_id":"5714ded825ac0d8aee4802d8","position":21,"title":"Petite Sœur"},{"_id":"5714ded825ac0d8aee4802d9","position":22,"title":"Les Vents Favorables"},{"_id":"5714ded825ac0d8aee4802da","position":23,"title":"Populaire"},{"_id":"5714ded825ac0d8aee4802db","position":24,"title":"La Lumière"}]},{"_id":"5714debe25ac0d8aee366f9d","name":"La Fouine","id_artist":"56d8563d53a7ddfc01f987b4","title":"Drôle De Parcours","publicationDate":"2013","cover":{"medium":"http://e-cdn-images.deezer.com/images/cover/9243777bd36610437d2e4e1de206ec39/250x250-000000-80-0-0.jpg"},"songs":[{"_id":"5714ded825ac0d8aee4802dc","position":0,"title":"J'Avais Pas Les Mots"},{"_id":"5714ded825ac0d8aee4802dd","position":1,"title":"À Bout De Bras"},{"_id":"5714ded825ac0d8aee4802de","position":2,"title":"Ma Meilleure"},{"_id":"5714ded825ac0d8aee4802df","position":3,"title":"À L'Époque"},{"_id":"5714ded825ac0d8aee4802e0","position":4,"title":"Redbull & Vodka"},{"_id":"5714ded825ac0d8aee4802e1","position":5,"title":"Panam Boss"},{"_id":"5714ded825ac0d8aee4802e2","position":6,"title":"Interlude Fatima"},{"_id":"5714ded825ac0d8aee4802e3","position":7,"title":"Fatima"},{"_id":"5714ded825ac0d8aee4802e4","position":8,"title":"Interlude - Banlieue Sale Mafia"},{"_id":"5714ded825ac0d8aee4802e5","position":9,"title":"Donne Moi"},{"_id":"5714ded825ac0d8aee4802e6","position":10,"title":"Essaie Encore"},{"_id":"5714ded825ac0d8aee4802e7","position":11,"title":"Il Se Passe Quelque Chose"},{"_id":"5714ded825ac0d8aee4802e8","position":12,"title":"Quand Je Partirai"},{"_id":"5714ded825ac0d8aee4802e9","position":13,"title":"Karl"},{"_id":"5714ded825ac0d8aee4802ea","position":14,"title":"Demain On Verra"},{"_id":"5714ded825ac0d8aee4802eb","position":15,"title":"J'Espère"},{"_id":"5714ded825ac0d8aee4802ec","position":16,"title":"On S'En Bat Les Couilles 2013"},{"_id":"5714ded825ac0d8aee4802ed","position":17,"title":"Ray Charles"}]}],"isConnected":false};
*/
 console.log(mydata);
    obj=mydata;

console.log(obj);
var nodes=[];
var links=[];

 var node=new Object(); // node pour artist
 node.name=obj.name;
 node.id=obj._id;
 node.idparent="";
 node.type="artist";
 nodes.push(node);
 
for(n=0;n<obj.members.length;n++){
        var node1=new Object(); // node pour type member
        var link1=new Object(); // link pour type member
         node1.name=obj.members[n].name;
         node1.id=obj.members[n].id_member_discogs;
         node1.idparent=obj._id;
         node1.type="member of band";
         nodes.push(node1);

            link1.source=obj.members[n].id_member_discogs;
            link1.target=obj._id;
            link1.type="memberofband_artist";
            links.push(link1);
        }
//}

console.log(nodes);
console.log(links);

console.log( JSON.stringify(nodes));
console.log( JSON.stringify(links));
graph=new Object();

graph.nodes=[];
graph.links=[];

graph.nodes=nodes;
graph.links=links;

console.log("this is graph : "+graph);

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

    

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.type); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return "Name : "+d.name + "  type : " +d.type; });


      svg.selectAll(".node")
      .append("svg:a").attr("xlink:href", function(d){ return "index.html" });

  simulation
      .nodes(nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }


//});
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
var tip;
  node.on("click", function(d){
    if (tip) tip.remove();

    tip  = svg.append("g")
      .attr("transform", "translate(" + d.x  + "," + d.y + ")");

    var rect = tip.append("rect")
      .style("fill", "white")
      .style("stroke", "steelblue");

    tip.append("text")
      .text("Name: " + d.name)
      .attr("dy", "1em")
      .attr("x", 5);

    tip.append("text")
      .text("Type: " + d.type)
      .attr("dy", "2em")
      .attr("x", 5);

    var con = graph.links
      .filter(function(d1){
        return d1.source === d.source;
      })
      .map(function(d1){
        return d1.target ;
      })

    tip.append("text")
    
      //.text("Connected to: " + con.join(","))
      .attr("dy", "3em")
      .attr("x", 5);

    var bbox = tip.node().getBBox();
    rect.attr("width", bbox.width + 5)
        .attr("height", bbox.height + 5)
  });
 
  
  


});


}

function showALbumsSongs(){


  d3.selectAll("svg").remove();
  var width = 674;
  var height = 600;

  //Create SVG element
  var svg = d3.select("#ca")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
    var name = document.getElementById("autoComplete").value;


color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));
    
d3.json("https://wasabi.i3s.unice.fr/api/v1/artist_all/name/"+name, function(error, mydata) {


 if (error) throw error;
 console.log(mydata);
    obj=mydata;

console.log(obj);
var nodes=[];
var links=[];

 var node=new Object(); // node pour artist
 node.name=obj.name;
 node.id=obj._id;
 node.idparent="";
 node.type="artist";
 nodes.push(node);
 

    for(j=0;j<(obj.albums).length;j++){ // parcourir les albums de notre artist
   

        var node2=new Object(); // node pour type albums
        var link2=new Object(); // link pour type albums
        

         node2.name=obj.albums[j].title;
         node2.id=obj.albums[j]._id;
         node2.idparent=obj._id;
         node2.type="albums";
         nodes.push(node2);

        for(k=0;k<(obj.albums[j].songs).length;k++){ // parcourir les chansons d'un album

          
            var node3=new Object(); // node pour type songs
            var link3=new Object(); // link pour type sons

            node3.name=obj.albums[j].songs[k].title;
            node3.id=obj.albums[j].songs[k]._id; 
            node3.idparent=obj.albums[j]._id;
         
            node3.type="songs";
            nodes.push(node3);

            link3.source=obj.albums[j].songs[k]._id; // id de la chanson
            link3.target=obj.albums[j]._id; // id de l'album père
            link3.type="song_album";
            links.push(link3);
    
         }
    }
//}

console.log(nodes);
console.log(links);

console.log( JSON.stringify(nodes));
console.log( JSON.stringify(links));
graph=new Object();

graph.nodes=[];
graph.links=[];

graph.nodes=nodes;
graph.links=links;

console.log("this is graph : "+graph);

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

    

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.type); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return "Name : "+d.name + "  type : " +d.type; });


      svg.selectAll(".node")
      .append("svg:a").attr("xlink:href", function(d){ return "index.html" });

  simulation
      .nodes(nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }


//});
/*function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}*/

function dragstarted(d) {
    currentX = d.x;
    currentY = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}
/*function dragged(d) {
    d.px = (d.px > currentX + 50) ? currentX + 50 : d.px;
    d.py = (d.py > currentY + 50) ? currentY + 50 : d.py;
    d.px = (d.px < currentX - 50) ? currentX - 50 : d.px;
    d.py = (d.py < currentY - 50) ? currentY - 50 : d.py;
}*/

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
var tip;
  node.on("click", function(d){
    if (tip) tip.remove();

    tip  = svg.append("g")
      .attr("transform", "translate(" + d.x  + "," + d.y + ")");

    var rect = tip.append("rect")
      .style("fill", "white")
      .style("stroke", "steelblue");

    tip.append("text")
      .text("Name: " + d.name)
      .attr("dy", "1em")
      .attr("x", 5);

    tip.append("text")
      .text("Type: " + d.type)
      .attr("dy", "2em")
      .attr("x", 5);

    var con = graph.links
      .filter(function(d1){
        return d1.source === d.source;
      })
      .map(function(d1){
        return d1.target ;
      })

    tip.append("text")
    
      //.text("Connected to: " + con.join(","))
      .attr("dy", "3em")
      .attr("x", 5);

    var bbox = tip.node().getBBox();
    rect.attr("width", bbox.width + 5)
        .attr("height", bbox.height + 5)
  });
 
  
  


});


}




function showProducerWriter(){

 
  d3.selectAll("svg").remove();
  var width = 674;
  var height = 600;

  //Create SVG element
  var svg = d3.select("#ca")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


  var name = document.getElementById("autoComplete").value;


color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) { return d.id; }))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));
  
d3.json("https://wasabi.i3s.unice.fr/api/v1/artist_all/name/"+name, function(error, mydata) {


if (error) throw error;
console.log(mydata);
  obj=mydata;

console.log(obj);
var nodes=[];
var links=[];

var node=new Object(); // node pour artist
node.name=obj.name;
node.id=obj._id;
node.idparent="";
node.type="artist";
nodes.push(node);


  for(j=0;j<(obj.albums).length;j++){ // parcourir les albums de notre artist
    
      for(k=0;k<(obj.albums[j].songs).length;k++){ // parcourir les chansons d'un album

      if(obj.albums[j].songs[k].hasOwnProperty("producer")){
          
          for(m=0;m<(obj.albums[j].songs[k].producer).length;m++){
              c=0;
              for(t=0;t<nodes.length;t++){
                  if(nodes[t].name==obj.albums[j].songs[k].producer[m]){
                      c++;
                  }
              }
              if(c==0){
              var node4=new Object(); // node pour type producer
              var link4=new Object(); // link pour type producer
              node4.name=obj.albums[j].songs[k].producer[m];
              node4.id=obj.albums[j].songs[k].producer[m]+"_id";
              node4.type="Producer";
              nodes.push(node4);

              link4.source=obj.albums[j].songs[k].producer[m]+"_id"; // id de la chanson
              link4.target=obj._id;  // id de song père
              link4.type="album_producer";
              links.push(link4);}}
              }

      if(obj.albums[j].songs[k].hasOwnProperty("writer")){

          for(y=0;y<(obj.albums[j].songs[k].writer).length;y++){
               v=0;
              for(r=0;r<nodes.length;r++){
                  if(nodes[r].name==obj.albums[j].songs[k].writer[y]){
                      v++;
                  }
              }
              if(v==0){
              var node5=new Object(); // node pour type writer
              var link5=new Object(); // link pour type writer

              node5.name=obj.albums[j].songs[k].writer[y];
              node5.id=obj.albums[j].songs[k].writer[y]+"_id";
              node5.type="Writer";
              nodes.push(node5);

              link5.source=obj.albums[j].songs[k].writer[y]+"_id"; // id de la chanson
              link5.target=obj._id;  // id de song père
              link5.type="album_writer";
              links.push(link5);}
          }
              }
          
  
       }
  }
//}

var txt="";
txt += '<table class="table"' +'>'+
'<thead class="thead-dark"'+'>'+
  '<tr>'+
    '<th scope="col">writer/producer</th>'+ 
    '</thead>'+
    '<tbody>';

for(i=0; i<nodes.length;i++){
  if(nodes[i].type=="Producer"||nodes[i].type=="Writer"){
    txt += "<tr><td>"+ nodes[i].name +"  "+ nodes[i].type+"</td></tr>" ;
    txt += '<tr><td>'+'<button onClick="Collab(nodes[i].name,nodes[i].type);">Show collabs</button></td></tr>' ;
  // i want when we click the button the page shows the graph of the producer or writer with all the artists collab with 
  // but the fonction Collab() "line 618" executes without clicking the button !
  }
}

txt += '</tbody>'+
'</table>';
document.getElementById("demo").innerHTML = txt;

console.log(nodes);
console.log(links);

console.log( JSON.stringify(nodes));
console.log( JSON.stringify(links));
graph=new Object();

graph.nodes=[];
graph.links=[];

graph.nodes=nodes;
graph.links=links;

console.log("this is graph : "+graph);

var link = svg.append("g")
    .attr("class", "links")
  .selectAll("line")
  .data(graph.links)
  .enter().append("line");

  

var node = svg.append("g")
    .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter().append("circle")
    .attr("r", 5)
    .style("fill", function(d) { return color(d.type); })
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

node.append("title")
    .text(function(d) { return "Name : "+d.name + "  type : " +d.type; });


    svg.selectAll(".node")
    .append("svg:a").attr("xlink:href", function(d){ return "index.html" });

simulation
    .nodes(nodes)
    .on("tick", ticked);

simulation.force("link")
    .links(links);

function ticked() {
  link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}


});
function dragstarted(d) {
if (!d3.event.active) simulation.alphaTarget(0.3).restart();
d.fx = d.x;
d.fy = d.y;
}

function dragged(d) {
d.fx = d3.event.x;
d.fy = d3.event.y;
}


function dragended(d) {
if (!d3.event.active) simulation.alphaTarget(0);
d.fx = null;
d.fy = null;
}



}



function Collab(name,type){

 
  d3.selectAll("svg").remove();
  var width = 674;
  var height = 600;

  //Create SVG element
  var svg = d3.select("#ca")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

  var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) { return d.id; }))
  .force("charge", d3.forceManyBody())
  .force("center", d3.forceCenter(width / 2, height / 2));
  if(type=="Producer"){

    d3.json("https://wasabi.i3s.unice.fr/search/producer/"+name, function(error,datap) {
      if (error) throw error;
        console.log(datap)
        obj=datap;

        console.log(obj);
        var nodes=[];
        var links=[];

        var monTableau = Object.keys(obj).map(function(cle) {
            return [String(cle), obj[cle]];
        });

        for(i=0;i<monTableau.length;i++){
            var node=new Object();
            var link=new Object();
            node.name=monTableau[i][1].name;
            node.id=monTableau[i][1]._id;
            node.idparent="";
            node.type="artist";
            nodes.push(node);

            link.source=monTableau[i][1]._id
            link.target=name+"_id";
            link.type="Producer_artist";
            links.push(link);
          }
console.log(nodes);
console.log(links);


graph=new Object();

graph.nodes=nodes;
graph.links=links;

          console.log(graph);

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

    

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 4)
      .style("fill", function(d) { return color(d.type); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return "Name : "+d.name + "  type : " +d.type; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
        


  });

  }
  else{

    
    d3.json("https://wasabi.i3s.unice.fr/search/writer/"+name, function(error,datap) {
      if (error) throw error;
        console.log(datap)
        obj=datap;

        console.log(obj);
        var nodes=[];
        var links=[];

        var monTableau = Object.keys(obj).map(function(cle) {
            return [String(cle), obj[cle]];
        });

        for(i=0;i<monTableau.length;i++){
            var node=new Object();
            var link=new Object();
            node.name=monTableau[i][1].name;
            node.id=monTableau[i][1]._id;
            node.idparent="";
            node.type="artist";
            nodes.push(node);

            link.source=monTableau[i][1]._id
            link.target=name+"_id";
            link.type="Producer_artist";
            links.push(link);
          }
console.log(nodes);
console.log(links);


graph=new Object();

graph.nodes=nodes;
graph.links=links;

          console.log(graph);

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line");

    

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 4)
      .style("fill", function(d) { return color(d.type); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return "Name : "+d.name + "  type : " +d.type; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }


function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
        


  });






  }



}
