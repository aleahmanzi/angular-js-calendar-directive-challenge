angular.module('demo', []);

// your controller and directive code go here

var demo = angular.module('demo', []);
demo.controller('cdtcdt', function($scope){
 $scope.currentDate = new Date();
 $scope.month = $scope.currentDate.getMonth();
 $scope.year = $scope.currentDate.getFullYear();
 $scope.day = $scope.currentDate.getDate();
 $scope.yearList = [];
 $scope.monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 $scope.month_num = $scope.month;
 //console.log($scope.month_num);
//$scope.monthList.indexOf($scope.month);

/// - set variables

$scope.chosenDate = {
  month: $scope.monthList[$scope.month],
  year: $scope.year
}

 $scope.priorYears = $scope.year - 15;
 $scope.afterYears = $scope.year + 15;
  for(var i = $scope.priorYears; i <= $scope.afterYears; i++) {
    $scope.yearList.push(i);
  }
/// - creating the range of years to select from


  $scope.list = CalendarRange.getMonthlyRange(new Date($scope.year, $scope.month));
   //console.log($scope.list);
   //console.log("hi")
 /// - object of calendar information


  $scope.updateDate = function(){
	//console.log($scope.month);
	//console.log($scope.monthList);
	//console.log($scope.year);
	//console.log($scope.monthList.indexOf($scope.month))
  $scope.month_num = $scope.monthList.indexOf($scope.month)
	$scope.list = CalendarRange.getMonthlyRange(new Date($scope.year, $scope.month_num));

  $scope.chosenDate = {
  month: $scope.monthList[$scope.month_num],
  year: $scope.year
  }
	//console.log($scope.list);
  };
 /// - ng-change && get object of selected month/year combo


   $scope.isCurrentMonth = function(month){
    //console.log($scope.month_num + " = " + month);
    return $scope.month_num == month;

 	}
/// - check if any days are not within this month, to shade them
});