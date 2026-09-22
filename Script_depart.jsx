var inputFolder = Folder.selectDialog(
    "Choisissez un dossier de sources pour débuter",
  ),
  outputFolder = Folder.selectDialog(
    "Choisissez un dossier cible pour les images créées",
  ),
  imageSizes = [
    ["700px", "700px", "w700-demo"],
    ["560px", "560px", "w560-demo"],
    ["271px", "271px", "w271-demo"],
    ["175px", "175px", "w175-demo"],
    ["145px", "145px", "w145-demo"],
    ["100px", "100px", "w100-demo"],
    ["70px", "70px", "w70-demo"],
  ],
  numImageSizes = imageSizes.length;

if (inputFolder != null && outputFolder != null) {
  var fileList = inputFolder.getFiles(/\.(jpg|jpeg|png|gif)$/i);
  for (var i = 0; i < fileList.length; i++) {
    var doc = app.open(fileList[i]);
    for (var j = 0; j < imageSizes.length; j++) {
      var currentImageSize = imageSizes[j],
        currentImageWidth = currentImageSize[0],
        currentImageHeight = currentImageSize[1],
        currentImageVersion = currentImageSize[2],
        fullname = doc.name,
        filename = fullname.substr(0, fullname.lastIndexOf(".")) || fullname,
        extension = fullname.split(".").pop(),
        exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();
      doc.resizeImage(currentImageWidth, currentImageHeight);
      exportOptionsSaveForWeb.includeProfile = true;
      exportOptionsSaveForWeb.optimized = true;
      if (extension == "jpg" || extension == "jpeg") {
        exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;
        exportOptionsSaveForWeb.includeProfile = true;
        exportOptionsSaveForWeb.quality = 100;
      }
      if (extension == "png") {
        exportOptionsSaveForWeb.format = SaveDocumentType.PNG;
      }
      if (extension == "gif") {
        exportOptionsSaveForWeb.format = SaveDocumentType.GIF;
      }
      var documentPath =
          decodeURI(outputFolder) +
          "/" +
          filename +
          "_" +
          currentImageVersion +
          "." +
          extension,
        file = new File(documentPath);
      doc.exportDocument(file, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);
    }
    doc.close(SaveOptions.DONOTSAVECHANGES);
  }
}
