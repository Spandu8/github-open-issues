## Github Open Issues
-----------------------------------------
Frontend app to get the count of open issues built using Angular JS.

## Dependencies
------------------------------
### UI
* [Angular JS] (https://docs.angularjs.org/guide/bootstrap) - A JavaScript library for building user interfaces


### Dependency Management
* npm - Package manager that installs, publishes and manages node programs.

### System Requirements
* Visual Studio Code  - The text editor Google Chrome - web browser

### Server
* [http-server] - It is a simple, zero-configuration command-line http server.



### Installation
----------------------
Clone the git repository using https or ssh.
```bash
$mkdir project
$cd project
$ git clone https://github.com/Spandu8/github-open-issues.git
$ cd github-open-issues
$ npm install
$ code .
```

### To Run Server
--------------------
We can Run server in two ways
*  Using http-server
    $ npm install http-server -g
    $ http-server -o

*  Using nodejs
    $ node server.js


### Deployed URL
-------------------------
*  https://github-open-issues-list.herokuapp.com ()


### Implementation
-----------------------
* Calling a github API to get the list of issues which are opened
* Getting the Current DateTime by using moment.js library
* Calculating Yesterdays DateTime and 7 days before DateTime and by using moment.js
* Comparing the issueCreated DateTime is after the yesterdays DateTime
* Comparing the issueCreated DateTime is after 7 days before DateTime
* If issueCreated DateTime is after yesterdays DateTime, push the particular issue into `issuesCreatedIn24Hrs` array
* If issueCreated DateTime is before yesterdays DateTime and 7 days before DateTime , push the particular issue into `issuesCreatedIn7Days` array
* If issueCreated DateTime is 7 days before DateTime , push the particular issue into `issuesCreatedBefore7Days` array
* Displaying the count of issues in UI by checking array length
