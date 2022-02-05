# giskard_calendar
> A calendar with reactJs and GraphQl

###  DEV Environment DOCKER
``` bash
#build
docker-compose build
#run
docker-compose up -d
#to show logs
docker-compose logs -f

```
###  Links
``` bash
#Sandbox Graph API

http://212.47.245.111:7010/

#Front End

http://212.47.245.111:3000/

#Database

http://212.47.245.111:7011/

Username: sf_user
Password: UzTQ4356NffpN3i9

```
###  NB: Still under development.
work done for now:
- see slots available for reservations
- provide a `start`, `end`, `title` and `email` for a new reservation and save it.

Remaining work:
- add/delete availability slots
- delete reservation

## Repo API
https://github.com/ytimoumi/giskard_api
All work done in the backend part, and all APIs are tested with Postman.
``` bash
#createReservation
curl --location --request POST 'http://212.47.245.111:7010/query' \
--header 'Referer: http://test.com' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation ($idAvailability:Int!,$input:ToReserve!) {\r\n  createReservation(idAvailability:$idAvailability, input:$input) {\r\n      code\r\n      message\r\n  }  \r\n}","variables":{"idAvailability":7,"input":{"start":"2022-02-10T00:00:00+01:00","end":"2022-02-09T08:30:30Z","title":"Entretien","email":"yassinetimoumi.official@gmail.com"}}}'
```
``` bash
#createAvailability
curl --location --request POST 'http://212.47.245.111:7010/query' \
--header 'Referer: http://test.com' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation ($input:Availability!) {\r\n  createAvailability(input:$input) {\r\n      code\r\n      message\r\n  }  \r\n}","variables":{"input":{"start":"2022-02-09T12:04:30Z","end":"2022-01-02T09:04:30Z"}}}'
```
``` bash
#getAvailabilities
curl --location --request POST 'http://212.47.245.111:7010/query' \
--header 'Referer: http://test.com' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query  {\r\n  getCalendar {\r\n      id\r\n      start\r\n      end\r\n  }  \r\n}","variables":{}}'
```
``` bash
#deleteReservation
curl --location --request POST 'http://212.47.245.111:7010/query' \
--header 'Referer: http://test.com' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation ($id: Int!, $email: String!) {\r\n  deleteReservation(id:$id, email:$email) {\r\n      code\r\n      message\r\n  }  \r\n}","variables":{"id":5,"email":"yassinetimoumi.official@gmail.com"}}'
```
``` bash
#deleteAvailability
curl --location --request POST 'http://212.47.245.111:7010/query' \
--header 'Referer: http://test.com' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"mutation ($id: Int!) {\r\n  deleteAvailability(id:$id) {\r\n      code\r\n      message\r\n  }  \r\n}","variables":{"id":5}}'
```
