<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" crossorigin="anonymous" rel="stylesheet">
<?php
$conn = new mysqli('localhost','root','','web_nirajan');
if($conn->connect_error)
{
    echo "connetion failed ";
}
else{
    echo "connection successfully  established for displaying table";
}


// if(isset)
$sql = "Select * from task";
$returncheck = $conn ->query($sql);
// sending the query carried by the sql variable into the connection variable carrying mysqli command containing the info about the db and the port info
$list = "<table class='table table-striped table-hover'>
            <tr>
                <th> S.n</th>
                <th> Task Name</th>
                <th> Start Date</th>
                <th> End Date</th>
                <th> User ID</th>
                <th> Progress</th>
                <th> Submitted Data</th>
            </tr>";
$data = "";
$s = 1;
while($row= $returncheck -> fetch_assoc())
{
    $data = "<tr><td>" . $s. "</td><td>" . $row['task_name']."</td><td>".$row['task_start']."</td><td>".$row['end_date']."</td><td>".$row['user_id'].
    "</td><td><a href= delete.php?id=".$row['user_id']."type='button' class='btn btn-danger'>Delete</a>"."</td><td><a href= update.php?id=".$row['user_id']."type='button' class='btn btn-success'>update</a>"."</td></tr>";
    $s++;
}

if($returncheck)
{
    echo "displaying sucess";
}
else{
    echo "displaying failing";
}


echo $list.$data.'</table>';
?>
