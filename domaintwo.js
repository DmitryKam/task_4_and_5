console.log("Domain two");

const callbackHandler = (event, message) => {
    console.log(message);
    event.source.postMessage(JSON.stringify(message), event.origin);
}

window.onmessage = (event) => {
    const payload = JSON.parse(event.data);

    switch (payload.handler) {
        case "addData":
            localStorage.setItem(payload.key, JSON.stringify(payload.value));
            callbackHandler(event, `written: key: ${payload.key}, values: ${JSON.stringify(payload.value)}`);
            break;
        case "deleteData":
            localStorage.removeItem(payload.key);
            callbackHandler(event, `removed: ${payload.key}`);
            break;
        case "getData":
            localStorage.getItem(payload.key);
            callbackHandler(event, `read: ${payload.key}`);
            break;
        default:
            console.log(event);
            break;
    }
}
