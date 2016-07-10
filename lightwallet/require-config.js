'use strict';

var pathArray = location.pathname.split("/");
pathArray.splice(pathArray.length-1, 1)
pathArray.push("");
var filepath = pathArray.join("/");

require.config({
    packages: [
        {
            name: 'crypto-js',
            location: '/lightwallet/ext/crypto-js-3.1.2/',
            main: 'index'
        }
    ],
	paths: {
		jquery: '/lightwallet/ext/jquery-2.2.4.min',
		bootstrap: '/lightwallet/ext/bootstrap-3.3.6/bootstrap.min',
		angular: '/lightwallet/ext/angular-1.4.12.min',
		angularAnimate: '/lightwallet/ext/angular-animate-1.4.12.min',
		angularRoute: '/lightwallet/ext/angular-route-1.4.12.min',
		angularSanitize: '/lightwallet/ext/angular-sanitize-1.4.12.min',
		angularUib: '/lightwallet/ext/ui-bootstrap-0.14.3.min',
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularAnimate': ['angular'],
		'angularSanitize': ['angular'],
		'angularUib': ['angular', 'bootstrap'],
		'bootstrap' : ['jquery'],
		'crypto-js/core': {'exports': 'CryptoJS'},
		'crypto-js/x64-core': {'exports': 'CryptoJS.x64', deps:['crypto-js/core']},
		'crypto-js/ripemd160' : ['crypto-js/x64-core'],
		'crypto-js/sha256' : ['crypto-js/x64-core'],
		'crypto-js/sha3' : ['crypto-js/x64-core'],
		'crypto-js/hmac' : ['crypto-js/sha256'],
		'crypto-js/pbkdf2' : ['crypto-js/x64-core', 'crypto-js/hmac'],

		'crypto-js/md5' : ['crypto-js/x64-core'],
		'crypto-js/evpkdf': ['crypto-js/md5'],
		'crypto-js/cipher-core': ['crypto-js/evpkdf'],
		'crypto-js/aes' : ['crypto-js/cipher-core'],

		'nacl-fast': {'exports': 'nacl'},
		'utils/xbbcode': {'exports': 'XBBCODE'}
	},
	priority: [
		"angular"
	],
	baseUrl: filepath,
});

require([
    'jquery',
	'angular',
	'walletApp',
	'bootstrap',
	'templates'
	], function($, angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			angular.bootstrap(document, ['walletApp']);
		});
	}
);
