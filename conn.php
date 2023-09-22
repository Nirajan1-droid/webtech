<?php
$conn = new mysqli('localhost','root','','web_nirajan');
if($conn -> connect_error)
{
echo "connection failed.";
}
else{
    echo "connection successfully";
}


if(isset($_POST['btnSave'])){
    $taskname = $_POST['txtTaskName'];
    
    $startDate = $_POST['startDate'];
    $endDate = $_POST['endDate'];
    $user = $_POST['userId'];

    $sql = "INSERT INTO task( task_name, task_start, end_date, user_id) VALUES('$taskname','$startDate','$endDate','$user')";
    $RET = $conn->query($sql);
    if($RET)
{
    echo "inserted successfully";
}
else{
    echo "inserting failed";
}



}
?>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" crossorigin="anonymous">
<form method="post" action="conn.php">
User Id<input type="text" name="userId" class="form-control">
Task Name <input type="text" name="txtTaskName" class="form-control">
 Start Date <input type="text" name="startDate" class="form-control">
End Date <input type="text" name="endDate" class="form-control">
<input type="submit" name="btnSave" value="save" class="btn btn-primary">
<!-- //name is used for the post command -->
</form>

