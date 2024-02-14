//TABS SWITCH BETWEEN THE ACOUNT PAGE
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the selected tab content and set the "active" class on the button
  document.getElementById(tabName).style.display = "block";
  sessionStorage.setItem('currentProfileTab', tabName)
  evt.currentTarget.className += " active";
}
//Tab Switch To The ManageAddressTab
function manageAddressTab() {
  openTab(event, "ManageAddress");
  document.querySelector(".manageaddress").classList.add("active");
  document.querySelectorAll(".tablinks")[2].classList.add("active");
  document.querySelectorAll(".tabcontent")[2].style.display = "block";
  document.querySelectorAll(".tabcontent")[0].style.display = "none";
  document.getElementById("MyProfile").style.display = "none";
}

 let editDefaultAddress = document.querySelectorAll('.edit_default-address');
  editDefaultAddress.forEach(function(element){
    element.addEventListener('click', () => {
      manageAddressTab()
    })
  })

//On Load Of Page My Profile Tab should be shown
window.addEventListener("DOMContentLoaded", (event) => {
 if("currentProfileTab" in sessionStorage) {
    if(sessionStorage.getItem("currentProfileTab") == "MyProfile" || sessionStorage.getItem("currentProfileTab") == "myprofile"){
    openTab(event, "MyProfile");
    document.querySelector(".MyProfile").classList.add("active");
    document.querySelectorAll(".tablinks")[0].classList.add("active");
    document.querySelectorAll(".tabcontent")[0].style.display = "block";
    } else if(sessionStorage.getItem("currentProfileTab") == "MyOrders" || sessionStorage.getItem("currentProfileTab") == "myorders"){
    openTab(event, "MyOrders");
    document.querySelector(".MyOrdersDeskTab").classList.add("active");
    document.querySelectorAll(".tablinks")[1].classList.add("active");
    document.querySelectorAll(".tabcontent")[1].style.display = "block";
    document.getElementById("my_order_detail_mobile").style.display = "none";
    } else {
      manageAddressTab()
    }
  }else {
    openTab(event, "MyProfile");
    document.querySelector(".MyProfile").classList.add("active");
    document.querySelectorAll(".tablinks")[0].classList.add("active");
    document.querySelectorAll(".tabcontent")[0].style.display = "block";
  }
   //DESKTOP ORDER PAGE FUNCTIONALITY
  document.getElementById("MyordersDesktop").addEventListener("click", () => {
    document.querySelector(".my_orders").style.display = "none";
  });
  document.querySelector(".MyProfile ").addEventListener("click", () => {
    document.querySelector(".MyProfile_content").style.display = "block";
  });
  document.querySelector(".MyOrdersDeskTab ").addEventListener("click", () => {
    document.querySelector(".my_orders").style.display = "block";
    document.getElementById("main_order_detail_desktop").style.display = "none";
  });
  let myProfileTab = document.querySelector(".myprofile");
  let myOrdersTab = document.querySelector(".myorderstab");
  let orderDetailPageMobile = document.querySelectorAll(".myorder_detail_opener__mobile");
  let orderDetailPageDesktop = document.querySelectorAll(".order_detail_opener");
  myProfileTab.addEventListener("click", () => {
    document.querySelector(".profile_container_mobile").style.display = "block";
    document.querySelector(".logout_url_mobile").style.display = "block";
  });
  myOrdersTab.addEventListener("click", () => {
    document.getElementById("my_orders_container").style.display = "block";
    document.getElementById("my_order_detail_mobile").style.display = "none";
  });
  
  //Order Details page 
  
  orderDetailPageMobile.forEach((ele) => {
    ele.addEventListener("click", function(event) {
      document.getElementById("my_order_detail_mobile").style.display = "block";
      document.getElementById("my_orders_container").style.display = "none";
      document.querySelectorAll(".my-orderDetail").forEach((e) => {
        if (ele.getAttribute("aria-label").split(" ")[2] == e.dataset.orderNameMatcher) {
          e.style.display = "block";
        } else {
          e.style.display = "none";
        }
      });
    });
  });
  orderDetailPageDesktop.forEach((ele) => {
    ele.addEventListener("click", function(event) {
      document.getElementById("main_order_detail_desktop").style.display = "block";
      document.querySelector(".my_orders").style.display = "none";
      document.getElementById("MyordersDesktop").style.display = "none";
      document.querySelectorAll(".my-orderDetail").forEach((e) => {
        if (ele.getAttribute("aria-label").split(" ")[2] == e.dataset.orderNameMatcher) {
          e.style.display = "block";
        } else {
          e.style.display = "none";
        }
      });
    });
  });
});
//Adding and Editing users to manage the addresses

let addButton = document.getElementById("add_button");
let cancelButton = document.getElementById("cancel_btn__add");
let addAddressButton = document.getElementById("AddAddress");
let customerAddressForm = document.querySelector(".customer_address");
let editAddressButton = document.querySelectorAll(".EditButton");
if (addButton) {
  addButton.addEventListener("click", () => {
    addAddressButton.style.display = "block";
    document.querySelector("body").classList.add('overflow')
    customerAddressForm.style.display = "none";
    addButton.style.display = "none";
  });
};
if (cancelButton) {
  cancelButton.addEventListener("click", () => {
    document.querySelector("body").classList.remove('overflow')
    addAddressButton.style.display = "none";
    customerAddressForm.style.display = "block";
    addButton.style.display = "block";
  });
}

document.querySelectorAll(".EditButton").forEach((ele) => {
  ele.addEventListener('click', (e) => {
    let editId = ele.getAttribute('id');
    editId = editId.replace('EditFormButton_', '');
    let mobileAddress = ele.closest('.customer').querySelectorAll('.EditAddress');
    let desktopAddress = ele.closest('.customer').querySelectorAll('.EditAddress_desktop');
    let address = (mobileAddress.length) ? mobileAddress : desktopAddress;
    if (address) {
      address.forEach(element => {
        let addressId = element.getAttribute('id');
        addressId = addressId.replace('EditAddress_', '');
        if (editId === addressId) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  })
});

  
editAddressButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      document.body.style.overflow = "hidden";
    }
    document.querySelector("#AddAddress_desktop").style.display = "none";
    document.querySelector(".EditAddress_desktop").style.display = "block";
    document.querySelectorAll(".customer_address").forEach((address) => {
      address.style.display = "none";
    });
    addButton.style.display = "none";
  });
});
document.querySelector(".add_button_desktop").addEventListener("click", () => {
  document.querySelector("#AddAddress_desktop").style.display = "block";
  document.querySelector(".EditAddress_desktop").style.display = "none";
  document.body.style.overflow = "hidden";
});
document.querySelector("#cancel_btn__add-desktop").addEventListener("click", () => {
  document.querySelector("#AddAddress_desktop").style.display = "none";
  document.body.style.overflow = "auto";
});
document.querySelectorAll("#cancel_btn__edit-desktop").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    document.querySelector(".EditAddress_desktop").style.display = "none";
    if (window.innerWidth > 768) {
      document.body.style.overflow = "auto";
    }
    e.target.closest('.EditAddress_desktop').classList.remove('visible')
    document.querySelectorAll(".customer_address").forEach((address) => {
      address.style.display = "block";
    });
  });
})
document.querySelectorAll(".cancel_btn").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    document.querySelector(".EditAddress").style.display = "none";
    e.target.closest('.EditAddress').classList.remove('visible')
    document.body.style.overflow = "auto";
    document.querySelectorAll(".customer_address").forEach((address) => {
      address.style.display = "block";
    });
      addButton.style.display = "block";
  });
})