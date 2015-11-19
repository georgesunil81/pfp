// Application module
var app = angular.module('pfp', ['ui.router', 'firebase']);

//alert("app.js called");
/*app.constant('fb', {
    url: 'https://pfp.firebaseio.com/',
});*/

app.config(function($urlRouterProvider, $stateProvider) {

	//alert("config called");

	$stateProvider
		.state('income-accounts', {
			url: '/income-accounts',
			templateUrl: '/templates/income-accounts.html',
			controller: 'IncomeAccountsCtrl',
			resolve: {
				incomeAccountsRef: function(incomeAccountsService) {
					return incomeAccountsService.getIncomeAccounts();
				}
			}
		})
		.state('expense-accounts', {
			url: '/expense-accounts',
			templateUrl: '/templates/expense-accounts.html',
			controller: 'ExpenseAccountsCtrl',
			resolve: {
				expenseAccountsRef: function(expenseAccountsService) {
					return expenseAccountsService.getExpenseAccounts();
				}
			}
		})
		.state('credit-accounts', {
			url: '/credit-accounts',
			templateUrl: '/templates/credit-accounts.html',
			controller: 'CreditAccountsCtrl',
			
		})
		.state('bank-accounts', {
			url: '/bank-accounts',
			templateUrl: '/templates/bank-accounts.html',
			controller: 'BankAccountsCtrl',
			
		})
		.state('savings-goal', {
			url: '/savings-goal',
			templateUrl: '/templates/savings-goal.html',
			controller: 'SavingsGoalCtrl',
			
		})
		.state('transactions', {
			url: '/transactions',
			templateUrl: '/templates/transactions.html',
			controller: 'TransactionsCtrl',
			
		})

	$urlRouterProvider.otherwise('/income-accounts');
	
});

