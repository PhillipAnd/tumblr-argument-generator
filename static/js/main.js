var tumblr={resources:{}};Array.prototype.random=function(a){return _.sample(this,a)},Object.prototype.accessProperty=function(a){for(var b=this,c=a.split(".");c.length&&(b=b[c.shift()]););return b},String.prototype.randomRepeat=function(a,b){return b="undefined"==typeof b?1:b,new Array(Math.floor(Math.random()*(a-b+1)+b)+1).join(this)},String.prototype.literalize=function(){var a=this;return a=a.replace(/you are/g,function(){return Math.random()>.2?"you're literally":"you're"}),a=a.replace(/i am/g,function(){return Math.random()>.2?"i'm literally":"i'm"}),a=a.replace(/ will/g,function(){return Math.random()>.2?"'ll literally":"'ll"}),a=a.replace(/it is/g,function(){return Math.random()>.2?"it's literally":"it's"}),a.toString()},String.prototype.tumblrize=function(a){var b=this;return"undefined"==typeof a&&(a=!1),b=b.literalize(),b=b.replace(/\band\b/g,"&"),a&&(b=b.replace(/you're/g,"ur"),b=b.replace(/you/g,"u"),b=b.replace(/people/g,"ppl"),b=b.replace(/please/g,"plz"),b=b.replace(/\bhate\b/g,"h8"),b=b.replace(/\bto\b/g,"2"),b=b.replace(/\bthe\b/g,function(){return Math.random()>.3?"the":"teh"}),b=b.replace(/eist/g,"iest"),b=b.replace(/'/g,""),b=b.replace(/\b /g,function(){return Math.random()>.03?" ":[", ",". "].random()})),b=b.replace(/(.+?)([\!\?])/gi,function(b,c,d){if(Math.random()>.6)return b;if(c=c.trim(),a){var e,f=Math.floor(Math.random()*c.length/2);return c=c.slice(0,f)+c.slice(f,c.length).toUpperCase(),c+=d,Math.random()>.8&&(e="~".randomRepeat(5),Math.random()>.3&&(e+="*"),c=e+c+e.split("").reverse().join("")),Math.random()>.75&&(c+=" "+tumblr.resources.emoji.random())," "+c}return b.toUpperCase()}),b=b.replace(/([\!\?]+)/g,function(a,b){return b.slice(0,1).randomRepeat(8,3)}),b.toString()},String.prototype.replaceTerms=function(){for(var a,b,c=/\{([a-z\.]+)(:([0-9]+))?\}/gi,d=this,e=0;-1!==d.search(c)&&5>e;)a={},b={},_.forEach(d.match(c),function(b){var c=b.match(/[a-z\.]+/i)[0];a.hasOwnProperty(c)||(a[c]=1),a[c]+=1}),_.forEach(a,function(a,c){var d=tumblr.resources.accessProperty(c);b[c]=_.sample(d,a)}),d=d.replace(c,function(a,c,d,e){return term=b[c].pop(),"undefined"==typeof term&&(term=tumblr.resources.accessProperty(c).random()),"undefined"==typeof e&&(e=1),"object"==typeof term&&(term=term[e]),term}),e+=1;return d.toString()};var tumblrPrePostfixer=function(a,b,c){var d=[];return"undefined"==typeof c&&(c=" "),_.forEach(a,function(a){_.forEach(b,function(b){d.push(a+c+b)})}),d};tumblr.resources.adverbs=["damn","fucking","goddamn"],tumblr.resources.alignments=tumblrPrePostfixer(["dandy","demi","gender"],["amorous","femme","fluid","fuck","queer"],"").concat(tumblrPrePostfixer(["a","bi","demi","multi","non","omni","pan","para","poly","trans"],["ethnic","gender","queer","racial","romantic","sexual","species"],"")),tumblr.resources.concepts={awesome:["activism","bodily integrity","communism","egalitarianism","fat love","fatism","female rights","female superiority","female supremacy","femininity","feminism","food addiction","freeganism","gender abolition","intersectionality","lesbianism","misandry","social justice","socialism","veganism","vegetarianism"],terrible:["TERFism","bindi wearing","colonization","cultural appropriation","erosion of female self esteem","exotification","gender equality","gender roles","hypermasculinity","institutionalized racism","internalized misogynism","internalized patriarchy","labeling","male domination","male entitlement","masculinity","men's rights","patriarchal beauty standards","{privileged.nouns} privilege","rape culture","sexuality labels","white feminism","white opinions"]},tumblr.resources.conclusions=["in conclusion:","tl;dr","to summarize:"],tumblr.resources.emoji=["(◕﹏◕✿)","（　｀ー´）","(•﹏•)","└(｀0´)┘","ᕙ(⇀‸↼‶)ᕗ","ᕦ(ò_óˇ)ᕤ","(⋋▂⋌)","(¬_¬)","٩(×̯×)۶","(╯°□°)╯︵ ┻━┻","(⊙﹏⊙✿)","(ﾉ◕ヮ◕)ﾉ*: ･ﾟ✧","(⊙_◎)"],tumblr.resources.genders=[],tumblr.resources.images={backgrounds:["1.gif","5.gif","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],inline:["1.gif","2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif","1.png","2.png","1.jpg","2.jpg"]},tumblr.resources.insults={statements:["acknowledge your {privileged.nouns} privilege","burn in hell","check your {privileged.nouns} privilege","die in a ditch","die in a fire","drop dead","fuck off","fuck you","go drown in your own piss","go fuck yourself","go play in traffic","kill yourself","light yourself on fire","make love to yourself in a furnace","please die","rot in hell","screw you","shut the fuck up","shut up"],adjectives:["antediluvian","awful","body-shaming","chauvinistic","ciscentric","close-minded","deluded","entitled","fucking","goddamn","heteropatriarchal","ignorant","inconsiderate","insensitive","intolerant","judgmental","misogynistic","nphobic","oppressive","pathetic","patriarchal","racist","rape-culture-supporting","worthless"].concat(tumblr.resources.phobias),nouns:["MRA","TERF","ableist","ageist","anti-feminist","asshole","assimilationist","basement dweller","bigot","binarist","brogrammer","carnist","chauvinist","cissexist","classist","creep","dudebro","essentialist","fascist","feminazi","femscum","hitler","kyriarchist","lowlife","misogynist","mouthbreather","nazi","neckbeard","oppressor","patriarchist","pedophile","piece of shit","radscum","rape-apologist","rapist","redditor","scum","sexist","subhuman","traditionalist","transmisogynist","virgin"]},tumblr.resources.intros=["[TW: rant]","[TW: words]","can we talk about this?","first off:","for the love of god.","i'm going to get hate for this but","just a friendly reminder:","let me make this abundantly clear:","no. just. no.","oh. my. god.","omg","please stop.","seriously?","this. is. NOT. okay.","wow. just. wow."],tumblr.resources.rawKins=["bat","cat","demon","dog","dragon","fox","frog","goat","other","poly","rabbit","wolf"],tumblr.resources.kins=tumblrPrePostfixer(tumblr.resources.rawKins,["kin"],""),tumblr.resources.marginalized={verbs:[["abuse","abusing","abuse"],["attack","attacking","attacking"],["dehumanize","dehumanizing","dehumanization"],["deny","denying","denial"],["discriminate","discriminating","discrimination"],["exotify","exotifying","exotification"],["fetishize","fetishizing","fetishization"],["harass","harassing","harassment"],["hypersexualize","hypersexualizing","hypersexualization"],["ignore","ignoring","ignoring"],["kinkshame","kinkshaming","kinkshaming"],["marginalize","marginalizing","marginalization"],["misgender","misgendering","misgendering"],["objectify","objectifying","objectification"],["oppress","oppressing","oppression"],["sexualize","sexualizing","sexualization"],["shame","shaming","shaming"],["stare-rape","stare-raping","stare-raping"]],nouns:["CAFAB","CAMAB","LGBTQIAP+","PoC","QTPOC","WoC","ace","androphilia","appearance","asian","attractiveness","bi","black","body hair","celestial","chubby","closet","color","cross-dresser","curvy","deathfat","demi","differently abled","disabled","diversity","dysphoria","estrogen-affinity","ethnic","ethnicity","fandom","fat","fatty","female","furry","genderless","graysexual","gynephilia","headmate","height","hijra","indigenous","intersexuality","invisibility","latin@","little person","minority","multigender","multiplicity","native american","non-gender","non-white","obesity","princex","prosthetic","queer","radfem","skinny","smallfat","stretchmark","survivor","therian","thin","third-gender","trans*","transabled","transman","transnormative","transwoman","two-spirit","vegan","vegetarian","victim","womyn","wymyn"].concat(tumblr.resources.alignments,tumblr.resources.kins)},tumblr.resources.personalities=tumblrPrePostfixer(["aligned","identifying","type","supporting"],["individuals","people","personalities"]),tumblr.resources.phobias=tumblrPrePostfixer(["bi","curvy","deathfat","ethno","fat","furry","homo","otherkin","queer","trans*","womyn"],["phobic"],""),tumblr.resources.politics={nouns:["animal rights activist","anti-SJW","atheist","communist","egalitarianist","feminist","freegan","men's rights","radical feminist","social justice activist","socialist","vegan","zapatista"]},tumblr.resources.presentations=["i blog about {concepts.awesome}, {concepts.awesome} and {concepts.awesome}","if you're a {insults.nouns} {insults.statements}","fighting {concepts.terrible} / fighting {concepts.terrible} / fighting {concepts.terrible}","my pronuns are: {joinedPronouns} or {joinedPronouns}","my triggers include: {concepts.terrible}, {concepts.terrible} and {concepts.terrible}","part {kins}/{kins} with some {rawKins} traits"],tumblr.resources.privileged={nouns:["able-body","binary","cis","cisgender","cishet","gender","hetero","male","middle-class","smallfat","thin","uterus-bearer","white"],adjectives:["normative","elitist","overprivileged","privileged"]},tumblr.resources.pronouns=[["ey","em","eir"],["tho","thong","thors"],["hu","hum","hus"],["thon","thon","thons"],["jee","jem","jeir"],["ve","ver","vis"],["xe","xem","xyr"],["ze","zir","zes"],["ze","hir","hir"],["ze","mer","zer"],["zhe","zhim","zher"]],tumblr.resources.joinedPronouns=function(){var a=[];return _.forEach(tumblr.resources.pronouns,function(b){a.push(b.join("/"))}),a}(),tumblr.resources.revolutions=function(){var a=[],b=["aceo","black","chubby","curvy","deathfat","demi","diversity","dysphoria","ethnicity","fandom","fat","fatty","fem","furry","height","homo","latin","lesb","queer","skinny","trans","womyn","wymyn"];return _.forEach(b,function(b){-1===b.slice(-1).search(/[aeiouy]/)&&(b+="o"),a.push((b+"lution").toUpperCase())}),a}(),tumblr.resources.statements=["why the fuck do you feel the need to {marginalized.verbs:0} {marginalized.nouns}-{personalities}?","don't you see that {marginalized.verbs:1} {marginalized.nouns}-{personalities} is problematic?","stop fucking {marginalized.verbs:1} {marginalized.nouns}-{personalities}!","stop {marginalized.verbs:1} {marginalized.nouns}-{personalities}!","you should stop fucking {marginalized.verbs:1} {marginalized.nouns}-{personalities}!","fuck your {marginalized.verbs:2} of {marginalized.nouns}-{personalities}!","your {marginalized.verbs:2} of {marginalized.nouns}-{personalities} is problematic!",'"{marginalized.nouns}" is literally a trigger word for me!',"consensual sex is still rape!","die in a fire!","fuck off!","fuck your {adverbs} {concepts.terrible}!",'fucking address me as "{joinedPronouns}"!',"fucking respect my {concepts.awesome}!","get off my {adverbs} case or i will report you for harassment!","i am 100% done.","i am crying right now!","i can't even.","i don't need your {adverbs} advice!","i hope you fucking die!","it is not my job to educate you!","leave {marginalized.nouns}-{personalities} the fuck alone!",'my pronouns are "{joinedPronouns}"!',"no one cares about your {adverbs} {insults.nouns} {privileged.nouns} opinion!","obesity ≠ unhealthy!","oh my god!","omg.","people like you deserve to die!","stop offending me!","stop tone policing me!","what the fuck do you have against {concepts.awesome}?","why the FUCK should i respect your {adverbs} {insults.nouns} opinion?","you are making me cry!","you are perpetuating {concepts.terrible}!","you are the worst person alive!","you are triggering me!","you are worse than hitler!","you can be fat and healthy!","you make me sick!","you should be ashamed of yourself!","you will never understand my {adverbs} {marginalized.nouns} struggles!","your {adverbs} {insults.nouns} {privileged.nouns}-privileged opinion is worthless!","your {concepts.terrible} is problematic!","your {concepts.terrible} keeps me from having any {adverbs} rights!","{concepts.terrible} is so {adverbs} annoying!"],tumblr.resources.titles=["this is {privileged.nouns} privilege","the angry {marginalized.nouns}","{marginalized.nouns} microaggressions","this is social justice","{revolutions}"];var generateInsult,generateParagraph,generateUsername,renderInsult,renderBlog;generateInsult=function(a){var b="";return a?(b+="{insults.statements}, you ",Math.random()>.3&&(b+="{insults.adjectives} "),Math.random()>.3&&(b+="{marginalized.nouns}-{marginalized.verbs}, ")):b+="you ",b+="{privileged.nouns}-{privileged.adjectives} {insults.nouns}"},generateParagraph=function(a,b,c){var d,e=[],f=Math.round(("undefined"==typeof b?3:b)+Math.random()*("undefined"==typeof c?5:c)),g={insult:Math.round(.2*f),statement:Math.round(.8*f)};for(d=0;d<g.insult;d+=1)e.push(generateInsult(Math.random()>.3)+"!");return e=e.concat(_.map(_.sample(tumblr.resources.statements,g.statement),function(a){if(Math.random()>.5)return a;var b=a.slice(0,-1),c=a.slice(-1);return b+(" you "+(Math.random()>.3?"{insults.adjectives} ":"")+"{insults.nouns}")+c})),e=_.shuffle(e),e[0]="{intros} "+e[0],Math.random()>.5&&e.push("{conclusions} {insults.statements}"),e.join(" ").replaceTerms().tumblrize(a)},generateUsername=function(){return"{marginalized.nouns}".randomRepeat(2,2).replaceTerms().toLowerCase().replace(/[^a-z]/g,"")},renderInsult=function(){$("#insult").empty().append($("<p>").text(generateInsult(!0).replaceTerms().tumblrize(Math.random()>.8).toUpperCase()))},renderBlog=function(){var a,b,c,d,e,f,g=13+Math.floor(10*Math.random()),h=generateUsername(),i=.4,j=[],k=[];for(b=tumblr.resources.titles.random().replaceTerms(),c=[g,"{alignments}","{politics.nouns}"].join(" / ").replaceTerms(),d=_.map(_.sample(tumblr.resources.presentations,3),function(a){return $("<li>").text(a.replaceTerms())}),e=$("<p>").attr("class","top").text(generateParagraph(Math.random()>i)),a=0;a<2+3*Math.random();a+=1)e=$("<div>").append($("<cite>").text(generateUsername()+":"),$("<blockquote>").append(e),$("<p>").attr("class","reply").text(Math.random()>.6?generateParagraph(Math.random()>i):(generateInsult(!0)+"!").replaceTerms().tumblrize(Math.random()>i)));for($(_.sample(e.find(".reply"))).empty().append($("<img>").attr("src","static/img/inline/"+tumblr.resources.images.inline.random())),_.forEach(_.sample(tumblr.resources.concepts.awesome,5+Math.floor(3*Math.random())),function(a){k.push($("<li>").text("#"+a))}),a=0;a<5+10*Math.random();a+=1)f=$("<li>"),f.append($("<strong>").attr("class","username").text(generateUsername())),Math.random()>.7?f.append($("<span>").attr("class","reblog").text(" reblogged this from "+h+" and added:")).append($("<p>").attr("class","insult").text((generateInsult(!0)+"!").replaceTerms().tumblrize(!0))):f.append($("<span>").attr("class","like").text(" likes this")),j.push(f);$("#title").text(b),$("#about").text(c),$("#presentation").empty().append(d),$("#argument").empty().append(e),$("#hashtags").empty().append(k),$("#reblogs").empty().append(j),-1===$("body").css("background-image").indexOf(window.currentBackgroundImage)&&$("body").css("background-image","url(static/img/bg/"+window.currentBackgroundImage+")")},$(document).ready(function(){window.currentBackgroundImage=tumblr.resources.images.backgrounds.random(),window.setInterval(function(){window.currentBackgroundImage=tumblr.resources.images.backgrounds.random()},4e3),$(".privileged-groups-length").text(" "+tumblr.resources.privileged.adjectives.length*tumblr.resources.privileged.nouns.length+" "),$(".marginalized-groups-length").text(" "+tumblr.resources.marginalized.nouns.length*tumblr.resources.marginalized.verbs.length+" "),renderBlog(),renderInsult(),$("#controls button.generate-insult").click(function(){$("#insult").show(),renderInsult()}),$("#controls button.generate-blog").click(function(){$("#insult").hide(),renderBlog()})});