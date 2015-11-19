angular.module('pfp').service('incomeAccountsService', function() {

	this.getIncomeAccounts = function() {
		return new Firebase("https://pfp.firebaseio.com/IncomeAccounts");
	}
})