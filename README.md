# Search Bar and Booking Tool Services

This module consists of the search bar and booking tool services. The search bar allows the user to search for rental listings by title, city, or state. A dual date picker allows users to select start and end dates to find whether the listing is available through those dates.

The booking tool allows the user to select dates to stay in the listing and generates a booking price summary based on the nightly rate, number of days stayed, number of guests, and additional fees. The user can view their booking price summary and change around the dates for their stay and/or number of guests planned and the total price will be re-calculated in real-time.

## Related Projects
https://github.com/hrla33-falcons/al-proxy-sdc

https://github.com/hrla33-falcons/overview-amenities

https://github.com/hrla33-falcons/carousel-recommend-listings

https://github.com/hrla33-falcons/Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

### Setting up database/seeding data

npm run seed-db

## start script

```sh
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 13.1.0

## Development

## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### CRUD API

Read/GET:
```
server.get('/listings/search')
server.get('/mlistings/:id')
server.get('/listings/search/:id)
server.get('/dates/:id)
server.get('/dates/check_in/:id')
server.get('/dates/check_out/:id')
```