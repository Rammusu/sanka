// khai bao 1 bien luu du lieu tu form
let contact = {
  nguoi_dang_ky: {
    vai_tro: "",
    sdt: "",
    email: "",
  },
  thong_tin_hs: {
    ho: "",
  },
};

function get_form_data() {
  // luu tru thong tin nguoi dung
  contact.nguoi_dang_ky.vai_tro = document.getElementById("vai_tro").value;
  console.log(contact);
}
function validate_form() {
  if (contact.nguoi_dang_ky.sdt == "" || contact.nguoi_dang_ky.email == "") {
    alert("Fill the form");
    return true; // form co loi
  } else if (!contact.nguoi_dang_ky.email.includes("@")) {
    alert("Email is bad format");
    return true;
  }
  return false;
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
  // chan luong mac dinh cua button
  e.preventDefault();
  if (!validate_form()) {
    get_form_data();
  }
});
