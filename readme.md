## deequest

I always start with the readme cuz, I am mostly lazy to start the coding😂😂.
This is meant to be a very simple and basic npm package that can make api calls to a server.
It will abstract all the processes involved in making making api calls.
It will also be similar to the popular nodejs libray axios.
I also plan on making a cli interface for the package. The cli interface will make it easier
to make api calls on the fly. So that's it for now🙂

## Installation

To install the package run the command

> npm install -g .

This will install the npm package. It comes with normal node module and a cli tool that can be used to send http request.

## Module Usage

To use this npm package you can import it into you nodejs application or call it's functions using the cli interface provided.
To use the module in your nodejs application. There are four http method available in this module GET, POST, DELETE, PUT.
All the methods return promises.

> const deequest = require('deequest')

#### GET request

> deequest.get([url])

#### POST request

> deequest.post([url], {[data you want send]})

#### DELETE request

> deequest.delete([url])

#### PUT request

> deequest.put([url], {[data you want to put]})

## CLI Usage

Below are some cli argument
--version Show version number  
-g, --get get method
-p, --post post method
-d, --delete delete method
--put, --pt put method
-u, --url request url  
-b, --body data to be sent
--help Show help

## Send request using cli interface

> deequest [method] [url] [body ~optional]

### Example

> deequest -g http://my/api //sending a get request
> deequest -p http://my/api -b {msg: 'hello world'} //sending a post request
