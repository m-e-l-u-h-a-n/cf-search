export default (context) => {
    console.log("Loading data");
    context.app.$axios
        .$get()
        .then(({ result }) => {
            console.log("success");
            //console.log("data = ", result);
            context.store.state.userList = result;
            context.store.state.hasLoaded = true;
        })
        .catch((err) => {
            context.error(err);
            console.log("failed");
            context.store.state.failed = true;
            console.log(error);
        })
}