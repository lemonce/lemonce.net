'use strict';

hexo.extend.helper.register('url_for_lang', function(path){
  // lang will be en or zh-cn, etc.
  var lang = this.page.lang;
  // path will be normalized
  var url = this.url_for(path);

  if (lang !== 'en' && url[0] === '/') url = '/' + lang + url;

  return url;
});

hexo.extend.helper.register('title_for', function () {
  var pageTitle = this.page.title;
  var siteTitle = this.config.title;
  var siteSurfixPos = siteTitle.indexOf('-');

  if (pageTitle) {
    return pageTitle + ' ' + siteTitle.substr(siteSurfixPos);
  }

  return siteTitle;
});
