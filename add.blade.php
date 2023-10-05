<meta name="csrf-token" content="{{ csrf_token() }}">
<form action="/add" method="post">
    
    Number 2 <input type="text" name="num2" />
    Number 1 <input type="text" name="num1" />
    <button type="submit" value="Add">aa</button>
</form>

{{$result}}