function pingURL() {
  
    // The custom URL entered by user
    var URL = $("#url").val();
    var settings = {
    
      // Defines the configurations
      // for the request
      cache: false,
      dataType: "jsonp",
      async: true,
      crossDomain: true,
      url: URL,
      method: "GET",
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    
      // Defines the response to be made
      // for certain status codes
      statusCode: {
        200: function (response) {
          document.write("Status 200: Connected");
        },
        400: function (response) {
            document.write("Status 400: Bad Request");
        },
        400: function (response) {
            document.write("Status 404: Not found");
          },
        301: function (response) {
            document.write("Status 301: Redirected");
        },
        0: function (response) {
            document.write("Status 0: Page is down");
        },
      },
    };
    
    // Sends the request and observes the response
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }