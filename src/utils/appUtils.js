export const noOp=()=>({type:"NO_OP"});

export const apiPayloadCreator=({
    url="/",
    method="GET",
    onsuccess=noOp,
    onFailure=noOp,
    label="",
    data=null
})=>({
    url,
    method,
    onsuccess,
    onFailure,
    data,
    label
});