// list.js
// (C) Leo C. Stein (leo.stein@gmail.com)
// 2013
//
// Part of the arXiv-keys extension
//
// This work is licensed as Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)
// For full details see http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US


//////////////////////////////////////////////////////////////////////
// /list/ specific code
//////////////////////////////////////////////////////////////////////

function curPageElement() {
  return document.getElementsByTagName("small")[0]
    .getElementsByTagName("b")[0];
};

function prevPageElement() {
  return curPageElement().previousElementSibling;
};

function nextPageElement() {
  return curPageElement().nextElementSibling;
};

function goPrevPage() {
  arXivKeys.followLinkEl(prevPageElement());
};

function goNextPage() {
  arXivKeys.followLinkEl(nextPageElement());
};

////////////////////////////////////////////////////////////

  // Install key handlers
  arXivKeys.keyMap["PREVPAGE"].act = goPrevPage;
  arXivKeys.keyMap["NEXTPAGE"].act = goNextPage;
