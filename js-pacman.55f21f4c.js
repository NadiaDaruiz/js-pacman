parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NVij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LEVEL=exports.CLASS_LIST=exports.OBJECT_TYPE=exports.DIRECTIONS=exports.CELL_SIZE=exports.GRID_SIZE=void 0;var o=20;exports.GRID_SIZE=o;var e=20;exports.CELL_SIZE=e;var r={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-o,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:o,rotation:90}};exports.DIRECTIONS=r;var t={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"};exports.OBJECT_TYPE=t;var L=[t.BLANK,t.WALL,t.DOT,t.BLINKY,t.PINKY,t.INKY,t.CLYDE,t.PILL,t.PACMAN,t.GHOSTLAIR];exports.CLASS_LIST=L;var I=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];exports.LEVEL=I;
},{}],"ixeg":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"fk2o":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"ixeg"}],"rp83":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"IOZJ":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"ixeg"}],"v5FO":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"YtCi":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"fk2o","./iterableToArray":"rp83","./unsupportedIterableToArray":"IOZJ","./nonIterableSpread":"v5FO"}],"ZBnv":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"NoOd":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"xwXl":[function(require,module,exports) {
function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=e;
},{}],"p2kp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("@babel/runtime/helpers/toConsumableArray")),t=s(require("@babel/runtime/helpers/classCallCheck")),r=s(require("@babel/runtime/helpers/createClass")),i=s(require("@babel/runtime/helpers/defineProperty")),a=require("./setup");function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function s(e){var r=this;(0,t.default)(this,s),(0,i.default)(this,"objectExist",function(e,t){return r.grid[e].classList.contains(t)}),this.dotCount=0,this.grid=[],this.DOMGrid=e}return(0,r.default)(s,[{key:"showGameStatus",value:function(e){var t=document.createElement("div");t.classList.add("game-status"),t.innerHTML="".concat(e?" WIN!":"GAME OVER!"),this.DOMGrid.appendChild(t)}},{key:"createGrid",value:function(e){var t=this;this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="grid-template-columns : repeat(".concat(a.GRID_SIZE,",").concat(a.CELL_SIZE,"px)"),e.forEach(function(e,r){var i=document.createElement("div");i.classList.add("square",a.CLASS_LIST[e]),i.style.cssText="width: ".concat(a.CELL_SIZE,"px ; height: ").concat(a.CELL_SIZE,"px;"),t.DOMGrid.appendChild(i),t.grid.push(i),a.CLASS_LIST[e]===a.OBJECT_TYPE.DOT&&t.dotCount++})}},{key:"addObject",value:function(t,r){var i;(i=this.grid[t].classList).add.apply(i,(0,e.default)(r))}},{key:"removeObject",value:function(t,r){var i;(i=this.grid[t].classList).remove.apply(i,(0,e.default)(r))}},{key:"rotateDiv",value:function(e,t){this.grid[e].style.transform="rotate(".concat(t,"deg)")}},{key:"moveCharacter",value:function(e){if(e.shouldMove()){var t=e.getNextMove(this.objectExist),r=t.nextMovePos,i=t.direction,a=e.makeMove(),s=a.classesToRemove,o=a.classesToAdd;e.rotation&&r!==e.pos&&(this.rotateDiv(r,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,s),this.addObject(r,o),e.setNewPos(r,i)}}}],[{key:"createGameBoard",value:function(e,t){var r=new this(e);return r.createGrid(t),r}}]),s}(),n=o;exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","@babel/runtime/helpers/defineProperty":"xwXl","./setup":"NVij"}],"naqe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime/helpers/classCallCheck")),t=i(require("@babel/runtime/helpers/createClass")),s=require("./setup");function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){function i(t,s){(0,e.default)(this,i),this.pos=s,this.speed=t,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}return(0,t.default)(i,[{key:"shouldMove",value:function(){return!!this.dir&&(this.timer===this.speed?(this.timer=0,!0):void this.timer++)}},{key:"getNextMove",value:function(e){var t=this.pos+this.dir.movement;return(e(t,s.OBJECT_TYPE.WALL)||e(t,s.OBJECT_TYPE.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}},{key:"makeMove",value:function(){var e=[s.OBJECT_TYPE.PACMAN];return{classesToAdd:[s.OBJECT_TYPE.PACMAN],classesToRemove:e}}},{key:"setNewPos",value:function(e){this.pos=e}},{key:"handleKeyInput",value:function(e,t){var i;if(console.log(e),e.keyCode>=37&&e.keyCode<=40){i=s.DIRECTIONS[e.key];var r=this.pos+i.movement;t(r,s.OBJECT_TYPE.WALL)||t(r,s.OBJECT_TYPE.GHOSTLAIR)||(this.dir=i)}}}]),i}(),o=r;exports.default=o;
},{"@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./setup":"NVij"}],"dB6H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomMovement=t;var e=require("./setup");function t(t,r,o){for(var n=r,a=t+n.movement,s=Object.keys(e.DIRECTIONS);o(a,e.OBJECT_TYPE.WALL)||o(a,e.OBJECT_TYPE.GHOST);){var v=s[Math.floor(Math.random()*s.length)];a=t+(n=e.DIRECTIONS[v]).movement}return{nextMovePos:a,direction:n}}
},{"./setup":"NVij"}],"BSCL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@babel/runtime/helpers/toConsumableArray")),t=r(require("@babel/runtime/helpers/classCallCheck")),i=r(require("@babel/runtime/helpers/createClass")),s=require("./setup");function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;(0,t.default)(this,r),this.name=n,this.startPos=i,this.movement=o,this.pos=i,this.speed=e,this.dir=s.DIRECTIONS.ArrowRight,this.timer=0,this.isScared=!1,this.rotation=!1}return(0,i.default)(r,[{key:"shouldMove",value:function(){return this.timer===this.speed?(this.timer=0,!0):(this.timer++,!1)}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var t=[s.OBJECT_TYPE.GHOST,s.OBJECT_TYPE.SCARED,this.name],i=[s.OBJECT_TYPE.GHOST,this.name];return this.isScared&&(i=[].concat((0,e.default)(i),[s.OBJECT_TYPE.SCARED])),{classesToRemove:t,classesToAdd:i}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}}]),r}(),n=o;exports.default=n;
},{"@babel/runtime/helpers/toConsumableArray":"YtCi","@babel/runtime/helpers/classCallCheck":"ZBnv","@babel/runtime/helpers/createClass":"NoOd","./setup":"NVij"}],"LAbX":[function(require,module,exports) {
module.exports="/js-pacman/munch.7fbea03a.wav";
},{}],"mqJk":[function(require,module,exports) {
module.exports="/js-pacman/pill.d14505de.wav";
},{}],"Zfvf":[function(require,module,exports) {
module.exports="/js-pacman/game_start.9b237711.wav";
},{}],"zCmu":[function(require,module,exports) {
module.exports="/js-pacman/death.b90f13bb.wav";
},{}],"PIU3":[function(require,module,exports) {
module.exports="/js-pacman/eat_ghost.1334dcca.wav";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./setup"),t=c(require("./GameBoard")),r=c(require("./Pacman")),o=require("./GhostsMoves"),n=c(require("./Ghost")),u=c(require("./sounds/munch.wav")),a=c(require("./sounds/pill.wav")),s=c(require("./sounds/game_start.wav")),i=c(require("./sounds/death.wav")),d=c(require("./sounds/eat_ghost.wav"));function c(e){return e&&e.__esModule?e:{default:e}}var l=document.querySelector("#game"),E=document.querySelector("#score"),m=document.querySelector("#start-button"),T=1e4,v=80,f=t.default.createGameBoard(l,e.LEVEL),P=0,p=null,w=!1,C=!1,O=null;function L(e){new Audio(e).play()}function Y(e,t){L(i.default),document.removeEventListener("keydown",function(t){return e.handleKeyInput(t,f.objectExist)}),f.showGameStatus(w),clearInterval(p),m.classList.remove("hide")}function _(t,r){var o=r.find(function(e){return t.pos===e.pos});o&&(t.powerPill?(L(d.default),f.removeObject(o.pos,[e.OBJECT_TYPE.GHOST,e.OBJECT_TYPE.SCARED,o.name]),o.pos=o.startPos,P+=100):(f.removeObject(t.pos,[e.OBJECT_TYPE.PACMAN]),f.rotateDiv(t.pos,0),Y(t,l)))}function B(t,r){f.moveCharacter(t),_(t,r),r.forEach(function(e){return f.moveCharacter(e)}),_(t,r),f.objectExist(t.pos,e.OBJECT_TYPE.DOT)&&(L(u.default),f.removeObject(t.pos,[e.OBJECT_TYPE.DOT]),f.dotCount--,P+=10),f.objectExist(t.pos,e.OBJECT_TYPE.PILL)&&(L(a.default),f.removeObject(t.pos,[e.OBJECT_TYPE.PILL]),t.powerPill=!0,P=50,clearTimeout(O),O=setTimeout(function(){return t.powerPill=!1},T)),t.powerPill!==O&&(O=t.powerPill,r.forEach(function(e){return e.isScared=t.powerPill})),0===f.dotCount&&(w=!0,Y(t,r)),E.innerHTML=P}function h(){L(s.default),w=!1,C=!1,P=0,m.classList.add("hide"),f.createGrid(e.LEVEL);var t=new r.default(2,287);f.addObject(287,[e.OBJECT_TYPE.PACMAN]),document.addEventListener("keydown",function(e){t.handleKeyInput(e,f.objectExist)});var u=[new n.default(5,188,o.randomMovement,e.OBJECT_TYPE.BLINKY),new n.default(4,209,o.randomMovement,e.OBJECT_TYPE.PINKY),new n.default(3,251,o.randomMovement,e.OBJECT_TYPE.INKY),new n.default(2,230,o.randomMovement,e.OBJECT_TYPE.CLYDE)];p=setInterval(function(){return B(t,u)},v)}m.addEventListener("click",h);
},{"./setup":"NVij","./GameBoard":"p2kp","./Pacman":"naqe","./GhostsMoves":"dB6H","./Ghost":"BSCL","./sounds/munch.wav":"LAbX","./sounds/pill.wav":"mqJk","./sounds/game_start.wav":"Zfvf","./sounds/death.wav":"zCmu","./sounds/eat_ghost.wav":"PIU3"}]},{},["Focm"], null)
//# sourceMappingURL=/js-pacman/js-pacman.55f21f4c.js.map