angular.module('pfp').controller('ExpenseAccountsCtrl', function($scope, expenseAccountsRef, $firebaseArray, $firebaseObject) {

	$scope.expenseAccounts = $firebaseArray(expenseAccountsRef);

	$scope.expenseAccounts.$loaded().then(function (expenseAccounts) {
      	console.log("expenseAccounts --->", typeof(expenseAccounts), expenseAccounts);

      	var arr = [];
      	var chartArr = [];

      	var s1 = [];
      	var ticks = [];

      	for (var i = 0; i < expenseAccounts.length; i++) {
        	console.log(expenseAccounts[i].ExpenseAccountName, expenseAccounts[i].Active, expenseAccounts[i].AverageExpense);

	        arr.push({
	          ExpenseAccountName: expenseAccounts[i].ExpenseAccountName,
	          Active: expenseAccounts[i].Active,
	          AverageExpense: expenseAccounts[i].AverageExpense,
	        });

	        s1.push(expenseAccounts[i].AverageExpense);
			ticks.push(expenseAccounts[i].ExpenseAccountName);
      	}

      	console.log("Array ====> ", arr);
      	console.log("chartArr ====> ", chartArr);

		var mydata1 = arr;

		$("#ExpenseAccountsGrid").jqGrid({ //set grid id
			data: mydata1, //insert data from the data object we created above
			datatype: 'local',
			width: 600, //specify width; optional
			colNames:['Expense Account Name','Active?', 'Average Expense'], //define column names
			colModel:[
			{name:'ExpenseAccountName', index:'ExpenseAccountName', key: true, width:150},
			{name:'Active', index:'Active', width:50},
			{name:'AverageExpense', index:'AverageExpense', width:50},
			], //define column models
			pager: 'ExpenseAccountsPager', //set pager div id
			sortname: 'ExpenseAccountName', //the column according to which data is to be sorted; optional
			viewrecords: true, //if true, displays the total number of records, etc. as: "View X to Y out of Z” optional
			sortorder: "asc", //sort order; optional
			caption:"Expense Accounts" //title of grid
		});
			
        $.jqplot.config.enablePlugins = true;
         
        plot1 = $.jqplot('ExpenseAccountsChart', [s1], {
            // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
            animate: !$.jqplot.use_excanvas,
            seriesDefaults:{
                renderer:$.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks
                }
            },
            highlighter: { show: false }
        });
     
        $('#ExpenseAccountsChart').bind('jqplotDataClick', 
            function (ev, seriesIndex, pointIndex, data) {
                $('#info1').html('series: '+seriesIndex+', point: '+pointIndex+', data: '+data);
            }
        );

	});

});

