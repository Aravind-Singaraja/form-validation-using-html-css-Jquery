$(document).ready(function () {
  $("#formValidation").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
      },
      lname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      fname: {
        required: "Please enter your First Name",
        minlength: "First name cannot be less than 3 letters",
      },
      lname: {
        required: "Please enter your Last Name",
        minlength: "Last name cannot be less than 3 letters",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
    },
    submitHandler: function (form) {
      let rowIndex = $("#rowIndex").val();
      let fname = $("#fname").val();
      let lname = $("#lname").val();
      let email = $("#email").val();

      if (rowIndex === "") {
        // Add new row
        var newRow = `<tr>
                        <td>${fname}</td>
                        <td>${lname}</td>
                        <td>${email}</td>
                        <td><button type="button" class="editBtn">Edit</button></td>
                      </tr>`;
        $("#userTable tbody").append(newRow);
      } else {
        // Edit existing row
        let row = $("#userTable tbody tr").eq(rowIndex);
        row.find("td").eq(0).text(fname);
        row.find("td").eq(1).text(lname);
        row.find("td").eq(2).text(email);
      }

      form.reset();
      $("#rowIndex").val("");
      $('input[name="SUBMIT"]').val("Submit");
    },
  });

  // Handle edit button click
  $(document).on("click", ".editBtn", function () {
    let row = $(this).closest("tr");
    let rowIndex = row.index();

    let fname = row.find("td").eq(0).text();
    let lname = row.find("td").eq(1).text();
    let email = row.find("td").eq(2).text();

    $("#rowIndex").val(rowIndex);
    $("#fname").val(fname);
    $("#lname").val(lname);
    $("#email").val(email);

    $('input[name="SUBMIT"]').val("Update");
  });
});
