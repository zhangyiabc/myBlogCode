let routeTitle = '',
  siteTitle = '';

function setTitle() {
  let title = ''
  if (!routeTitle && !siteTitle) {
    //两个都没有值
    title = "loading"
  } else if (routeTitle && !siteTitle) {
    title = routeTitle;
  } else if (!routeTitle && siteTitle) {
    title = siteTitle
  } else {
    title = `${routeTitle}-${siteTitle}`
  }
  document.title = title
}

export default {
  setRouteTitle(title) {
    routeTitle = title;
    setTitle();
  },
  setSiteTitle(title) {
    siteTitle = title;
    setTitle();

  }
}