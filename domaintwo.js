console.log("Domain two");

const callBackHandler = (message, event) => {
    console.log(message);
    event.source.postMessage(JSON.stringify(message), event.origin);
}

window.onmessage = (event) => {

    const payload = JSON.parse(event.data);

    if (payload.handler === "addData") {
        localStorage.setItem(payload.key, JSON.stringify(payload.value))
        callBackHandler(`written: key: ${payload.key}, values: ${JSON.stringify(payload.value)}`, event)
    } else if (payload.handler === "deleteData") {
        localStorage.removeItem(payload.key);
        callBackHandler(`removed: ${payload.key}`, event)
    } else if (payload.handler === "getData") {
        localStorage.getItem(payload.key)
        callBackHandler(`read: ${payload.key}`, event)
    } else (
        console.log(event)
    )
}