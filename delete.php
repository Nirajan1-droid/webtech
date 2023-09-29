<?php include('header.php');?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" crossorigin="anonymous" rel="stylesheet">
<?php
$conn = new mysqli('localhost','root','','web_nirajan');
 
$id = $_GET["id"];
$sql = "DELETE FROM task WHERE task.task_id =".$id;
// die($sql);//sql execution is stopped here

$returnd = $conn->query($sql);

if($returnd)
{
    header("Location:display.php");
    // echo "deleting sucessfull";
}
else{
    echo "deleting failing";
}
?>
<?php include('footer.php')?>
