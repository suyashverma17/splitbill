{/* <div class="input-group mt-3">
  <input
    type="text"
    class="form-control"
    aria-label="Recipient's username with two button addons"
  />
  <button class="btn btn-outline-secondary" type="button">
    Remove
  </button>
</div> */}

const name = document.getElementById("name");
const email = document.getElementById("memberEmail");
const Memberbtn = document.getElementById('addMemberbtn');
const member = document.getElementById('members');

let memList = []; 

Memberbtn.addEventListener("click", () => {
  const mem = document.createElement("div");
  mem.innerHTML = `<div class="input-group mt-3">
  <input
    type="text"
    class="form-control mem-inp"
    aria-label="Recipient's username with two button addons"
    value = ${name.value}
  />
  <button class="btn btn-outline-secondary mem-remove" type="button">
    Remove
  </button>
</div>`;

  member.appendChild(mem);

  // console.log(name.value);
  // console.log(email.value);

  let list={};
  list.name = name.value;
  list.email = email.value;
  memList.push(list);
  
  console.log(memList);
});

