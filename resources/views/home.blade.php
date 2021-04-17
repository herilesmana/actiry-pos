<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shorcut icon" href="{{ asset('img/favicon.png') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>Actiry POS</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="http://localhost:8080/js/app.js"></script>
    </body>
</html>
