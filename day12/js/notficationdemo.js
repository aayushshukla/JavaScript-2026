function showNotification() {
  // check notification permission
  // 3 types of permission   default , granted  , denied
  // to check permission we use Notification.requestPermission() it will promise
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      // create notification create notification object new Notification(title,body,icon )
      const notify = new Notification("Registeration Done!!!", {
        body: " You have successfully register for the race at www.games.com .",
        icon: "https://cdn.vectorstock.com/i/500p/62/74/red-bell-notification-icon-vector-61196274.jpg",
      });
      // adding listner for notification click event
      notify.addEventListener("click", () => {
        console.log("Notifion is clicked");
      });

      // adding listner for notification error event
      notify.addEventListener("error", (e) => {
        alert("something goes wrong .please try after some time");
      });
    } else {
      alert("Permission Is Denied. Please give permission !!");
    }
  });
}
