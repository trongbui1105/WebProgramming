<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Of Music</title>
</head>
<body>
    <style>
        <?php include 'music-style.css'; ?>
    </style>
    <h1>Danh sách các bài viết</h1>    
    <hr>
    <?php
        //make connection and select DB
        require_once "connect-select-db.php";
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        //query data
        $query = "SELECT * FROM baiviet as bv, theloai as tl, tacgia as tg 
                    WHERE bv.ma_tloai=tl.ma_tloai AND bv.ma_tgia=tg.ma_tgia;";
        $result = mysqli_query($conn, $query)
            or die("Query failed: " . mysqli_error($conn, $query));

        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<pre class='baiviet'>\n";
                echo "Mã bài viết    " . $row['ma_bviet'] . "<br>";
                echo "    Tiêu đề    " . $row['tieude'] . "<br>";
                echo "    Tác giả    " . $row['ten_tgia'] . "<br>";
                echo "  Ngày viết    " . $row['ngayviet'] . "<br>";
                echo "    Bài hát    " . $row['ten_bhat'] . "<br>";
                echo "   Thể loại    " . $row['ten_tloai'] . "<br>";
                $space50 = mb_strpos($row['tomtat'], " ", 50, "UTF-8");
                echo "    Tóm tắt    " . mb_substr($row['tomtat'], 0, $space50, "UTF8") . "...<br>";
                echo "<hr>";
                echo "</pre>\n\n";
            }
        }
        mysqli_close($conn);
    ?>
</body>
</html>