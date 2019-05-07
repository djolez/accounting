'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    moment.updateLocale('sr', {
      week: {
        dow: 1,
      }
    });

    $scope.months = moment.months();
    $scope.selectedMonth = 1;
    var all_data = [];

    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    $scope.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          offset: true,
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'DD'},
            tooltipFormat: 'DD.MMMM',
            unit: 'day',
          },
          ticks: {
            autoSkip: false // TODO: not working
          }
        }]
      },
      elements: {
        line: {
          fill: false
        }
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (t, d) {
            var tooltip =
              $scope.series[t.datasetIndex]
              + ' - '
              + formatNumber(all_data[t.datasetIndex][t.index].ukupno)
              + ' - '
              + moment(all_data[t.datasetIndex][t.index].vreme_prometa).format('dddd');
            return tooltip;
          }
        }
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'black'
        }
      }
    }

    // $scope.options = {
    //   responsive: true,
    //   maintainAspectRatio: false,
    // }

    function getDaysArrayByMonth(month) {
      var daysInMonth = month.daysInMonth();
      var arrDays = [];

      for (var i = 0; i < daysInMonth; i++) {
        var current = month.date(i+1);
        arrDays.push(angular.copy(current));
      }

      return arrDays;
    }

    function generate_labels(month_no) {
      // Hardcoded 2016 because it's a leap year, so you always get 29 days in february
      var month = moment('2016-' + month_no + '-1', 'YYYY-MM-DD');
      $scope.labels = getDaysArrayByMonth(month);
      console.log('generating labels: ', $scope.labels);

    }

    function check_for_missing_values(data) {
      var res = [];
      for(var i = 0; i < data.length; i++) {
        if(!data[i])
          res.push(i);
      }
      return res;
    }

    function fix_missing_values(indices, data_array, full_data_array) {
      // Find one defined day and use it as a model for moment to generate
      // missing values needed to display in chart
      var defined_full_data;
      for(var i = 0; i < full_data_array.length; i++) {
        if(full_data_array[i]) {
          defined_full_data = full_data_array[i];
          break;
        }
      }

      indices.forEach(function(index) {
        console.log('Filling missing value for day ', (index+1));
        data_array[index] = 0;

        full_data_array[index] = {
          'ukupno' : 0,
          'vreme_prometa': moment(defined_full_data['vreme_prometa']).date(index+1)
        };
      });
      return [data_array, full_data_array];
    }

    $scope.getByMonth = function(month) {
      $http.get("http://localhost:5000/month", {'params': {'month': month}})
        .then(function (response) {
            $scope.series = [];
            // $scope.labels = [];
            $scope.data = [];
            all_data = [];

            response.data.forEach(function(r) {
              $scope.series.push(r.year + '');

              var tmp_data = [];
              var tmp_all_data = [];

              r.days.forEach(function(day) {
                // Put value to the correct position in the array (according to the day of the month)
                // console.log('Adding value ' + day.ukupno + ' to position ' + (moment(day.vreme_prometa).date()-1) + ' date ' + day.vreme_prometa);
                tmp_data[moment(day.vreme_prometa).date()-1] = day.ukupno;
                tmp_all_data[moment(day.vreme_prometa).date()-1] = day;
              });
              var missing_indices = check_for_missing_values(tmp_data);
              var result = fix_missing_values(missing_indices, tmp_data, tmp_all_data);

              $scope.data.push(result[0]);
              all_data.push(result[1]);
            });
            $scope.years = [];
            $scope.series.forEach(function(year) {
              $scope.years.push({ 'year': year, 'checked': true });
            });
            generate_labels($scope.selectedMonth);
            console.log('-------------------------------------------------------------------------------')
            console.log('Series: ', $scope.series, $scope.data, $scope.labels);
            console.log('Labels: ', $scope.labels);
            console.log('Data: ', $scope.data);

            return response;
        }, function (response) {
            return response;
        });
    }

    $scope.getDailyAverage = function(month) {
      $http.get("http://localhost:5000/day/average", {'params': {'month': month}})
        .then(function (response) {
            $scope.series = [];
            $scope.data = [];
            var weekdays = moment.weekdays(true);
            $scope.labels = weekdays;

            response.data.forEach(function(r) {
                var dayIndex = weekdays.indexOf(r.dow);
                $scope.data[dayIndex] = r.dnevni_prosek;
            });


            console.log($scope.data, $scope.labels);


            return response;
        }, function (response) {
            return response;
        });
    }

    $scope.toggleYear = function(year){
      $scope.series.forEach(function(s){
        if(year.year === s) {
          // TODO: implement
        }
      });
    };

    function init() {
      $scope.labels = [];
    }

    init();
});
