function doGet(e) {
  const folderId = e.parameter.id;
  if (!folderId) {
    return ContentService.createTextOutput(JSON.stringify({ error: "No folder ID provided" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    const result = [];

    while (files.hasNext()) {
      const file = files.next();
      // Only include images and videos
      const mime = file.getMimeType();
      if (mime.startsWith("image/") || mime.startsWith("video/")) {
        result.push({
          id: file.getId(),
          name: file.getName(),
          mimeType: mime
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
