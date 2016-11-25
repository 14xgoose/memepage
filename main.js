function _GET(addr) {
	addr = decodeURIComponent(addr.slice(addr.indexOf('?')+1)).split('&');
	var params = {};
	for (var i=0; i<addr.length; i++) {
		var vals = addr[i].split('=');
		params[vals[0]] = vals[1];
	}
	return params;
}

var params = _GET(document.location.toString());

var app = new Vue({
  el: '#app',
  data: {
    name: params['name'],
    picture: params['photo'],
    primaryColor: params['color1'],
    secondaryColor: params['color2']
  }
})

/*name: 'FatalEagle',
picture: 'http://puu.sh/su19X/dd3704cadb.jpg',
primaryColor: 'yellow',
secondaryColor: 'black'*/