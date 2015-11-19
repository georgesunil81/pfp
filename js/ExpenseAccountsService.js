angular.module('pfp').service('expenseAccountsService', function() {

	this.getExpenseAccounts = function() {
		return new Firebase("https://pfp.firebaseio.com/ExpenseAccounts");
	}

})