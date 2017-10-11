<?php
ob_start();
?>
<html>
	<head>
	</head>
	<body>
  <div><p><?php echo $values["title"]; ?></p></div>
		<div><b>Name</b>: <?php echo $values["first_name"] . " " . $values["last_name"]; ?></div>
		<div><b>E-mail</b>: <?php echo $values["email"]; ?></div>
  <?php if ($values["phone"] != '') : ?>
    <div><b>Phone</b>: <?php echo $values["phone"]; ?></div>
  <?php endif ?>
  <?php if ($values["mobile"] != '') : ?>
    <div><b>Mobile</b>: <?php echo $values["mobile"]; ?></div>
  <?php endif ?>
  <?php if ($values["company"] != '') : ?>
    <div><b>Company</b>: <?php echo $values["company"]; ?></div>
  <?php endif ?>
  <?php if ($values["vat"] != '') : ?>
    <div><b>VAT</b>: <?php echo $values["vat"]; ?></div>
  <?php endif ?>
  <?php if ($values["company_type"] != '') : ?>
    <div><b>Company Type</b>: <?php echo $values["company_type"]; ?></div>
  <?php endif ?>
  <?php if ($values["address1"] != '') : ?>
    <div><b>Address 1</b>: <?php echo $values["address1"]; ?></div>
  <?php endif ?>
  <?php if ($values["address2"] != '') : ?>
    <div><b>Address 2</b>: <?php echo $values["address2"]; ?></div>
  <?php endif ?>
  <?php if ($values["city"] != '') : ?>
    <div><b>City</b>: <?php echo $values["city"]; ?></div>
  <?php endif ?>
  <?php if ($values["country"] != '') : ?>
    <div><b>Country</b>: <?php echo $values["country"]; ?></div>
  <?php endif ?>
  <?php if ($values["referrer"] != '') : ?>
    <div><b>How did you here about us?</b>: <?php echo $values["referrer"]; ?></div>
  <?php endif ?>
	</body>
</html>
<?php
$content = ob_get_contents();
ob_end_clean();
return($content);
?>	