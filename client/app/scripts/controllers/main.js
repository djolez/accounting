'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.years = [2017, 2018, 2019];
    $scope.selectedYear = 2017;

    $scope.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'time',
          position: 'bottom',
          time: {
            displayFormats: {'day': 'DD-MMM'},
            tooltipFormat: 'DD-MMM-YYYY (dddd)',
            unit: 'day',
           }
        }]
      }
    }
    $scope.series = ['Series A'];

    var dates = [
    '22.6.2017',
    '23.6.2017',
    '24.6.2017',
    '25.6.2017',
    '26.6.2017',
    '27.6.2017',
    '28.6.2017',
    '29.6.2017',
    '30.6.2017',
    '1.7.2017',
    '2.7.2017',
    '3.7.2017',
    '4.7.2017',
    '5.7.2017',
    '6.7.2017',
    '7.7.2017',
    '8.7.2017',
    '9.7.2017',
    '10.7.2017',
    '11.7.2017',
    '12.7.2017',
    '13.7.2017',
    '14.7.2017',
    '15.7.2017',
    '16.7.2017',
    '17.7.2017',
    '18.7.2017',
    '19.7.2017',
    '20.7.2017',
    '21.7.2017',
    '22.7.2017',
    '23.7.2017',
    '24.7.2017',
    '25.7.2017',
    '26.7.2017',
    '27.7.2017',
    '28.7.2017',
    '29.7.2017',
    '30.7.2017',
    '31.7.2017',
    '1.8.2017',
    '2.8.2017',
    '3.8.2017',
    '4.8.2017',
    '5.8.2017',
    '6.8.2017',
    '7.8.2017',
    '8.8.2017',
    '9.8.2017',
    '10.8.2017',
    '11.8.2017',
    '12.8.2017',
    '13.8.2017',
    '14.8.2017',
    '15.8.2017',
    '16.8.2017',
    '17.8.2017',
    '18.8.2017',
    '19.8.2017',
    '20.8.2017',
    '21.8.2017',
    '22.8.2017',
    '23.8.2017',
    '24.8.2017',
    '25.8.2017',
    '26.8.2017',
    '27.8.2017',
    '28.8.2017',
    '29.8.2017',
    '30.8.2017',
    '31.8.2017',
    '1.9.2017',
    '2.9.2017',
    '3.9.2017',
    '4.9.2017',
    '5.9.2017',
    '6.9.2017',
    '7.9.2017',
    '8.9.2017',
    '9.9.2017',
    '10.9.2017',
    '11.9.2017',
    '12.9.2017',
    '13.9.2017',
    '14.9.2017',
    '15.9.2017',
    '16.9.2017',
    '17.9.2017',
    '18.9.2017',
    '19.9.2017',
    '20.9.2017',
    '21.9.2017',
    '22.9.2017',
    '23.9.2017',
    '24.9.2017',
    '25.9.2017',
    '26.9.2017',
    '27.9.2017',
    '28.9.2017',
    '29.9.2017',
    '30.9.2017',
    '1.10.2017',
    '2.10.2017',
    '3.10.2017',
    '4.10.2017',
    '5.10.2017',
    '6.10.2017',
    '7.10.2017',
    '8.10.2017',
    '9.10.2017',
    '10.10.2017',
    '11.10.2017',
    '12.10.2017',
    '13.10.2017',
    '14.10.2017',
    '15.10.2017',
    '16.10.2017',
    '17.10.2017',
    '18.10.2017',
    '19.10.2017',
    '20.10.2017',
    '21.10.2017',
    '22.10.2017',
    '23.10.2017',
    '24.10.2017',
    '25.10.2017',
    '26.10.2017',
    '27.10.2017',
    '28.10.2017',
    '29.10.2017',
    '30.10.2017',
    '31.10.2017',
    '1.11.2017',
    '2.11.2017',
    '3.11.2017',
    '4.11.2017',
    '5.11.2017',
    '6.11.2017',
    '7.11.2017',
    '8.11.2017',
    '9.11.2017',
    '10.11.2017',
    '11.11.2017',
    '12.11.2017',
    '13.11.2017',
    '14.11.2017',
    '15.11.2017',
    '16.11.2017',
    '17.11.2017',
    '18.11.2017',
    '19.11.2017',
    '20.11.2017',
    '21.11.2017',
    '22.11.2017',
    '23.11.2017',
    '24.11.2017',
    '25.11.2017',
    '26.11.2017',
    '27.11.2017',
    '28.11.2017',
    '29.11.2017',
    '30.11.2017',
    '1.12.2017',
    '2.12.2017',
    '3.12.2017',
    '4.12.2017',
    '5.12.2017',
    '6.12.2017',
    '7.12.2017',
    '8.12.2017',
    '9.12.2017',
    '10.12.2017',
    '11.12.2017',
    '12.12.2017',
    '13.12.2017',
    '14.12.2017',
    '15.12.2017',
    '16.12.2017',
    '17.12.2017',
    '18.12.2017',
    '19.12.2017',
    '20.12.2017',
    '21.12.2017',
    '22.12.2017',
    '23.12.2017',
    '24.12.2017',
    '25.12.2017',
    '26.12.2017',
    '27.12.2017',
    '28.12.2017',
    '29.12.2017',
    '30.12.2017',
    '31.12.2017',
    '1.1.2018',
    '2.1.2018',
    '3.1.2018',
    '4.1.2018',
    '5.1.2018',
    '6.1.2018',
    '7.1.2018',
    '8.1.2018',
    '9.1.2018',
    '10.1.2018',
    '11.1.2018',
    '12.1.2018',
    '13.1.2018',
    '14.1.2018',
    '15.1.2018',
    '16.1.2018',
    '17.1.2018',
    '18.1.2018',
    '19.1.2018',
    '20.1.2018',
    '21.1.2018',
    '22.1.2018',
    '23.1.2018',
    '24.1.2018',
    '25.1.2018',
    '26.1.2018',
    '27.1.2018',
    '28.1.2018',
    '29.1.2018',
    '30.1.2018',
    '31.1.2018',
    '1.2.2018',
    '2.2.2018',
    '3.2.2018',
    '4.2.2018',
    '5.2.2018',
    '6.2.2018',
    '7.2.2018',
    '8.2.2018',
    '9.2.2018',
    '10.2.2018',
    '11.2.2018',
    '12.2.2018',
    '13.2.2018',
    '14.2.2018',
    '15.2.2018',
    '16.2.2018',
    '17.2.2018',
    '18.2.2018',
    '19.2.2018',
    '20.2.2018',
    '21.2.2018',
    '22.2.2018',
    '23.2.2018',
    '24.2.2018',
    '25.2.2018',
    '26.2.2018',
    '27.2.2018',
    '28.2.2018',
    '1.3.2018',
    '2.3.2018',
    '3.3.2018',
    '4.3.2018',
    '5.3.2018',
    '6.3.2018',
    '7.3.2018',
    '8.3.2018',
    '9.3.2018',
    '10.3.2018',
    '11.3.2018',
    '12.3.2018',
    '13.3.2018',
    '14.3.2018',
    '15.3.2018',
    '16.3.2018',
    '17.3.2018',
    '18.3.2018',
    '19.3.2018',
    '20.3.2018',
    '21.3.2018',
    '22.3.2018',
    '23.3.2018',
    '24.3.2018',
    '25.3.2018',
    '26.3.2018',
    '27.3.2018',
    '28.3.2018',
    '29.3.2018',
    '30.3.2018',
    '31.3.2018',
    '1.4.2018',
    '2.4.2018',
    '3.4.2018',
    '4.4.2018',
    '5.4.2018',
    '6.4.2018',
    '7.4.2018',
    '8.4.2018',
    '14.4.2018',
    '15.4.2018',
    '16.4.2018',
    '17.4.2018',
    '18.4.2018',
    '19.4.2018',
    '20.4.2018',
    '21.4.2018',
    '22.4.2018',
    '23.4.2018',
    '24.4.2018',
    '25.4.2018',
    '26.4.2018',
    '27.4.2018',
    '28.4.2018',
    '29.4.2018',
    '30.4.2018',
    '1.5.2018',
    '2.5.2018',
    '3.5.2018',
    '4.5.2018',
    '5.5.2018',
    '6.5.2018',
    '7.5.2018',
    '8.5.2018',
    '9.5.2018',
    '10.5.2018',
    '11.5.2018',
    '12.5.2018',
    '13.5.2018',
    '14.5.2018',
    '15.5.2018',
    '16.5.2018',
    '17.5.2018',
    '18.5.2018',
    '19.5.2018',
    '20.5.2018',
    '21.5.2018',
    '22.5.2018',
    '23.5.2018',
    '24.5.2018',
    '25.5.2018',
    '26.5.2018',
    '27.5.2018',
    '28.5.2018',
    '29.5.2018',
    '30.5.2018',
    '31.5.2018',
    '1.6.2018',
    '2.6.2018',
    '3.6.2018',
    '4.6.2018',
    '5.6.2018',
    '6.6.2018',
    '7.6.2018',
    '8.6.2018',
    '9.6.2018',
    '10.6.2018',
    '11.6.2018',
    '12.6.2018',
    '13.6.2018',
    '14.6.2018',
    '15.6.2018',
    '16.6.2018',
    '17.6.2018',
    '18.6.2018',
    '19.6.2018',
    '20.6.2018',
    '21.6.2018',
    '22.6.2018',
    '23.6.2018',
    '24.6.2018',
    '25.6.2018',
    '26.6.2018',
    '27.6.2018',
    '28.6.2018',
    '29.6.2018',
    '30.6.2018',
    '1.7.2018',
    '2.7.2018',
    '3.7.2018',
    '4.7.2018',
    '5.7.2018',
    '6.7.2018',
    '7.7.2018',
    '8.7.2018',
    '9.7.2018',
    '10.7.2018',
    '11.7.2018',
    '12.7.2018',
    '13.7.2018',
    '14.7.2018',
    '15.7.2018',
    '16.7.2018',
    '17.7.2018',
    '18.7.2018',
    '19.7.2018',
    '20.7.2018',
    '21.7.2018',
    '22.7.2018',
    '23.7.2018',
    '24.7.2018',
    '25.7.2018',
    '26.7.2018',
    '27.7.2018',
    '28.7.2018',
    '29.7.2018',
    '30.7.2018',
    '31.7.2018',
    '1.8.2018',
    '2.8.2018',
    '3.8.2018',
    '4.8.2018',
    '5.8.2018',
    '6.8.2018',
    '7.8.2018',
    '8.8.2018',
    '9.8.2018',
    '10.8.2018',
    '11.8.2018',
    '12.8.2018',
    '13.8.2018',
    '14.8.2018',
    '15.8.2018',
    '16.8.2018',
    '17.8.2018',
    '18.8.2018',
    '19.8.2018',
    '20.8.2018',
    '21.8.2018',
    '22.8.2018',
    '23.8.2018',
    '24.8.2018',
    '25.8.2018',
    '26.8.2018',
    '27.8.2018',
    '28.8.2018',
    '29.8.2018',
    '30.8.2018',
    '31.8.2018',
    '1.9.2018',
    '2.9.2018',
    '3.9.2018',
    '4.9.2018',
    '5.9.2018',
    '6.9.2018',
    '7.9.2018',
    '8.9.2018',
    '9.9.2018',
    '10.9.2018',
    '11.9.2018',
    '12.9.2018',
    '13.9.2018',
    '14.9.2018',
    '15.9.2018',
    '16.9.2018',
    '17.9.2018',
    '18.9.2018',
    '19.9.2018',
    '20.9.2018',
    '21.9.2018',
    '22.9.2018',
    '23.9.2018',
    '24.9.2018',
    '25.9.2018',
    '26.9.2018',
    '27.9.2018',
    '28.9.2018',
    '29.9.2018',
    '30.9.2018',
    '1.10.2018',
    '2.10.2018',
    '3.10.2018',
    '4.10.2018',
    '5.10.2018',
    '6.10.2018',
    '7.10.2018',
    '8.10.2018',
    '9.10.2018',
    '10.10.2018',
    '11.10.2018',
    '12.10.2018',
    '13.10.2018',
    '14.10.2018',
    '15.10.2018',
    '16.10.2018',
    '17.10.2018',
    '18.10.2018',
    '19.10.2018',
    '20.10.2018',
    '21.10.2018',
    '22.10.2018',
    '23.10.2018',
    '24.10.2018',
    '25.10.2018',
    '26.10.2018',
    '27.10.2018',
    '28.10.2018',
    '29.10.2018',
    '30.10.2018',
    '31.10.2018',
    '1.11.2018',
    '2.11.2018',
    '3.11.2018',
    '4.11.2018',
    '5.11.2018',
    '6.11.2018',
    '7.11.2018',
    '8.11.2018',
    '9.11.2018',
    '10.11.2018',
    '11.11.2018',
    '12.11.2018',
    '13.11.2018',
    '14.11.2018',
    '15.11.2018',
    '16.11.2018',
    '17.11.2018',
    '18.11.2018',
    '19.11.2018',
    '20.11.2018',
    '21.11.2018',
    '22.11.2018',
    '23.11.2018',
    '24.11.2018',
    '25.11.2018',
    '26.11.2018',
    '27.11.2018',
    '28.11.2018',
    '29.11.2018',
    '30.11.2018',
    '1.12.2018',
    '2.12.2018',
    '3.12.2018',
    '4.12.2018',
    '5.12.2018',
    '6.12.2018',
    '7.12.2018',
    '8.12.2018',
    '9.12.2018',
    '10.12.2018',
    '11.12.2018',
    '12.12.2018',
    '13.12.2018',
    '14.12.2018',
    '15.12.2018',
    '16.12.2018',
    '17.12.2018',
    '18.12.2018',
    '19.12.2018',
    '20.12.2018',
    '21.12.2018',
    '22.12.2018',
    '23.12.2018',
    '24.12.2018',
    '25.12.2018',
    '26.12.2018',
    '27.12.2018',
    '28.12.2018',
    '29.12.2018',
    '30.12.2018',
    '31.12.2018',
    '1.1.2019',
    '2.1.2019',
    '3.1.2019',
    '4.1.2019',
    '5.1.2019',
    '6.1.2019',
    '7.1.2019',
    '8.1.2019',
    '9.1.2019',
    '10.1.2019',
    '11.1.2019',
    '12.1.2019',
    '13.1.2019',
    '14.1.2019',
    '15.1.2019',
    '16.1.2019',
    '17.1.2019',
    '18.1.2019',
    '19.1.2019',
    '20.1.2019',
    '21.1.2019',
    '22.1.2019',
    '23.1.2019',
    '24.1.2019',
    '25.1.2019',
    '26.1.2019',
    '27.1.2019',
    '28.1.2019',
    '29.1.2019',
    '30.1.2019',
    '31.1.2019',
    '1.2.2019',
    '2.2.2019',
    '3.2.2019',
    '4.2.2019',
    '5.2.2019',
    '6.2.2019',
    '7.2.2019',
    '8.2.2019',
    '9.2.2019',
    '10.2.2019',
    '11.2.2019',
    '12.2.2019',
    '13.2.2019',
    '14.2.2019',
    '15.2.2019',
    '16.2.2019',
    '17.2.2019',
    '18.2.2019',
    '19.2.2019',
    '20.2.2019',
    '21.2.2019',
    '22.2.2019',
    '23.2.2019',
    '24.2.2019',
    '25.2.2019',
    '26.2.2019',
    '27.2.2019',
    '28.2.2019',
    '1.3.2019',
    '2.3.2019',
    '3.3.2019',
    '4.3.2019',
    '5.3.2019',
    '6.3.2019',
    '7.3.2019',
    '8.3.2019',
    '9.3.2019',
    '10.3.2019',
    '11.3.2019',
    '12.3.2019',
    '13.3.2019',
    '14.3.2019',
    '15.3.2019',
    '16.3.2019',
    '17.3.2019',
    '18.3.2019',
    '19.3.2019',
    '20.3.2019',
    '21.3.2019',
    '22.3.2019',
    '23.3.2019',
    '24.3.2019',
    '25.3.2019',
    '26.3.2019',
    '27.3.2019',
    '28.3.2019',
    '29.3.2019',
    '30.3.2019',
    '31.3.2019',
    '1.4.2019',
    '2.4.2019',
    '3.4.2019',
    '4.4.2019',
    '5.4.2019',
    '6.4.2019',
    '7.4.2019',
    '8.4.2019',
    '9.4.2019',
    '10.4.2019',
    '11.4.2019',
    '12.4.2019',
    '13.4.2019',
    '14.4.2019',
    '15.4.2019',
    '16.4.2019',
    '17.4.2019',
    '18.4.2019',
    '19.4.2019',
    '20.4.2019',
    '21.4.2019',
    '22.4.2019',
    '23.4.2019',
    '24.4.2019',
    '25.4.2019',
    '26.4.2019',
    '27.4.2019',
    '29.4.2019',
    '30.4.2019',
];

    var values = [
        197848,
        163286,
        184757,
        195746,
        134087,
        124731,
        153919,
        137089,
        193835,
        195234,
        95604,
        163602,
        139188,
        151688,
        115729,
        118997,
        152661,
        101407,
        93734,
        103583,
        106284,
        108481,
        216788,
        90138,
        128200,
        102643,
        128874,
        134216,
        96501,
        195389,
        158318,
        99961,
        162697,
        167016,
        197250,
        173716,
        208916,
        274078,
        120167,
        116348,
        122934,
        225846,
        176640,
        137107,
        135264,
        144774,
        124128,
        133150,
        144272,
        151646,
        143738,
        205534,
        118079,
        84602,
        162222,
        116802,
        193051,
        162165,
        222551,
        94934,
        121084,
        133696,
        95309,
        126158,
        174248,
        142315,
        56635,
        106917,
        130841,
        145029,
        87656,
        133415,
        243515,
        100636,
        116143,
        101825,
        89101,
        136447,
        171742,
        113056,
        108850,
        66718,
        109009,
        112028.5,
        87571,
        124140,
        177123,
        111351,
        90376,
        139559,
        79080,
        133944,
        204388,
        190387,
        110349,
        101117,
        104517,
        100498,
        113055,
        144234,
        192114,
        81711,
        79312,
        80573,
        96383,
        162310,
        125979,
        188045,
        102525,
        95763,
        97061,
        115800,
        174439,
        186611,
        195083,
        127669,
        84619,
        119204,
        123747,
        155945,
        215246,
        279163,
        81838,
        111023,
        151755,
        166530,
        116295,
        130448,
        202552,
        85986,
        50819,
        119847,
        108538,
        88927,
        204498,
        159571,
        101319,
        96687,
        69697,
        87929,
        88230,
        197733,
        163931,
        93372,
        57739,
        132114,
        112935,
        109147,
        154986,
        166337,
        98356,
        71434,
        81790,
        70415,
        70249,
        119490,
        176876,
        121498,
        103762,
        45198,
        119706,
        120528,
        132861,
        163681.5,
        78396,
        74626,
        63991,
        100869,
        131584,
        164508,
        84061,
        87323,
        113875,
        92899,
        92608,
        97871,
        234118,
        153686,
        113650,
        43091,
        14270,
        90700,
        86918,
        168958,
        179150,
        82307,
        96433,
        144108,
        197832,
        205659,
        210110,
        243005,
        69068,
        128767,
        127819,
        96520.5,
        153028,
        168813,
        66165,
        134885,
        82136,
        81826,
        124523,
        132484,
        140069,
        255124.5,
        54900,
        73661,
        90561,
        101970,
        131210,
        107017,
        80266,
        105449,
        148203,
        97060,
        174018,
        147639,
        170510,
        253115,
        71900,
        57759,
        69251,
        131767,
        109129,
        147405,
        139044.5,
        66497,
        59597,
        84666,
        70454,
        64196,
        161646,
        206579,
        143764.5,
        71936,
        49867,
        155574,
        95637,
        125822,
        152273,
        76389,
        57606,
        96421,
        94068,
        124385,
        141081,
        158551,
        60105,
        55449,
        52371,
        71131,
        77829,
        73047,
        103490,
        118592,
        64806,
        72280,
        92537,
        232095,
        203364.5,
        179911,
        90914,
        77723,
        144735,
        85135,
        127635,
        171831.5,
        221010,
        69907,
        46321,
        68280,
        85435,
        91425,
        98502,
        169091,
        68118,
        93095,
        112878,
        65548,
        248749,
        153738,
        157478,
        140271,
        90269,
        74889,
        78165,
        181508,
        172960,
        237198,
        62302,
        76982,
        97362,
        90280.5,
        70920,
        119418,
        99081,
        111627.5,
        131231,
        84229.25,
        75124,
        102052,
        56080,
        261023.5,
        261463,
        147843,
        154455,
        140366.5,
        170221,
        88756,
        73857,
        136916.4,
        141668,
        82796,
        67332.8,
        172810,
        99153,
        253228,
        233337,
        146374,
        113644,
        66528,
        119361,
        97291,
        70089,
        116364,
        262188,
        117979.5,
        124326,
        94746,
        87005,
        206900,
        152499,
        151579,
        83969,
        84319,
        102918,
        118047,
        88830,
        219951,
        168339,
        85774,
        53026,
        122117,
        142847,
        66613,
        167563,
        116941,
        96395,
        68204,
        85228,
        186389,
        171201,
        231204,
        212628,
        87230,
        112844,
        144871,
        68378,
        110877.5,
        136626,
        237146,
        91519,
        78177,
        108739,
        132447,
        191800.5,
        276289,
        409024,
        210118,
        147812,
        115374,
        168109,
        127280.5,
        166660,
        164054,
        100381,
        130949,
        178429,
        90249,
        114146,
        221541,
        93303,
        92055,
        100519,
        112186,
        86505,
        118967,
        168210,
        180025,
        145466.5,
        113558,
        204402,
        133790,
        158704,
        164480,
        224155,
        188030,
        92271,
        148396.5,
        170423,
        155064,
        231390,
        232833,
        168881,
        163295.5,
        194317,
        159777,
        199652,
        199862,
        243103,
        143707,
        152280,
        123353,
        213103,
        189502,
        172654,
        167683,
        167479,
        88475,
        119711,
        139632,
        124282,
        181593,
        206620.5,
        133808,
        59381.5,
        161219,
        143875,
        150093,
        161516,
        205810,
        140658,
        93482,
        126793,
        131652,
        127728,
        154562,
        277411,
        118419.5,
        103561,
        113058,
        100215.7,
        117746,
        124743,
        190040,
        114235,
        90172,
        137102,
        89121,
        164815,
        140884,
        145942,
        196969,
        120417,
        158800,
        120946,
        144022,
        169742,
        201478,
        160047,
        127003,
        117662,
        162231,
        180787,
        195166,
        189863,
        122866,
        112567,
        140816,
        104193.5,
        98240,
        163931.5,
        198964,
        224135,
        119093,
        121280,
        182951,
        153147,
        192507,
        206205,
        121780,
        152542,
        124070,
        165229,
        149792.5,
        160244,
        209847,
        106861,
        55148,
        88114,
        53651,
        155767,
        220812,
        247603,
        122375,
        76831,
        101549,
        92560,
        138547,
        126603.5,
        188810.5,
        114202,
        81466,
        139693,
        127484,
        141323,
        187038,
        206315,
        69267,
        107594,
        110880,
        52903,
        95350,
        119181,
        169921,
        70860,
        135257,
        116860,
        66111,
        158608,
        147941,
        145333,
        78641,
        45529,
        121609,
        103502,
        125226,
        143794.2,
        176937,
        86936.5,
        87721,
        78950,
        82965,
        96205,
        98149,
        166780,
        45651,
        70024,
        81313,
        10884,
        100460,
        142532,
        190441,
        185936,
        132253,
        185882,
        170719,
        232538,
        191614,
        218712,
        146904,
        82348,
        120755,
        140140.5,
        102662,
        179970,
        197011,
        31827,
        138821,
        70552,
        69798,
        94569,
        156010,
        163328.2,
        177760,
        56657,
        122385,
        131994,
        92315,
        127499,
        169134,
        89812,
        76030,
        136748,
        81328,
        91110,
        102336,
        154770,
        223900,
        66510,
        44890,
        67990,
        72693,
        103085,
        200155,
        76246,
        76698,
        107497,
        144756,
        129552,
        141783,
        203306.5,
        96924,
        90520,
        105192,
        175395.5,
        178083,
        144351.5,
        218379,
        87710,
        79385,
        104550,
        131979,
        105525,
        140767,
        150055,
        59393,
        71321,
        107109,
        114314,
        110154,
        133573,
        196062,
        152034,
        104856,
        152446,
        95146,
        162467,
        216048,
        223927,
        110490,
        121240,
        71138,
        123205,
        140129,
        162140,
        228675,
        137245,
        82088,
        111964,
        141296,
        50835,
        100652,
        225820,
        105613,
        86269,
        104463,
        133539,
        153950,
        143412,
        209230,
        89820,
        47613,
        96735,
        141415,
        132527.5,
        139745,
        212017.5,
        78438,
        59380,
        100873,
        124473,
        77637,
        107205,
        144355,
        141953,
        108530,
        125426.5,
        155921.5,
        158415.5,
        136270,
        131958,
        156731,
        150363,
        165156,
        123695,
        84841,
        153339,
        206647,
        122110,
        95236,
    ];

    // $scope.series = [];
    // $scope.labels = [];
    // $scope.values = [];

    $scope.dates = [];
    var dates_model = [];

    function generateData() {
      var data = [];
      var date;

      dates.forEach(function(date_string, i) {
        date = moment(date_string, 'DD.MM.YYYY');
        dates_model.push(date);

        // data.push({'date': moment(date), 'value': $scope.values[i]});
      });
    }
    generateData();
    // $scope.dates = dates_model;
    // $scope.values = values;

    $scope.getYear = function(year) {
      $scope.dates = [];
      $scope.values = [[]];

      dates_model.forEach(function(date, i) {
        if(date.year() === year) {
          $scope.dates.push(angular.copy(date));
          $scope.values[0].push(angular.copy(values[i]));
        }
      });
      console.log($scope.values);
    }
    $scope.getYear($scope.selectedYear);

  });
