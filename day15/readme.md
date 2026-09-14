# Ajax : Asynchronous java script and xml

modern ajax applications usually exchange JSON .

Ajax allows JS to communicate with server without refreshing

# Ajax States - readyState in XMLHttpRequest

- when ajax is used with XMLHttpRequest then the request will go through 5 states
  - 1 . UNSENT 0 request object is created but open() has not be called
  - 2 . OPENED 1 open() is called
  - 3 . HEADERS 2 RECEIVER 2 request is sent and response headers received
    -4 . LOADING 3 response body is being received
    -5 . DONE 4 request is completed

Step1 : let xhr = new XMLHttpReuest()  
xhr.readyState - 0

Step2 : xhr.open('http Method',url ) state 1

Step 3: xhr.send() state 2

Step 4: if (xhr.readyState === 4 && xhr.status === 200) {}

#The status property and the statusText property holds the status of the XMLHttpRequest object.

Property Description
onreadystatechange Defines a function to be called when the readyState property changes
readyState Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status

    - 200 OK
    - 403 FORBIDDENT
    - 404 PAGE IS NOT FOUND
