<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اجاره اتاق</title>
    <link rel="stylesheet" href="{{url('css/style.css')}}">
    <link rel="stylesheet" href="{{url('css/vue-style.css')}}">
    <script>
        window.laravelvue_data = '{!! addslashes(json_encode($data)) !!}';
        window.csrf_token = "{{csrf_token()}}"
    </script>
</head>
<body> 
    <div id="app"></div>
    <script src="{{url('js/app.js')}}"></script>
</body>
</html>