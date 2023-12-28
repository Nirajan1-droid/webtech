<?php include('header.php');?>

<?php
$conn = new mysqli('localhost', 'root', '', 'web_nirajan');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create User
if (isset($_POST['btnSave'])) {
    $fullname = $_POST['txtFullName'];
    $email = $_POST['txtEmail'];
    $pass = $_POST['txtPassword'];
    $type = $_POST['ddlUser'];

    $sql = "INSERT INTO user(user_type, full_name, email, password) VALUES ('$type', '$fullname', '$email', '$pass')";
    $ret = $conn->query($sql);

    if ($ret) {
        echo '<div class="alert alert-success" role="alert">User Created Successfully</div>';
    } else {
        echo '<div class="alert alert-danger" role="alert">User Creating Failed</div>';
    }
}

// Read Users
$result = $conn->query("SELECT * FROM user");

echo '<h2>User List</h2>';
echo '<table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>User Type</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>';

while ($row = $result->fetch_assoc()) {
    echo '<tr>
            <td>' . $row['id'] . '</td>
            <td>' . $row['user_type'] . '</td>
            <td>' . $row['full_name'] . '</td>
            <td>' . $row['email'] . '</td>
            <td>
                <a href="user_create.php?action=edit&id=' . $row['id'] . '" class="btn btn-warning btn-sm">Edit</a>
                <a href="user_create.php?action=delete&id=' . $row['id'] . '" class="btn btn-danger btn-sm">Delete</a>
            </td>
          </tr>';
}

echo '</tbody></table>';

// Update User
if (isset($_GET['action']) && $_GET['action'] == 'edit' && isset($_GET['id'])) {
    $editUserId = $_GET['id'];
    $editUserQuery = "SELECT * FROM user WHERE id = $editUserId";
    $editUserResult = $conn->query($editUserQuery);

    if ($editUserResult->num_rows > 0) {
        $editUserData = $editUserResult->fetch_assoc();
        echo '<h2>Edit User</h2>
            <form method="post" action="user_create.php">
                <input type="hidden" name="editUserId" value="' . $editUserId . '">
                Full Name<input type="text" name="txtFullName" value="' . $editUserData['full_name'] . '" class="form-control">
                E-mail<input type="text" name="txtEmail" value="' . $editUserData['email'] . '" class="form-control">
                Password<input type="text" name="txtPassword" class="form-control">
                User Type<input type="text" name="ddlUser" value="' . $editUserData['user_type'] . '" class="form-control">
                <input type="submit" name="btnUpdate" value="Update" class="btn btn-primary">
            </form>';
    }
}

// Update User Process
if (isset($_POST['btnUpdate'])) {
    $editUserId = $_POST['editUserId'];
    $fullname = $_POST['txtFullName'];
    $email = $_POST['txtEmail'];
    $pass = $_POST['txtPassword'];
    $type = $_POST['ddlUser'];

    $updateSql = "UPDATE user SET user_type = '$type', full_name = '$fullname', email = '$email', password = '$pass' WHERE id = $editUserId";
    $updateResult = $conn->query($updateSql);

    if ($updateResult) {
        echo '<div class="alert alert-success" role="alert">User Updated Successfully</div>';
    } else {
        echo '<div class="alert alert-danger" role="alert">User Update Failed</div>';
    }
}

// Delete User
if (isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['id'])) {
    $deleteUserId = $_GET['id'];
    $deleteSql = "DELETE FROM user WHERE id = $deleteUserId";
    $deleteResult = $conn->query($deleteSql);

    if ($deleteResult) {
        echo '<div class="alert alert-success" role="alert">User Deleted Successfully</div>';
    } else {
        echo '<div class="alert alert-danger" role="alert">User Deletion Failed</div>';
    }
}
?>

<form method="post" action="user_create.php">
    Full Name<input type="text" name="txtFullName" class="form-control">
    E-mail<input type="text" name="txtEmail" class="form-control">
    Password<input type="text" name="txtPassword" class="form-control">
    User Type<input type="text" name="ddlUser" class="form-control">
    <input type="submit" name="btnSave" value="Save" class="btn btn-primary">
</form>

<?php include('footer.php')?>
