function validate() {
	var str = "";
	var pwd = document.getElementByPassword;
	var cnfmpwd = document.getElementByConfirmPassword;
	if (document.getElementById("first_name").value.length < 8) {
		str = str + ("First Name should contain minimum of 8 characters");
	}
	if (document.getElementById("last_name").value.length < 8) {
		str = str + ("Last Name should contain minimum of 8 characters");
	}
	var re = new RegExp(
			"^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$");
	if (!re.test(pwd)) {
		str = str
				+ ("Password should contain Minimum eight characters, at least one letter, one number and one special character");
	}
	if (pwd != cnfmpwd) {
		str = str + ("Passwords should match");
	}
	if (str != '') {
		alert(str);
		return;
	}
	document.getElementById("form").action = "success.html";
	document.getElementById("form").submit();

}