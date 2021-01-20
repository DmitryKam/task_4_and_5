console.log("Domain One");

const win = document.getElementById('iFrameId').contentWindow;

window.onload = () => {
    changeDataInLocalStorage.setData("addLoc", { id: 4 });
    changeDataInLocalStorage.setData("Dima", { age: 29 });
    changeDataInLocalStorage.deleteData("addLoc");
    changeDataInLocalStorage.getData("Dima");
}

const changeDataInLocalStorage = {

    setData: (key, value) => {
        const message = JSON.stringify({ key, value, handler: "addData" });
        win.postMessage(message, win.window.location.href);
    },
    deleteData: (key) => {
        const message = JSON.stringify({ key, handler: "deleteData" });
        win.postMessage(message, win.window.location.href);
    },
    getData: (key) => {
        const message = JSON.stringify({ key, handler: "getData" })
        const localData = localStorage.getItem(key);
        if (localData === null) {
            console.log("Wrong key");
        } else {
            const message = JSON.stringify({ key, handler: "getData" });
            win.postMessage(message, win.window.location.href);
        }
    }
}





