require.config({paths:{jquery:"http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"}}),define("main",["jquery"],function(e){var i,t,n,a=["burn in hell","check your privilege","die in a fire","fuck you","kill yourself","please die","rot in hell","screw you","shut the fuck up","shut up"],r=["deluded","fucking","god damn","judgemental","worthless"],s=[["activist","agender","appearance","asian","attractive","bi","bigender","black","celestial","chubby","closet","color","curvy","dandy","deathfat","demi","differently abled","disabled","diversity","dysphoria","ethnic","ethnicity","fat love","fat","fatist","fatty","female","feminist","genderfuck","genderless","hair","height","indigenous","intersectionality","invisible","kin","lesbianism","little person","marginalized","minority","multigender","non-gender","non-white","obesity","otherkin","pansexual","polygender","privilege","prosthetic","queer","radfem","skinny","smallfat","stretchmark","thin","third-gender","trans*","transgender","transman","transwoman","trigger","two-spirit","womyn"],["chauvinistic","denying","discriminating","hypersexualizing","intolerant","misogynistic","nphobic","oppressive","phobic","racist","sexualizing","shaming"]],o=[["able-bodied","appearance","attractive","binary","cis","cisgender","cishet","hetero","male","rich","smallfat","thin","white"],["ableist","classist","normative","overprivileged","patriarch","privileged","sexist"]],l=["asshole","bigot","oppressor","piece of shit","rapist","scum","subhuman"];i=function(e){return e[Math.floor(Math.random()*e.length)]},t=function(){return i(["a","bi","dandy","demi","gender","multi","pan","poly"])+i(["amorous","femme","fluid","queer","romantic","sexual"])},n=function(){return[i(a),", you ",i(r)," ",i([t(),i(s[0])]),"-",i(s[1]),", ",i(o[0]),"-",i(o[1])," ",i(l)].join("").toUpperCase()},e(document).ready(function(){e("#argument").removeClass("loading").text(n()),e(".controls button.generate").click(function(){e("#argument").text(n())})})});