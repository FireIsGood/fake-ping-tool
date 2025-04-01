$(function () {
  $("#file-upload").on("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      const dataUrl = e.target.result;
      $("#server-icon").attr("src", dataUrl);
    };
  });

  $("#save-file").click(() => {
    modernScreenshot.domToPng($("#server-icon-full")[0]).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = $("#file-name").val() + ".png";
      link.href = dataUrl;
      link.click();
    });
  });
});
