module.exports = function getId() {
    return window.location.href.split("/").pop();
}