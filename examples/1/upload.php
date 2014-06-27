<?

header('Content-Type: text/plain; charset=utf-8');

echo "POST:\n";
print_r($_POST);

echo "\nFILES:\n";
print_r($_FILES);

@mkdir('./files/');
move_uploaded_file( $_FILES['file']['tmp_name'], './files/' . $_FILES['file']['name'] );
