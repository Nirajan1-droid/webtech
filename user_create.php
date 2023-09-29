<?php include('header.php');?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
<?php
$conn = new mysqli('localhost','root','','web_nirajan');
if($conn -> connect_error)
{
echo "connection failed.";
}
else{
    echo "connection successfully";
}

    if(isset($_POST['btnSave']))
    {
        $fullname=$_POST['txtFullName'];
        $email=$_POST['txtEmail'];
        $pass=$_POST['txtPassword'];
        $type=$_POST['ddlUser'];
    
        $sql="INSERT INTO user( user_type, full_name, email, password ) VALUES ('$type','$fullname', '$email', '$pass' )";
       
        $ret=$conn->query($sql);
        if($ret)
        {
            echo "User Created Successfully....";
        }
        else
        {
            echo "User Creating Failed!!!";
        }
    }
?>
<link rel="stylesheet" href="bootstrap.min.css">
<form method="post" action="user_create.php">
    Full Name<input type="text" name="txtFullName" class="form-control">
    E-mail<input type="text" name="txtEmail" class="form-control">
    Password<input type="text" name="txtPassword" class="form-control">
    User Type
    <input type="text" name="ddlUser" class="form-control">
        <!-- <select name="ddlUser" class="form-control">
            <option value="1">
                Admin User

            </option> -->
            <!-- <option value="2">Normal User</option> -->
        </select>
    <input type="submit" name="btnSave" value="save" class="btn btn-primary">
</form>

<?php include('footer.php')?>