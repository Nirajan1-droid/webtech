<?php
    include('header.php');?>
<?php
    $conn=new mysqli('localhost', 'root', '','web_nirajan');
session_start();
    if(isset($_POST['btnLogin']))
    {
        $email=$_POST['txtEmail'];
        $pass=$_POST['txtPassword'];
        $sql="SELECT * FROM user WHERE email='$email' AND password='$pass'";
        $result=$conn->query($sql);

    while($row=$result->fetch_assoc())
    {
        $_SESSION['user_id']=$row['id'];
        $_SESSION['full_name']=$row['full_name'];
        
        if($row['user_type']=="admin")
        {
            header('Location:display.php');
        }
        if($row['user_type']=="normal")
        {
            header('Location:task.php');
        }
        else{
            echo "login error";
        }
    }
  }  
?>

<link rel="stylesheet" href="bootstrap.min.css">
<form action="login.php" method="post">
    Email: <input type="text" name="txtEmail" class="form-control">
    Password: <input type="password" name="txtPassword" class="form-control">
    <input type="submit" name="btnLogin" value="Login" class="btn btn-primary">
</form>