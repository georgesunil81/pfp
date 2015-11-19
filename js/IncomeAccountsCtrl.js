angular.module('pfp').controller('IncomeAccountsCtrl', function($scope, incomeAccountsRef, $firebaseArray, $firebaseObject) {

	$scope.incomeAccounts = $firebaseArray(incomeAccountsRef);

	$scope.incomeAccounts.$loaded().then(function (incomeAccounts) {
      console.log("incomeAccounts  fdf--->", typeof(incomeAccounts), incomeAccounts);


    var arr = [];
    var chartArr = [];

    for (var i = 0; i < incomeAccounts.length; i++) {
        console.log(incomeAccounts[i].IncomeAccountName, incomeAccounts[i].IncomeAmount);

        arr.push({
          IncomeAccountName: incomeAccounts[i].IncomeAccountName,
          IncomeAmount: incomeAccounts[i].IncomeAmount,
        });

        chartArr.push([incomeAccounts[i].IncomeAccountName, incomeAccounts[i].IncomeAmount]);
    }

    console.log("Array ====> ", arr);
    console.log("chartArr ====> ", chartArr);


	var mydata1 = arr;

	$("#grid").jqGrid({ //set grid id
		data: mydata1, //insert data from the data object we created above
		datatype: 'local',
		width: 500, //specify width; optional
		colNames:['Income Account Name','Income Amount'], //define column names
		colModel:[
			{name:'IncomeAccountName', index:'IncomeAccountName', key: true, width:150},
			{name:'IncomeAmount', index:'IncomeAmount', width:50}
		], //define column models
		pager: '#pager', //set pager div id
		sortname: 'IncomeAccountName', //the column according to which data is to be sorted; optional
		viewrecords: true, //if true, displays the total number of records, etc. as: "View X to Y out of Z” optional
		sortorder: "asc", //sort order; optional
		caption:"Household Income Accounts" //title of grid
	});
			
	$.jqplot('chartdiv', [chartArr], {
        gridPadding: {top:0, bottom:38, left:0, right:0},
        seriesDefaults:{
            renderer:$.jqplot.PieRenderer, 
            trendline:{ show:false }, 
            rendererOptions: { padding: 8, showDataLabels: true }
        },
        legend:{
            show:true, 
            placement: 'outside', 
            rendererOptions: {
     	       numberRows: 1
        	}, 
        	location:'s',
        	marginTop: '15px'
    	}       
   }); 

	});

});

