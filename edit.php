<?php include('header.php');?>
<?php
$conn = new mysqli('localhost','root','','web_nirajan');
if($conn -> connect_error)
{
echo "connection failed.";
}
else{
    echo "connection successfully";
}
if(isset($_POST['btnsave'])){
    $taskname = $_POST['txttaskname'];
    $startdate = $_POST['txtstartdate'];
$enddate = $_POST['txtenddate'];
$user = $_POST['txtuser'];

$id = $_GET["id"];
$sql = "UPDATE task SET task_name='$taskname', task_start='$startdate',end_date='$enddate',user_id='$user' WHERE task_id=".$_GET["id"];
// $sql = 
$ret = $conn->query($sql);
if($ret)
{
    header("Location:display.php");
}
else
{
    echo "Update Failed";
}
}

?>
<!-- Link Bootstrap like in HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" >
<h2>Update Form</h2>
<form method="post" action="edit.php?id=<?php echo $_GET["id"];?>">
    task name <input type="text" name="txttaskname" class="form-control">
    start date <input type="text" name="txtstartdate" class="form-control">
    end date <input type="text" name="txtenddate" class="form-control">
    user id <input type="number" name="txtuser" class="form-control">
    <input type="submit" name="btnsave" value="Update" class="btn btn-primary">
</form>
<?php include('footer.php')?>