'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('claimpassportpayment', {
			url: '/claimpassportpayment/:id',
			templateUrl: 'modules/users/views/claimpassportpayment.client.view.html'
		}).
		state('mypassports', {
			url: '/mypassports',
			templateUrl: 'modules/users/views/mypassports.client.view.html'
		}).
		state('claimdlpayment', {
			url: '/claimdlpayment/:id',
			templateUrl: 'modules/users/views/claimdlpayment.client.view.html'
		}).
		state('mydls', {
			url: '/mydls',
			templateUrl: 'modules/users/views/mydls.client.view.html'
		}).
		state('claimcertificatepayment', {
			url: '/claimcertificatepayment/:id',
			templateUrl: 'modules/users/views/claimcertificatepayment.client.view.html'
		}).
		state('mycertificates', {
			url: '/mycertificates',
			templateUrl: 'modules/users/views/mycertificates.client.view.html'
		}).
		state('claimnhifpayment', {
			url: '/claimnhifpayment/:id',
			templateUrl: 'modules/users/views/claimnhifpayment.client.view.html'
		}).
		state('mynhifs', {
			url: '/mynhifs',
			templateUrl: 'modules/users/views/mynhifs.client.view.html'
		}).
		state('claimatmpayment', {
			url: '/claimatmpayment/:id',
			templateUrl: 'modules/users/views/claimatmpayment.client.view.html'
		}).
		state('myatms', {
			url: '/myatms',
			templateUrl: 'modules/users/views/myatms.client.view.html'
		}).
		state('claimstaffidpayment', {
			url: '/claimstaffidpayment/:id',
			templateUrl: 'modules/users/views/claimstaffidpayment.client.view.html'
		}).
		state('mystaffids', {
			url: '/mystaffids',
			templateUrl: 'modules/users/views/mystaffids.client.view.html'
		}).
		state('claimstudentidpayment', {
			url: '/claimstudentidpayment/:id',
			templateUrl: 'modules/users/views/claimstudentidpayment.client.view.html'
		}).
		state('mystudentids', {
			url: '/mystudentids',
			templateUrl: 'modules/users/views/mystudentids.client.view.html'
		}).
		state('claimpayment', {
			url: '/claimpayment/:id',
			templateUrl: 'modules/users/views/claimpayment.client.view.html'
		}).
		state('myids', {
			url: '/myids',
			templateUrl: 'modules/users/views/myids.client.view.html'
		}).
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);