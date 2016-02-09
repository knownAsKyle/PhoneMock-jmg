var mock__main = mock__main || {};
/******************************************************************
	Consts
******************************************************************/
(function(m) {
    m.constants = {};
    m.constants.modStart = '<div class="module"><span class="contentLbl">';
    m.constants.modEnd = '</span><div>';
    m.constants.adStart = '<div class="ad"><span class="contentLbl">';
    m.constants.adEnd = '</span></div>';
    m.constants.defaultAdMessage = 'ad 320 x 50';
    return m;
})(mock__main);
/******************************************************************
	Functions
******************************************************************/
(function(m) {
    m.functions = {};
    m.functions.handleMenuIconClick = function() {
        this.classList.toggle('open');
    };
    m.functions.addModule = function() {
        var modCount = document.querySelectorAll('.module').length;
        var lbl = prompt("Enter module name.", "module_" + modCount);
        if (lbl) {
            m.elements.content.appendChild(m.functions.makeNode("mod", lbl));
        }
    };
    m.functions.addAd = function() {
        var lbl = prompt("Enter ad name.", m.constants.defaultAdMessage);
        if (lbl) {
            m.elements.content.appendChild(m.functions.makeNode("ad", lbl));
        }
    };
    m.functions.makeNode = function(nodeType, lbl) {
        var d = document.createElement("div");
        var s = document.createElement("span");
        var t = document.createTextNode(lbl);
        switch (nodeType) {
            case "ad":
                d.className = "ad";
                break;
            case "mod":
                d.className = "module";
                break;
            default:
        }
        s.className = "contentLbl";
        s.appendChild(t);
        d.appendChild(s);
        d.addEventListener("dblclick", function() {
            this.parentNode.removeChild(this);
        });
        return d;
    };
    return m;
})(mock__main);
/******************************************************************
	Element Refs
******************************************************************/
(function(m) {
    m.elements = {};
    m.elements.all = document.getElementById("inner--mobile");
    m.elements.content = document.getElementById("content");
    m.elements.menuIcon = document.getElementById("nav-icon3");
    m.elements.newModuleButton = document.getElementById("newModuleButton");
    m.elements.newAdButton = document.getElementById("newAdButton");
    m.elements.dropdown = document.getElementById("dropDown");
    m.elements.newDropDownOption = document.getElementById("newDropDownOption");
    return m;
})(mock__main);
/******************************************************************
	Event Listeners
******************************************************************/
(function(m) {
    m.events = {};
    m.events.init = function() {
        m.elements.menuIcon.addEventListener("click", m.functions.handleMenuIconClick);
        m.elements.newModuleButton.addEventListener("click", m.functions.addModule);
        m.elements.newAdButton.addEventListener("click", m.functions.addAd);
    };
    return m;
})(mock__main);
/******************************************************************
	Drag and drop/sortable functionality - from sortable.min.js
******************************************************************/
(function(m) {
    m.sortable = {};
    m.sortable.init = function() {
        Sortable.create(m.elements.content, {
            animation: 150
        });
        Sortable.create(m.elements.all, {
            animation: 150,
            handle: ".main-handle"
        });
    };
    return m;
})(mock__main);
/******************************************************************
	Start Up
******************************************************************/
(function(m) {
    m.events.init();
    m.sortable.init();
})(mock__main);