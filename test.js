let getSelectedValue = document.querySelector('input[name="quest1"]:checked');

if (getSelectedValue != null) {
    document.write("Radio button is selected");
} else {
    document.write("Nothing has been selected");
}