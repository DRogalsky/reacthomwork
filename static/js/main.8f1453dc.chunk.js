(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=a(7),s=a(3),l=a(4),m=a(8),u=a(5),g=a(9);a(16);function p(){return i.a.createElement("header",null,i.a.createElement("h1",null,"Memory Game!"),i.a.createElement("h2",null,"Try to click each image only once"))}a(17);function d(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"title"},"Memory Game!"),i.a.createElement("li",{className:"instructions"},"Click an image to begin"),i.a.createElement("li",{className:"score"},"Score: ",e.score," Top Score: ",e.topScore)))}a(18);function h(){return i.a.createElement("footer",null)}a(19);var f=function(e){return i.a.createElement("div",{className:"card",onClick:function(t){return e.onClick(t)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},k=a(6),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={friends:k,guessed:[],score:0,topScore:0},a.shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.handleClick=function(e){var t=e.target.alt,n=a.state.score+1,i=a.state.guessed;i.includes(t)?a.restart():a.setState({friends:a.shuffle(a.state.friends),score:n,guessed:[].concat(Object(r.a)(i),[t])})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"restart",value:function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score}),this.setState({score:0,guessed:[]})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(p,null),this.state.friends.map(function(t){return i.a.createElement(f,{key:t.id,id:t.id,name:t.name,image:t.image,onClick:e.handleClick})}),i.a.createElement(h,null))}}]),t}(n.Component);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8f1453dc.chunk.js.map