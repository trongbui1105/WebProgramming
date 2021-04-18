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
        <?php
            include 'music-style.css'; 
        ?>
    </style>
    <h1>Tìm kiếm bài viết</h1>
    <hr>
    <form name="s_form" action="" method="get">
        <input type="text" name="search_kw" id="search_kw" size="40"
               value='<?php empty($_GET['search_kw']) || print $_GET['search_kw'];?>'>
        <input type="submit" name="Tìm kiếm" value="Tìm kiếm">
    </form>
    <br>
    <?php
        //make connection and select DB
        if (isset($_GET['search_kw'])){
            require_once "connect-select-db.php";
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            $keyword = trim($_GET['search_kw']);
            $new_kw = str_replace(" ", "%' OR lower(tieude) LIKE '%", $keyword);
            preg_match_all('/["].+?["]/i', $keyword, $dquote_kw);
            foreach ($dquote_kw[0] as $var) {
                $new_var = str_replace(" ", "#*#", $var);
                $keyword = str_replace($var, $new_var, $keyword);
            }

            $new_kw = str_replace(" ", "%' OR tieude LIKE '%", $keyword);
            $new_kw = str_replace("\"", "", $new_kw);
            $new_kw = str_replace("#*#", " ", $new_kw);

            //query data
            $query = "SELECT * FROM baiviet as bv, theloai as tl, tacgia as tg" .
                " WHERE bv.ma_tloai=tl.ma_tloai AND bv.ma_tgia=tg.ma_tgia AND" .
                " (tieude LIKE '%$new_kw%')";
            $result = mysqli_query($conn, $query)
                or die("Query failed: " . mysqli_error($conn, $query));

            if (mysqli_num_rows($result) > 0) {
                echo "<h2>Kết quả tìm kiếm: " . $row_count . " bài viết</h2>";
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<pre class='baiviet'>\n";
                    echo "Mã bài viết    " . $row['ma_bviet'] . "<br>";
                    echo "    Tiêu đề    " . $row['tieude'] . "<br>";
                    echo "    Tác giả    " . $row['ten_tgia'] . "<br>";
                    echo "  Ngày viết    " . $row['ngayviet'] . "<br>";
                    echo "    Bài hát    " . $row['ten_bhat'] . "<br>";
                    echo "   Thể loại    " . $row['ten_tloai'] . "<br>";
                    echo "    Tóm tắt    " . mb_substr($row['tomtat'], 0, 50, "UTF8") . "...<br>";
                    echo "<hr>";
                    echo "</pre>\n\n";
                }
            }
            mysqli_close($conn);
        }
    ?>
</body>
</html>