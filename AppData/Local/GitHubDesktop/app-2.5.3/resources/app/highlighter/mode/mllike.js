self.webpackChunk(["mode/mllike"],{48:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("mllike",function(b,c){function d(a,b){var d=a.next();if("\""===d)return b.tokenize=e,b.tokenize(a,b);if("{"===d&&a.eat("|"))return b.longString=!0,b.tokenize=g,b.tokenize(a,b);if("("===d&&a.eat("*"))return b.commentLevel++,b.tokenize=f,b.tokenize(a,b);if("~"===d||"?"===d)return a.eatWhile(/\w/),"variable-2";if("`"===d)return a.eatWhile(/\w/),"quote";if("/"===d&&c.slashComments&&a.eat("/"))return a.skipToEnd(),"comment";if(/\d/.test(d))return"0"===d&&a.eat(/[bB]/)&&a.eatWhile(/[01]/),"0"===d&&a.eat(/[xX]/)&&a.eatWhile(/[0-9a-fA-F]/),"0"===d&&a.eat(/[oO]/)?a.eatWhile(/[0-7]/):(a.eatWhile(/[\d_]/),a.eat(".")&&a.eatWhile(/[\d]/),a.eat(/[eE]/)&&a.eatWhile(/[\d\-+]/)),"number";if(/[+\-*&%=<>!?|@\.~:]/.test(d))return"operator";if(/[\w\xa1-\uffff]/.test(d)){a.eatWhile(/[\w\xa1-\uffff]/);var i=a.current();return h.hasOwnProperty(i)?h[i]:"variable"}return null}function e(a,b){for(var c,e=!1,f=!1;null!=(c=a.next());){if("\""===c&&!f){e=!0;break}f=!f&&"\\"===c}return e&&!f&&(b.tokenize=d),"string"}function f(a,b){for(var c,e;0<b.commentLevel&&null!=(e=a.next());)"("===c&&"*"===e&&b.commentLevel++,"*"===c&&")"===e&&b.commentLevel--,c=e;return 0>=b.commentLevel&&(b.tokenize=d),"comment"}function g(a,b){for(var c,e;b.longString&&null!=(e=a.next());)"|"===c&&"}"===e&&(b.longString=!1),c=e;return b.longString||(b.tokenize=d),"string"}var h={as:"keyword",do:"keyword",else:"keyword",end:"keyword",exception:"keyword",fun:"keyword",functor:"keyword",if:"keyword",in:"keyword",include:"keyword",let:"keyword",of:"keyword",open:"keyword",rec:"keyword",struct:"keyword",then:"keyword",type:"keyword",val:"keyword",while:"keyword",with:"keyword"},i=c.extraWords||{};for(var j in i)i.hasOwnProperty(j)&&(h[j]=c.extraWords[j]);var l=[];for(var m in h)l.push(m);return a.registerHelper("hintWords","mllike",l),{startState:function(){return{tokenize:d,commentLevel:0,longString:!1}},token:function(a,b){return a.eatSpace()?null:b.tokenize(a,b)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:c.slashComments?"//":null}}),a.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{and:"keyword",assert:"keyword",begin:"keyword",class:"keyword",constraint:"keyword",done:"keyword",downto:"keyword",external:"keyword",function:"keyword",initializer:"keyword",lazy:"keyword",match:"keyword",method:"keyword",module:"keyword",mutable:"keyword",new:"keyword",nonrec:"keyword",object:"keyword",private:"keyword",sig:"keyword",to:"keyword",try:"keyword",value:"keyword",virtual:"keyword",when:"keyword",raise:"builtin",failwith:"builtin",true:"builtin",false:"builtin",asr:"builtin",land:"builtin",lor:"builtin",lsl:"builtin",lsr:"builtin",lxor:"builtin",mod:"builtin",or:"builtin",raise_notrace:"builtin",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",int:"type",float:"type",bool:"type",char:"type",string:"type",unit:"type",List:"builtin"}}),a.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",assert:"keyword",base:"keyword",begin:"keyword",class:"keyword",default:"keyword",delegate:"keyword","do!":"keyword",done:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",extern:"keyword",finally:"keyword",for:"keyword",function:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",match:"keyword",member:"keyword",module:"keyword",mutable:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword","return!":"keyword",return:"keyword",select:"keyword",static:"keyword",to:"keyword",try:"keyword",upcast:"keyword","use!":"keyword",use:"keyword",void:"keyword",when:"keyword","yield!":"keyword",yield:"keyword",atomic:"keyword",break:"keyword",checked:"keyword",component:"keyword",const:"keyword",constraint:"keyword",constructor:"keyword",continue:"keyword",eager:"keyword",event:"keyword",external:"keyword",fixed:"keyword",method:"keyword",mixin:"keyword",object:"keyword",parallel:"keyword",process:"keyword",protected:"keyword",pure:"keyword",sealed:"keyword",tailcall:"keyword",trait:"keyword",virtual:"keyword",volatile:"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",Option:"builtin",int:"builtin",string:"builtin",not:"builtin",true:"builtin",false:"builtin",raise:"builtin",failwith:"builtin"},slashComments:!0}),a.defineMIME("text/x-sml",{name:"mllike",extraWords:{abstype:"keyword",and:"keyword",andalso:"keyword",case:"keyword",datatype:"keyword",fn:"keyword",handle:"keyword",infix:"keyword",infixr:"keyword",local:"keyword",nonfix:"keyword",op:"keyword",orelse:"keyword",raise:"keyword",withtype:"keyword",eqtype:"keyword",sharing:"keyword",sig:"keyword",signature:"keyword",structure:"keyword",where:"keyword",true:"keyword",false:"keyword",int:"builtin",real:"builtin",string:"builtin",char:"builtin",bool:"builtin"},slashComments:!0})})}});
//# sourceMappingURL=mllike.js.map