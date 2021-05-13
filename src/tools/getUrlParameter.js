const getUrlParameter = (name, url = window.location.href) => {
  const params = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )

  return name ? params[name] : params;
};

export default getUrlParameter;
