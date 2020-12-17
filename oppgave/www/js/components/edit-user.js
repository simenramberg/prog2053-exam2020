import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div class="form-group" style="width; 30px">
      <label for="email">Email</label>
      <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>
    <div class="form-group" style="width: 30px;">
      <label for="firstName">Enter First Name</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div class="form-group pt-1 ml-5" style="width: 30px;">
      <label for="lastName">Enter First Name</label>
      <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    `;
  }

  
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("User updated successfully");
        } else {
            console.log("Failed to update user");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
