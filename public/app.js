let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
]

// *********** getElementById HTML-get ************
let drop = document.getElementById("drop");
let mobileData = document.getElementById("mobiledata");
let mobile = document.getElementById("mobile");
let allData;
// *********** get-obj-arr ************

function allfunctiondata() {
    allData = Object.keys(arr[0])
    // console.log(allData);

    allData.forEach((data) => { drop.innerHTML += `<option value= "${data}">${data}</option>` })
}

// *********** Select-Option ************
allfunctiondata()
let userSelectOption;
function selected(Option) {
    userSelectOption = Option.value
    console.log(userSelectOption)
    mobileData.value = ""

}

// *********** submit-button ************
function sub() {
    let obj = arr.filter((submit) => {

        if (userSelectOption == "brand") {
            return submit.brand.toUpperCase() == mobileData.value.toUpperCase()
        }
        if (userSelectOption == "model") {
            return submit.model.toUpperCase() == mobileData.value.toUpperCase()
        }

        if (userSelectOption == "camera") {
            return submit.camera.toUpperCase() == mobileData.value.toUpperCase()
        }

        if (userSelectOption == "price") {
            return submit.price.toUpperCase() == mobileData.value.toUpperCase()
        }

        if (userSelectOption == "ram") {
            return submit.ram.toUpperCase() == mobileData.value.toUpperCase()
        }
        if (userSelectOption == "rom") {
            return submit.rom.toUpperCase() == mobileData.value.toUpperCase()
        }
    })
    // console.log(obj);
    mobile.innerHTML = ""
    obj.forEach((value) => {
        mobile.innerHTML +=
            `<ul>
        <li> Company:  ${value.brand.toUpperCase()} </li>
        <li> Model: ${value.model.toUpperCase()} </li>
        <li> Camera: ${value.camera.toUpperCase()} </li>
        <li> Price: ${value.price.toUpperCase()} </li>
        <li> RAM: ${value.ram.toUpperCase()} </li>
        <li> ROM: ${value.rom.toUpperCase()} </li>
        </ul>`
    })
}