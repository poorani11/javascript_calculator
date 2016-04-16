<!DOCTYPE html>
<html lang = "en-us" >
<head>
    <title>Javascript Calculator</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
     <link rel="stylesheet" type="text/css" href="home.css">
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,500' rel='stylesheet' type='text/css'>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
    <script src="app.js"></script>
</head>
<body>
    <div id="calculator">
        <form>
            <input type="text" id="display" disabled>
            <input type="button" id="keys"  value = 'C' onclick="addtoscreen('C')">
            <input type="button" id="keys"  value = '9' onclick="addtoscreen('9')">
            <input type="button" id="keys"  value = '8' onclick="addtoscreen('8')">
            <input type="button" id="keys"  value = '7' onclick="addtoscreen('7')">
            <input type="button" id="keys"  value = '6' onclick="addtoscreen('6')">
            <input type="button" id="keys"  value = '5' onclick="addtoscreen('5')">
            <input type="button" id="keys"  value = '4' onclick="addtoscreen('4')">
            <input type="button" id="keys"  value = '3' onclick="addtoscreen('3')">
            <input type="button" id="keys"  value = '2' onclick="addtoscreen('2')">
            <input type="button" id="keys"  value = '1' onclick="addtoscreen('1')">
            <input type="button" id="keys"  value = '0' onclick="addtoscreen('0')">
            <input type="button" id="keys"  value = '.' onclick="addtoscreen('.')">

            <input type="button" id="keys"  value = '+' onclick="addtoscreen('+')">
            <input type="button" id="keys"  value = '-' onclick="addtoscreen('-')">
            <input type="button" id="keys"  value = '*' onclick="addtoscreen('*')">
            <input type="button" id="keys"  value = '/' onclick="addtoscreen('/')">
            <input type="button" id="keys"  value = 'CE' onclick="backspace()">
            <input type="button" id="keys"  value = 'X^3' onclick="power(3)">
            <input type="button" id="keys"  value = '=' onclick="answer()">

        </form>
    </div>
</body>
</html>
