'use strict';

angular.module('github-open-issues', [])
    .controller('githubController', ['$scope', '$http', function($scope, $http){

        // get the current dateTime
        var todayDateTime = moment.utc().local().format('LLLL');

        // calculating 24hrs below from current dateTime
        var yesterdaysDateTime = moment(todayDateTime).add(-1440,'minutes').local().format('LLLL');

        // calculating 7days below from current dateTime
        var oneWeekBeforeDateTime = moment(todayDateTime).add(-10080,'minutes').local().format('LLLL');
        $scope.showDiv = false;


        /**
         * @function getIssuesCount
         *
         * @param githubLink
         * get the count of issues in differeent scenarios
         */

        $scope.getIssuesCount = function(githubUrl) {

            // Arrays to store list of issues
            $scope.issuesList = [];
            $scope.issuesCreatedIn24Hrs =[];
            $scope.issuesCreatedIn7Days = [];
            $scope.issuesCreatedBefore7Days = [];

            var url = githubUrl.split('/');
            var userName = url[3];
            var repo = url[4];
            $scope.userName = userName;
            $http({
                "method": 'GET',
                "headers": {
                    "User-Agent": "request",
                    "Accept": "application/vnd.github.symmetra-preview+json"
                },
                "url": 'https://api.github.com/repos/'+userName+'/'+repo+'/issues'
            }).then(function(response) {
                    $scope.showDiv = true;
                    $scope.isError = false;
                    $scope.issuesList = response.data;
                    angular.forEach(response.data, function(data){
                        var issueCreatedDateTime = moment.utc(data.created_at).local().format('LLLL');
                        var isIssueCreatedIn24hrs = moment(issueCreatedDateTime).isAfter(yesterdaysDateTime);
                        var isIsuesCreatedIn7Days = moment(issueCreatedDateTime).isAfter(oneWeekBeforeDateTime);

                        //Condition to check the date of issue created is with in 24 hrs
                        if(isIssueCreatedIn24hrs){
                            $scope.issuesCreatedIn24Hrs.push(data);
                        }

                        //Condition to check the date of issue created is before 24 hrs and within 7days
                        if(!isIssueCreatedIn24hrs && isIsuesCreatedIn7Days){
                            $scope.issuesCreatedIn7Days.push(data);
                        }

                        //Condition to check the date of issue created is before 7days
                        if(!isIsuesCreatedIn7Days){
                            $scope.issuesCreatedBefore7Days.push(data);
                        }
                    });
                }, function(err) {
                    $scope.showDiv = false;
                    $scope.issuesList = [];
                    $scope.isError = true;
                    console.log(err,'err')
                });
        }

    }])
