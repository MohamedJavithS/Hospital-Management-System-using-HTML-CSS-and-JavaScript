function AllowOnlyAlpha(input)
{
	var regex = /[^a-z,^A-Z]/gi
	input.value = input.value.replace(regex, "")
}


function AllowOnlyNumeric(input)
{
	var numeric = /[^0-9]/gi
	input.value = input.value.replace(numeric,"")
}