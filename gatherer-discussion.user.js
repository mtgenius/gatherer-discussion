// ==UserScript==
// @name         MTG Gatherer Discussion
// @namespace    https://mtgeni.us/gatherer-discussion
// @version      0.1
// @description  Adds Disqus discussion to MTG Gatherer.
// @author       Charles Stover
// @match        http://gatherer.wizards.com/Pages/Card/Discussion.aspx?*multiverseid=*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const posts = document.getElementById('PopularPost');
  let multiverseId = location.search.match(/multiverseid=(\d+)/);
  if (multiverseId === null) {
    return;
  }
  multiverseId = multiverseId[1];

  // Disqus
  posts.innerHTML += '<div id="disqus_thread"></div>';
  const disqus_config = function() {
    this.page.identifier = multiverseId;
    this.page.url = 'http://gatherer.wizards.com/Pages/Card/Discussion.aspx?multiverseid=' + multiverseId;
  };
  const disqusEmbed = document.createElement('script');
  disqusEmbed.setAttribute('data-timestamp', new Date().getTime());
  disqusEmbed.setAttribute('src', 'https://gatherer.disqus.com/embed.js');
  document.body.appendChild(disqusEmbed);
})();
