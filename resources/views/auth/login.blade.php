<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shorcut icon" href="{{ asset('img/favicon.png') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Actiry POS Login</title>
</head>
<body style="background-image: url('{{ asset('/img/background.png') }}'); background-size: cover">
    <div id="root"></div>
    <script src="{{ asset('js/login.js') }}"></script>
</body>
</html>